import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateExamDto } from "./dto/create-exam.dto";

@Injectable()
export class ExamService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, academicYearId?: string) {
    return this.prisma.exam.findMany({
      where: { schoolId, academicYearId },
      include: { examType: true, academicYear: true },
      orderBy: { startDate: "desc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const exam = await this.prisma.exam.findFirst({
      where: { id, schoolId },
      include: { examType: true, academicYear: true }
    });
    if (!exam) throw new NotFoundException("Exam not found");
    return exam;
  }

  private async assertRelationsInSchool(schoolId: string, academicYearId: string, examTypeId: string) {
    const academicYear = await this.prisma.academicYear.findFirst({ where: { id: academicYearId, schoolId } });
    if (!academicYear) throw new NotFoundException("Academic year not found");

    const examType = await this.prisma.examType.findFirst({ where: { id: examTypeId, schoolId } });
    if (!examType) throw new NotFoundException("Exam type not found");
  }

  async create(schoolId: string, dto: CreateExamDto) {
    await this.assertRelationsInSchool(schoolId, dto.academicYearId, dto.examTypeId);
    return this.prisma.exam.create({
      data: {
        schoolId,
        academicYearId: dto.academicYearId,
        examTypeId: dto.examTypeId,
        name: dto.name,
        startDate: new Date(dto.startDate),
        endDate: new Date(dto.endDate)
      }
    });
  }

  async update(schoolId: string, id: string, dto: CreateExamDto) {
    await this.findOneForSchool(schoolId, id);
    await this.assertRelationsInSchool(schoolId, dto.academicYearId, dto.examTypeId);
    return this.prisma.exam.update({
      where: { id },
      data: {
        academicYearId: dto.academicYearId,
        examTypeId: dto.examTypeId,
        name: dto.name,
        startDate: new Date(dto.startDate),
        endDate: new Date(dto.endDate)
      }
    });
  }

  async remove(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    const usage = await this.prisma.examSchedule.count({ where: { examId: id } });
    if (usage > 0) {
      throw new ConflictException("Cannot delete an exam that already has scheduled papers");
    }
    await this.prisma.exam.delete({ where: { id } });
  }
}
