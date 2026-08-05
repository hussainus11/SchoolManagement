import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { AdmissionStatus } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateAdmissionDto } from "./dto/create-admission.dto";
import { EnrollAdmissionDto } from "./dto/enroll-admission.dto";
import { UpdateAdmissionStatusDto } from "./dto/update-admission-status.dto";

@Injectable()
export class AdmissionService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, filters: { branchId?: string; status?: AdmissionStatus }) {
    return this.prisma.admission.findMany({
      where: { schoolId, ...filters },
      include: { offeredSection: { include: { class: true } } },
      orderBy: { createdAt: "desc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const admission = await this.prisma.admission.findFirst({
      where: { id, schoolId },
      include: { offeredSection: { include: { class: true } }, convertedStudent: true }
    });
    if (!admission) throw new NotFoundException("Admission not found");
    return admission;
  }

  async create(schoolId: string, dto: CreateAdmissionDto) {
    const branch = await this.prisma.branch.findFirst({ where: { id: dto.branchId, schoolId } });
    if (!branch) throw new NotFoundException("Branch not found");

    return this.prisma.admission.create({
      data: {
        schoolId,
        branchId: dto.branchId,
        applicantFirstName: dto.applicantFirstName,
        applicantLastName: dto.applicantLastName,
        dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
        gender: dto.gender,
        gradeAppliedFor: dto.gradeAppliedFor,
        guardianName: dto.guardianName,
        guardianPhone: dto.guardianPhone,
        guardianEmail: dto.guardianEmail,
        source: dto.source
      }
    });
  }

  async updateStatus(schoolId: string, id: string, dto: UpdateAdmissionStatusDto) {
    const admission = await this.findOneForSchool(schoolId, id);
    if (admission.status === "ENROLLED") {
      throw new ConflictException("This applicant has already been enrolled");
    }

    if (dto.offeredSectionId) {
      const section = await this.prisma.section.findFirst({
        where: { id: dto.offeredSectionId, class: { schoolId, branchId: admission.branchId } }
      });
      if (!section) throw new NotFoundException("Section not found");
    }

    if (dto.status === "ENROLLED") {
      throw new BadRequestException("Use the enroll endpoint to convert this applicant to a student");
    }

    return this.prisma.admission.update({
      where: { id },
      data: {
        status: dto.status,
        testScore: dto.testScore,
        testDate: dto.testDate ? new Date(dto.testDate) : undefined,
        offeredSectionId: dto.offeredSectionId,
        notes: dto.notes
      }
    });
  }

  async enroll(schoolId: string, id: string, dto: EnrollAdmissionDto) {
    const admission = await this.findOneForSchool(schoolId, id);
    if (admission.status === "ENROLLED") {
      throw new ConflictException("This applicant has already been enrolled");
    }
    if (admission.status !== "OFFERED") {
      throw new BadRequestException("Only applicants with an OFFERED status can be enrolled");
    }

    const section = await this.prisma.section.findFirst({
      where: { id: dto.sectionId, class: { schoolId, branchId: admission.branchId } }
    });
    if (!section) throw new NotFoundException("Section not found");

    const existingAdmissionNumber = await this.prisma.student.findFirst({
      where: { schoolId, admissionNumber: dto.admissionNumber }
    });
    if (existingAdmissionNumber) throw new ConflictException("Admission number already in use");

    return this.prisma.$transaction(async (tx) => {
      const student = await tx.student.create({
        data: {
          schoolId,
          branchId: admission.branchId,
          sectionId: dto.sectionId,
          admissionNumber: dto.admissionNumber,
          firstName: admission.applicantFirstName,
          lastName: admission.applicantLastName,
          gender: admission.gender,
          dateOfBirth: admission.dateOfBirth,
          admissionDate: dto.admissionDate ? new Date(dto.admissionDate) : new Date()
        }
      });

      return tx.admission.update({
        where: { id },
        data: { status: "ENROLLED", offeredSectionId: dto.sectionId, convertedStudentId: student.id },
        include: { convertedStudent: true }
      });
    });
  }

  async remove(schoolId: string, id: string) {
    const admission = await this.findOneForSchool(schoolId, id);
    if (admission.status === "ENROLLED") {
      throw new ConflictException("Cannot delete an admission that has already been enrolled");
    }
    await this.prisma.admission.delete({ where: { id } });
  }
}
