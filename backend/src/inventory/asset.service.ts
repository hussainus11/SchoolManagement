import { Injectable, NotFoundException } from "@nestjs/common";
import { AssetStatus } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateAssetDto } from "./dto/create-asset.dto";

@Injectable()
export class AssetService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(
    schoolId: string,
    filters: { branchId?: string; categoryId?: string; status?: AssetStatus }
  ) {
    return this.prisma.asset.findMany({
      where: { schoolId, ...filters },
      include: {
        category: true,
        assignedToTeacher: { include: { user: { omit: { passwordHash: true } } } }
      },
      orderBy: { createdAt: "desc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const asset = await this.prisma.asset.findFirst({
      where: { id, schoolId },
      include: { category: true, assignedToTeacher: { include: { user: { omit: { passwordHash: true } } } } }
    });
    if (!asset) throw new NotFoundException("Asset not found");
    return asset;
  }

  private async assertRelations(schoolId: string, branchId: string, categoryId: string, teacherId?: string) {
    const branch = await this.prisma.branch.findFirst({ where: { id: branchId, schoolId } });
    if (!branch) throw new NotFoundException("Branch not found");

    const category = await this.prisma.assetCategory.findFirst({ where: { id: categoryId, schoolId } });
    if (!category) throw new NotFoundException("Asset category not found");

    if (teacherId) {
      const teacher = await this.prisma.teacher.findFirst({ where: { id: teacherId, schoolId, deletedAt: null } });
      if (!teacher) throw new NotFoundException("Teacher not found");
    }
  }

  async create(schoolId: string, dto: CreateAssetDto) {
    await this.assertRelations(schoolId, dto.branchId, dto.categoryId, dto.assignedToTeacherId);
    return this.prisma.asset.create({
      data: {
        schoolId,
        branchId: dto.branchId,
        categoryId: dto.categoryId,
        name: dto.name,
        serialNumber: dto.serialNumber,
        purchaseDate: dto.purchaseDate ? new Date(dto.purchaseDate) : undefined,
        purchaseCost: dto.purchaseCost,
        status: dto.status,
        assignedToTeacherId: dto.assignedToTeacherId,
        location: dto.location,
        notes: dto.notes
      },
      include: { category: true, assignedToTeacher: { include: { user: { omit: { passwordHash: true } } } } }
    });
  }

  async update(schoolId: string, id: string, dto: CreateAssetDto) {
    await this.findOneForSchool(schoolId, id);
    await this.assertRelations(schoolId, dto.branchId, dto.categoryId, dto.assignedToTeacherId);
    return this.prisma.asset.update({
      where: { id },
      data: {
        branchId: dto.branchId,
        categoryId: dto.categoryId,
        name: dto.name,
        serialNumber: dto.serialNumber,
        purchaseDate: dto.purchaseDate ? new Date(dto.purchaseDate) : undefined,
        purchaseCost: dto.purchaseCost,
        status: dto.status,
        assignedToTeacherId: dto.assignedToTeacherId,
        location: dto.location,
        notes: dto.notes
      },
      include: { category: true, assignedToTeacher: { include: { user: { omit: { passwordHash: true } } } } }
    });
  }

  async remove(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    await this.prisma.asset.delete({ where: { id } });
  }
}
