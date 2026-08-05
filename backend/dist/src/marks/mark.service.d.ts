import { PrismaService } from "../prisma/prisma.service";
import { GradeScaleService } from "./grade-scale.service";
interface MarkEntry {
    studentId: string;
    marksObtained?: number;
    isAbsent?: boolean;
    remarks?: string;
}
export declare class MarkService {
    private readonly prisma;
    private readonly gradeScaleService;
    constructor(prisma: PrismaService, gradeScaleService: GradeScaleService);
    private assertExamScheduleInSchool;
    bulkEnter(schoolId: string, enteredById: string, examScheduleId: string, entries: MarkEntry[]): Promise<({
        student: {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            firstName: string;
            lastName: string;
            deletedAt: Date | null;
            userId: string | null;
            sectionId: string | null;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            admissionNumber: string;
            bloodGroup: string | null;
            admissionDate: Date;
            academicStatus: import("../../generated/prisma/enums").AcademicStatus;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        remarks: string | null;
        examScheduleId: string;
        marksObtained: import("@prisma/client-runtime-utils").Decimal | null;
        isAbsent: boolean;
        enteredById: string;
    })[]>;
    findForExamSchedule(schoolId: string, examScheduleId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        student: {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            firstName: string;
            lastName: string;
            deletedAt: Date | null;
            userId: string | null;
            sectionId: string | null;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            admissionNumber: string;
            bloodGroup: string | null;
            admissionDate: Date;
            academicStatus: import("../../generated/prisma/enums").AcademicStatus;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        remarks: string | null;
        examScheduleId: string;
        marksObtained: import("@prisma/client-runtime-utils").Decimal | null;
        isAbsent: boolean;
        enteredById: string;
    })[]>;
    getReportCard(schoolId: string, studentId: string, examId: string): Promise<{
        student: {
            id: string;
            firstName: string;
            lastName: string;
        };
        exam: {
            id: string;
            name: string;
            examType: string;
        };
        subjects: {
            subjectId: string;
            subjectName: string;
            maxMarks: number;
            passMarks: number;
            marksObtained: import("@prisma/client-runtime-utils").Decimal | null;
            isAbsent: boolean;
            status: string;
        }[];
        totalMax: number;
        totalObtained: number;
        percentage: number;
        grade: string | null;
    }>;
}
export {};
