import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateSalaryStructureDto } from "./dto/create-salary-structure.dto";
import { SalaryStructureService } from "./salary-structure.service";

@Controller("payroll/salary-structures")
@Audit("SalaryStructure")
@Resource("payroll")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class SalaryStructureController {
  constructor(private readonly salaryStructureService: SalaryStructureService) {}

  @Get()
  findForUser(@CurrentUser() user: JwtPayload, @Query("userId") userId: string) {
    return this.salaryStructureService.findForUser(user.schoolId!, userId);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateSalaryStructureDto) {
    return this.salaryStructureService.create(user.schoolId!, dto);
  }

  @Patch(":id/deactivate")
  deactivate(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.salaryStructureService.deactivate(user.schoolId!, id);
  }
}
