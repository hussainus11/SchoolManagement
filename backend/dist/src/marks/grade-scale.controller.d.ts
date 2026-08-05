import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateGradeScaleDto } from "./dto/create-grade-scale.dto";
import { GradeScaleService } from "./grade-scale.service";
export declare class GradeScaleController {
    private readonly gradeScaleService;
    constructor(gradeScaleService: GradeScaleService);
    findAll(user: JwtPayload): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        remarks: string | null;
        grade: string;
        minPercentage: import("@prisma/client-runtime-utils").Decimal;
        maxPercentage: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
    create(user: JwtPayload, dto: CreateGradeScaleDto): import("../../generated/prisma/models").Prisma__GradeScaleClient<{
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
    update(user: JwtPayload, id: string, dto: CreateGradeScaleDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        remarks: string | null;
        grade: string;
        minPercentage: import("@prisma/client-runtime-utils").Decimal;
        maxPercentage: import("@prisma/client-runtime-utils").Decimal;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
}
