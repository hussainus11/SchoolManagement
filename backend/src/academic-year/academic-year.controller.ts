import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AcademicYearService } from "./academic-year.service";
import { CreateAcademicYearDto } from "./dto/create-academic-year.dto";

@Controller("academic-years")
@Audit("AcademicYear")
@Resource("settings")
@Roles(Role.SCHOOL_ADMIN)
export class AcademicYearController {
  constructor(private readonly academicYearService: AcademicYearService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload) {
    return this.academicYearService.findAllForSchool(user.schoolId!);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateAcademicYearDto) {
    return this.academicYearService.create(user.schoolId!, {
      name: dto.name,
      startDate: new Date(dto.startDate),
      endDate: new Date(dto.endDate),
      isCurrent: dto.isCurrent
    });
  }

  @Patch(":id/set-current")
  setCurrent(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.academicYearService.setCurrent(user.schoolId!, id);
  }
}
