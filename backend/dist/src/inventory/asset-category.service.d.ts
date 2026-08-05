import { PrismaService } from "../prisma/prisma.service";
import { CreateAssetCategoryDto } from "./dto/create-asset-category.dto";
export declare class AssetCategoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        schoolId: string;
    }[]>;
    create(schoolId: string, dto: CreateAssetCategoryDto): import("../../generated/prisma/models").Prisma__AssetCategoryClient<{
        id: string;
        name: string;
        createdAt: Date;
        schoolId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
}
