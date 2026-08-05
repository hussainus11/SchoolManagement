import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateExamTypeDto } from "./dto/create-exam-type.dto";
import { ExamTypeService } from "./exam-type.service";

@Controller("exam-types")
@Audit("ExamType")
@Resource("exams")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class ExamTypeController {
  constructor(private readonly examTypeService: ExamTypeService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload) {
    return this.examTypeService.findAllForSchool(user.schoolId!);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateExamTypeDto) {
    return this.examTypeService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: CreateExamTypeDto) {
    return this.examTypeService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.examTypeService.remove(user.schoolId!, id);
  }
}
