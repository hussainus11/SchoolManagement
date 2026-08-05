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
exports.TimetableService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TimetableService = class TimetableService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findForSection(schoolId, sectionId) {
        return this.prisma.timetableEntry.findMany({
            where: { schoolId, sectionId },
            include: {
                period: true,
                subject: true,
                teacher: { include: { user: { omit: { passwordHash: true } } } }
            },
            orderBy: [{ dayOfWeek: "asc" }, { period: { order: "asc" } }]
        });
    }
    findForTeacher(schoolId, teacherId) {
        return this.prisma.timetableEntry.findMany({
            where: { schoolId, teacherId },
            include: { period: true, subject: true, section: { include: { class: true } } },
            orderBy: [{ dayOfWeek: "asc" }, { period: { order: "asc" } }]
        });
    }
    async assertSectionInSchool(schoolId, sectionId) {
        const section = await this.prisma.section.findFirst({
            where: { id: sectionId, class: { schoolId } }
        });
        if (!section)
            throw new common_1.NotFoundException("Section not found");
    }
    async assign(schoolId, data) {
        await this.assertSectionInSchool(schoolId, data.sectionId);
        const period = await this.prisma.period.findFirst({ where: { id: data.periodId, schoolId } });
        if (!period)
            throw new common_1.NotFoundException("Period not found");
        const subject = await this.prisma.subject.findFirst({ where: { id: data.subjectId, schoolId } });
        if (!subject)
            throw new common_1.NotFoundException("Subject not found");
        const teacher = await this.prisma.teacher.findFirst({
            where: { id: data.teacherId, schoolId, deletedAt: null }
        });
        if (!teacher)
            throw new common_1.NotFoundException("Teacher not found");
        const conflict = await this.prisma.timetableEntry.findFirst({
            where: {
                schoolId,
                teacherId: data.teacherId,
                periodId: data.periodId,
                dayOfWeek: data.dayOfWeek,
                sectionId: { not: data.sectionId }
            },
            include: { section: { include: { class: true } } }
        });
        if (conflict) {
            throw new common_1.ConflictException(`This teacher is already scheduled for ${conflict.section.class.name} - ${conflict.section.name} at this period`);
        }
        return this.prisma.timetableEntry.upsert({
            where: {
                sectionId_periodId_dayOfWeek: {
                    sectionId: data.sectionId,
                    periodId: data.periodId,
                    dayOfWeek: data.dayOfWeek
                }
            },
            create: { schoolId, ...data },
            update: { subjectId: data.subjectId, teacherId: data.teacherId },
            include: {
                period: true,
                subject: true,
                teacher: { include: { user: { omit: { passwordHash: true } } } }
            }
        });
    }
    async remove(schoolId, id) {
        const entry = await this.prisma.timetableEntry.findFirst({ where: { id, schoolId } });
        if (!entry)
            throw new common_1.NotFoundException("Timetable entry not found");
        await this.prisma.timetableEntry.delete({ where: { id } });
    }
};
exports.TimetableService = TimetableService;
exports.TimetableService = TimetableService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TimetableService);
//# sourceMappingURL=timetable.service.js.map