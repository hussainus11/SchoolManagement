import { PrismaService } from "../prisma/prisma.service";
import { CreateAnnouncementDto } from "./dto/create-announcement.dto";
export declare class AnnouncementService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, branchId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
            role: import("../../generated/prisma/enums").Role;
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
        targetRoles: import("../../generated/prisma/enums").Role[];
    })[]>;
    create(schoolId: string, createdById: string, dto: CreateAnnouncementDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string | null;
        title: string;
        createdById: string;
        body: string;
        targetRoles: import("../../generated/prisma/enums").Role[];
    }>;
}
