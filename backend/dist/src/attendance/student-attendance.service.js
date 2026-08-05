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
exports.StudentAttendanceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let StudentAttendanceService = class StudentAttendanceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async assertSectionInSchool(schoolId, sectionId) {
        const section = await this.prisma.section.findFirst({
            where: { id: sectionId, class: { schoolId } },
            include: { class: true }
        });
        if (!section)
            throw new common_1.NotFoundException("Section not found");
        return section;
    }
    async bulkMark(schoolId, markedById, sectionId, date, entries) {
        const section = await this.assertSectionInSchool(schoolId, sectionId);
        const studentIds = entries.map((e) => e.studentId);
        const students = await this.prisma.student.findMany({
            where: { id: { in: studentIds }, schoolId, sectionId }
        });
        if (students.length !== studentIds.length) {
            throw new common_1.NotFoundException("One or more students not found in this section");
        }
        const day = new Date(date);
        await this.prisma.$transaction(entries.map((entry) => this.prisma.studentAttendance.upsert({
            where: { studentId_date: { studentId: entry.studentId, date: day } },
            create: {
                schoolId,
                academicYearId: section.class.academicYearId,
                sectionId,
                studentId: entry.studentId,
                date: day,
                status: entry.status,
                remarks: entry.remarks,
                markedById
            },
            update: { status: entry.status, remarks: entry.remarks, markedById }
        })));
        return this.findForSectionAndDate(schoolId, sectionId, date);
    }
    findForSectionAndDate(schoolId, sectionId, date) {
        return this.prisma.studentAttendance.findMany({
            where: { schoolId, sectionId, date: new Date(date) },
            include: { student: true },
            orderBy: { student: { firstName: "asc" } }
        });
    }
    findForStudent(schoolId, studentId, filters) {
        return this.prisma.studentAttendance.findMany({
            where: {
                schoolId,
                studentId,
                date: {
                    gte: filters.startDate ? new Date(filters.startDate) : undefined,
                    lte: filters.endDate ? new Date(filters.endDate) : undefined
                }
            },
            orderBy: { date: "desc" }
        });
    }
    async update(schoolId, id, data, markedById) {
        const record = await this.prisma.studentAttendance.findFirst({ where: { id, schoolId } });
        if (!record)
            throw new common_1.NotFoundException("Attendance record not found");
        return this.prisma.studentAttendance.update({ where: { id }, data: { ...data, markedById } });
    }
};
exports.StudentAttendanceService = StudentAttendanceService;
exports.StudentAttendanceService = StudentAttendanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StudentAttendanceService);
//# sourceMappingURL=student-attendance.service.js.map