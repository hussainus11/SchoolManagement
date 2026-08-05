import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateGradeScaleDto } from "./dto/create-grade-scale.dto";

@Injectable()
export class GradeScaleService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string) {
    return this.prisma.gradeScale.findMany({ where: { schoolId }, orderBy: { minPercentage: "desc" } });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const gradeScale = await this.prisma.gradeScale.findFirst({ where: { id, schoolId } });
    if (!gradeScale) throw new NotFoundException("Grade scale not found");
    return gradeScale;
  }

  create(schoolId: string, dto: CreateGradeScaleDto) {
    return this.prisma.gradeScale.create({ data: { ...dto, schoolId } });
  }

  async update(schoolId: string, id: string, dto: CreateGradeScaleDto) {
    await this.findOneForSchool(schoolId, id);
    return this.prisma.gradeScale.update({ where: { id }, data: dto });
  }

  async remove(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    await this.prisma.gradeScale.delete({ where: { id } });
  }

  async resolveGrade(schoolId: string, percentage: number) {
    const scales = await this.prisma.gradeScale.findMany({ where: { schoolId } });
    const match = scales.find(
      (s) => percentage >= Number(s.minPercentage) && percentage <= Number(s.maxPercentage)
    );
    return match ?? null;
  }
}
