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
import { CreateStaffDto } from "./dto/create-staff.dto";
import { UpdateStaffDto } from "./dto/update-staff.dto";
import { StaffService } from "./staff.service";

@Controller("staff")
@Audit("Staff")
@Resource("staff")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload, @Query("branchId") branchId?: string, @Query("search") search?: string) {
    return this.staffService.findAllForSchool(user.schoolId!, { branchId, search });
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.staffService.findOneForSchool(user.schoolId!, id);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateStaffDto) {
    return this.staffService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: UpdateStaffDto) {
    return this.staffService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.staffService.remove(user.schoolId!, id);
  }

  @Post(":id/photo")
  @UseInterceptors(FileInterceptor("file", imageUploadOptions("profile-photos")))
  @AuditAction("STAFF_PHOTO_UPDATED")
  uploadPhoto(
    @CurrentUser() user: JwtPayload,
    @Param("id") id: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    if (!file) throw new BadRequestException("No file uploaded");
    return this.staffService.setPhoto(user.schoolId!, id, `/uploads/profile-photos/${file.filename}`);
  }

  @Delete(":id/photo")
  @AuditAction("STAFF_PHOTO_REMOVED")
  removePhoto(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.staffService.removePhoto(user.schoolId!, id);
  }

  @Post(":id/reset-password")
  @AuditAction("STAFF_PASSWORD_RESET")
  resetPassword(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.staffService.resetPassword(user.schoolId!, id);
  }
}
