import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { Audit } from "../audit/decorators/audit.decorator";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateLeaveGroupDto } from "./dto/create-leave-group.dto";
import { UpdateLeaveGroupDto } from "./dto/update-leave-group.dto";
import { LeaveGroupService } from "./leave-group.service";

@Controller("leave-groups")
@Audit("LeaveGroup")
@Resource("leave")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class LeaveGroupController {
  constructor(private readonly leaveGroupService: LeaveGroupService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload) {
    return this.leaveGroupService.findAllForSchool(user.schoolId!);
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.leaveGroupService.findOneForSchool(user.schoolId!, id);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateLeaveGroupDto) {
    return this.leaveGroupService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: UpdateLeaveGroupDto) {
    return this.leaveGroupService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.leaveGroupService.remove(user.schoolId!, id);
  }
}
