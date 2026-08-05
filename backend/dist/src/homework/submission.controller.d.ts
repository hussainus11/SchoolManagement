import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { GradeSubmissionDto } from "./dto/grade-submission.dto";
import { RecordSubmissionDto } from "./dto/record-submission.dto";
import { SubmissionService } from "./submission.service";
export declare class SubmissionController {
    private readonly submissionService;
    constructor(submissionService: SubmissionService);
    find(user: JwtPayload, assignmentId?: string, studentId?: string): never[] | import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
        status: import("../../generated/prisma/enums").SubmissionStatus;
        marksObtained: import("@prisma/client-runtime-utils").Decimal | null;
        assignmentId: string;
        submissionText: string | null;
        submittedAt: Date | null;
        feedback: string | null;
        gradedById: string | null;
        gradedAt: Date | null;
    })[]> | import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    record(user: JwtPayload, id: string, dto: RecordSubmissionDto): Promise<{
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
    }>;
    grade(user: JwtPayload, id: string, dto: GradeSubmissionDto): Promise<{
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
    }>;
}
