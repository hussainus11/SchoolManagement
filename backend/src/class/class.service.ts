import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ClassService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, filters: { branchId?: string; academicYearId?: string }) {
    return this.prisma.class.findMany({
      where: { schoolId, ...filters },
      include: { sections: true },
      orderBy: [{ order: "asc" }, { name: "asc" }]
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const cls = await this.prisma.class.findFirst({
      where: { id, schoolId },
      include: { sections: true, classSubjects: { include: { subject: true } } }
    });
    if (!cls) throw new NotFoundException("Class not found");
    return cls;
  }

  private async assertBranchInSchool(schoolId: string, branchId: string) {
    const branch = await this.prisma.branch.findFirst({ where: { id: branchId, schoolId } });
    if (!branch) throw new NotFoundException("Branch not found");
  }

  private async assertAcademicYearInSchool(schoolId: string, academicYearId: string) {
    const year = await this.prisma.academicYear.findFirst({ where: { id: academicYearId, schoolId } });
    if (!year) throw new NotFoundException("Academic year not found");
  }

  async create(
    schoolId: string,
    data: { branchId: string; academicYearId: string; name: string; order?: number }
  ) {
    await this.assertBranchInSchool(schoolId, data.branchId);
    await this.assertAcademicYearInSchool(schoolId, data.academicYearId);
    return this.prisma.class.create({ data: { ...data, schoolId } });
  }

  createWithinTransaction(
    tx: Prisma.TransactionClient,
    schoolId: string,
    data: { branchId: string; academicYearId: string; name: string; order?: number }
  ) {
    return tx.class.create({ data: { ...data, schoolId } });
  }

  async update(schoolId: string, id: string, data: Prisma.ClassUpdateInput) {
    await this.findOneForSchool(schoolId, id);
    return this.prisma.class.update({ where: { id }, data });
  }

  async remove(schoolId: string, id: string) {
    const cls = await this.findOneForSchool(schoolId, id);
    if (cls.sections.length > 0) {
      throw new ConflictException("Cannot delete a class that still has sections");
    }
    await this.prisma.classSubject.deleteMany({ where: { classId: id } });
    await this.prisma.class.delete({ where: { id } });
  }

  async addSubject(schoolId: string, classId: string, subjectId: string) {
    await this.findOneForSchool(schoolId, classId);
    const subject = await this.prisma.subject.findFirst({ where: { id: subjectId, schoolId } });
    if (!subject) throw new NotFoundException("Subject not found");
    return this.prisma.classSubject.create({ data: { classId, subjectId } });
  }

  async removeSubject(schoolId: string, classId: string, subjectId: string) {
    await this.findOneForSchool(schoolId, classId);
    await this.prisma.classSubject.deleteMany({ where: { classId, subjectId } });
  }
}
