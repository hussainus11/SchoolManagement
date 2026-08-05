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
import { ClassService } from "./class.service";
import { AddClassSubjectDto } from "./dto/add-class-subject.dto";
import { CreateClassDto } from "./dto/create-class.dto";
import { UpdateClassDto } from "./dto/update-class.dto";

@Controller("classes")
@Audit("Class")
@Resource("classes")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Get()
  findAll(
    @CurrentUser() user: JwtPayload,
    @Query("branchId") branchId?: string,
    @Query("academicYearId") academicYearId?: string
  ) {
    return this.classService.findAllForSchool(user.schoolId!, { branchId, academicYearId });
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.classService.findOneForSchool(user.schoolId!, id);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateClassDto) {
    return this.classService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: UpdateClassDto) {
    return this.classService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.classService.remove(user.schoolId!, id);
  }

  @Post(":id/subjects")
  addSubject(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: AddClassSubjectDto) {
    return this.classService.addSubject(user.schoolId!, id, dto.subjectId);
  }

  @Delete(":id/subjects/:subjectId")
  @HttpCode(HttpStatus.NO_CONTENT)
  removeSubject(
    @CurrentUser() user: JwtPayload,
    @Param("id") id: string,
    @Param("subjectId") subjectId: string
  ) {
    return this.classService.removeSubject(user.schoolId!, id, subjectId);
  }
}
