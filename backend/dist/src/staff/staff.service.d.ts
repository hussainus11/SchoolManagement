import { Role } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateStaffDto } from "./dto/create-staff.dto";
import { UpdateStaffDto } from "./dto/update-staff.dto";
export declare class StaffService {
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
        designation: string;
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
        designation: string;
    }>;
    private assertCustomRoleBelongsToSchool;
    private assertLeaveGroupBelongsToSchool;
    create(schoolId: string, dto: CreateStaffDto): Promise<{
        staff: {
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
            designation: string;
        };
        tempPassword: string;
    }>;
    update(schoolId: string, id: string, dto: UpdateStaffDto): Promise<{
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
        designation: string;
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
        designation: string;
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
        designation: string;
    }>;
    resetPassword(schoolId: string, id: string): Promise<{
        tempPassword: string;
    }>;
}
