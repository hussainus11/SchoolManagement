import * as fs from "node:fs";
import { extname, join } from "node:path";
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit, AuditAction } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { imageUploadOptions } from "../common/image-upload.util";
import { UpdateSchoolDto } from "./dto/update-school.dto";
import { SchoolService } from "./school.service";

const UPLOAD_DIR = join(process.cwd(), "uploads", "id-card-backgrounds");
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];

@Controller("schools")
@Audit("School")
@Resource("settings")
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Get("me")
  getMySchool(@CurrentUser() user: JwtPayload) {
    return this.schoolService.findByIdOrThrow(user.schoolId!);
  }

  @Get("me/billing")
  getMyBilling(@CurrentUser() user: JwtPayload) {
    return this.schoolService.findAdminDetail(user.schoolId!);
  }

  @Patch("me")
  @Roles(Role.SCHOOL_ADMIN)
  updateMySchool(@CurrentUser() user: JwtPayload, @Body() dto: UpdateSchoolDto) {
    return this.schoolService.update(user.schoolId!, dto);
  }

  @Post("me/id-card-background")
  @Roles(Role.SCHOOL_ADMIN)
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: (_req, _file, cb) => {
          fs.mkdirSync(UPLOAD_DIR, { recursive: true });
          cb(null, UPLOAD_DIR);
        },
        filename: (req, file, cb) => {
          const user = (req as unknown as { user?: JwtPayload }).user;
          cb(null, `${user?.schoolId}-${Date.now()}${extname(file.originalname)}`);
        }
      }),
      fileFilter: (_req, file, cb) => {
        if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
          cb(new BadRequestException("Only JPEG, PNG, or WEBP images are allowed"), false);
          return;
        }
        cb(null, true);
      },
      limits: { fileSize: 5 * 1024 * 1024 }
    })
  )
  uploadIdCardBackground(@CurrentUser() user: JwtPayload, @UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException("No file uploaded");
    return this.schoolService.setIdCardBackgroundImage(user.schoolId!, `/uploads/id-card-backgrounds/${file.filename}`);
  }

  @Delete("me/id-card-background")
  @Roles(Role.SCHOOL_ADMIN)
  removeIdCardBackground(@CurrentUser() user: JwtPayload) {
    return this.schoolService.removeIdCardBackgroundImage(user.schoolId!);
  }

  @Post("me/logo")
  @Roles(Role.SCHOOL_ADMIN)
  @UseInterceptors(FileInterceptor("file", imageUploadOptions("logos")))
  @AuditAction("SCHOOL_LOGO_UPDATED")
  uploadLogo(@CurrentUser() user: JwtPayload, @UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException("No file uploaded");
    return this.schoolService.setLogo(user.schoolId!, `/uploads/logos/${file.filename}`);
  }

  @Delete("me/logo")
  @Roles(Role.SCHOOL_ADMIN)
  @AuditAction("SCHOOL_LOGO_REMOVED")
  removeLogo(@CurrentUser() user: JwtPayload) {
    return this.schoolService.removeLogo(user.schoolId!);
  }
}
