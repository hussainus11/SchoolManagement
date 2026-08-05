import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AssignmentService } from "./assignment.service";
import { CreateAssignmentDto } from "./dto/create-assignment.dto";

@Controller("assignments")
@Audit("Assignment")
@Resource("homework")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.TEACHER)
export class AssignmentController {
  constructor(private readonly assignmentService: AssignmentService) {}

  @Get()
  findAll(
    @CurrentUser() user: JwtPayload,
    @Query("sectionId") sectionId?: string,
    @Query("subjectId") subjectId?: string,
    @Query("teacherId") teacherId?: string
  ) {
    return this.assignmentService.findAllForSchool(user.schoolId!, { sectionId, subjectId, teacherId });
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.assignmentService.findOneForSchool(user.schoolId!, id);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateAssignmentDto) {
    return this.assignmentService.create(user.schoolId!, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.assignmentService.remove(user.schoolId!, id);
  }
}
