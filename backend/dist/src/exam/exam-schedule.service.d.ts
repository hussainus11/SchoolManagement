import { PrismaService } from "../prisma/prisma.service";
import { CreateExamScheduleDto } from "./dto/create-exam-schedule.dto";
export declare class ExamScheduleService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, filters: {
        examId?: string;
        classId?: string;
        subjectId?: string;
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
        subject: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            code: string;
            imageUrl: string | null;
        };
        room: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            capacity: number | null;
        };
        exam: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            startDate: Date;
            endDate: Date;
            academicYearId: string;
            examTypeId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        classId: string;
        subjectId: string;
        startTime: string;
        endTime: string;
        examId: string;
        roomId: string;
        examDate: Date;
        maxMarks: import("@prisma/client-runtime-utils").Decimal;
        passMarks: import("@prisma/client-runtime-utils").Decimal;
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
        subject: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            code: string;
            imageUrl: string | null;
        };
        room: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            capacity: number | null;
        };
        exam: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            startDate: Date;
            endDate: Date;
            academicYearId: string;
            examTypeId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        classId: string;
        subjectId: string;
        startTime: string;
        endTime: string;
        examId: string;
        roomId: string;
        examDate: Date;
        maxMarks: import("@prisma/client-runtime-utils").Decimal;
        passMarks: import("@prisma/client-runtime-utils").Decimal;
    }>;
    private assertRelationsInSchool;
    private assertNoRoomConflict;
    create(schoolId: string, dto: CreateExamScheduleDto): Promise<{
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
        subject: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            code: string;
            imageUrl: string | null;
        };
        room: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            capacity: number | null;
        };
        exam: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            startDate: Date;
            endDate: Date;
            academicYearId: string;
            examTypeId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        classId: string;
        subjectId: string;
        startTime: string;
        endTime: string;
        examId: string;
        roomId: string;
        examDate: Date;
        maxMarks: import("@prisma/client-runtime-utils").Decimal;
        passMarks: import("@prisma/client-runtime-utils").Decimal;
    }>;
    update(schoolId: string, id: string, dto: CreateExamScheduleDto): Promise<{
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
        subject: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            code: string;
            imageUrl: string | null;
        };
        room: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            capacity: number | null;
        };
        exam: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            startDate: Date;
            endDate: Date;
            academicYearId: string;
            examTypeId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        classId: string;
        subjectId: string;
        startTime: string;
        endTime: string;
        examId: string;
        roomId: string;
        examDate: Date;
        maxMarks: import("@prisma/client-runtime-utils").Decimal;
        passMarks: import("@prisma/client-runtime-utils").Decimal;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
}
