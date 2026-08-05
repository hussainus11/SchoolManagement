import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { PortalService } from "./portal.service";
export declare class PortalController {
    private readonly portalService;
    constructor(portalService: PortalService);
    getMyStudents(user: JwtPayload): Promise<({
        section: ({
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
        } & {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            classId: string;
            capacity: number | null;
            classTeacherId: string | null;
        }) | null;
    } & {
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
    })[]>;
    getAttendance(user: JwtPayload, studentId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        academicYearId: string;
        sectionId: string;
        studentId: string;
        date: Date;
        status: import("../../generated/prisma/enums").AttendanceStatus;
        remarks: string | null;
        markedById: string;
    }[]>;
    getInvoices(user: JwtPayload, studentId: string): Promise<({
        payments: {
            id: string;
            createdAt: Date;
            schoolId: string;
            deletedAt: Date | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            invoiceId: string;
            method: import("../../generated/prisma/enums").PaymentMethod;
            reference: string | null;
            paidAt: Date;
            recordedById: string;
        }[];
        items: ({
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
            feeHeadId: string;
            amount: import("@prisma/client-runtime-utils").Decimal;
            invoiceId: string;
            discount: import("@prisma/client-runtime-utils").Decimal;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        deletedAt: Date | null;
        academicYearId: string;
        studentId: string;
        status: import("../../generated/prisma/enums").InvoiceStatus;
        invoiceNumber: string;
        period: string;
        issueDate: Date;
        dueDate: Date;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        discountTotal: import("@prisma/client-runtime-utils").Decimal;
        total: import("@prisma/client-runtime-utils").Decimal;
        amountPaid: import("@prisma/client-runtime-utils").Decimal;
    })[]>;
    getSubmissions(user: JwtPayload, studentId: string): Promise<({
        assignment: {
            section: {
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
            } & {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                classId: string;
                capacity: number | null;
                classTeacherId: string | null;
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
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            deletedAt: Date | null;
            subjectId: string;
            sectionId: string;
            teacherId: string;
            title: string;
            description: string | null;
            dueDate: Date;
            assignedDate: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        status: import("../../generated/prisma/enums").SubmissionStatus;
        marksObtained: import("@prisma/client-runtime-utils").Decimal | null;
        assignmentId: string;
        submissionText: string | null;
        submittedAt: Date | null;
        feedback: string | null;
        gradedById: string | null;
        gradedAt: Date | null;
    })[]>;
    getExams(user: JwtPayload, studentId: string): Promise<({
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
