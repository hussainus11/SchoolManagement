import { PrismaService } from "../prisma/prisma.service";
import { CreateGuardianDto } from "./dto/create-guardian.dto";
export declare class GuardianService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, search?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
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
    findOneForSchool(schoolId: string, id: string): Promise<{
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
    create(schoolId: string, dto: CreateGuardianDto): import("../../generated/prisma/models").Prisma__GuardianClient<{
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
    createLogin(schoolId: string, id: string): Promise<{
        userId: string;
        email: string;
        tempPassword: string;
    }>;
}
