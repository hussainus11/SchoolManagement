import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateAssetCategoryDto } from "./dto/create-asset-category.dto";

@Injectable()
export class AssetCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string) {
    return this.prisma.assetCategory.findMany({ where: { schoolId }, orderBy: { name: "asc" } });
  }

  create(schoolId: string, dto: CreateAssetCategoryDto) {
    return this.prisma.assetCategory.create({ data: { ...dto, schoolId } });
  }

  async remove(schoolId: string, id: string) {
    const category = await this.prisma.assetCategory.findFirst({ where: { id, schoolId } });
    if (!category) throw new NotFoundException("Asset category not found");
    const usage = await this.prisma.asset.count({ where: { categoryId: id } });
    if (usage > 0) throw new ConflictException("Cannot delete a category that has assets");
    await this.prisma.assetCategory.delete({ where: { id } });
  }
}
