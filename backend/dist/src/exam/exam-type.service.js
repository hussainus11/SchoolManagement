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
exports.ExamTypeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ExamTypeService = class ExamTypeService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId) {
        return this.prisma.examType.findMany({ where: { schoolId }, orderBy: { name: "asc" } });
    }
    async findOneForSchool(schoolId, id) {
        const examType = await this.prisma.examType.findFirst({ where: { id, schoolId } });
        if (!examType)
            throw new common_1.NotFoundException("Exam type not found");
        return examType;
    }
    create(schoolId, dto) {
        return this.prisma.examType.create({ data: { ...dto, schoolId } });
    }
    async update(schoolId, id, dto) {
        await this.findOneForSchool(schoolId, id);
        return this.prisma.examType.update({ where: { id }, data: dto });
    }
    async remove(schoolId, id) {
        await this.findOneForSchool(schoolId, id);
        const usage = await this.prisma.exam.count({ where: { examTypeId: id } });
        if (usage > 0) {
            throw new common_1.ConflictException("Cannot delete an exam type that is used by an exam");
        }
        await this.prisma.examType.delete({ where: { id } });
    }
};
exports.ExamTypeService = ExamTypeService;
exports.ExamTypeService = ExamTypeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ExamTypeService);
//# sourceMappingURL=exam-type.service.js.map