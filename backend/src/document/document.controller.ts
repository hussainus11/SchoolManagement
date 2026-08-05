import * as crypto from "node:crypto";
import * as fs from "node:fs";
import { extname, join } from "node:path";
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { DocumentOwnerType, Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateDocumentDto } from "./dto/create-document.dto";
import { DocumentService } from "./document.service";

const UPLOAD_DIR = join(process.cwd(), "uploads", "documents");
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp", "application/pdf"];

@Controller("documents")
@Audit("Document")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Get()
  findAll(
    @CurrentUser() user: JwtPayload,
    @Query("ownerType") ownerType: DocumentOwnerType,
    @Query("ownerId") ownerId: string
  ) {
    return this.documentService.findAllForOwner(user.schoolId!, ownerType, ownerId);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: (_req, _file, cb) => {
          fs.mkdirSync(UPLOAD_DIR, { recursive: true });
          cb(null, UPLOAD_DIR);
        },
        filename: (_req, file, cb) => {
          const unique = `${Date.now()}-${crypto.randomBytes(6).toString("hex")}`;
          cb(null, `${unique}${extname(file.originalname)}`);
        }
      }),
      fileFilter: (_req, file, cb) => {
        if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
          cb(new BadRequestException("Only JPEG, PNG, WEBP, or PDF files are allowed"), false);
          return;
        }
        cb(null, true);
      },
      limits: { fileSize: 10 * 1024 * 1024 }
    })
  )
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateDocumentDto, @UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException("No file uploaded");
    return this.documentService.create(user.schoolId!, user.sub, dto, {
      url: `/uploads/documents/${file.filename}`,
      originalName: file.originalname,
      mimeType: file.mimetype,
      size: file.size
    });
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.documentService.remove(user.schoolId!, id);
  }
}
