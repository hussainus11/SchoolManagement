import { Prisma, Role } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Prisma.Prisma__UserClient<{
        id: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string | null;
        branchId: string | null;
        passwordHash: string;
        firstName: string;
        lastName: string;
        role: Role;
        mustChangePassword: boolean;
        lastLoginAt: Date | null;
        deletedAt: Date | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    findById(id: string): Prisma.Prisma__UserClient<{
        id: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string | null;
        branchId: string | null;
        passwordHash: string;
        firstName: string;
        lastName: string;
        role: Role;
        mustChangePassword: boolean;
        lastLoginAt: Date | null;
        deletedAt: Date | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    create(data: {
        email: string;
        passwordHash: string;
        firstName: string;
        lastName: string;
        role: Role;
        schoolId?: string;
        branchId?: string;
    }): Prisma.Prisma__UserClient<{
        id: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string | null;
        branchId: string | null;
        passwordHash: string;
        firstName: string;
        lastName: string;
        role: Role;
        mustChangePassword: boolean;
        lastLoginAt: Date | null;
        deletedAt: Date | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    createWithinTransaction(tx: Prisma.TransactionClient, data: {
        email: string;
        passwordHash: string;
        firstName: string;
        lastName: string;
        role: Role;
        schoolId?: string;
        branchId?: string;
    }): Prisma.Prisma__UserClient<{
        id: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string | null;
        branchId: string | null;
        passwordHash: string;
        firstName: string;
        lastName: string;
        role: Role;
        mustChangePassword: boolean;
        lastLoginAt: Date | null;
        deletedAt: Date | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    markLoggedIn(id: string): Prisma.Prisma__UserClient<{
        id: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string | null;
        branchId: string | null;
        passwordHash: string;
        firstName: string;
        lastName: string;
        role: Role;
        mustChangePassword: boolean;
        lastLoginAt: Date | null;
        deletedAt: Date | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
}
