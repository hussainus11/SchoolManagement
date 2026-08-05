import { PrismaService } from "../prisma/prisma.service";
import { CreateExamDto } from "./dto/create-exam.dto";
export declare class ExamService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, academicYearId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    findOneForSchool(schoolId: string, id: string): Promise<{
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
    private assertRelationsInSchool;
    create(schoolId: string, dto: CreateExamDto): Promise<{
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
    update(schoolId: string, id: string, dto: CreateExamDto): Promise<{
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
    remove(schoolId: string, id: string): Promise<void>;
}
