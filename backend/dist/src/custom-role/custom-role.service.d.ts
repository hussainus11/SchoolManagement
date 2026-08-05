import { PrismaService } from "../prisma/prisma.service";
import { CreateCustomRoleDto } from "./dto/create-custom-role.dto";
import { UpdateCustomRoleDto } from "./dto/update-custom-role.dto";
export declare class CustomRoleService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private validatePermissions;
    findAllForSchool(schoolId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        permissions: {
            id: string;
            customRoleId: string;
            resource: string;
        }[];
        _count: {
            staff: number;
            teachers: number;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        allowLogin: boolean;
    })[]>;
    findOneForSchool(schoolId: string, id: string): Promise<{
        permissions: {
            id: string;
            customRoleId: string;
            resource: string;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        allowLogin: boolean;
    }>;
    create(schoolId: string, dto: CreateCustomRoleDto): Promise<{
        permissions: {
            id: string;
            customRoleId: string;
            resource: string;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        allowLogin: boolean;
    }>;
    update(schoolId: string, id: string, dto: UpdateCustomRoleDto): Promise<{
        permissions: {
            id: string;
            customRoleId: string;
            resource: string;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        allowLogin: boolean;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
}
