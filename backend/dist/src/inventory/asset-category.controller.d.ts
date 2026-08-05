import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AssetCategoryService } from "./asset-category.service";
import { CreateAssetCategoryDto } from "./dto/create-asset-category.dto";
export declare class AssetCategoryController {
    private readonly assetCategoryService;
    constructor(assetCategoryService: AssetCategoryService);
    findAll(user: JwtPayload): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        schoolId: string;
    }[]>;
    create(user: JwtPayload, dto: CreateAssetCategoryDto): import("../../generated/prisma/models").Prisma__AssetCategoryClient<{
        id: string;
        name: string;
        createdAt: Date;
        schoolId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
}
