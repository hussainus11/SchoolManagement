import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { ExpenseStatus } from "../../generated/prisma/client";
import { AuditService } from "../audit/audit.service";
import { PrismaService } from "../prisma/prisma.service";
import { CreateExpenseDto } from "./dto/create-expense.dto";

@Injectable()
export class ExpenseService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly auditService: AuditService
  ) {}

  findAllForSchool(
    schoolId: string,
    filters: { branchId?: string; status?: ExpenseStatus; categoryId?: string }
  ) {
    return this.prisma.expense.findMany({
      where: { schoolId, deletedAt: null, ...filters },
      include: {
        category: true,
        vendor: true,
        requestedBy: { select: { id: true, firstName: true, lastName: true } },
        approvedBy: { select: { id: true, firstName: true, lastName: true } }
      },
      orderBy: { expenseDate: "desc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const expense = await this.prisma.expense.findFirst({
      where: { id, schoolId, deletedAt: null },
      include: {
        category: true,
        vendor: true,
        requestedBy: { select: { id: true, firstName: true, lastName: true } },
        approvedBy: { select: { id: true, firstName: true, lastName: true } }
      }
    });
    if (!expense) throw new NotFoundException("Expense not found");
    return expense;
  }

  async create(schoolId: string, requestedById: string, dto: CreateExpenseDto) {
    const branch = await this.prisma.branch.findFirst({ where: { id: dto.branchId, schoolId } });
    if (!branch) throw new NotFoundException("Branch not found");

    const category = await this.prisma.expenseCategory.findFirst({
      where: { id: dto.categoryId, schoolId }
    });
    if (!category) throw new NotFoundException("Expense category not found");

    if (dto.vendorId) {
      const vendor = await this.prisma.vendor.findFirst({ where: { id: dto.vendorId, schoolId } });
      if (!vendor) throw new NotFoundException("Vendor not found");
    }

    return this.prisma.expense.create({
      data: {
        schoolId,
        branchId: dto.branchId,
        categoryId: dto.categoryId,
        vendorId: dto.vendorId,
        description: dto.description,
        amount: dto.amount,
        expenseDate: new Date(dto.expenseDate),
        requestedById
      },
      include: { category: true, vendor: true }
    });
  }

  async approve(schoolId: string, id: string, approvedById: string) {
    const expense = await this.findOneForSchool(schoolId, id);
    if (expense.status !== "PENDING") {
      throw new BadRequestException("Only pending expenses can be approved");
    }

    const updated = await this.prisma.expense.update({
      where: { id },
      data: { status: "APPROVED", approvedById, approvedAt: new Date() }
    });

    await this.auditService.log({
      schoolId,
      userId: approvedById,
      action: "EXPENSE_APPROVED",
      entityType: "Expense",
      entityId: id
    });
    return updated;
  }

  async reject(schoolId: string, id: string, approvedById: string) {
    const expense = await this.findOneForSchool(schoolId, id);
    if (expense.status !== "PENDING") {
      throw new BadRequestException("Only pending expenses can be rejected");
    }

    const updated = await this.prisma.expense.update({
      where: { id },
      data: { status: "REJECTED", approvedById, approvedAt: new Date() }
    });

    await this.auditService.log({
      schoolId,
      userId: approvedById,
      action: "EXPENSE_REJECTED",
      entityType: "Expense",
      entityId: id
    });
    return updated;
  }

  async markPaid(schoolId: string, id: string) {
    const expense = await this.findOneForSchool(schoolId, id);
    if (expense.status !== "APPROVED") {
      throw new BadRequestException("Only approved expenses can be marked paid");
    }
    return this.prisma.expense.update({ where: { id }, data: { status: "PAID" } });
  }

  async remove(schoolId: string, id: string) {
    const expense = await this.findOneForSchool(schoolId, id);
    if (expense.status === "PAID") throw new ConflictException("Cannot delete a paid expense");
    await this.prisma.expense.update({ where: { id }, data: { deletedAt: new Date() } });
  }
}
