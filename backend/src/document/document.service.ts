import { Injectable, NotFoundException } from "@nestjs/common";
import * as fs from "node:fs";
import * as path from "node:path";
import { DocumentOwnerType } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateDocumentDto } from "./dto/create-document.dto";

interface UploadedFileMeta {
  url: string;
  originalName: string;
  mimeType: string;
  size: number;
}

@Injectable()
export class DocumentService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForOwner(schoolId: string, ownerType: DocumentOwnerType, ownerId: string) {
    return this.prisma.document.findMany({
      where: { schoolId, ownerType, ownerId },
      include: { uploadedBy: { omit: { passwordHash: true } } },
      orderBy: { createdAt: "desc" }
    });
  }

  private async assertOwnerInSchool(schoolId: string, ownerType: DocumentOwnerType, ownerId: string) {
    if (ownerType === "TEACHER") {
      const teacher = await this.prisma.teacher.findFirst({ where: { id: ownerId, schoolId } });
      if (!teacher) throw new NotFoundException("Teacher not found");
      return;
    }
    if (ownerType === "STUDENT") {
      const student = await this.prisma.student.findFirst({ where: { id: ownerId, schoolId } });
      if (!student) throw new NotFoundException("Student not found");
      return;
    }
    const staff = await this.prisma.staff.findFirst({ where: { id: ownerId, schoolId } });
    if (!staff) throw new NotFoundException("Staff member not found");
  }

  private deleteUploadedFile(fileUrl: string) {
    if (!fileUrl.startsWith("/uploads/")) return;
    fs.unlink(path.join(process.cwd(), fileUrl), () => {});
  }

  async create(schoolId: string, uploadedById: string, dto: CreateDocumentDto, file: UploadedFileMeta) {
    try {
      await this.assertOwnerInSchool(schoolId, dto.ownerType, dto.ownerId);
    } catch (error) {
      // multer already wrote the file to disk before this validation runs; clean it up on rejection.
      this.deleteUploadedFile(file.url);
      throw error;
    }

    return this.prisma.document.create({
      data: {
        schoolId,
        ownerType: dto.ownerType,
        ownerId: dto.ownerId,
        title: dto.title,
        fileUrl: file.url,
        fileName: file.originalName,
        mimeType: file.mimeType,
        fileSize: file.size,
        uploadedById
      },
      include: { uploadedBy: { omit: { passwordHash: true } } }
    });
  }

  async remove(schoolId: string, id: string) {
    const document = await this.prisma.document.findFirst({ where: { id, schoolId } });
    if (!document) throw new NotFoundException("Document not found");

    this.deleteUploadedFile(document.fileUrl);
    await this.prisma.document.delete({ where: { id } });
  }
}
