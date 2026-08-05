import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { EnterMarksDto } from "./dto/enter-marks.dto";
import { MarkService } from "./mark.service";
export declare class MarkController {
    private readonly markService;
    constructor(markService: MarkService);
    findForExamSchedule(user: JwtPayload, examScheduleId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    bulkEnter(user: JwtPayload, dto: EnterMarksDto): Promise<({
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
    getReportCard(user: JwtPayload, studentId: string, examId: string): Promise<{
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
