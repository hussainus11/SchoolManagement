import { ExpenseStatus } from "../../generated/prisma/client";
import { AuditService } from "../audit/audit.service";
import { PrismaService } from "../prisma/prisma.service";
import { CreateExpenseDto } from "./dto/create-expense.dto";
export declare class ExpenseService {
    private readonly prisma;
    private readonly auditService;
    constructor(prisma: PrismaService, auditService: AuditService);
    findAllForSchool(schoolId: string, filters: {
        branchId?: string;
        status?: ExpenseStatus;
        categoryId?: string;
    }): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    findOneForSchool(schoolId: string, id: string): Promise<{
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
    create(schoolId: string, requestedById: string, dto: CreateExpenseDto): Promise<{
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
    approve(schoolId: string, id: string, approvedById: string): Promise<{
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
    reject(schoolId: string, id: string, approvedById: string): Promise<{
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
    markPaid(schoolId: string, id: string): Promise<{
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
    remove(schoolId: string, id: string): Promise<void>;
}
