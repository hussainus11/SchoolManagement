import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateFeeHeadDto } from "./dto/create-fee-head.dto";
import { FeeHeadService } from "./fee-head.service";
export declare class FeeHeadController {
    private readonly feeHeadService;
    constructor(feeHeadService: FeeHeadService);
    findAll(user: JwtPayload): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
    }[]>;
    create(user: JwtPayload, dto: CreateFeeHeadDto): import("../../generated/prisma/models").Prisma__FeeHeadClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(user: JwtPayload, id: string, dto: CreateFeeHeadDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
}
