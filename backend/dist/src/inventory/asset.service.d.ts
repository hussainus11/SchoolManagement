import { AssetStatus } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateAssetDto } from "./dto/create-asset.dto";
export declare class AssetService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, filters: {
        branchId?: string;
        categoryId?: string;
        status?: AssetStatus;
    }): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        category: {
            id: string;
            name: string;
            createdAt: Date;
            schoolId: string;
        };
        assignedToTeacher: ({
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
        }) | null;
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        status: AssetStatus;
        location: string | null;
        categoryId: string;
        notes: string | null;
        serialNumber: string | null;
        purchaseDate: Date | null;
        purchaseCost: import("@prisma/client-runtime-utils").Decimal | null;
        assignedToTeacherId: string | null;
    })[]>;
    findOneForSchool(schoolId: string, id: string): Promise<{
        category: {
            id: string;
            name: string;
            createdAt: Date;
            schoolId: string;
        };
        assignedToTeacher: ({
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
        }) | null;
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        status: AssetStatus;
        location: string | null;
        categoryId: string;
        notes: string | null;
        serialNumber: string | null;
        purchaseDate: Date | null;
        purchaseCost: import("@prisma/client-runtime-utils").Decimal | null;
        assignedToTeacherId: string | null;
    }>;
    private assertRelations;
    create(schoolId: string, dto: CreateAssetDto): Promise<{
        category: {
            id: string;
            name: string;
            createdAt: Date;
            schoolId: string;
        };
        assignedToTeacher: ({
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
        }) | null;
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        status: AssetStatus;
        location: string | null;
        categoryId: string;
        notes: string | null;
        serialNumber: string | null;
        purchaseDate: Date | null;
        purchaseCost: import("@prisma/client-runtime-utils").Decimal | null;
        assignedToTeacherId: string | null;
    }>;
    update(schoolId: string, id: string, dto: CreateAssetDto): Promise<{
        category: {
            id: string;
            name: string;
            createdAt: Date;
            schoolId: string;
        };
        assignedToTeacher: ({
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
        }) | null;
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        status: AssetStatus;
        location: string | null;
        categoryId: string;
        notes: string | null;
        serialNumber: string | null;
        purchaseDate: Date | null;
        purchaseCost: import("@prisma/client-runtime-utils").Decimal | null;
        assignedToTeacherId: string | null;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
}
