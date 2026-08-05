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
exports.DisciplineService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DisciplineService = class DisciplineService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, studentId) {
        return this.prisma.disciplineIncident.findMany({
            where: { schoolId, studentId },
            include: { student: true, reportedBy: { omit: { passwordHash: true } } },
            orderBy: { incidentDate: "desc" }
        });
    }
    async create(schoolId, reportedById, dto) {
        const student = await this.prisma.student.findFirst({
            where: { id: dto.studentId, schoolId, deletedAt: null }
        });
        if (!student)
            throw new common_1.NotFoundException("Student not found");
        return this.prisma.disciplineIncident.create({
            data: {
                schoolId,
                studentId: dto.studentId,
                reportedById,
                incidentDate: dto.incidentDate ? new Date(dto.incidentDate) : undefined,
                category: dto.category,
                severity: dto.severity,
                description: dto.description,
                actionTaken: dto.actionTaken
            },
            include: { student: true, reportedBy: { omit: { passwordHash: true } } }
        });
    }
    async remove(schoolId, id) {
        const incident = await this.prisma.disciplineIncident.findFirst({ where: { id, schoolId } });
        if (!incident)
            throw new common_1.NotFoundException("Discipline incident not found");
        await this.prisma.disciplineIncident.delete({ where: { id } });
    }
};
exports.DisciplineService = DisciplineService;
exports.DisciplineService = DisciplineService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DisciplineService);
//# sourceMappingURL=discipline.service.js.map