import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { LeaveStatus, Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit, AuditAction } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateLeaveRequestDto } from "./dto/create-leave-request.dto";
import { LeaveRequestService } from "./leave-request.service";

@Controller("leave-requests")
@Audit("LeaveRequest")
@Resource("leave")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.TEACHER, Role.STAFF)
export class LeaveRequestController {
  constructor(private readonly leaveRequestService: LeaveRequestService) {}

  @Get()
  findAll(
    @CurrentUser() user: JwtPayload,
    @Query("teacherId") teacherId?: string,
    @Query("staffId") staffId?: string,
    @Query("status") status?: LeaveStatus
  ) {
    return this.leaveRequestService.findAllForSchool(user.schoolId!, { teacherId, staffId, status });
  }

  @Get("balance")
  getBalance(
    @CurrentUser() user: JwtPayload,
    @Query("teacherId") teacherId?: string,
    @Query("staffId") staffId?: string
  ) {
    return this.leaveRequestService.getBalance(user.schoolId!, { teacherId, staffId });
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateLeaveRequestDto) {
    return this.leaveRequestService.create(user.schoolId!, user.sub, user.role, dto);
  }

  @Patch(":id/approve")
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  @AuditAction("LEAVE_REQUEST_APPROVED")
  approve(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.leaveRequestService.approve(user.schoolId!, id, user.sub);
  }

  @Patch(":id/reject")
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  @AuditAction("LEAVE_REQUEST_REJECTED")
  reject(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.leaveRequestService.reject(user.schoolId!, id, user.sub);
  }

  @Patch(":id/cancel")
  @AuditAction("LEAVE_REQUEST_CANCELLED")
  cancel(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.leaveRequestService.cancel(user.schoolId!, user.sub, user.role, id);
  }
}
