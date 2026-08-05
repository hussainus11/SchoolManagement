import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AlumniService } from "./alumni.service";
import { CreateAlumniDto } from "./dto/create-alumni.dto";

@Controller("alumni")
@Audit("Alumni")
@Resource("alumni")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class AlumniController {
  constructor(private readonly alumniService: AlumniService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload, @Query("search") search?: string) {
    return this.alumniService.findAllForSchool(user.schoolId!, search);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateAlumniDto) {
    return this.alumniService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: CreateAlumniDto) {
    return this.alumniService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.alumniService.remove(user.schoolId!, id);
  }
}
