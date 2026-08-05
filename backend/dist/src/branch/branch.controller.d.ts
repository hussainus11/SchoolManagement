import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { BranchService } from "./branch.service";
import { CreateBranchDto } from "./dto/create-branch.dto";
import { UpdateBranchDto } from "./dto/update-branch.dto";
export declare class BranchController {
    private readonly branchService;
    constructor(branchService: BranchService);
    findAll(user: JwtPayload): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        phone: string | null;
        address: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
    }[]>;
    create(user: JwtPayload, dto: CreateBranchDto): import("../../generated/prisma/models").Prisma__BranchClient<{
        id: string;
        name: string;
        phone: string | null;
        address: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(user: JwtPayload, id: string, dto: UpdateBranchDto): Promise<{
        id: string;
        name: string;
        phone: string | null;
        address: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
    }>;
}
