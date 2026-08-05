import { ExpenseStatus } from "../../generated/prisma/client";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateExpenseDto } from "./dto/create-expense.dto";
import { ExpenseService } from "./expense.service";
export declare class ExpenseController {
    private readonly expenseService;
    constructor(expenseService: ExpenseService);
    findAll(user: JwtPayload, branchId?: string, status?: ExpenseStatus, categoryId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        category: {
            id: string;
            name: string;
            createdAt: Date;
            schoolId: string;
        };
        vendor: {
            id: string;
            name: string;
            email: string | null;
            phone: string | null;
            address: string | null;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
        } | null;
        requestedBy: {
            id: string;
            firstName: string;
            lastName: string;
        };
        approvedBy: {
            id: string;
            firstName: string;
            lastName: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        deletedAt: Date | null;
        status: ExpenseStatus;
        description: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
        categoryId: string;
        vendorId: string | null;
        expenseDate: Date;
        requestedById: string;
        approvedById: string | null;
        approvedAt: Date | null;
    })[]>;
    findOne(user: JwtPayload, id: string): Promise<{
        category: {
            id: string;
            name: string;
            createdAt: Date;
            schoolId: string;
        };
        vendor: {
            id: string;
            name: string;
            email: string | null;
            phone: string | null;
            address: string | null;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
        } | null;
        requestedBy: {
            id: string;
            firstName: string;
            lastName: string;
        };
        approvedBy: {
            id: string;
            firstName: string;
            lastName: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        deletedAt: Date | null;
        status: ExpenseStatus;
        description: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
        categoryId: string;
        vendorId: string | null;
        expenseDate: Date;
        requestedById: string;
        approvedById: string | null;
        approvedAt: Date | null;
    }>;
    create(user: JwtPayload, dto: CreateExpenseDto): Promise<{
        category: {
            id: string;
            name: string;
            createdAt: Date;
            schoolId: string;
        };
        vendor: {
            id: string;
            name: string;
            email: string | null;
            phone: string | null;
            address: string | null;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        deletedAt: Date | null;
        status: ExpenseStatus;
        description: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
        categoryId: string;
        vendorId: string | null;
        expenseDate: Date;
        requestedById: string;
        approvedById: string | null;
        approvedAt: Date | null;
    }>;
    approve(user: JwtPayload, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        deletedAt: Date | null;
        status: ExpenseStatus;
        description: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
        categoryId: string;
        vendorId: string | null;
        expenseDate: Date;
        requestedById: string;
        approvedById: string | null;
        approvedAt: Date | null;
    }>;
    reject(user: JwtPayload, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        deletedAt: Date | null;
        status: ExpenseStatus;
        description: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
        categoryId: string;
        vendorId: string | null;
        expenseDate: Date;
        requestedById: string;
        approvedById: string | null;
        approvedAt: Date | null;
    }>;
    markPaid(user: JwtPayload, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        deletedAt: Date | null;
        status: ExpenseStatus;
        description: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
        categoryId: string;
        vendorId: string | null;
        expenseDate: Date;
        requestedById: string;
        approvedById: string | null;
        approvedAt: Date | null;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
}
