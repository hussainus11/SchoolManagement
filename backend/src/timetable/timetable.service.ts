import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { DayOfWeek } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";

interface AssignInput {
  sectionId: string;
  periodId: string;
  dayOfWeek: DayOfWeek;
  subjectId: string;
  teacherId: string;
}

@Injectable()
export class TimetableService {
  constructor(private readonly prisma: PrismaService) {}

  findForSection(schoolId: string, sectionId: string) {
    return this.prisma.timetableEntry.findMany({
      where: { schoolId, sectionId },
      include: {
        period: true,
        subject: true,
        teacher: { include: { user: { omit: { passwordHash: true } } } }
      },
      orderBy: [{ dayOfWeek: "asc" }, { period: { order: "asc" } }]
    });
  }

  findForTeacher(schoolId: string, teacherId: string) {
    return this.prisma.timetableEntry.findMany({
      where: { schoolId, teacherId },
      include: { period: true, subject: true, section: { include: { class: true } } },
      orderBy: [{ dayOfWeek: "asc" }, { period: { order: "asc" } }]
    });
  }

  private async assertSectionInSchool(schoolId: string, sectionId: string) {
    const section = await this.prisma.section.findFirst({
      where: { id: sectionId, class: { schoolId } }
    });
    if (!section) throw new NotFoundException("Section not found");
  }

  async assign(schoolId: string, data: AssignInput) {
    await this.assertSectionInSchool(schoolId, data.sectionId);

    const period = await this.prisma.period.findFirst({ where: { id: data.periodId, schoolId } });
    if (!period) throw new NotFoundException("Period not found");

    const subject = await this.prisma.subject.findFirst({ where: { id: data.subjectId, schoolId } });
    if (!subject) throw new NotFoundException("Subject not found");

    const teacher = await this.prisma.teacher.findFirst({
      where: { id: data.teacherId, schoolId, deletedAt: null }
    });
    if (!teacher) throw new NotFoundException("Teacher not found");

    const conflict = await this.prisma.timetableEntry.findFirst({
      where: {
        schoolId,
        teacherId: data.teacherId,
        periodId: data.periodId,
        dayOfWeek: data.dayOfWeek,
        sectionId: { not: data.sectionId }
      },
      include: { section: { include: { class: true } } }
    });
    if (conflict) {
      throw new ConflictException(
        `This teacher is already scheduled for ${conflict.section.class.name} - ${conflict.section.name} at this period`
      );
    }

    return this.prisma.timetableEntry.upsert({
      where: {
        sectionId_periodId_dayOfWeek: {
          sectionId: data.sectionId,
          periodId: data.periodId,
          dayOfWeek: data.dayOfWeek
        }
      },
      create: { schoolId, ...data },
      update: { subjectId: data.subjectId, teacherId: data.teacherId },
      include: {
        period: true,
        subject: true,
        teacher: { include: { user: { omit: { passwordHash: true } } } }
      }
    });
  }

  async remove(schoolId: string, id: string) {
    const entry = await this.prisma.timetableEntry.findFirst({ where: { id, schoolId } });
    if (!entry) throw new NotFoundException("Timetable entry not found");
    await this.prisma.timetableEntry.delete({ where: { id } });
  }
}
