import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query
} from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AssignClassTeacherDto } from "./dto/assign-class-teacher.dto";
import { AssignSubjectTeacherDto } from "./dto/assign-subject-teacher.dto";
import { CreateSectionDto } from "./dto/create-section.dto";
import { UpdateSectionDto } from "./dto/update-section.dto";
import { SectionService } from "./section.service";

@Controller("sections")
@Audit("Section")
@Resource("classes")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload, @Query("classId") classId: string) {
    return this.sectionService.findAllForClass(user.schoolId!, classId);
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.sectionService.findOneForSchool(user.schoolId!, id);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateSectionDto) {
    return this.sectionService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: UpdateSectionDto) {
    return this.sectionService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.sectionService.remove(user.schoolId!, id);
  }

  @Patch(":id/class-teacher")
  assignClassTeacher(
    @CurrentUser() user: JwtPayload,
    @Param("id") id: string,
    @Body() dto: AssignClassTeacherDto
  ) {
    return this.sectionService.assignClassTeacher(user.schoolId!, id, dto.teacherId);
  }

  @Post(":id/subject-teachers")
  addSubjectTeacher(
    @CurrentUser() user: JwtPayload,
    @Param("id") id: string,
    @Body() dto: AssignSubjectTeacherDto
  ) {
    return this.sectionService.addSubjectTeacher(user.schoolId!, id, dto.subjectId, dto.teacherId);
  }

  @Delete(":id/subject-teachers/:subjectId")
  @HttpCode(HttpStatus.NO_CONTENT)
  removeSubjectTeacher(
    @CurrentUser() user: JwtPayload,
    @Param("id") id: string,
    @Param("subjectId") subjectId: string
  ) {
    return this.sectionService.removeSubjectTeacher(user.schoolId!, id, subjectId);
  }
}
