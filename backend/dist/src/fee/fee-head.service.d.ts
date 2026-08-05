import { PrismaService } from "../prisma/prisma.service";
import { CreateFeeHeadDto } from "./dto/create-fee-head.dto";
export declare class FeeHeadService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
    }[]>;
    findOneForSchool(schoolId: string, id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
    }>;
    create(schoolId: string, dto: CreateFeeHeadDto): import("../../generated/prisma/models").Prisma__FeeHeadClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(schoolId: string, id: string, dto: CreateFeeHeadDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
}
