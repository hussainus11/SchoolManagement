import { Role } from "../../generated/prisma/client";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AssignmentService } from "./assignment.service";
import { CreateAssignmentDto } from "./dto/create-assignment.dto";
export declare class AssignmentController {
    private readonly assignmentService;
    constructor(assignmentService: AssignmentService);
    findAll(user: JwtPayload, sectionId?: string, subjectId?: string, teacherId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
                role: Role;
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
    findOne(user: JwtPayload, id: string): Promise<{
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
                role: Role;
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
    create(user: JwtPayload, dto: CreateAssignmentDto): Promise<{
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
    remove(user: JwtPayload, id: string): Promise<void>;
}
