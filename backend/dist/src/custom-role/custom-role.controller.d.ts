import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CustomRoleService } from "./custom-role.service";
import { CreateCustomRoleDto } from "./dto/create-custom-role.dto";
import { UpdateCustomRoleDto } from "./dto/update-custom-role.dto";
export declare class CustomRoleController {
    private readonly customRoleService;
    constructor(customRoleService: CustomRoleService);
    getCatalog(): import("../common/resource-catalog").ResourceCatalogItem[];
    findAll(user: JwtPayload): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    findOne(user: JwtPayload, id: string): Promise<{
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
    create(user: JwtPayload, dto: CreateCustomRoleDto): Promise<{
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
    update(user: JwtPayload, id: string, dto: UpdateCustomRoleDto): Promise<{
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
    remove(user: JwtPayload, id: string): Promise<void>;
}
