import { ForbiddenException, Injectable } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { MarkService } from "../marks/mark.service";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PortalService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly markService: MarkService
  ) {}

  async getMyStudents(schoolId: string, userId: string, role: Role) {
    if (role === "STUDENT") {
      const student = await this.prisma.student.findFirst({
        where: { userId, schoolId, deletedAt: null },
        include: { section: { include: { class: true } } }
      });
      return student ? [student] : [];
    }

    if (role === "PARENT") {
      const guardian = await this.prisma.guardian.findFirst({ where: { userId, schoolId } });
      if (!guardian) return [];
      const links = await this.prisma.studentGuardian.findMany({
        where: { guardianId: guardian.id },
        include: { student: { include: { section: { include: { class: true } } } } }
      });
      return links.map((l) => l.student).filter((s) => !s.deletedAt);
    }

    throw new ForbiddenException("Only parents and students can access the portal");
  }

  private async assertAccess(schoolId: string, userId: string, role: Role, studentId: string) {
    const students = await this.getMyStudents(schoolId, userId, role);
    const student = students.find((s) => s.id === studentId);
    if (!student) throw new ForbiddenException("You do not have access to this student's records");
    return student;
  }

  async getAttendance(schoolId: string, userId: string, role: Role, studentId: string) {
    await this.assertAccess(schoolId, userId, role, studentId);
    return this.prisma.studentAttendance.findMany({
      where: { schoolId, studentId },
      orderBy: { date: "desc" },
      take: 90
    });
  }

  async getInvoices(schoolId: string, userId: string, role: Role, studentId: string) {
    await this.assertAccess(schoolId, userId, role, studentId);
    return this.prisma.invoice.findMany({
      where: { schoolId, studentId, deletedAt: null },
      include: { items: { include: { feeHead: true } }, payments: true },
      orderBy: { issueDate: "desc" }
    });
  }

  async getSubmissions(schoolId: string, userId: string, role: Role, studentId: string) {
    await this.assertAccess(schoolId, userId, role, studentId);
    return this.prisma.assignmentSubmission.findMany({
      where: { schoolId, studentId },
      include: { assignment: { include: { subject: true, section: { include: { class: true } } } } },
      orderBy: { assignment: { dueDate: "desc" } }
    });
  }

  async getExams(schoolId: string, userId: string, role: Role, studentId: string) {
    const student = await this.assertAccess(schoolId, userId, role, studentId);
    if (!student.sectionId) return [];
    const section = await this.prisma.section.findUnique({ where: { id: student.sectionId } });
    if (!section) return [];
    return this.prisma.exam.findMany({
      where: { schoolId, examSchedules: { some: { classId: section.classId } } },
      include: { examType: true },
      orderBy: { startDate: "desc" }
    });
  }

  async getReportCard(schoolId: string, userId: string, role: Role, studentId: string, examId: string) {
    await this.assertAccess(schoolId, userId, role, studentId);
    return this.markService.getReportCard(schoolId, studentId, examId);
  }
}
