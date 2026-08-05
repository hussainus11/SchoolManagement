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
exports.MarkService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const grade_scale_service_1 = require("./grade-scale.service");
let MarkService = class MarkService {
    prisma;
    gradeScaleService;
    constructor(prisma, gradeScaleService) {
        this.prisma = prisma;
        this.gradeScaleService = gradeScaleService;
    }
    async assertExamScheduleInSchool(schoolId, examScheduleId) {
        const schedule = await this.prisma.examSchedule.findFirst({
            where: { id: examScheduleId, schoolId },
            include: { class: true, subject: true }
        });
        if (!schedule)
            throw new common_1.NotFoundException("Exam schedule not found");
        return schedule;
    }
    async bulkEnter(schoolId, enteredById, examScheduleId, entries) {
        const schedule = await this.assertExamScheduleInSchool(schoolId, examScheduleId);
        const studentIds = entries.map((e) => e.studentId);
        const students = await this.prisma.student.findMany({
            where: { id: { in: studentIds }, schoolId, section: { classId: schedule.classId } }
        });
        if (students.length !== studentIds.length) {
            throw new common_1.NotFoundException("One or more students not found in this class");
        }
        await this.prisma.$transaction(entries.map((entry) => this.prisma.mark.upsert({
            where: { examScheduleId_studentId: { examScheduleId, studentId: entry.studentId } },
            create: {
                schoolId,
                examScheduleId,
                studentId: entry.studentId,
                marksObtained: entry.isAbsent ? null : entry.marksObtained,
                isAbsent: !!entry.isAbsent,
                remarks: entry.remarks,
                enteredById
            },
            update: {
                marksObtained: entry.isAbsent ? null : entry.marksObtained,
                isAbsent: !!entry.isAbsent,
                remarks: entry.remarks,
                enteredById
            }
        })));
        return this.findForExamSchedule(schoolId, examScheduleId);
    }
    findForExamSchedule(schoolId, examScheduleId) {
        return this.prisma.mark.findMany({
            where: { schoolId, examScheduleId },
            include: { student: true },
            orderBy: { student: { firstName: "asc" } }
        });
    }
    async getReportCard(schoolId, studentId, examId) {
        const student = await this.prisma.student.findFirst({
            where: { id: studentId, schoolId },
            include: { section: { include: { class: true } } }
        });
        if (!student)
            throw new common_1.NotFoundException("Student not found");
        if (!student.section)
            throw new common_1.NotFoundException("Student is not assigned to a section");
        const exam = await this.prisma.exam.findFirst({ where: { id: examId, schoolId }, include: { examType: true } });
        if (!exam)
            throw new common_1.NotFoundException("Exam not found");
        const schedules = await this.prisma.examSchedule.findMany({
            where: { schoolId, examId, classId: student.section.classId },
            include: { subject: true, marks: { where: { studentId } } }
        });
        let totalMax = 0;
        let totalObtained = 0;
        const subjects = schedules.map((schedule) => {
            const mark = schedule.marks[0];
            const maxMarks = Number(schedule.maxMarks);
            const passMarks = Number(schedule.passMarks);
            if (mark && !mark.isAbsent && mark.marksObtained !== null) {
                totalMax += maxMarks;
                totalObtained += Number(mark.marksObtained);
            }
            return {
                subjectId: schedule.subjectId,
                subjectName: schedule.subject.name,
                maxMarks,
                passMarks,
                marksObtained: mark && !mark.isAbsent ? mark.marksObtained : null,
                isAbsent: mark?.isAbsent ?? false,
                status: !mark ? "PENDING" : mark.isAbsent ? "ABSENT" : "GRADED"
            };
        });
        const percentage = totalMax > 0 ? Number(((totalObtained / totalMax) * 100).toFixed(2)) : 0;
        const gradeScale = totalMax > 0 ? await this.gradeScaleService.resolveGrade(schoolId, percentage) : null;
        return {
            student: { id: student.id, firstName: student.firstName, lastName: student.lastName },
            exam: { id: exam.id, name: exam.name, examType: exam.examType.name },
            subjects,
            totalMax,
            totalObtained,
            percentage,
            grade: gradeScale?.grade ?? null
        };
    }
};
exports.MarkService = MarkService;
exports.MarkService = MarkService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        grade_scale_service_1.GradeScaleService])
], MarkService);
//# sourceMappingURL=mark.service.js.map