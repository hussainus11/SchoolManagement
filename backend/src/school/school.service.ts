import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import * as fs from "node:fs";
import * as path from "node:path";
import { Prisma } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SchoolService {
  constructor(private readonly prisma: PrismaService) {}

  findById(id: string) {
    return this.prisma.school.findUnique({ where: { id } });
  }

  async findByIdOrThrow(id: string) {
    const school = await this.findById(id);
    if (!school) throw new NotFoundException("School not found");
    return school;
  }

  update(id: string, data: Prisma.SchoolUpdateInput) {
    return this.prisma.school.update({ where: { id }, data });
  }

  private deleteUploadedFile(fileUrl: string | null) {
    if (!fileUrl || !fileUrl.startsWith("/uploads/")) return;
    const filePath = path.join(process.cwd(), fileUrl);
    fs.unlink(filePath, () => {});
  }

  async setIdCardBackgroundImage(id: string, imageUrl: string) {
    const school = await this.findByIdOrThrow(id);
    this.deleteUploadedFile(school.idCardBackgroundImageUrl);
    return this.prisma.school.update({ where: { id }, data: { idCardBackgroundImageUrl: imageUrl } });
  }

  async removeIdCardBackgroundImage(id: string) {
    const school = await this.findByIdOrThrow(id);
    this.deleteUploadedFile(school.idCardBackgroundImageUrl);
    return this.prisma.school.update({ where: { id }, data: { idCardBackgroundImageUrl: null } });
  }

  async setLogo(id: string, logoUrl: string) {
    const school = await this.findByIdOrThrow(id);
    this.deleteUploadedFile(school.logoUrl);
    return this.prisma.school.update({ where: { id }, data: { logoUrl } });
  }

  async removeLogo(id: string) {
    const school = await this.findByIdOrThrow(id);
    this.deleteUploadedFile(school.logoUrl);
    return this.prisma.school.update({ where: { id }, data: { logoUrl: null } });
  }

  async createWithinTransaction(
    tx: Prisma.TransactionClient,
    data: { name: string; slug: string; email?: string; phone?: string }
  ) {
    const existing = await tx.school.findUnique({ where: { slug: data.slug } });
    if (existing) throw new ConflictException("A school with this slug already exists");
    return tx.school.create({ data });
  }
}
