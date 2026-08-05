import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from "@nestjs/common";
import { AdmissionStatus, Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AdmissionService } from "./admission.service";
import { CreateAdmissionDto } from "./dto/create-admission.dto";
import { EnrollAdmissionDto } from "./dto/enroll-admission.dto";
import { UpdateAdmissionStatusDto } from "./dto/update-admission-status.dto";

@Controller("admissions")
@Audit("Admission")
@Resource("admissions")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class AdmissionController {
  constructor(private readonly admissionService: AdmissionService) {}

  @Get()
  findAll(
    @CurrentUser() user: JwtPayload,
    @Query("branchId") branchId?: string,
    @Query("status") status?: AdmissionStatus
  ) {
    return this.admissionService.findAllForSchool(user.schoolId!, { branchId, status });
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.admissionService.findOneForSchool(user.schoolId!, id);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateAdmissionDto) {
    return this.admissionService.create(user.schoolId!, dto);
  }

  @Patch(":id/status")
  updateStatus(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: UpdateAdmissionStatusDto) {
    return this.admissionService.updateStatus(user.schoolId!, id, dto);
  }

  @Post(":id/enroll")
  enroll(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: EnrollAdmissionDto) {
    return this.admissionService.enroll(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.admissionService.remove(user.schoolId!, id);
  }
}
