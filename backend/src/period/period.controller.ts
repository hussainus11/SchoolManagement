import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreatePeriodDto } from "./dto/create-period.dto";
import { UpdatePeriodDto } from "./dto/update-period.dto";
import { PeriodService } from "./period.service";

@Controller("periods")
@Audit("Period")
@Resource("timetable")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class PeriodController {
  constructor(private readonly periodService: PeriodService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload, @Query("branchId") branchId: string) {
    return this.periodService.findAllForBranch(user.schoolId!, branchId);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreatePeriodDto) {
    return this.periodService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: UpdatePeriodDto) {
    return this.periodService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.periodService.remove(user.schoolId!, id);
  }
}
