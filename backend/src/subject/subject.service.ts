import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "../../generated/prisma/client";
import { deleteUploadedFile } from "../common/image-upload.util";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SubjectService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string) {
    return this.prisma.subject.findMany({ where: { schoolId }, orderBy: { name: "asc" } });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const subject = await this.prisma.subject.findFirst({ where: { id, schoolId } });
    if (!subject) throw new NotFoundException("Subject not found");
    return subject;
  }

  create(schoolId: string, data: { name: string; code: string }) {
    return this.prisma.subject.create({ data: { ...data, schoolId } });
  }

  createWithinTransaction(tx: Prisma.TransactionClient, schoolId: string, data: { name: string; code: string }) {
    return tx.subject.create({ data: { ...data, schoolId } });
  }

  async update(schoolId: string, id: string, data: Prisma.SubjectUpdateInput) {
    await this.findOneForSchool(schoolId, id);
    return this.prisma.subject.update({ where: { id }, data });
  }

  async remove(schoolId: string, id: string) {
    const subject = await this.findOneForSchool(schoolId, id);
    await this.prisma.subjectTeacher.deleteMany({ where: { subjectId: id } });
    await this.prisma.classSubject.deleteMany({ where: { subjectId: id } });
    await this.prisma.subject.delete({ where: { id } });
    deleteUploadedFile(subject.imageUrl);
  }

  async setImage(schoolId: string, id: string, imageUrl: string) {
    const subject = await this.findOneForSchool(schoolId, id);
    deleteUploadedFile(subject.imageUrl);
    return this.prisma.subject.update({ where: { id }, data: { imageUrl } });
  }

  async removeImage(schoolId: string, id: string) {
    const subject = await this.findOneForSchool(schoolId, id);
    deleteUploadedFile(subject.imageUrl);
    return this.prisma.subject.update({ where: { id }, data: { imageUrl: null } });
  }
}
