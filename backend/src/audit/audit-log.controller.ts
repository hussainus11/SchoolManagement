import { Controller, Get, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AuditLogService } from "./audit-log.service";

@Controller("audit-logs")
@Resource("audit-log")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class AuditLogController {
  constructor(private readonly auditLogService: AuditLogService) {}

  @Get()
  findAll(
    @CurrentUser() user: JwtPayload,
    @Query("entityType") entityType?: string,
    @Query("userId") userId?: string,
    @Query("startDate") startDate?: string,
    @Query("endDate") endDate?: string
  ) {
    return this.auditLogService.findAllForSchool(user.schoolId!, { entityType, userId, startDate, endDate });
  }
}
