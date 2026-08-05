import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateLeaveTypeDto } from "./dto/create-leave-type.dto";
import { LeaveTypeService } from "./leave-type.service";

@Controller("leave-types")
@Audit("LeaveType")
@Resource("leave")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.TEACHER, Role.STAFF)
export class LeaveTypeController {
  constructor(private readonly leaveTypeService: LeaveTypeService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload) {
    return this.leaveTypeService.findAllForSchool(user.schoolId!);
  }

  @Post()
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateLeaveTypeDto) {
    return this.leaveTypeService.create(user.schoolId!, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.leaveTypeService.remove(user.schoolId!, id);
  }
}
