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
exports.ExamService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ExamService = class ExamService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, academicYearId) {
        return this.prisma.exam.findMany({
            where: { schoolId, academicYearId },
            include: { examType: true, academicYear: true },
            orderBy: { startDate: "desc" }
        });
    }
    async findOneForSchool(schoolId, id) {
        const exam = await this.prisma.exam.findFirst({
            where: { id, schoolId },
            include: { examType: true, academicYear: true }
        });
        if (!exam)
            throw new common_1.NotFoundException("Exam not found");
        return exam;
    }
    async assertRelationsInSchool(schoolId, academicYearId, examTypeId) {
        const academicYear = await this.prisma.academicYear.findFirst({ where: { id: academicYearId, schoolId } });
        if (!academicYear)
            throw new common_1.NotFoundException("Academic year not found");
        const examType = await this.prisma.examType.findFirst({ where: { id: examTypeId, schoolId } });
        if (!examType)
            throw new common_1.NotFoundException("Exam type not found");
    }
    async create(schoolId, dto) {
        await this.assertRelationsInSchool(schoolId, dto.academicYearId, dto.examTypeId);
        return this.prisma.exam.create({
            data: {
                schoolId,
                academicYearId: dto.academicYearId,
                examTypeId: dto.examTypeId,
                name: dto.name,
                startDate: new Date(dto.startDate),
                endDate: new Date(dto.endDate)
            }
        });
    }
    async update(schoolId, id, dto) {
        await this.findOneForSchool(schoolId, id);
        await this.assertRelationsInSchool(schoolId, dto.academicYearId, dto.examTypeId);
        return this.prisma.exam.update({
            where: { id },
            data: {
                academicYearId: dto.academicYearId,
                examTypeId: dto.examTypeId,
                name: dto.name,
                startDate: new Date(dto.startDate),
                endDate: new Date(dto.endDate)
            }
        });
    }
    async remove(schoolId, id) {
        await this.findOneForSchool(schoolId, id);
        const usage = await this.prisma.examSchedule.count({ where: { examId: id } });
        if (usage > 0) {
            throw new common_1.ConflictException("Cannot delete an exam that already has scheduled papers");
        }
        await this.prisma.exam.delete({ where: { id } });
    }
};
exports.ExamService = ExamService;
exports.ExamService = ExamService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ExamService);
//# sourceMappingURL=exam.service.js.map