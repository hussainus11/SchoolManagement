import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseInterceptors
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit, AuditAction } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { imageUploadOptions } from "../common/image-upload.util";
import { CreateQualificationDto } from "./dto/create-qualification.dto";
import { CreateTeacherDto } from "./dto/create-teacher.dto";
import { UpdateTeacherDto } from "./dto/update-teacher.dto";
import { TeacherService } from "./teacher.service";

@Controller("teachers")
@Audit("Teacher")
@Resource("teachers")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  findAll(
    @CurrentUser() user: JwtPayload,
    @Query("branchId") branchId?: string,
    @Query("search") search?: string
  ) {
    return this.teacherService.findAllForSchool(user.schoolId!, { branchId, search });
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.teacherService.findOneForSchool(user.schoolId!, id);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateTeacherDto) {
    return this.teacherService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: UpdateTeacherDto) {
    return this.teacherService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.teacherService.remove(user.schoolId!, id);
  }

  @Post(":id/qualifications")
  addQualification(
    @CurrentUser() user: JwtPayload,
    @Param("id") id: string,
    @Body() dto: CreateQualificationDto
  ) {
    return this.teacherService.addQualification(user.schoolId!, id, dto);
  }

  @Delete(":id/qualifications/:qualificationId")
  @HttpCode(HttpStatus.NO_CONTENT)
  removeQualification(
    @CurrentUser() user: JwtPayload,
    @Param("id") id: string,
    @Param("qualificationId") qualificationId: string
  ) {
    return this.teacherService.removeQualification(user.schoolId!, id, qualificationId);
  }

  @Post(":id/photo")
  @UseInterceptors(FileInterceptor("file", imageUploadOptions("profile-photos")))
  @AuditAction("TEACHER_PHOTO_UPDATED")
  uploadPhoto(
    @CurrentUser() user: JwtPayload,
    @Param("id") id: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    if (!file) throw new BadRequestException("No file uploaded");
    return this.teacherService.setPhoto(user.schoolId!, id, `/uploads/profile-photos/${file.filename}`);
  }

  @Delete(":id/photo")
  @AuditAction("TEACHER_PHOTO_REMOVED")
  removePhoto(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.teacherService.removePhoto(user.schoolId!, id);
  }

  @Post(":id/reset-password")
  @AuditAction("TEACHER_PASSWORD_RESET")
  resetPassword(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.teacherService.resetPassword(user.schoolId!, id);
  }
}
