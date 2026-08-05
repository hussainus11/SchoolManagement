import { Injectable, NotFoundException } from "@nestjs/common";
import { AttendanceStatus } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";

interface BulkMarkEntry {
  studentId: string;
  status: AttendanceStatus;
  remarks?: string;
}

@Injectable()
export class StudentAttendanceService {
  constructor(private readonly prisma: PrismaService) {}

  private async assertSectionInSchool(schoolId: string, sectionId: string) {
    const section = await this.prisma.section.findFirst({
      where: { id: sectionId, class: { schoolId } },
      include: { class: true }
    });
    if (!section) throw new NotFoundException("Section not found");
    return section;
  }

  async bulkMark(
    schoolId: string,
    markedById: string,
    sectionId: string,
    date: string,
    entries: BulkMarkEntry[]
  ) {
    const section = await this.assertSectionInSchool(schoolId, sectionId);

    const studentIds = entries.map((e) => e.studentId);
    const students = await this.prisma.student.findMany({
      where: { id: { in: studentIds }, schoolId, sectionId }
    });
    if (students.length !== studentIds.length) {
      throw new NotFoundException("One or more students not found in this section");
    }

    const day = new Date(date);

    await this.prisma.$transaction(
      entries.map((entry) =>
        this.prisma.studentAttendance.upsert({
          where: { studentId_date: { studentId: entry.studentId, date: day } },
          create: {
            schoolId,
            academicYearId: section.class.academicYearId,
            sectionId,
            studentId: entry.studentId,
            date: day,
            status: entry.status,
            remarks: entry.remarks,
            markedById
          },
          update: { status: entry.status, remarks: entry.remarks, markedById }
        })
      )
    );

    return this.findForSectionAndDate(schoolId, sectionId, date);
  }

  findForSectionAndDate(schoolId: string, sectionId: string, date: string) {
    return this.prisma.studentAttendance.findMany({
      where: { schoolId, sectionId, date: new Date(date) },
      include: { student: true },
      orderBy: { student: { firstName: "asc" } }
    });
  }

  findForStudent(schoolId: string, studentId: string, filters: { startDate?: string; endDate?: string }) {
    return this.prisma.studentAttendance.findMany({
      where: {
        schoolId,
        studentId,
        date: {
          gte: filters.startDate ? new Date(filters.startDate) : undefined,
          lte: filters.endDate ? new Date(filters.endDate) : undefined
        }
      },
      orderBy: { date: "desc" }
    });
  }

  async update(
    schoolId: string,
    id: string,
    data: { status?: AttendanceStatus; remarks?: string },
    markedById: string
  ) {
    const record = await this.prisma.studentAttendance.findFirst({ where: { id, schoolId } });
    if (!record) throw new NotFoundException("Attendance record not found");
    return this.prisma.studentAttendance.update({ where: { id }, data: { ...data, markedById } });
  }
}
