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
exports.PortalService = void 0;
const common_1 = require("@nestjs/common");
const mark_service_1 = require("../marks/mark.service");
const prisma_service_1 = require("../prisma/prisma.service");
let PortalService = class PortalService {
    prisma;
    markService;
    constructor(prisma, markService) {
        this.prisma = prisma;
        this.markService = markService;
    }
    async getMyStudents(schoolId, userId, role) {
        if (role === "STUDENT") {
            const student = await this.prisma.student.findFirst({
                where: { userId, schoolId, deletedAt: null },
                include: { section: { include: { class: true } } }
            });
            return student ? [student] : [];
        }
        if (role === "PARENT") {
            const guardian = await this.prisma.guardian.findFirst({ where: { userId, schoolId } });
            if (!guardian)
                return [];
            const links = await this.prisma.studentGuardian.findMany({
                where: { guardianId: guardian.id },
                include: { student: { include: { section: { include: { class: true } } } } }
            });
            return links.map((l) => l.student).filter((s) => !s.deletedAt);
        }
        throw new common_1.ForbiddenException("Only parents and students can access the portal");
    }
    async assertAccess(schoolId, userId, role, studentId) {
        const students = await this.getMyStudents(schoolId, userId, role);
        const student = students.find((s) => s.id === studentId);
        if (!student)
            throw new common_1.ForbiddenException("You do not have access to this student's records");
        return student;
    }
    async getAttendance(schoolId, userId, role, studentId) {
        await this.assertAccess(schoolId, userId, role, studentId);
        return this.prisma.studentAttendance.findMany({
            where: { schoolId, studentId },
            orderBy: { date: "desc" },
            take: 90
        });
    }
    async getInvoices(schoolId, userId, role, studentId) {
        await this.assertAccess(schoolId, userId, role, studentId);
        return this.prisma.invoice.findMany({
            where: { schoolId, studentId, deletedAt: null },
            include: { items: { include: { feeHead: true } }, payments: true },
            orderBy: { issueDate: "desc" }
        });
    }
    async getSubmissions(schoolId, userId, role, studentId) {
        await this.assertAccess(schoolId, userId, role, studentId);
        return this.prisma.assignmentSubmission.findMany({
            where: { schoolId, studentId },
            include: { assignment: { include: { subject: true, section: { include: { class: true } } } } },
            orderBy: { assignment: { dueDate: "desc" } }
        });
    }
    async getExams(schoolId, userId, role, studentId) {
        const student = await this.assertAccess(schoolId, userId, role, studentId);
        if (!student.sectionId)
            return [];
        const section = await this.prisma.section.findUnique({ where: { id: student.sectionId } });
        if (!section)
            return [];
        return this.prisma.exam.findMany({
            where: { schoolId, examSchedules: { some: { classId: section.classId } } },
            include: { examType: true },
            orderBy: { startDate: "desc" }
        });
    }
    async getReportCard(schoolId, userId, role, studentId, examId) {
        await this.assertAccess(schoolId, userId, role, studentId);
        return this.markService.getReportCard(schoolId, studentId, examId);
    }
};
exports.PortalService = PortalService;
exports.PortalService = PortalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mark_service_1.MarkService])
], PortalService);
//# sourceMappingURL=portal.service.js.map