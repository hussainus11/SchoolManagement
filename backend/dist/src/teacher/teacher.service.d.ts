import { Role } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateQualificationDto } from "./dto/create-qualification.dto";
import { CreateTeacherDto } from "./dto/create-teacher.dto";
import { UpdateTeacherDto } from "./dto/update-teacher.dto";
export declare class TeacherService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, filters: {
        branchId?: string;
        search?: string;
    }): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    findOneForSchool(schoolId: string, id: string): Promise<{
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
    private assertCustomRoleBelongsToSchool;
    private assertLeaveGroupBelongsToSchool;
    create(schoolId: string, dto: CreateTeacherDto): Promise<{
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
    update(schoolId: string, id: string, dto: UpdateTeacherDto): Promise<{
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
    remove(schoolId: string, id: string): Promise<void>;
    setPhoto(schoolId: string, id: string, photoUrl: string): Promise<{
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
    removePhoto(schoolId: string, id: string): Promise<{
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
    resetPassword(schoolId: string, id: string): Promise<{
        tempPassword: string;
    }>;
    addQualification(schoolId: string, teacherId: string, dto: CreateQualificationDto): Promise<{
        id: string;
        createdAt: Date;
        teacherId: string;
        degree: string;
        institution: string | null;
        yearCompleted: number | null;
    }>;
    removeQualification(schoolId: string, teacherId: string, qualificationId: string): Promise<void>;
}
