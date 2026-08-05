import { Prisma } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
export declare class BranchService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string): Prisma.PrismaPromise<{
        id: string;
        name: string;
        phone: string | null;
        address: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
    }[]>;
    findOneForSchool(schoolId: string, id: string): Promise<{
        id: string;
        name: string;
        phone: string | null;
        address: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
    }>;
    create(schoolId: string, data: {
        name: string;
        code: string;
        address?: string;
        phone?: string;
    }): Prisma.Prisma__BranchClient<{
        id: string;
        name: string;
        phone: string | null;
        address: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    createWithinTransaction(tx: Prisma.TransactionClient, schoolId: string, data: {
        name: string;
        code: string;
    }): Prisma.Prisma__BranchClient<{
        id: string;
        name: string;
        phone: string | null;
        address: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    update(schoolId: string, id: string, data: Prisma.BranchUpdateInput): Promise<{
        id: string;
        name: string;
        phone: string | null;
        address: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
    }>;
}
