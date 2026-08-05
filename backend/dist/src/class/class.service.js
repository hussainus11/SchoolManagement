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
exports.ClassService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ClassService = class ClassService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, filters) {
        return this.prisma.class.findMany({
            where: { schoolId, ...filters },
            include: { sections: true },
            orderBy: [{ order: "asc" }, { name: "asc" }]
        });
    }
    async findOneForSchool(schoolId, id) {
        const cls = await this.prisma.class.findFirst({
            where: { id, schoolId },
            include: { sections: true, classSubjects: { include: { subject: true } } }
        });
        if (!cls)
            throw new common_1.NotFoundException("Class not found");
        return cls;
    }
    async assertBranchInSchool(schoolId, branchId) {
        const branch = await this.prisma.branch.findFirst({ where: { id: branchId, schoolId } });
        if (!branch)
            throw new common_1.NotFoundException("Branch not found");
    }
    async assertAcademicYearInSchool(schoolId, academicYearId) {
        const year = await this.prisma.academicYear.findFirst({ where: { id: academicYearId, schoolId } });
        if (!year)
            throw new common_1.NotFoundException("Academic year not found");
    }
    async create(schoolId, data) {
        await this.assertBranchInSchool(schoolId, data.branchId);
        await this.assertAcademicYearInSchool(schoolId, data.academicYearId);
        return this.prisma.class.create({ data: { ...data, schoolId } });
    }
    async update(schoolId, id, data) {
        await this.findOneForSchool(schoolId, id);
        return this.prisma.class.update({ where: { id }, data });
    }
    async remove(schoolId, id) {
        const cls = await this.findOneForSchool(schoolId, id);
        if (cls.sections.length > 0) {
            throw new common_1.ConflictException("Cannot delete a class that still has sections");
        }
        await this.prisma.classSubject.deleteMany({ where: { classId: id } });
        await this.prisma.class.delete({ where: { id } });
    }
    async addSubject(schoolId, classId, subjectId) {
        await this.findOneForSchool(schoolId, classId);
        const subject = await this.prisma.subject.findFirst({ where: { id: subjectId, schoolId } });
        if (!subject)
            throw new common_1.NotFoundException("Subject not found");
        return this.prisma.classSubject.create({ data: { classId, subjectId } });
    }
    async removeSubject(schoolId, classId, subjectId) {
        await this.findOneForSchool(schoolId, classId);
        await this.prisma.classSubject.deleteMany({ where: { classId, subjectId } });
    }
};
exports.ClassService = ClassService;
exports.ClassService = ClassService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClassService);
//# sourceMappingURL=class.service.js.map