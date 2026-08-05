import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateGradeScaleDto } from "./dto/create-grade-scale.dto";
import { GradeScaleService } from "./grade-scale.service";

@Controller("grade-scales")
@Audit("GradeScale")
@Resource("marks")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class GradeScaleController {
  constructor(private readonly gradeScaleService: GradeScaleService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload) {
    return this.gradeScaleService.findAllForSchool(user.schoolId!);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateGradeScaleDto) {
    return this.gradeScaleService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: CreateGradeScaleDto) {
    return this.gradeScaleService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.gradeScaleService.remove(user.schoolId!, id);
  }
}
