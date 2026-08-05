import { JwtService } from "@nestjs/jwt";
import { User } from "../../generated/prisma/client";
import { AuditService } from "../audit/audit.service";
import { PrismaService } from "../prisma/prisma.service";
import { UsersService } from "../users/users.service";
export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
    refreshTokenExpiresAt: Date;
}
interface RequestMeta {
    userAgent?: string;
    ipAddress?: string;
}
export declare class AuthService {
    private readonly usersService;
    private readonly prisma;
    private readonly jwtService;
    private readonly auditService;
    constructor(usersService: UsersService, prisma: PrismaService, jwtService: JwtService, auditService: AuditService);
    static toSafeUser(user: User): {
        id: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string | null;
        branchId: string | null;
        firstName: string;
        lastName: string;
        role: import("../../generated/prisma/enums").Role;
        mustChangePassword: boolean;
        lastLoginAt: Date | null;
        deletedAt: Date | null;
    };
    static hashPassword(password: string): Promise<string>;
    private hashToken;
    private resolveRoleContext;
    private issueTokens;
    issueSessionForUser(user: User, meta: RequestMeta): Promise<{
        tokens: AuthTokens;
        user: {
            id: string;
            email: string;
            phone: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string | null;
            branchId: string | null;
            firstName: string;
            lastName: string;
            role: import("../../generated/prisma/enums").Role;
            mustChangePassword: boolean;
            lastLoginAt: Date | null;
            deletedAt: Date | null;
        };
    }>;
    login(email: string, password: string, meta: RequestMeta): Promise<{
        tokens: AuthTokens;
        user: {
            id: string;
            email: string;
            phone: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string | null;
            branchId: string | null;
            firstName: string;
            lastName: string;
            role: import("../../generated/prisma/enums").Role;
            mustChangePassword: boolean;
            lastLoginAt: Date | null;
            deletedAt: Date | null;
        };
    }>;
    refresh(rawRefreshToken: string, meta: RequestMeta): Promise<{
        tokens: AuthTokens;
        user: {
            id: string;
            email: string;
            phone: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string | null;
            branchId: string | null;
            firstName: string;
            lastName: string;
            role: import("../../generated/prisma/enums").Role;
            mustChangePassword: boolean;
            lastLoginAt: Date | null;
            deletedAt: Date | null;
        };
    }>;
    logout(rawRefreshToken: string): Promise<void>;
    private revokeAllRefreshTokens;
    changePassword(userId: string, currentPassword: string, newPassword: string, meta: RequestMeta): Promise<{
        tokens: AuthTokens;
        user: {
            id: string;
            email: string;
            phone: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string | null;
            branchId: string | null;
            firstName: string;
            lastName: string;
            role: import("../../generated/prisma/enums").Role;
            mustChangePassword: boolean;
            lastLoginAt: Date | null;
            deletedAt: Date | null;
        };
    }>;
}
export {};
