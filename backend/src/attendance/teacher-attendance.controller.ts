import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { MarkTeacherAttendanceDto } from "./dto/mark-teacher-attendance.dto";
import { UpdateAttendanceDto } from "./dto/update-attendance.dto";
import { TeacherAttendanceService } from "./teacher-attendance.service";

@Controller("attendance/teachers")
@Audit("TeacherAttendance")
@Resource("attendance")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class TeacherAttendanceController {
  constructor(private readonly attendanceService: TeacherAttendanceService) {}

  @Get()
  find(
    @CurrentUser() user: JwtPayload,
    @Query("branchId") branchId?: string,
    @Query("date") date?: string,
    @Query("teacherId") teacherId?: string,
    @Query("startDate") startDate?: string,
    @Query("endDate") endDate?: string
  ) {
    if (teacherId) {
      return this.attendanceService.findForTeacher(user.schoolId!, teacherId, { startDate, endDate });
    }
    if (branchId && date) {
      return this.attendanceService.findForBranchAndDate(user.schoolId!, branchId, date);
    }
    return [];
  }

  @Post("bulk-mark")
  bulkMark(@CurrentUser() user: JwtPayload, @Body() dto: MarkTeacherAttendanceDto) {
    return this.attendanceService.bulkMark(user.schoolId!, user.sub, dto.branchId, dto.date, dto.entries);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: UpdateAttendanceDto) {
    return this.attendanceService.update(user.schoolId!, id, dto, user.sub);
  }
}
