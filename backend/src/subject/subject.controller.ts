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
import { CreateSubjectDto } from "./dto/create-subject.dto";
import { UpdateSubjectDto } from "./dto/update-subject.dto";
import { SubjectService } from "./subject.service";

@Controller("subjects")
@Audit("Subject")
@Resource("subjects")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload) {
    return this.subjectService.findAllForSchool(user.schoolId!);
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.subjectService.findOneForSchool(user.schoolId!, id);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateSubjectDto) {
    return this.subjectService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: UpdateSubjectDto) {
    return this.subjectService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.subjectService.remove(user.schoolId!, id);
  }

  @Post(":id/image")
  @UseInterceptors(FileInterceptor("file", imageUploadOptions("subjects")))
  @AuditAction("SUBJECT_IMAGE_UPDATED")
  uploadImage(
    @CurrentUser() user: JwtPayload,
    @Param("id") id: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    if (!file) throw new BadRequestException("No file uploaded");
    return this.subjectService.setImage(user.schoolId!, id, `/uploads/subjects/${file.filename}`);
  }

  @Delete(":id/image")
  @AuditAction("SUBJECT_IMAGE_REMOVED")
  removeImage(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.subjectService.removeImage(user.schoolId!, id);
  }
}
