import { PrismaService } from "../prisma/prisma.service";
import { CreateFeeStructureDto } from "./dto/create-fee-structure.dto";
import { UpdateFeeStructureDto } from "./dto/update-fee-structure.dto";
export declare class FeeStructureService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, filters: {
        classId?: string;
        academicYearId?: string;
    }): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    findOneForSchool(schoolId: string, id: string): Promise<{
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
    create(schoolId: string, dto: CreateFeeStructureDto): Promise<{
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
    update(schoolId: string, id: string, dto: UpdateFeeStructureDto): Promise<{
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
    remove(schoolId: string, id: string): Promise<void>;
}
