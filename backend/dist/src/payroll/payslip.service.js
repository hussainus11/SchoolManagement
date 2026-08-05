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
exports.PayslipService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PayslipService = class PayslipService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, filters) {
        return this.prisma.payslip.findMany({
            where: { schoolId, deletedAt: null, ...filters },
            include: { user: { select: { id: true, firstName: true, lastName: true, email: true } } },
            orderBy: { month: "desc" }
        });
    }
    async findOneForSchool(schoolId, id) {
        const payslip = await this.prisma.payslip.findFirst({
            where: { id, schoolId, deletedAt: null },
            include: {
                user: { select: { id: true, firstName: true, lastName: true, email: true } },
                salaryStructure: true
            }
        });
        if (!payslip)
            throw new common_1.NotFoundException("Payslip not found");
        return payslip;
    }
    async computeAttendanceDeduction(schoolId, userId, month, basicSalary) {
        const teacher = await this.prisma.teacher.findUnique({ where: { userId } });
        if (!teacher)
            return 0;
        const [year, monthNum] = month.split("-").map(Number);
        const monthStart = new Date(year, monthNum - 1, 1);
        const monthEnd = new Date(year, monthNum, 0, 23, 59, 59, 999);
        const daysInMonth = monthEnd.getDate();
        const records = await this.prisma.teacherAttendance.findMany({
            where: { schoolId, teacherId: teacher.id, date: { gte: monthStart, lte: monthEnd } }
        });
        const perDayRate = basicSalary / daysInMonth;
        let deductibleDays = 0;
        for (const record of records) {
            if (record.status === "ABSENT")
                deductibleDays += 1;
            else if (record.status === "HALF_DAY")
                deductibleDays += 0.5;
        }
        return Math.round(deductibleDays * perDayRate * 100) / 100;
    }
    async generateForUser(schoolId, userId, month) {
        const existing = await this.prisma.payslip.findFirst({
            where: { schoolId, userId, month, deletedAt: null }
        });
        if (existing)
            throw new common_1.ConflictException("A payslip for this user and month already exists");
        const structure = await this.prisma.salaryStructure.findFirst({
            where: { schoolId, userId, isActive: true }
        });
        if (!structure)
            throw new common_1.BadRequestException("No active salary structure found for this user");
        const basicSalary = Number(structure.basicSalary);
        const allowances = Number(structure.allowances);
        const attendanceDeduction = await this.computeAttendanceDeduction(schoolId, userId, month, basicSalary);
        const otherDeductions = Number(structure.fixedDeductions);
        const netSalary = basicSalary + allowances - attendanceDeduction - otherDeductions;
        const payslip = await this.prisma.payslip.create({
            data: {
                schoolId,
                userId,
                salaryStructureId: structure.id,
                month,
                basicSalary,
                allowances,
                attendanceDeduction,
                otherDeductions,
                netSalary
            }
        });
        return this.findOneForSchool(schoolId, payslip.id);
    }
    async generateForMonth(schoolId, month) {
        const structures = await this.prisma.salaryStructure.findMany({ where: { schoolId, isActive: true } });
        let created = 0;
        let skipped = 0;
        for (const structure of structures) {
            const existing = await this.prisma.payslip.findFirst({
                where: { schoolId, userId: structure.userId, month, deletedAt: null }
            });
            if (existing) {
                skipped++;
                continue;
            }
            await this.generateForUser(schoolId, structure.userId, month);
            created++;
        }
        return { created, skipped, total: structures.length };
    }
    async finalize(schoolId, id) {
        await this.findOneForSchool(schoolId, id);
        return this.prisma.payslip.update({ where: { id }, data: { status: "FINALIZED" } });
    }
    async markPaid(schoolId, id) {
        const payslip = await this.findOneForSchool(schoolId, id);
        if (payslip.status === "DRAFT") {
            throw new common_1.BadRequestException("Finalize the payslip before marking it paid");
        }
        return this.prisma.payslip.update({ where: { id }, data: { status: "PAID", paidAt: new Date() } });
    }
    async remove(schoolId, id) {
        const payslip = await this.findOneForSchool(schoolId, id);
        if (payslip.status === "PAID") {
            throw new common_1.ConflictException("Cannot delete a paid payslip");
        }
        await this.prisma.payslip.update({ where: { id }, data: { deletedAt: new Date() } });
    }
};
exports.PayslipService = PayslipService;
exports.PayslipService = PayslipService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PayslipService);
//# sourceMappingURL=payslip.service.js.map