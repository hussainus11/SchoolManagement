import { Controller, Get, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { ReportsService } from "./reports.service";

@Controller("reports")
@Resource("reports")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get("attendance-summary")
  attendanceSummary(
    @CurrentUser() user: JwtPayload,
    @Query("branchId") branchId?: string,
    @Query("sectionId") sectionId?: string,
    @Query("startDate") startDate?: string,
    @Query("endDate") endDate?: string
  ) {
    return this.reportsService.attendanceSummary(user.schoolId!, { branchId, sectionId, startDate, endDate });
  }

  @Get("fee-collection")
  feeCollection(@CurrentUser() user: JwtPayload, @Query("branchId") branchId?: string) {
    return this.reportsService.feeCollectionSummary(user.schoolId!, { branchId });
  }

  @Get("exam-performance")
  examPerformance(@CurrentUser() user: JwtPayload, @Query("examId") examId: string) {
    return this.reportsService.examPerformance(user.schoolId!, examId);
  }
}
