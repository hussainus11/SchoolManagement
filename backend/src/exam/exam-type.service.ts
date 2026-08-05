import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateExamTypeDto } from "./dto/create-exam-type.dto";

@Injectable()
export class ExamTypeService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string) {
    return this.prisma.examType.findMany({ where: { schoolId }, orderBy: { name: "asc" } });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const examType = await this.prisma.examType.findFirst({ where: { id, schoolId } });
    if (!examType) throw new NotFoundException("Exam type not found");
    return examType;
  }

  create(schoolId: string, dto: CreateExamTypeDto) {
    return this.prisma.examType.create({ data: { ...dto, schoolId } });
  }

  async update(schoolId: string, id: string, dto: CreateExamTypeDto) {
    await this.findOneForSchool(schoolId, id);
    return this.prisma.examType.update({ where: { id }, data: dto });
  }

  async remove(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    const usage = await this.prisma.exam.count({ where: { examTypeId: id } });
    if (usage > 0) {
      throw new ConflictException("Cannot delete an exam type that is used by an exam");
    }
    await this.prisma.examType.delete({ where: { id } });
  }
}
