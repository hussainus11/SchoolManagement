import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { MarkStudentAttendanceDto } from "./dto/mark-student-attendance.dto";
import { UpdateAttendanceDto } from "./dto/update-attendance.dto";
import { StudentAttendanceService } from "./student-attendance.service";

@Controller("attendance/students")
@Audit("StudentAttendance")
@Resource("attendance")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.TEACHER)
export class StudentAttendanceController {
  constructor(private readonly attendanceService: StudentAttendanceService) {}

  @Get()
  find(
    @CurrentUser() user: JwtPayload,
    @Query("sectionId") sectionId?: string,
    @Query("date") date?: string,
    @Query("studentId") studentId?: string,
    @Query("startDate") startDate?: string,
    @Query("endDate") endDate?: string
  ) {
    if (studentId) {
      return this.attendanceService.findForStudent(user.schoolId!, studentId, { startDate, endDate });
    }
    if (sectionId && date) {
      return this.attendanceService.findForSectionAndDate(user.schoolId!, sectionId, date);
    }
    return [];
  }

  @Post("bulk-mark")
  bulkMark(@CurrentUser() user: JwtPayload, @Body() dto: MarkStudentAttendanceDto) {
    return this.attendanceService.bulkMark(user.schoolId!, user.sub, dto.sectionId, dto.date, dto.entries);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: UpdateAttendanceDto) {
    return this.attendanceService.update(user.schoolId!, id, dto, user.sub);
  }
}
