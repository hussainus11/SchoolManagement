import { Injectable, NotFoundException } from "@nestjs/common";
import { AttendanceStatus } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";

interface BulkMarkEntry {
  teacherId: string;
  status: AttendanceStatus;
  remarks?: string;
}

@Injectable()
export class TeacherAttendanceService {
  constructor(private readonly prisma: PrismaService) {}

  async bulkMark(
    schoolId: string,
    markedById: string,
    branchId: string,
    date: string,
    entries: BulkMarkEntry[]
  ) {
    const branch = await this.prisma.branch.findFirst({ where: { id: branchId, schoolId } });
    if (!branch) throw new NotFoundException("Branch not found");

    const currentYear = await this.prisma.academicYear.findFirst({ where: { schoolId, isCurrent: true } });
    if (!currentYear) throw new NotFoundException("No current academic year is set for this school");

    const teacherIds = entries.map((e) => e.teacherId);
    const teachers = await this.prisma.teacher.findMany({
      where: { id: { in: teacherIds }, schoolId, branchId, deletedAt: null }
    });
    if (teachers.length !== teacherIds.length) {
      throw new NotFoundException("One or more teachers not found in this branch");
    }

    const day = new Date(date);

    await this.prisma.$transaction(
      entries.map((entry) =>
        this.prisma.teacherAttendance.upsert({
          where: { teacherId_date: { teacherId: entry.teacherId, date: day } },
          create: {
            schoolId,
            academicYearId: currentYear.id,
            teacherId: entry.teacherId,
            date: day,
            status: entry.status,
            remarks: entry.remarks,
            markedById
          },
          update: { status: entry.status, remarks: entry.remarks, markedById }
        })
      )
    );

    return this.findForBranchAndDate(schoolId, branchId, date);
  }

  findForBranchAndDate(schoolId: string, branchId: string, date: string) {
    return this.prisma.teacherAttendance.findMany({
      where: { schoolId, date: new Date(date), teacher: { branchId } },
      include: { teacher: { include: { user: { omit: { passwordHash: true } } } } },
      orderBy: { teacher: { user: { firstName: "asc" } } }
    });
  }

  findForTeacher(schoolId: string, teacherId: string, filters: { startDate?: string; endDate?: string }) {
    return this.prisma.teacherAttendance.findMany({
      where: {
        schoolId,
        teacherId,
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
    const record = await this.prisma.teacherAttendance.findFirst({ where: { id, schoolId } });
    if (!record) throw new NotFoundException("Attendance record not found");
    return this.prisma.teacherAttendance.update({ where: { id }, data: { ...data, markedById } });
  }
}
