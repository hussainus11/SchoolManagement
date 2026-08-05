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
exports.SectionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SectionService = class SectionService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForClass(schoolId, classId) {
        return this.prisma.section.findMany({
            where: { classId, class: { schoolId } },
            include: { classTeacher: { include: { user: { omit: { passwordHash: true } } } } },
            orderBy: { name: "asc" }
        });
    }
    async findOneForSchool(schoolId, id) {
        const section = await this.prisma.section.findFirst({
            where: { id, class: { schoolId } },
            include: {
                class: true,
                classTeacher: { include: { user: { omit: { passwordHash: true } } } },
                subjectTeachers: {
                    include: { subject: true, teacher: { include: { user: { omit: { passwordHash: true } } } } }
                }
            }
        });
        if (!section)
            throw new common_1.NotFoundException("Section not found");
        return section;
    }
    async assertClassInSchool(schoolId, classId) {
        const cls = await this.prisma.class.findFirst({ where: { id: classId, schoolId } });
        if (!cls)
            throw new common_1.NotFoundException("Class not found");
    }
    async create(schoolId, data) {
        await this.assertClassInSchool(schoolId, data.classId);
        return this.prisma.section.create({ data });
    }
    async update(schoolId, id, data) {
        await this.findOneForSchool(schoolId, id);
        return this.prisma.section.update({ where: { id }, data });
    }
    async remove(schoolId, id) {
        await this.findOneForSchool(schoolId, id);
        const studentCount = await this.prisma.student.count({ where: { sectionId: id } });
        if (studentCount > 0) {
            throw new common_1.ConflictException("Cannot delete a section that still has students");
        }
        await this.prisma.subjectTeacher.deleteMany({ where: { sectionId: id } });
        await this.prisma.section.delete({ where: { id } });
    }
    async assignClassTeacher(schoolId, id, teacherId) {
        await this.findOneForSchool(schoolId, id);
        if (teacherId) {
            const teacher = await this.prisma.teacher.findFirst({
                where: { id: teacherId, schoolId, deletedAt: null }
            });
            if (!teacher)
                throw new common_1.NotFoundException("Teacher not found");
        }
        return this.prisma.section.update({ where: { id }, data: { classTeacherId: teacherId ?? null } });
    }
    async addSubjectTeacher(schoolId, sectionId, subjectId, teacherId) {
        await this.findOneForSchool(schoolId, sectionId);
        const subject = await this.prisma.subject.findFirst({ where: { id: subjectId, schoolId } });
        if (!subject)
            throw new common_1.NotFoundException("Subject not found");
        const teacher = await this.prisma.teacher.findFirst({
            where: { id: teacherId, schoolId, deletedAt: null }
        });
        if (!teacher)
            throw new common_1.NotFoundException("Teacher not found");
        return this.prisma.subjectTeacher.upsert({
            where: { sectionId_subjectId: { sectionId, subjectId } },
            create: { sectionId, subjectId, teacherId },
            update: { teacherId }
        });
    }
    async removeSubjectTeacher(schoolId, sectionId, subjectId) {
        await this.findOneForSchool(schoolId, sectionId);
        await this.prisma.subjectTeacher.deleteMany({ where: { sectionId, subjectId } });
    }
};
exports.SectionService = SectionService;
exports.SectionService = SectionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SectionService);
//# sourceMappingURL=section.service.js.map