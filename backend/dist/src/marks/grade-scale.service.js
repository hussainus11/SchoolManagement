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
exports.GradeScaleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GradeScaleService = class GradeScaleService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId) {
        return this.prisma.gradeScale.findMany({ where: { schoolId }, orderBy: { minPercentage: "desc" } });
    }
    async findOneForSchool(schoolId, id) {
        const gradeScale = await this.prisma.gradeScale.findFirst({ where: { id, schoolId } });
        if (!gradeScale)
            throw new common_1.NotFoundException("Grade scale not found");
        return gradeScale;
    }
    create(schoolId, dto) {
        return this.prisma.gradeScale.create({ data: { ...dto, schoolId } });
    }
    async update(schoolId, id, dto) {
        await this.findOneForSchool(schoolId, id);
        return this.prisma.gradeScale.update({ where: { id }, data: dto });
    }
    async remove(schoolId, id) {
        await this.findOneForSchool(schoolId, id);
        await this.prisma.gradeScale.delete({ where: { id } });
    }
    async resolveGrade(schoolId, percentage) {
        const scales = await this.prisma.gradeScale.findMany({ where: { schoolId } });
        const match = scales.find((s) => percentage >= Number(s.minPercentage) && percentage <= Number(s.maxPercentage));
        return match ?? null;
    }
};
exports.GradeScaleService = GradeScaleService;
exports.GradeScaleService = GradeScaleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GradeScaleService);
//# sourceMappingURL=grade-scale.service.js.map