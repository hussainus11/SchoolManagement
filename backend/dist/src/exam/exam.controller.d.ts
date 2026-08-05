import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateExamDto } from "./dto/create-exam.dto";
import { ExamService } from "./exam.service";
export declare class ExamController {
    private readonly examService;
    constructor(examService: ExamService);
    findAll(user: JwtPayload, academicYearId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        academicYear: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            startDate: Date;
            endDate: Date;
            isCurrent: boolean;
        };
        examType: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        academicYearId: string;
        examTypeId: string;
    })[]>;
    findOne(user: JwtPayload, id: string): Promise<{
        academicYear: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            startDate: Date;
            endDate: Date;
            isCurrent: boolean;
        };
        examType: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        academicYearId: string;
        examTypeId: string;
    }>;
    create(user: JwtPayload, dto: CreateExamDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        academicYearId: string;
        examTypeId: string;
    }>;
    update(user: JwtPayload, id: string, dto: CreateExamDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        academicYearId: string;
        examTypeId: string;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
}
