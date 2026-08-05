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
exports.SubmissionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SubmissionService = class SubmissionService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findForAssignment(schoolId, assignmentId) {
        return this.prisma.assignmentSubmission.findMany({
            where: { schoolId, assignmentId },
            include: { student: true },
            orderBy: { student: { firstName: "asc" } }
        });
    }
    findForStudent(schoolId, studentId) {
        return this.prisma.assignmentSubmission.findMany({
            where: { schoolId, studentId },
            include: { assignment: { include: { subject: true, section: { include: { class: true } } } } },
            orderBy: { assignment: { dueDate: "desc" } }
        });
    }
    async assertInSchool(schoolId, id) {
        const submission = await this.prisma.assignmentSubmission.findFirst({
            where: { id, schoolId },
            include: { assignment: true }
        });
        if (!submission)
            throw new common_1.NotFoundException("Submission not found");
        return submission;
    }
    async record(schoolId, id, submissionText) {
        const submission = await this.assertInSchool(schoolId, id);
        const now = new Date();
        const status = now > submission.assignment.dueDate ? "LATE" : "SUBMITTED";
        return this.prisma.assignmentSubmission.update({
            where: { id },
            data: { submissionText, submittedAt: now, status }
        });
    }
    async grade(schoolId, id, gradedById, marksObtained, feedback) {
        await this.assertInSchool(schoolId, id);
        return this.prisma.assignmentSubmission.update({
            where: { id },
            data: { marksObtained, feedback, gradedById, gradedAt: new Date(), status: "GRADED" }
        });
    }
};
exports.SubmissionService = SubmissionService;
exports.SubmissionService = SubmissionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SubmissionService);
//# sourceMappingURL=submission.service.js.map