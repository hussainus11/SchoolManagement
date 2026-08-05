import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateDisciplineIncidentDto } from "./dto/create-discipline-incident.dto";
import { DisciplineService } from "./discipline.service";

@Controller("discipline-incidents")
@Audit("DisciplineIncident")
@Resource("discipline")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.TEACHER)
export class DisciplineController {
  constructor(private readonly disciplineService: DisciplineService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload, @Query("studentId") studentId?: string) {
    return this.disciplineService.findAllForSchool(user.schoolId!, studentId);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateDisciplineIncidentDto) {
    return this.disciplineService.create(user.schoolId!, user.sub, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.disciplineService.remove(user.schoolId!, id);
  }
}
