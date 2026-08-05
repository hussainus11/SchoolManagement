import { Role } from "../../generated/prisma/client";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateQualificationDto } from "./dto/create-qualification.dto";
import { CreateTeacherDto } from "./dto/create-teacher.dto";
import { UpdateTeacherDto } from "./dto/update-teacher.dto";
import { TeacherService } from "./teacher.service";
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    findAll(user: JwtPayload, branchId?: string, search?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
        customRole: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            allowLogin: boolean;
        } | null;
        leaveGroup: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
        } | null;
        qualifications: {
            id: string;
            createdAt: Date;
            teacherId: string;
            degree: string;
            institution: string | null;
            yearCompleted: number | null;
        }[];
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
    })[]>;
    findOne(user: JwtPayload, id: string): Promise<{
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
        customRole: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            allowLogin: boolean;
        } | null;
        leaveGroup: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
        } | null;
        qualifications: {
            id: string;
            createdAt: Date;
            teacherId: string;
            degree: string;
            institution: string | null;
            yearCompleted: number | null;
        }[];
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
    }>;
    create(user: JwtPayload, dto: CreateTeacherDto): Promise<{
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
            customRole: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string;
                allowLogin: boolean;
            } | null;
            leaveGroup: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string;
            } | null;
            qualifications: {
                id: string;
                createdAt: Date;
                teacherId: string;
                degree: string;
                institution: string | null;
                yearCompleted: number | null;
            }[];
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
        tempPassword: string;
    }>;
    update(user: JwtPayload, id: string, dto: UpdateTeacherDto): Promise<{
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
        customRole: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            allowLogin: boolean;
        } | null;
        leaveGroup: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
        } | null;
        qualifications: {
            id: string;
            createdAt: Date;
            teacherId: string;
            degree: string;
            institution: string | null;
            yearCompleted: number | null;
        }[];
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
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
    addQualification(user: JwtPayload, id: string, dto: CreateQualificationDto): Promise<{
        id: string;
        createdAt: Date;
        teacherId: string;
        degree: string;
        institution: string | null;
        yearCompleted: number | null;
    }>;
    removeQualification(user: JwtPayload, id: string, qualificationId: string): Promise<void>;
    uploadPhoto(user: JwtPayload, id: string, file: Express.Multer.File): Promise<{
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
    }>;
    removePhoto(user: JwtPayload, id: string): Promise<{
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
    }>;
    resetPassword(user: JwtPayload, id: string): Promise<{
        tempPassword: string;
    }>;
}
