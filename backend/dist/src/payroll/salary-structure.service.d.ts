import { PrismaService } from "../prisma/prisma.service";
import { CreateSalaryStructureDto } from "./dto/create-salary-structure.dto";
export declare class SalaryStructureService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findForUser(schoolId: string, userId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
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
    }[]>;
    create(schoolId: string, dto: CreateSalaryStructureDto): Promise<{
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
    }>;
    deactivate(schoolId: string, id: string): Promise<{
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
    }>;
}
