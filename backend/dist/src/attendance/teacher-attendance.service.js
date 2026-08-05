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
exports.TeacherAttendanceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TeacherAttendanceService = class TeacherAttendanceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async bulkMark(schoolId, markedById, branchId, date, entries) {
        const branch = await this.prisma.branch.findFirst({ where: { id: branchId, schoolId } });
        if (!branch)
            throw new common_1.NotFoundException("Branch not found");
        const currentYear = await this.prisma.academicYear.findFirst({ where: { schoolId, isCurrent: true } });
        if (!currentYear)
            throw new common_1.NotFoundException("No current academic year is set for this school");
        const teacherIds = entries.map((e) => e.teacherId);
        const teachers = await this.prisma.teacher.findMany({
            where: { id: { in: teacherIds }, schoolId, branchId, deletedAt: null }
        });
        if (teachers.length !== teacherIds.length) {
            throw new common_1.NotFoundException("One or more teachers not found in this branch");
        }
        const day = new Date(date);
        await this.prisma.$transaction(entries.map((entry) => this.prisma.teacherAttendance.upsert({
            where: { teacherId_date: { teacherId: entry.teacherId, date: day } },
            create: {
                schoolId,
                academicYearId: currentYear.id,
                teacherId: entry.teacherId,
                date: day,
                status: entry.status,
                remarks: entry.remarks,
                markedById
            },
            update: { status: entry.status, remarks: entry.remarks, markedById }
        })));
        return this.findForBranchAndDate(schoolId, branchId, date);
    }
    findForBranchAndDate(schoolId, branchId, date) {
        return this.prisma.teacherAttendance.findMany({
            where: { schoolId, date: new Date(date), teacher: { branchId } },
            include: { teacher: { include: { user: { omit: { passwordHash: true } } } } },
            orderBy: { teacher: { user: { firstName: "asc" } } }
        });
    }
    findForTeacher(schoolId, teacherId, filters) {
        return this.prisma.teacherAttendance.findMany({
            where: {
                schoolId,
                teacherId,
                date: {
                    gte: filters.startDate ? new Date(filters.startDate) : undefined,
                    lte: filters.endDate ? new Date(filters.endDate) : undefined
                }
            },
            orderBy: { date: "desc" }
        });
    }
    async update(schoolId, id, data, markedById) {
        const record = await this.prisma.teacherAttendance.findFirst({ where: { id, schoolId } });
        if (!record)
            throw new common_1.NotFoundException("Attendance record not found");
        return this.prisma.teacherAttendance.update({ where: { id }, data: { ...data, markedById } });
    }
};
exports.TeacherAttendanceService = TeacherAttendanceService;
exports.TeacherAttendanceService = TeacherAttendanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TeacherAttendanceService);
//# sourceMappingURL=teacher-attendance.service.js.map