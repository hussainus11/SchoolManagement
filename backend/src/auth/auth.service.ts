import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import * as crypto from "node:crypto";
import { User } from "../../generated/prisma/client";
import { AuditService } from "../audit/audit.service";
import { PrismaService } from "../prisma/prisma.service";
import { UsersService } from "../users/users.service";
import { JwtPayload } from "./types/jwt-payload.type";

const REFRESH_TOKEN_TTL_DAYS = Number(process.env.REFRESH_TOKEN_TTL_DAYS ?? 30);

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  refreshTokenExpiresAt: Date;
}

interface RequestMeta {
  userAgent?: string;
  ipAddress?: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly auditService: AuditService
  ) {}

  static toSafeUser(user: User) {
    const { passwordHash: _passwordHash, ...safe } = user;
    return safe;
  }

  static hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  private hashToken(token: string) {
    return crypto.createHash("sha256").update(token).digest("hex");
  }

  private async resolveRoleContext(userId: string) {
    const teacher = await this.prisma.teacher.findUnique({
      where: { userId },
      include: { customRole: { include: { permissions: true } } }
    });
    if (teacher?.customRole) {
      return {
        customRoleId: teacher.customRole.id,
        allowLogin: teacher.customRole.allowLogin,
        permissions: teacher.customRole.permissions.map((p) => p.resource)
      };
    }

    const staff = await this.prisma.staff.findUnique({
      where: { userId },
      include: { customRole: { include: { permissions: true } } }
    });
    if (staff?.customRole) {
      return {
        customRoleId: staff.customRole.id,
        allowLogin: staff.customRole.allowLogin,
        permissions: staff.customRole.permissions.map((p) => p.resource)
      };
    }

    return { customRoleId: null, allowLogin: true, permissions: [] as string[] };
  }

  private async issueTokens(user: User, meta: RequestMeta): Promise<AuthTokens> {
    const roleContext = await this.resolveRoleContext(user.id);
    if (!roleContext.allowLogin) {
      throw new UnauthorizedException("Login is disabled for your role");
    }

    const payload: JwtPayload = {
      sub: user.id,
      role: user.role,
      schoolId: user.schoolId,
      branchId: user.branchId,
      customRoleId: roleContext.customRoleId,
      permissions: roleContext.permissions,
      mustChangePassword: user.mustChangePassword
    };
    const accessToken = this.jwtService.sign(payload);

    const rawRefreshToken = crypto.randomBytes(64).toString("hex");
    const refreshTokenExpiresAt = new Date(
      Date.now() + REFRESH_TOKEN_TTL_DAYS * 24 * 60 * 60 * 1000
    );

    await this.prisma.refreshToken.create({
      data: {
        userId: user.id,
        tokenHash: this.hashToken(rawRefreshToken),
        expiresAt: refreshTokenExpiresAt,
        userAgent: meta.userAgent,
        ipAddress: meta.ipAddress
      }
    });

    return { accessToken, refreshToken: rawRefreshToken, refreshTokenExpiresAt };
  }

  async issueSessionForUser(user: User, meta: RequestMeta) {
    const tokens = await this.issueTokens(user, meta);
    await this.usersService.markLoggedIn(user.id);
    return { tokens, user: AuthService.toSafeUser(user) };
  }

  async login(email: string, password: string, meta: RequestMeta) {
    const user = await this.usersService.findByEmail(email);
    if (!user || user.deletedAt || !user.isActive) {
      throw new UnauthorizedException("Invalid email or password");
    }

    const passwordMatches = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatches) {
      throw new UnauthorizedException("Invalid email or password");
    }

    const session = await this.issueSessionForUser(user, meta);
    await this.auditService.log({
      schoolId: user.schoolId,
      userId: user.id,
      action: "LOGIN",
      entityType: "User",
      entityId: user.id
    });

    return session;
  }

  async refresh(rawRefreshToken: string, meta: RequestMeta) {
    const tokenHash = this.hashToken(rawRefreshToken);
    const existing = await this.prisma.refreshToken.findUnique({
      where: { tokenHash },
      include: { user: true }
    });

    if (!existing || existing.revokedAt || existing.expiresAt < new Date()) {
      throw new UnauthorizedException("Invalid or expired refresh token");
    }
    if (!existing.user || existing.user.deletedAt || !existing.user.isActive) {
      throw new UnauthorizedException("Invalid or expired refresh token");
    }

    await this.prisma.refreshToken.update({
      where: { id: existing.id },
      data: { revokedAt: new Date() }
    });

    const tokens = await this.issueTokens(existing.user, meta);
    return { tokens, user: AuthService.toSafeUser(existing.user) };
  }

  async logout(rawRefreshToken: string) {
    const tokenHash = this.hashToken(rawRefreshToken);
    await this.prisma.refreshToken.updateMany({
      where: { tokenHash, revokedAt: null },
      data: { revokedAt: new Date() }
    });
  }

  private async revokeAllRefreshTokens(userId: string) {
    await this.prisma.refreshToken.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: new Date() }
    });
  }

  async changePassword(userId: string, currentPassword: string, newPassword: string, meta: RequestMeta) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user || user.deletedAt || !user.isActive) {
      throw new UnauthorizedException("Account not found");
    }

    const passwordMatches = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!passwordMatches) {
      throw new UnauthorizedException("Current password is incorrect");
    }

    const passwordHash = await AuthService.hashPassword(newPassword);
    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: { passwordHash, mustChangePassword: false }
    });

    // Changing the password invalidates every other session; the caller gets a fresh one below.
    await this.revokeAllRefreshTokens(userId);
    const session = await this.issueSessionForUser(updatedUser, meta);

    await this.auditService.log({
      schoolId: user.schoolId,
      userId: user.id,
      action: "PASSWORD_CHANGED",
      entityType: "User",
      entityId: user.id
    });

    return session;
  }
}
