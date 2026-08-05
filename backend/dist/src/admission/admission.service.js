"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmissionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AdmissionService = class AdmissionService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, filters) {
        return this.prisma.admission.findMany({
            where: { schoolId, ...filters },
            include: { offeredSection: { include: { class: true } } },
            orderBy: { createdAt: "desc" }
        });
    }
    async findOneForSchool(schoolId, id) {
        const admission = await this.prisma.admission.findFirst({
            where: { id, schoolId },
            include: { offeredSection: { include: { class: true } }, convertedStudent: true }
        });
        if (!admission)
            throw new common_1.NotFoundException("Admission not found");
        return admission;
    }
    async create(schoolId, dto) {
        const branch = await this.prisma.branch.findFirst({ where: { id: dto.branchId, schoolId } });
        if (!branch)
            throw new common_1.NotFoundException("Branch not found");
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
    async updateStatus(schoolId, id, dto) {
        const admission = await this.findOneForSchool(schoolId, id);
        if (admission.status === "ENROLLED") {
            throw new common_1.ConflictException("This applicant has already been enrolled");
        }
        if (dto.offeredSectionId) {
            const section = await this.prisma.section.findFirst({
                where: { id: dto.offeredSectionId, class: { schoolId, branchId: admission.branchId } }
            });
            if (!section)
                throw new common_1.NotFoundException("Section not found");
        }
        if (dto.status === "ENROLLED") {
            throw new common_1.BadRequestException("Use the enroll endpoint to convert this applicant to a student");
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
    async enroll(schoolId, id, dto) {
        const admission = await this.findOneForSchool(schoolId, id);
        if (admission.status === "ENROLLED") {
            throw new common_1.ConflictException("This applicant has already been enrolled");
        }
        if (admission.status !== "OFFERED") {
            throw new common_1.BadRequestException("Only applicants with an OFFERED status can be enrolled");
        }
        const section = await this.prisma.section.findFirst({
            where: { id: dto.sectionId, class: { schoolId, branchId: admission.branchId } }
        });
        if (!section)
            throw new common_1.NotFoundException("Section not found");
        const existingAdmissionNumber = await this.prisma.student.findFirst({
            where: { schoolId, admissionNumber: dto.admissionNumber }
        });
        if (existingAdmissionNumber)
            throw new common_1.ConflictException("Admission number already in use");
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
    async remove(schoolId, id) {
        const admission = await this.findOneForSchool(schoolId, id);
        if (admission.status === "ENROLLED") {
            throw new common_1.ConflictException("Cannot delete an admission that has already been enrolled");
        }
        await this.prisma.admission.delete({ where: { id } });
    }
};
exports.AdmissionService = AdmissionService;
exports.AdmissionService = AdmissionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdmissionService);
//# sourceMappingURL=admission.service.js.map