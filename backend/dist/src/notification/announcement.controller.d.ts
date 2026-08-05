import { Role } from "../../generated/prisma/client";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AnnouncementService } from "./announcement.service";
import { CreateAnnouncementDto } from "./dto/create-announcement.dto";
export declare class AnnouncementController {
    private readonly announcementService;
    constructor(announcementService: AnnouncementService);
    findAll(user: JwtPayload, branchId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        createdBy: {
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
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string | null;
        title: string;
        createdById: string;
        body: string;
        targetRoles: Role[];
    })[]>;
    create(user: JwtPayload, dto: CreateAnnouncementDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string | null;
        title: string;
        createdById: string;
        body: string;
        targetRoles: Role[];
    }>;
}
