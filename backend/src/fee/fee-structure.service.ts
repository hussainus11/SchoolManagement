import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateFeeStructureDto } from "./dto/create-fee-structure.dto";
import { UpdateFeeStructureDto } from "./dto/update-fee-structure.dto";

@Injectable()
export class FeeStructureService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, filters: { classId?: string; academicYearId?: string }) {
    return this.prisma.feeStructure.findMany({
      where: { schoolId, ...filters },
      include: { feeHead: true, class: true },
      orderBy: { createdAt: "desc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const structure = await this.prisma.feeStructure.findFirst({
      where: { id, schoolId },
      include: { feeHead: true, class: true }
    });
    if (!structure) throw new NotFoundException("Fee structure not found");
    return structure;
  }

  async create(schoolId: string, dto: CreateFeeStructureDto) {
    const cls = await this.prisma.class.findFirst({ where: { id: dto.classId, schoolId } });
    if (!cls) throw new NotFoundException("Class not found");

    const feeHead = await this.prisma.feeHead.findFirst({ where: { id: dto.feeHeadId, schoolId } });
    if (!feeHead) throw new NotFoundException("Fee head not found");

    const year = await this.prisma.academicYear.findFirst({
      where: { id: dto.academicYearId, schoolId }
    });
    if (!year) throw new NotFoundException("Academic year not found");

    return this.prisma.feeStructure.create({
      data: { ...dto, schoolId },
      include: { feeHead: true, class: true }
    });
  }

  async update(schoolId: string, id: string, dto: UpdateFeeStructureDto) {
    await this.findOneForSchool(schoolId, id);
    return this.prisma.feeStructure.update({
      where: { id },
      data: dto,
      include: { feeHead: true, class: true }
    });
  }

  async remove(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    await this.prisma.feeStructure.delete({ where: { id } });
  }
}
