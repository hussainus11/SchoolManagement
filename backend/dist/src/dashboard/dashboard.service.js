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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const PASS_THRESHOLD_PERCENT = 40;
function currentPeriod(offsetMonths = 0) {
    const now = new Date();
    now.setMonth(now.getMonth() - offsetMonths);
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}
let DashboardService = class DashboardService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async examPassRate(schoolId, examId, branchId) {
        const schedules = await this.prisma.examSchedule.findMany({
            where: { schoolId, examId, branchId },
            include: { marks: true }
        });
        if (schedules.length === 0)
            return null;
        const totals = new Map();
        for (const schedule of schedules) {
            const max = Number(schedule.maxMarks);
            for (const mark of schedule.marks) {
                if (mark.isAbsent || mark.marksObtained === null)
                    continue;
                const entry = totals.get(mark.studentId) ?? { obtained: 0, max: 0 };
                entry.obtained += Number(mark.marksObtained);
                entry.max += max;
                totals.set(mark.studentId, entry);
            }
        }
        if (totals.size === 0)
            return null;
        let passing = 0;
        for (const { obtained, max } of totals.values()) {
            if (max > 0 && (obtained / max) * 100 >= PASS_THRESHOLD_PERCENT)
                passing++;
        }
        return { studentsGraded: totals.size, passing, rate: (passing / totals.size) * 100 };
    }
    async getSummary(schoolId, branchId) {
        const byStudentBranch = branchId ? { student: { branchId } } : {};
        const bySectionBranch = branchId ? { section: { class: { branchId } } } : {};
        const [totalStudents, recentExams, attendanceRows, last30DaysAttendance, thisMonthInvoices, submissionCounts, studentsWithMarks, feeInvoices, recentAssignments] = await Promise.all([
            this.prisma.student.count({ where: { schoolId, isActive: true, deletedAt: null, branchId } }),
            this.prisma.exam.findMany({ where: { schoolId }, orderBy: { startDate: "desc" }, take: 2 }),
            this.prisma.studentAttendance.findMany({
                where: { schoolId, ...byStudentBranch },
                orderBy: { date: "desc" },
                take: 1,
                select: { date: true }
            }),
            this.prisma.studentAttendance.findMany({
                where: { schoolId, date: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }, ...byStudentBranch },
                select: { status: true }
            }),
            this.prisma.invoice.findMany({
                where: { schoolId, deletedAt: null, period: currentPeriod(), ...byStudentBranch },
                select: { total: true, amountPaid: true }
            }),
            this.prisma.assignmentSubmission.groupBy({
                by: ["status"],
                where: { schoolId, ...byStudentBranch },
                _count: true
            }),
            this.prisma.mark.findMany({
                where: { schoolId, isAbsent: false, marksObtained: { not: null }, ...byStudentBranch },
                select: { studentId: true, marksObtained: true, examSchedule: { select: { maxMarks: true } } }
            }),
            this.prisma.invoice.findMany({
                where: { schoolId, deletedAt: null, ...byStudentBranch },
                select: { period: true, total: true, amountPaid: true }
            }),
            this.prisma.assignment.findMany({
                where: { schoolId, deletedAt: null, ...bySectionBranch },
                orderBy: { createdAt: "desc" },
                take: 6,
                include: {
                    subject: true,
                    section: { include: { class: true } },
                    submissions: { select: { status: true } }
                }
            })
        ]);
        const [currentExam, previousExam] = recentExams;
        const currentResult = currentExam ? await this.examPassRate(schoolId, currentExam.id, branchId) : null;
        const previousResult = previousExam ? await this.examPassRate(schoolId, previousExam.id, branchId) : null;
        const currentSuccessRate = currentResult ? Number(currentResult.rate.toFixed(1)) : 0;
        const previousSuccessRate = previousResult ? Number(previousResult.rate.toFixed(1)) : currentSuccessRate;
        const passingStudents = currentResult?.passing ?? 0;
        const latestDate = attendanceRows[0]?.date;
        const latestDayAttendance = latestDate
            ? await this.prisma.studentAttendance.findMany({
                where: { schoolId, date: latestDate, ...byStudentBranch },
                select: { status: true }
            })
            : [];
        const attendanceTotal = latestDayAttendance.length || 1;
        const countStatus = (status) => latestDayAttendance.filter((a) => a.status === status).length;
        const attendanceBreakdown = {
            present: Number(((countStatus("PRESENT") / attendanceTotal) * 100).toFixed(1)),
            absent: Number(((countStatus("ABSENT") / attendanceTotal) * 100).toFixed(1)),
            late: Number(((countStatus("LATE") / attendanceTotal) * 100).toFixed(1))
        };
        const statusCount = (status) => submissionCounts.find((s) => s.status === status)?._count ?? 0;
        const gradedCount = statusCount("GRADED");
        const totalSubmissions = submissionCounts.reduce((sum, s) => sum + s._count, 0);
        const activityRate = totalSubmissions > 0 ? Number(((gradedCount / totalSubmissions) * 100).toFixed(1)) : 0;
        const inProgressCount = totalSubmissions - gradedCount;
        const attendance30Total = last30DaysAttendance.length || 1;
        const attendance30Present = last30DaysAttendance.filter((a) => a.status === "PRESENT" || a.status === "LATE").length;
        const attendanceRateBar = Number(((attendance30Present / attendance30Total) * 100).toFixed(0));
        const monthInvoiced = thisMonthInvoices.reduce((sum, i) => sum + Number(i.total), 0);
        const monthCollected = thisMonthInvoices.reduce((sum, i) => sum + Number(i.amountPaid), 0);
        const feeCollectionRateBar = monthInvoiced > 0 ? Number(((monthCollected / monthInvoiced) * 100).toFixed(0)) : 0;
        const studentTotals = new Map();
        for (const mark of studentsWithMarks) {
            const entry = studentTotals.get(mark.studentId) ?? { obtained: 0, max: 0 };
            entry.obtained += Number(mark.marksObtained);
            entry.max += Number(mark.examSchedule.maxMarks);
            studentTotals.set(mark.studentId, entry);
        }
        const topStudentIds = Array.from(studentTotals.entries())
            .filter(([, v]) => v.max > 0)
            .map(([studentId, v]) => ({ studentId, percentage: (v.obtained / v.max) * 100 }))
            .sort((a, b) => b.percentage - a.percentage)
            .slice(0, 4);
        const topStudentRecords = await this.prisma.student.findMany({
            where: { id: { in: topStudentIds.map((s) => s.studentId) } },
            select: { id: true, firstName: true, lastName: true }
        });
        const topStudents = topStudentIds.map((s) => {
            const record = topStudentRecords.find((r) => r.id === s.studentId);
            return {
                id: s.studentId,
                name: record ? `${record.firstName} ${record.lastName}` : "Unknown",
                percentage: Number(s.percentage.toFixed(1))
            };
        });
        const feeByPeriod = new Map();
        for (const inv of feeInvoices) {
            feeByPeriod.set(inv.period, (feeByPeriod.get(inv.period) ?? 0) + Number(inv.amountPaid));
        }
        const feeCollectionByMonth = Array.from(feeByPeriod.entries())
            .map(([period, collected]) => ({ period, collected: Number(collected.toFixed(2)) }))
            .sort((a, b) => (a.period < b.period ? -1 : 1))
            .slice(-6);
        const assignments = recentAssignments.map((a) => {
            const total = a.submissions.length || 1;
            const submitted = a.submissions.filter((s) => s.status !== "PENDING").length;
            const graded = a.submissions.filter((s) => s.status === "GRADED").length;
            return {
                id: a.id,
                title: a.title,
                subject: a.subject.name,
                className: `${a.section.class.name} - ${a.section.name}`,
                submissionRate: Number(((submitted / total) * 100).toFixed(0)),
                gradingRate: Number(((graded / total) * 100).toFixed(0))
            };
        });
        return {
            totalStudents,
            passingStudents,
            currentSuccessRate,
            previousSuccessRate,
            attendanceBreakdown,
            activityRate,
            attendanceRateBar,
            feeCollectionRateBar,
            inProgressCount,
            completedCount: gradedCount,
            topStudents,
            feeCollectionByMonth,
            recentAssignments: assignments
        };
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map