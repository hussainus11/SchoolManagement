import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateSalaryStructureDto } from "./dto/create-salary-structure.dto";
import { SalaryStructureService } from "./salary-structure.service";
export declare class SalaryStructureController {
    private readonly salaryStructureService;
    constructor(salaryStructureService: SalaryStructureService);
    findForUser(user: JwtPayload, userId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
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
    create(user: JwtPayload, dto: CreateSalaryStructureDto): Promise<{
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
    deactivate(user: JwtPayload, id: string): Promise<{
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
