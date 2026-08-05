import { PrismaService } from "../prisma/prisma.service";
export declare class PayslipService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, filters: {
        userId?: string;
        month?: string;
    }): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        deletedAt: Date | null;
        userId: string;
        status: import("../../generated/prisma/enums").PayslipStatus;
        paidAt: Date | null;
        basicSalary: import("@prisma/client-runtime-utils").Decimal;
        allowances: import("@prisma/client-runtime-utils").Decimal;
        salaryStructureId: string;
        month: string;
        attendanceDeduction: import("@prisma/client-runtime-utils").Decimal;
        otherDeductions: import("@prisma/client-runtime-utils").Decimal;
        netSalary: import("@prisma/client-runtime-utils").Decimal;
    })[]>;
    findOneForSchool(schoolId: string, id: string): Promise<{
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
        };
        salaryStructure: {
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            userId: string;
            basicSalary: import("@prisma/client-runtime-utils").Decimal;
            allowances: import("@prisma/client-runtime-utils").Decimal;
            fixedDeductions: import("@prisma/client-runtime-utils").Decimal;
            effectiveFrom: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        deletedAt: Date | null;
        userId: string;
        status: import("../../generated/prisma/enums").PayslipStatus;
        paidAt: Date | null;
        basicSalary: import("@prisma/client-runtime-utils").Decimal;
        allowances: import("@prisma/client-runtime-utils").Decimal;
        salaryStructureId: string;
        month: string;
        attendanceDeduction: import("@prisma/client-runtime-utils").Decimal;
        otherDeductions: import("@prisma/client-runtime-utils").Decimal;
        netSalary: import("@prisma/client-runtime-utils").Decimal;
    }>;
    private computeAttendanceDeduction;
    generateForUser(schoolId: string, userId: string, month: string): Promise<{
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
        };
        salaryStructure: {
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            userId: string;
            basicSalary: import("@prisma/client-runtime-utils").Decimal;
            allowances: import("@prisma/client-runtime-utils").Decimal;
            fixedDeductions: import("@prisma/client-runtime-utils").Decimal;
            effectiveFrom: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        deletedAt: Date | null;
        userId: string;
        status: import("../../generated/prisma/enums").PayslipStatus;
        paidAt: Date | null;
        basicSalary: import("@prisma/client-runtime-utils").Decimal;
        allowances: import("@prisma/client-runtime-utils").Decimal;
        salaryStructureId: string;
        month: string;
        attendanceDeduction: import("@prisma/client-runtime-utils").Decimal;
        otherDeductions: import("@prisma/client-runtime-utils").Decimal;
        netSalary: import("@prisma/client-runtime-utils").Decimal;
    }>;
    generateForMonth(schoolId: string, month: string): Promise<{
        created: number;
        skipped: number;
        total: number;
    }>;
    finalize(schoolId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        deletedAt: Date | null;
        userId: string;
        status: import("../../generated/prisma/enums").PayslipStatus;
        paidAt: Date | null;
        basicSalary: import("@prisma/client-runtime-utils").Decimal;
        allowances: import("@prisma/client-runtime-utils").Decimal;
        salaryStructureId: string;
        month: string;
        attendanceDeduction: import("@prisma/client-runtime-utils").Decimal;
        otherDeductions: import("@prisma/client-runtime-utils").Decimal;
        netSalary: import("@prisma/client-runtime-utils").Decimal;
    }>;
    markPaid(schoolId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        deletedAt: Date | null;
        userId: string;
        status: import("../../generated/prisma/enums").PayslipStatus;
        paidAt: Date | null;
        basicSalary: import("@prisma/client-runtime-utils").Decimal;
        allowances: import("@prisma/client-runtime-utils").Decimal;
        salaryStructureId: string;
        month: string;
        attendanceDeduction: import("@prisma/client-runtime-utils").Decimal;
        otherDeductions: import("@prisma/client-runtime-utils").Decimal;
        netSalary: import("@prisma/client-runtime-utils").Decimal;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
}
