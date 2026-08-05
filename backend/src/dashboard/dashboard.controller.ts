import { Controller, Get, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { DashboardService } from "./dashboard.service";

@Controller("dashboard")
@Resource("dashboard")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.TEACHER, Role.ACCOUNTANT)
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get("summary")
  getSummary(@CurrentUser() user: JwtPayload, @Query("branchId") branchId?: string) {
    // BRANCH_ADMIN is always scoped to their own branch, regardless of what's requested.
    const effectiveBranchId = user.role === "BRANCH_ADMIN" ? (user.branchId ?? undefined) : branchId;
    return this.dashboardService.getSummary(user.schoolId!, effectiveBranchId);
  }
}
