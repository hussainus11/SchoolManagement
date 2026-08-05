import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { EnterMarksDto } from "./dto/enter-marks.dto";
import { MarkService } from "./mark.service";

@Controller("marks")
@Audit("Mark")
@Resource("marks")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.TEACHER)
export class MarkController {
  constructor(private readonly markService: MarkService) {}

  @Get()
  findForExamSchedule(@CurrentUser() user: JwtPayload, @Query("examScheduleId") examScheduleId: string) {
    return this.markService.findForExamSchedule(user.schoolId!, examScheduleId);
  }

  @Post("bulk-enter")
  bulkEnter(@CurrentUser() user: JwtPayload, @Body() dto: EnterMarksDto) {
    return this.markService.bulkEnter(user.schoolId!, user.sub, dto.examScheduleId, dto.entries);
  }

  @Get("report-card/:studentId/:examId")
  getReportCard(
    @CurrentUser() user: JwtPayload,
    @Param("studentId") studentId: string,
    @Param("examId") examId: string
  ) {
    return this.markService.getReportCard(user.schoolId!, studentId, examId);
  }
}
