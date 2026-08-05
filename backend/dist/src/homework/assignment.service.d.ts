import { PrismaService } from "../prisma/prisma.service";
import { CreateAssignmentDto } from "./dto/create-assignment.dto";
export declare class AssignmentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, filters: {
        sectionId?: string;
        subjectId?: string;
        teacherId?: string;
    }): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
        teacher: {
            user: {
                id: string;
                email: string;
                phone: string | null;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string | null;
                branchId: string | null;
                firstName: string;
                lastName: string;
                role: import("../../generated/prisma/enums").Role;
                mustChangePassword: boolean;
                lastLoginAt: Date | null;
                deletedAt: Date | null;
            };
        } & {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            deletedAt: Date | null;
            userId: string;
            customRoleId: string | null;
            leaveGroupId: string | null;
            employeeCode: string;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            joiningDate: Date;
            emergencyPhone: string | null;
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
    })[]>;
    findOneForSchool(schoolId: string, id: string): Promise<{
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
        teacher: {
            user: {
                id: string;
                email: string;
                phone: string | null;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string | null;
                branchId: string | null;
                firstName: string;
                lastName: string;
                role: import("../../generated/prisma/enums").Role;
                mustChangePassword: boolean;
                lastLoginAt: Date | null;
                deletedAt: Date | null;
            };
        } & {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            deletedAt: Date | null;
            userId: string;
            customRoleId: string | null;
            leaveGroupId: string | null;
            employeeCode: string;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            joiningDate: Date;
            emergencyPhone: string | null;
        };
        submissions: ({
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
        })[];
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
    }>;
    create(schoolId: string, dto: CreateAssignmentDto): Promise<{
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
    }>;
    remove(schoolId: string, id: string): Promise<void>;
}
