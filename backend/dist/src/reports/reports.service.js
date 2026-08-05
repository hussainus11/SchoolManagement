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
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReportsService = class ReportsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async attendanceSummary(schoolId, filters) {
        const dateFilter = {
            gte: filters.startDate ? new Date(filters.startDate) : undefined,
            lte: filters.endDate ? new Date(filters.endDate) : undefined
        };
        if (filters.sectionId) {
            const records = await this.prisma.studentAttendance.findMany({
                where: { schoolId, sectionId: filters.sectionId, date: dateFilter },
                include: { student: true }
            });
            return this.groupByStudent(records);
        }
        const records = await this.prisma.studentAttendance.findMany({
            where: {
                schoolId,
                date: dateFilter,
                section: filters.branchId ? { class: { branchId: filters.branchId } } : undefined
            },
            include: { section: { include: { class: true } } }
        });
        return this.groupBySection(records);
    }
    groupByStudent(records) {
        const map = new Map();
        for (const r of records) {
            const entry = map.get(r.studentId) ?? {
                firstName: r.student.firstName,
                lastName: r.student.lastName,
                present: 0,
                total: 0
            };
            entry.total += 1;
            if (r.status === "PRESENT" || r.status === "LATE" || r.status === "HALF_DAY")
                entry.present += 1;
            map.set(r.studentId, entry);
        }
        return Array.from(map.entries()).map(([studentId, v]) => ({
            studentId,
            firstName: v.firstName,
            lastName: v.lastName,
            present: v.present,
            total: v.total,
            percentage: v.total > 0 ? Number(((v.present / v.total) * 100).toFixed(2)) : 0
        }));
    }
    groupBySection(records) {
        const map = new Map();
        for (const r of records) {
            const entry = map.get(r.sectionId) ?? {
                className: r.section.class.name,
                sectionName: r.section.name,
                present: 0,
                total: 0
            };
            entry.total += 1;
            if (r.status === "PRESENT" || r.status === "LATE" || r.status === "HALF_DAY")
                entry.present += 1;
            map.set(r.sectionId, entry);
        }
        return Array.from(map.entries()).map(([sectionId, v]) => ({
            sectionId,
            className: v.className,
            sectionName: v.sectionName,
            present: v.present,
            total: v.total,
            percentage: v.total > 0 ? Number(((v.present / v.total) * 100).toFixed(2)) : 0
        }));
    }
    async feeCollectionSummary(schoolId, filters) {
        const invoices = await this.prisma.invoice.findMany({
            where: {
                schoolId,
                deletedAt: null,
                student: filters.branchId ? { branchId: filters.branchId } : undefined
            },
            select: { period: true, total: true, amountPaid: true }
        });
        const map = new Map();
        for (const inv of invoices) {
            const entry = map.get(inv.period) ?? { invoiced: 0, collected: 0 };
            entry.invoiced += Number(inv.total);
            entry.collected += Number(inv.amountPaid);
            map.set(inv.period, entry);
        }
        return Array.from(map.entries())
            .map(([period, v]) => ({
            period,
            invoiced: Number(v.invoiced.toFixed(2)),
            collected: Number(v.collected.toFixed(2)),
            outstanding: Number((v.invoiced - v.collected).toFixed(2))
        }))
            .sort((a, b) => (a.period < b.period ? 1 : -1));
    }
    async examPerformance(schoolId, examId) {
        const exam = await this.prisma.exam.findFirst({ where: { id: examId, schoolId } });
        if (!exam)
            throw new common_1.NotFoundException("Exam not found");
        const schedules = await this.prisma.examSchedule.findMany({
            where: { schoolId, examId },
            include: { subject: true, marks: true }
        });
        return schedules.map((schedule) => {
            const entered = schedule.marks.filter((m) => !m.isAbsent && m.marksObtained !== null);
            const passMarks = Number(schedule.passMarks);
            const passed = entered.filter((m) => Number(m.marksObtained) >= passMarks).length;
            const avgPercentage = entered.length > 0
                ? Number(((entered.reduce((sum, m) => sum + Number(m.marksObtained), 0) /
                    (entered.length * Number(schedule.maxMarks))) *
                    100).toFixed(2))
                : 0;
            return {
                subjectId: schedule.subjectId,
                subjectName: schedule.subject.name,
                totalEntered: entered.length,
                totalAbsent: schedule.marks.filter((m) => m.isAbsent).length,
                passed,
                passRate: entered.length > 0 ? Number(((passed / entered.length) * 100).toFixed(2)) : 0,
                averagePercentage: avgPercentage
            };
        });
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReportsService);
//# sourceMappingURL=reports.service.js.map