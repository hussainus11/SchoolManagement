import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateGuardianDto } from "./dto/create-guardian.dto";
import { GuardianService } from "./guardian.service";

@Controller("guardians")
@Audit("Guardian")
@Resource("students")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class GuardianController {
  constructor(private readonly guardianService: GuardianService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload, @Query("search") search?: string) {
    return this.guardianService.findAllForSchool(user.schoolId!, search);
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.guardianService.findOneForSchool(user.schoolId!, id);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateGuardianDto) {
    return this.guardianService.create(user.schoolId!, dto);
  }

  @Post(":id/create-login")
  createLogin(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.guardianService.createLogin(user.schoolId!, id);
  }
}
