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
exports.AssignmentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AssignmentService = class AssignmentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, filters) {
        return this.prisma.assignment.findMany({
            where: { schoolId, deletedAt: null, ...filters },
            include: { subject: true, teacher: { include: { user: { omit: { passwordHash: true } } } }, section: { include: { class: true } } },
            orderBy: { dueDate: "desc" }
        });
    }
    async findOneForSchool(schoolId, id) {
        const assignment = await this.prisma.assignment.findFirst({
            where: { id, schoolId, deletedAt: null },
            include: {
                subject: true,
                teacher: { include: { user: { omit: { passwordHash: true } } } },
                section: { include: { class: true } },
                submissions: { include: { student: true }, orderBy: { student: { firstName: "asc" } } }
            }
        });
        if (!assignment)
            throw new common_1.NotFoundException("Assignment not found");
        return assignment;
    }
    async create(schoolId, dto) {
        const section = await this.prisma.section.findFirst({
            where: { id: dto.sectionId, class: { schoolId } }
        });
        if (!section)
            throw new common_1.NotFoundException("Section not found");
        const subject = await this.prisma.subject.findFirst({ where: { id: dto.subjectId, schoolId } });
        if (!subject)
            throw new common_1.NotFoundException("Subject not found");
        const teacher = await this.prisma.teacher.findFirst({
            where: { id: dto.teacherId, schoolId, deletedAt: null }
        });
        if (!teacher)
            throw new common_1.NotFoundException("Teacher not found");
        const students = await this.prisma.student.findMany({
            where: { schoolId, sectionId: dto.sectionId, deletedAt: null, isActive: true }
        });
        return this.prisma.$transaction(async (tx) => {
            const assignment = await tx.assignment.create({
                data: {
                    schoolId,
                    sectionId: dto.sectionId,
                    subjectId: dto.subjectId,
                    teacherId: dto.teacherId,
                    title: dto.title,
                    description: dto.description,
                    dueDate: new Date(dto.dueDate)
                }
            });
            if (students.length > 0) {
                await tx.assignmentSubmission.createMany({
                    data: students.map((student) => ({
                        schoolId,
                        assignmentId: assignment.id,
                        studentId: student.id
                    }))
                });
            }
            return assignment;
        });
    }
    async remove(schoolId, id) {
        await this.findOneForSchool(schoolId, id);
        await this.prisma.assignment.update({ where: { id }, data: { deletedAt: new Date() } });
    }
};
exports.AssignmentService = AssignmentService;
exports.AssignmentService = AssignmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AssignmentService);
//# sourceMappingURL=assignment.service.js.map