import { Controller, Get, Param, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { PortalService } from "./portal.service";

@Controller("portal")
@Roles(Role.PARENT, Role.STUDENT)
export class PortalController {
  constructor(private readonly portalService: PortalService) {}

  @Get("students")
  getMyStudents(@CurrentUser() user: JwtPayload) {
    return this.portalService.getMyStudents(user.schoolId!, user.sub, user.role);
  }

  @Get("students/:studentId/attendance")
  getAttendance(@CurrentUser() user: JwtPayload, @Param("studentId") studentId: string) {
    return this.portalService.getAttendance(user.schoolId!, user.sub, user.role, studentId);
  }

  @Get("students/:studentId/invoices")
  getInvoices(@CurrentUser() user: JwtPayload, @Param("studentId") studentId: string) {
    return this.portalService.getInvoices(user.schoolId!, user.sub, user.role, studentId);
  }

  @Get("students/:studentId/submissions")
  getSubmissions(@CurrentUser() user: JwtPayload, @Param("studentId") studentId: string) {
    return this.portalService.getSubmissions(user.schoolId!, user.sub, user.role, studentId);
  }

  @Get("students/:studentId/exams")
  getExams(@CurrentUser() user: JwtPayload, @Param("studentId") studentId: string) {
    return this.portalService.getExams(user.schoolId!, user.sub, user.role, studentId);
  }

  @Get("students/:studentId/report-card/:examId")
  getReportCard(
    @CurrentUser() user: JwtPayload,
    @Param("studentId") studentId: string,
    @Param("examId") examId: string
  ) {
    return this.portalService.getReportCard(user.schoolId!, user.sub, user.role, studentId, examId);
  }
}
