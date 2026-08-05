import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateExamScheduleDto } from "./dto/create-exam-schedule.dto";
import { ExamScheduleService } from "./exam-schedule.service";

@Controller("exam-schedules")
@Audit("ExamSchedule")
@Resource("exams")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.TEACHER)
export class ExamScheduleController {
  constructor(private readonly examScheduleService: ExamScheduleService) {}

  @Get()
  findAll(
    @CurrentUser() user: JwtPayload,
    @Query("examId") examId?: string,
    @Query("classId") classId?: string,
    @Query("subjectId") subjectId?: string
  ) {
    return this.examScheduleService.findAllForSchool(user.schoolId!, { examId, classId, subjectId });
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.examScheduleService.findOneForSchool(user.schoolId!, id);
  }

  @Post()
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateExamScheduleDto) {
    return this.examScheduleService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: CreateExamScheduleDto) {
    return this.examScheduleService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.examScheduleService.remove(user.schoolId!, id);
  }
}
