import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PayslipService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, filters: { userId?: string; month?: string }) {
    return this.prisma.payslip.findMany({
      where: { schoolId, deletedAt: null, ...filters },
      include: { user: { select: { id: true, firstName: true, lastName: true, email: true } } },
      orderBy: { month: "desc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const payslip = await this.prisma.payslip.findFirst({
      where: { id, schoolId, deletedAt: null },
      include: {
        user: { select: { id: true, firstName: true, lastName: true, email: true } },
        salaryStructure: true
      }
    });
    if (!payslip) throw new NotFoundException("Payslip not found");
    return payslip;
  }

  private async computeAttendanceDeduction(
    schoolId: string,
    userId: string,
    month: string,
    basicSalary: number
  ) {
    const teacher = await this.prisma.teacher.findUnique({ where: { userId } });
    if (!teacher) return 0;

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
      if (record.status === "ABSENT") deductibleDays += 1;
      else if (record.status === "HALF_DAY") deductibleDays += 0.5;
    }

    return Math.round(deductibleDays * perDayRate * 100) / 100;
  }

  async generateForUser(schoolId: string, userId: string, month: string) {
    const existing = await this.prisma.payslip.findFirst({
      where: { schoolId, userId, month, deletedAt: null }
    });
    if (existing) throw new ConflictException("A payslip for this user and month already exists");

    const structure = await this.prisma.salaryStructure.findFirst({
      where: { schoolId, userId, isActive: true }
    });
    if (!structure) throw new BadRequestException("No active salary structure found for this user");

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

  async generateForMonth(schoolId: string, month: string) {
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

  async finalize(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    return this.prisma.payslip.update({ where: { id }, data: { status: "FINALIZED" } });
  }

  async markPaid(schoolId: string, id: string) {
    const payslip = await this.findOneForSchool(schoolId, id);
    if (payslip.status === "DRAFT") {
      throw new BadRequestException("Finalize the payslip before marking it paid");
    }
    return this.prisma.payslip.update({ where: { id }, data: { status: "PAID", paidAt: new Date() } });
  }

  async remove(schoolId: string, id: string) {
    const payslip = await this.findOneForSchool(schoolId, id);
    if (payslip.status === "PAID") {
      throw new ConflictException("Cannot delete a paid payslip");
    }
    await this.prisma.payslip.update({ where: { id }, data: { deletedAt: new Date() } });
  }
}
