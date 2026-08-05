import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateGuardianDto } from "./dto/create-guardian.dto";
import { GuardianService } from "./guardian.service";
export declare class GuardianController {
    private readonly guardianService;
    constructor(guardianService: GuardianService);
    findAll(user: JwtPayload, search?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        email: string | null;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        firstName: string;
        lastName: string;
        userId: string | null;
    }[]>;
    findOne(user: JwtPayload, id: string): Promise<{
        id: string;
        email: string | null;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        firstName: string;
        lastName: string;
        userId: string | null;
    }>;
    create(user: JwtPayload, dto: CreateGuardianDto): import("../../generated/prisma/models").Prisma__GuardianClient<{
        id: string;
        email: string | null;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        firstName: string;
        lastName: string;
        userId: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    createLogin(user: JwtPayload, id: string): Promise<{
        userId: string;
        email: string;
        tempPassword: string;
    }>;
}
