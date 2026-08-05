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
import { CreateStudentLoginDto } from "./dto/create-student-login.dto";
import { CreateStudentDto } from "./dto/create-student.dto";
import { LinkGuardianDto } from "./dto/link-guardian.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";
import { StudentService } from "./student.service";

@Controller("students")
@Audit("Student")
@Resource("students")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAll(
    @CurrentUser() user: JwtPayload,
    @Query("branchId") branchId?: string,
    @Query("sectionId") sectionId?: string,
    @Query("search") search?: string
  ) {
    return this.studentService.findAllForSchool(user.schoolId!, { branchId, sectionId, search });
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.studentService.findOneForSchool(user.schoolId!, id);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateStudentDto) {
    return this.studentService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: UpdateStudentDto) {
    return this.studentService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.studentService.remove(user.schoolId!, id);
  }

  @Post(":id/guardians/:guardianId")
  linkGuardian(
    @CurrentUser() user: JwtPayload,
    @Param("id") id: string,
    @Param("guardianId") guardianId: string,
    @Body() dto: LinkGuardianDto
  ) {
    return this.studentService.linkGuardian(user.schoolId!, id, guardianId, dto);
  }

  @Delete(":id/guardians/:guardianId")
  @HttpCode(HttpStatus.NO_CONTENT)
  unlinkGuardian(
    @CurrentUser() user: JwtPayload,
    @Param("id") id: string,
    @Param("guardianId") guardianId: string
  ) {
    return this.studentService.unlinkGuardian(user.schoolId!, id, guardianId);
  }

  @Post(":id/create-login")
  createLogin(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: CreateStudentLoginDto) {
    return this.studentService.createLogin(user.schoolId!, id, dto);
  }

  @Post(":id/photo")
  @UseInterceptors(FileInterceptor("file", imageUploadOptions("profile-photos")))
  @AuditAction("STUDENT_PHOTO_UPDATED")
  uploadPhoto(
    @CurrentUser() user: JwtPayload,
    @Param("id") id: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    if (!file) throw new BadRequestException("No file uploaded");
    return this.studentService.setPhoto(user.schoolId!, id, `/uploads/profile-photos/${file.filename}`);
  }

  @Delete(":id/photo")
  @AuditAction("STUDENT_PHOTO_REMOVED")
  removePhoto(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.studentService.removePhoto(user.schoolId!, id);
  }
}
