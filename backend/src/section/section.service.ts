import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SectionService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForClass(schoolId: string, classId: string) {
    return this.prisma.section.findMany({
      where: { classId, class: { schoolId } },
      include: { classTeacher: { include: { user: { omit: { passwordHash: true } } } } },
      orderBy: { name: "asc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const section = await this.prisma.section.findFirst({
      where: { id, class: { schoolId } },
      include: {
        class: true,
        classTeacher: { include: { user: { omit: { passwordHash: true } } } },
        subjectTeachers: {
          include: { subject: true, teacher: { include: { user: { omit: { passwordHash: true } } } } }
        }
      }
    });
    if (!section) throw new NotFoundException("Section not found");
    return section;
  }

  private async assertClassInSchool(schoolId: string, classId: string) {
    const cls = await this.prisma.class.findFirst({ where: { id: classId, schoolId } });
    if (!cls) throw new NotFoundException("Class not found");
  }

  async create(schoolId: string, data: { classId: string; name: string; capacity?: number }) {
    await this.assertClassInSchool(schoolId, data.classId);
    return this.prisma.section.create({ data });
  }

  async update(schoolId: string, id: string, data: Prisma.SectionUpdateInput) {
    await this.findOneForSchool(schoolId, id);
    return this.prisma.section.update({ where: { id }, data });
  }

  async remove(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    const studentCount = await this.prisma.student.count({ where: { sectionId: id } });
    if (studentCount > 0) {
      throw new ConflictException("Cannot delete a section that still has students");
    }
    await this.prisma.subjectTeacher.deleteMany({ where: { sectionId: id } });
    await this.prisma.section.delete({ where: { id } });
  }

  async assignClassTeacher(schoolId: string, id: string, teacherId: string | null | undefined) {
    await this.findOneForSchool(schoolId, id);
    if (teacherId) {
      const teacher = await this.prisma.teacher.findFirst({
        where: { id: teacherId, schoolId, deletedAt: null }
      });
      if (!teacher) throw new NotFoundException("Teacher not found");
    }
    return this.prisma.section.update({ where: { id }, data: { classTeacherId: teacherId ?? null } });
  }

  async addSubjectTeacher(schoolId: string, sectionId: string, subjectId: string, teacherId: string) {
    await this.findOneForSchool(schoolId, sectionId);
    const subject = await this.prisma.subject.findFirst({ where: { id: subjectId, schoolId } });
    if (!subject) throw new NotFoundException("Subject not found");
    const teacher = await this.prisma.teacher.findFirst({
      where: { id: teacherId, schoolId, deletedAt: null }
    });
    if (!teacher) throw new NotFoundException("Teacher not found");

    return this.prisma.subjectTeacher.upsert({
      where: { sectionId_subjectId: { sectionId, subjectId } },
      create: { sectionId, subjectId, teacherId },
      update: { teacherId }
    });
  }

  async removeSubjectTeacher(schoolId: string, sectionId: string, subjectId: string) {
    await this.findOneForSchool(schoolId, sectionId);
    await this.prisma.subjectTeacher.deleteMany({ where: { sectionId, subjectId } });
  }
}
