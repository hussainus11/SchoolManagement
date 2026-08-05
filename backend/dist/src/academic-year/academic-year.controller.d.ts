import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AcademicYearService } from "./academic-year.service";
import { CreateAcademicYearDto } from "./dto/create-academic-year.dto";
export declare class AcademicYearController {
    private readonly academicYearService;
    constructor(academicYearService: AcademicYearService);
    findAll(user: JwtPayload): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        isCurrent: boolean;
    }[]>;
    create(user: JwtPayload, dto: CreateAcademicYearDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        isCurrent: boolean;
    }>;
    setCurrent(user: JwtPayload, id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        isCurrent: boolean;
    }>;
}
