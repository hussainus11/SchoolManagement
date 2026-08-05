import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateExamScheduleDto } from "./dto/create-exam-schedule.dto";
import { ExamScheduleService } from "./exam-schedule.service";
export declare class ExamScheduleController {
    private readonly examScheduleService;
    constructor(examScheduleService: ExamScheduleService);
    findAll(user: JwtPayload, examId?: string, classId?: string, subjectId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    findOne(user: JwtPayload, id: string): Promise<{
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
    create(user: JwtPayload, dto: CreateExamScheduleDto): Promise<{
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
    update(user: JwtPayload, id: string, dto: CreateExamScheduleDto): Promise<{
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
    remove(user: JwtPayload, id: string): Promise<void>;
}
