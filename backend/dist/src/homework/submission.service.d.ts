import { SubmissionStatus } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
export declare class SubmissionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findForAssignment(schoolId: string, assignmentId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
        status: SubmissionStatus;
        marksObtained: import("@prisma/client-runtime-utils").Decimal | null;
        assignmentId: string;
        submissionText: string | null;
        submittedAt: Date | null;
        feedback: string | null;
        gradedById: string | null;
        gradedAt: Date | null;
    })[]>;
    findForStudent(schoolId: string, studentId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
        status: SubmissionStatus;
        marksObtained: import("@prisma/client-runtime-utils").Decimal | null;
        assignmentId: string;
        submissionText: string | null;
        submittedAt: Date | null;
        feedback: string | null;
        gradedById: string | null;
        gradedAt: Date | null;
    })[]>;
    private assertInSchool;
    record(schoolId: string, id: string, submissionText: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        status: SubmissionStatus;
        marksObtained: import("@prisma/client-runtime-utils").Decimal | null;
        assignmentId: string;
        submissionText: string | null;
        submittedAt: Date | null;
        feedback: string | null;
        gradedById: string | null;
        gradedAt: Date | null;
    }>;
    grade(schoolId: string, id: string, gradedById: string, marksObtained: number, feedback?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        status: SubmissionStatus;
        marksObtained: import("@prisma/client-runtime-utils").Decimal | null;
        assignmentId: string;
        submissionText: string | null;
        submittedAt: Date | null;
        feedback: string | null;
        gradedById: string | null;
        gradedAt: Date | null;
    }>;
}
