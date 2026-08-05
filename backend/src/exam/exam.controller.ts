import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateExamDto } from "./dto/create-exam.dto";
import { ExamService } from "./exam.service";

@Controller("exams")
@Audit("Exam")
@Resource("exams")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.TEACHER)
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload, @Query("academicYearId") academicYearId?: string) {
    return this.examService.findAllForSchool(user.schoolId!, academicYearId);
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.examService.findOneForSchool(user.schoolId!, id);
  }

  @Post()
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateExamDto) {
    return this.examService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: CreateExamDto) {
    return this.examService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.examService.remove(user.schoolId!, id);
  }
}
