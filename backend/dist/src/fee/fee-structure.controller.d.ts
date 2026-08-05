import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateFeeStructureDto } from "./dto/create-fee-structure.dto";
import { UpdateFeeStructureDto } from "./dto/update-fee-structure.dto";
import { FeeStructureService } from "./fee-structure.service";
export declare class FeeStructureController {
    private readonly feeStructureService;
    constructor(feeStructureService: FeeStructureService);
    findAll(user: JwtPayload, classId?: string, academicYearId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        class: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            academicYearId: string;
            order: number;
        };
        feeHead: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        academicYearId: string;
        classId: string;
        feeHeadId: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
        frequency: import("../../generated/prisma/enums").FeeFrequency;
    })[]>;
    create(user: JwtPayload, dto: CreateFeeStructureDto): Promise<{
        class: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            academicYearId: string;
            order: number;
        };
        feeHead: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        academicYearId: string;
        classId: string;
        feeHeadId: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
        frequency: import("../../generated/prisma/enums").FeeFrequency;
    }>;
    update(user: JwtPayload, id: string, dto: UpdateFeeStructureDto): Promise<{
        class: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            academicYearId: string;
            order: number;
        };
        feeHead: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        academicYearId: string;
        classId: string;
        feeHeadId: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
        frequency: import("../../generated/prisma/enums").FeeFrequency;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
}
