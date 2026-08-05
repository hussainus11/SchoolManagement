import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GradeScaleService } from "./grade-scale.service";

interface MarkEntry {
  studentId: string;
  marksObtained?: number;
  isAbsent?: boolean;
  remarks?: string;
}

@Injectable()
export class MarkService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly gradeScaleService: GradeScaleService
  ) {}

  private async assertExamScheduleInSchool(schoolId: string, examScheduleId: string) {
    const schedule = await this.prisma.examSchedule.findFirst({
      where: { id: examScheduleId, schoolId },
      include: { class: true, subject: true }
    });
    if (!schedule) throw new NotFoundException("Exam schedule not found");
    return schedule;
  }

  async bulkEnter(schoolId: string, enteredById: string, examScheduleId: string, entries: MarkEntry[]) {
    const schedule = await this.assertExamScheduleInSchool(schoolId, examScheduleId);

    const studentIds = entries.map((e) => e.studentId);
    const students = await this.prisma.student.findMany({
      where: { id: { in: studentIds }, schoolId, section: { classId: schedule.classId } }
    });
    if (students.length !== studentIds.length) {
      throw new NotFoundException("One or more students not found in this class");
    }

    await this.prisma.$transaction(
      entries.map((entry) =>
        this.prisma.mark.upsert({
          where: { examScheduleId_studentId: { examScheduleId, studentId: entry.studentId } },
          create: {
            schoolId,
            examScheduleId,
            studentId: entry.studentId,
            marksObtained: entry.isAbsent ? null : entry.marksObtained,
            isAbsent: !!entry.isAbsent,
            remarks: entry.remarks,
            enteredById
          },
          update: {
            marksObtained: entry.isAbsent ? null : entry.marksObtained,
            isAbsent: !!entry.isAbsent,
            remarks: entry.remarks,
            enteredById
          }
        })
      )
    );

    return this.findForExamSchedule(schoolId, examScheduleId);
  }

  findForExamSchedule(schoolId: string, examScheduleId: string) {
    return this.prisma.mark.findMany({
      where: { schoolId, examScheduleId },
      include: { student: true },
      orderBy: { student: { firstName: "asc" } }
    });
  }

  async getReportCard(schoolId: string, studentId: string, examId: string) {
    const student = await this.prisma.student.findFirst({
      where: { id: studentId, schoolId },
      include: { section: { include: { class: true } } }
    });
    if (!student) throw new NotFoundException("Student not found");
    if (!student.section) throw new NotFoundException("Student is not assigned to a section");

    const exam = await this.prisma.exam.findFirst({ where: { id: examId, schoolId }, include: { examType: true } });
    if (!exam) throw new NotFoundException("Exam not found");

    const schedules = await this.prisma.examSchedule.findMany({
      where: { schoolId, examId, classId: student.section.classId },
      include: { subject: true, marks: { where: { studentId } } }
    });

    let totalMax = 0;
    let totalObtained = 0;

    const subjects = schedules.map((schedule) => {
      const mark = schedule.marks[0];
      const maxMarks = Number(schedule.maxMarks);
      const passMarks = Number(schedule.passMarks);

      if (mark && !mark.isAbsent && mark.marksObtained !== null) {
        totalMax += maxMarks;
        totalObtained += Number(mark.marksObtained);
      }

      return {
        subjectId: schedule.subjectId,
        subjectName: schedule.subject.name,
        maxMarks,
        passMarks,
        marksObtained: mark && !mark.isAbsent ? mark.marksObtained : null,
        isAbsent: mark?.isAbsent ?? false,
        status: !mark ? "PENDING" : mark.isAbsent ? "ABSENT" : "GRADED"
      };
    });

    const percentage = totalMax > 0 ? Number(((totalObtained / totalMax) * 100).toFixed(2)) : 0;
    const gradeScale = totalMax > 0 ? await this.gradeScaleService.resolveGrade(schoolId, percentage) : null;

    return {
      student: { id: student.id, firstName: student.firstName, lastName: student.lastName },
      exam: { id: exam.id, name: exam.name, examType: exam.examType.name },
      subjects,
      totalMax,
      totalObtained,
      percentage,
      grade: gradeScale?.grade ?? null
    };
  }
}
