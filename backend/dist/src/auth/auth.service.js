"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcryptjs"));
const crypto = __importStar(require("node:crypto"));
const audit_service_1 = require("../audit/audit.service");
const prisma_service_1 = require("../prisma/prisma.service");
const users_service_1 = require("../users/users.service");
const REFRESH_TOKEN_TTL_DAYS = Number(process.env.REFRESH_TOKEN_TTL_DAYS ?? 30);
let AuthService = AuthService_1 = class AuthService {
    usersService;
    prisma;
    jwtService;
    auditService;
    constructor(usersService, prisma, jwtService, auditService) {
        this.usersService = usersService;
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.auditService = auditService;
    }
    static toSafeUser(user) {
        const { passwordHash: _passwordHash, ...safe } = user;
        return safe;
    }
    static hashPassword(password) {
        return bcrypt.hash(password, 10);
    }
    hashToken(token) {
        return crypto.createHash("sha256").update(token).digest("hex");
    }
    async resolveRoleContext(userId) {
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
        return { customRoleId: null, allowLogin: true, permissions: [] };
    }
    async issueTokens(user, meta) {
        const roleContext = await this.resolveRoleContext(user.id);
        if (!roleContext.allowLogin) {
            throw new common_1.UnauthorizedException("Login is disabled for your role");
        }
        const payload = {
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
        const refreshTokenExpiresAt = new Date(Date.now() + REFRESH_TOKEN_TTL_DAYS * 24 * 60 * 60 * 1000);
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
    async issueSessionForUser(user, meta) {
        const tokens = await this.issueTokens(user, meta);
        await this.usersService.markLoggedIn(user.id);
        return { tokens, user: AuthService_1.toSafeUser(user) };
    }
    async login(email, password, meta) {
        const user = await this.usersService.findByEmail(email);
        if (!user || user.deletedAt || !user.isActive) {
            throw new common_1.UnauthorizedException("Invalid email or password");
        }
        const passwordMatches = await bcrypt.compare(password, user.passwordHash);
        if (!passwordMatches) {
            throw new common_1.UnauthorizedException("Invalid email or password");
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
    async refresh(rawRefreshToken, meta) {
        const tokenHash = this.hashToken(rawRefreshToken);
        const existing = await this.prisma.refreshToken.findUnique({
            where: { tokenHash },
            include: { user: true }
        });
        if (!existing || existing.revokedAt || existing.expiresAt < new Date()) {
            throw new common_1.UnauthorizedException("Invalid or expired refresh token");
        }
        if (!existing.user || existing.user.deletedAt || !existing.user.isActive) {
            throw new common_1.UnauthorizedException("Invalid or expired refresh token");
        }
        await this.prisma.refreshToken.update({
            where: { id: existing.id },
            data: { revokedAt: new Date() }
        });
        const tokens = await this.issueTokens(existing.user, meta);
        return { tokens, user: AuthService_1.toSafeUser(existing.user) };
    }
    async logout(rawRefreshToken) {
        const tokenHash = this.hashToken(rawRefreshToken);
        await this.prisma.refreshToken.updateMany({
            where: { tokenHash, revokedAt: null },
            data: { revokedAt: new Date() }
        });
    }
    async revokeAllRefreshTokens(userId) {
        await this.prisma.refreshToken.updateMany({
            where: { userId, revokedAt: null },
            data: { revokedAt: new Date() }
        });
    }
    async changePassword(userId, currentPassword, newPassword, meta) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user || user.deletedAt || !user.isActive) {
            throw new common_1.UnauthorizedException("Account not found");
        }
        const passwordMatches = await bcrypt.compare(currentPassword, user.passwordHash);
        if (!passwordMatches) {
            throw new common_1.UnauthorizedException("Current password is incorrect");
        }
        const passwordHash = await AuthService_1.hashPassword(newPassword);
        const updatedUser = await this.prisma.user.update({
            where: { id: userId },
            data: { passwordHash, mustChangePassword: false }
        });
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        prisma_service_1.PrismaService,
        jwt_1.JwtService,
        audit_service_1.AuditService])
], AuthService);
//# sourceMappingURL=auth.service.js.map