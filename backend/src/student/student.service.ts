import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import * as crypto from "node:crypto";
import { Role } from "../../generated/prisma/client";
import { AuthService } from "../auth/auth.service";
import { deleteUploadedFile } from "../common/image-upload.util";
import { PrismaService } from "../prisma/prisma.service";
import { CreateStudentLoginDto } from "./dto/create-student-login.dto";
import { CreateStudentDto } from "./dto/create-student.dto";
import { LinkGuardianDto } from "./dto/link-guardian.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";

function generateTempPassword() {
  return crypto.randomBytes(9).toString("base64url");
}

@Injectable()
export class StudentService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(
    schoolId: string,
    filters: { branchId?: string; sectionId?: string; search?: string }
  ) {
    return this.prisma.student.findMany({
      where: {
        schoolId,
        deletedAt: null,
        branchId: filters.branchId,
        sectionId: filters.sectionId,
        ...(filters.search
          ? {
              OR: [
                { firstName: { contains: filters.search, mode: "insensitive" } },
                { lastName: { contains: filters.search, mode: "insensitive" } },
                { admissionNumber: { contains: filters.search, mode: "insensitive" } }
              ]
            }
          : {})
      },
      include: { section: { include: { class: true } }, guardians: { include: { guardian: true } } },
      orderBy: { createdAt: "desc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const student = await this.prisma.student.findFirst({
      where: { id, schoolId, deletedAt: null },
      include: { section: { include: { class: true } }, guardians: { include: { guardian: true } } }
    });
    if (!student) throw new NotFoundException("Student not found");
    return student;
  }

  private async assertBranchInSchool(schoolId: string, branchId: string) {
    const branch = await this.prisma.branch.findFirst({ where: { id: branchId, schoolId } });
    if (!branch) throw new NotFoundException("Branch not found");
  }

  private async assertSectionInSchool(schoolId: string, sectionId: string) {
    const section = await this.prisma.section.findFirst({
      where: { id: sectionId, class: { schoolId } }
    });
    if (!section) throw new NotFoundException("Section not found");
  }

  async create(schoolId: string, dto: CreateStudentDto) {
    await this.assertBranchInSchool(schoolId, dto.branchId);
    if (dto.sectionId) await this.assertSectionInSchool(schoolId, dto.sectionId);

    return this.prisma.student.create({
      data: {
        schoolId,
        branchId: dto.branchId,
        sectionId: dto.sectionId,
        admissionNumber: dto.admissionNumber,
        firstName: dto.firstName,
        lastName: dto.lastName,
        gender: dto.gender,
        dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
        bloodGroup: dto.bloodGroup,
        address: dto.address,
        admissionDate: dto.admissionDate ? new Date(dto.admissionDate) : undefined
      },
      include: { section: { include: { class: true } } }
    });
  }

  async update(schoolId: string, id: string, dto: UpdateStudentDto) {
    await this.findOneForSchool(schoolId, id);
    if (dto.sectionId) await this.assertSectionInSchool(schoolId, dto.sectionId);

    return this.prisma.student.update({
      where: { id },
      data: {
        firstName: dto.firstName,
        lastName: dto.lastName,
        sectionId: dto.sectionId,
        gender: dto.gender,
        dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
        bloodGroup: dto.bloodGroup,
        address: dto.address,
        academicStatus: dto.academicStatus
      },
      include: { section: { include: { class: true } }, guardians: { include: { guardian: true } } }
    });
  }

  async remove(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    await this.prisma.student.update({ where: { id }, data: { deletedAt: new Date(), isActive: false } });
  }

  async setPhoto(schoolId: string, id: string, photoUrl: string) {
    const student = await this.findOneForSchool(schoolId, id);
    deleteUploadedFile(student.photoUrl);
    return this.prisma.student.update({ where: { id }, data: { photoUrl } });
  }

  async removePhoto(schoolId: string, id: string) {
    const student = await this.findOneForSchool(schoolId, id);
    deleteUploadedFile(student.photoUrl);
    return this.prisma.student.update({ where: { id }, data: { photoUrl: null } });
  }

  async linkGuardian(schoolId: string, studentId: string, guardianId: string, dto: LinkGuardianDto) {
    await this.findOneForSchool(schoolId, studentId);
    const guardian = await this.prisma.guardian.findFirst({ where: { id: guardianId, schoolId } });
    if (!guardian) throw new NotFoundException("Guardian not found");

    if (dto.isPrimary) {
      await this.prisma.studentGuardian.updateMany({ where: { studentId }, data: { isPrimary: false } });
    }

    return this.prisma.studentGuardian.upsert({
      where: { studentId_guardianId: { studentId, guardianId } },
      create: { studentId, guardianId, relation: dto.relation, isPrimary: dto.isPrimary ?? false },
      update: { relation: dto.relation, isPrimary: dto.isPrimary ?? false }
    });
  }

  async unlinkGuardian(schoolId: string, studentId: string, guardianId: string) {
    await this.findOneForSchool(schoolId, studentId);
    await this.prisma.studentGuardian.deleteMany({ where: { studentId, guardianId } });
  }

  async createLogin(schoolId: string, id: string, dto: CreateStudentLoginDto) {
    const student = await this.findOneForSchool(schoolId, id);
    if (student.userId) throw new ConflictException("This student already has a portal login");

    const existingUser = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existingUser) throw new ConflictException("A user with this email already exists");

    const tempPassword = generateTempPassword();
    const passwordHash = await AuthService.hashPassword(tempPassword);

    const user = await this.prisma.$transaction(async (tx) => {
      const createdUser = await tx.user.create({
        data: {
          email: dto.email,
          passwordHash,
          firstName: student.firstName,
          lastName: student.lastName,
          role: Role.STUDENT,
          schoolId,
          branchId: student.branchId
        }
      });
      await tx.student.update({ where: { id }, data: { userId: createdUser.id } });
      return createdUser;
    });

    return { userId: user.id, email: user.email, tempPassword };
  }
}
