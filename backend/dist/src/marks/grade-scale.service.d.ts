import { PrismaService } from "../prisma/prisma.service";
import { CreateGradeScaleDto } from "./dto/create-grade-scale.dto";
export declare class GradeScaleService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        remarks: string | null;
        grade: string;
        minPercentage: import("@prisma/client-runtime-utils").Decimal;
        maxPercentage: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
    findOneForSchool(schoolId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        remarks: string | null;
        grade: string;
        minPercentage: import("@prisma/client-runtime-utils").Decimal;
        maxPercentage: import("@prisma/client-runtime-utils").Decimal;
    }>;
    create(schoolId: string, dto: CreateGradeScaleDto): import("../../generated/prisma/models").Prisma__GradeScaleClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        remarks: string | null;
        grade: string;
        minPercentage: import("@prisma/client-runtime-utils").Decimal;
        maxPercentage: import("@prisma/client-runtime-utils").Decimal;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(schoolId: string, id: string, dto: CreateGradeScaleDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        remarks: string | null;
        grade: string;
        minPercentage: import("@prisma/client-runtime-utils").Decimal;
        maxPercentage: import("@prisma/client-runtime-utils").Decimal;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
    resolveGrade(schoolId: string, percentage: number): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        remarks: string | null;
        grade: string;
        minPercentage: import("@prisma/client-runtime-utils").Decimal;
        maxPercentage: import("@prisma/client-runtime-utils").Decimal;
    } | null>;
}
