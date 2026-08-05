import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { GenerateMonthPayslipsDto } from "./dto/generate-month-payslips.dto";
import { GenerateUserPayslipDto } from "./dto/generate-user-payslip.dto";
import { PayslipService } from "./payslip.service";
export declare class PayslipController {
    private readonly payslipService;
    constructor(payslipService: PayslipService);
    findAll(user: JwtPayload, userId?: string, month?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    findOne(user: JwtPayload, id: string): Promise<{
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
    generateForUser(user: JwtPayload, dto: GenerateUserPayslipDto): Promise<{
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
    generateForMonth(user: JwtPayload, dto: GenerateMonthPayslipsDto): Promise<{
        created: number;
        skipped: number;
        total: number;
    }>;
    finalize(user: JwtPayload, id: string): Promise<{
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
    markPaid(user: JwtPayload, id: string): Promise<{
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
    remove(user: JwtPayload, id: string): Promise<void>;
}
