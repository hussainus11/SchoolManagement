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
exports.ExpenseService = void 0;
const common_1 = require("@nestjs/common");
const audit_service_1 = require("../audit/audit.service");
const prisma_service_1 = require("../prisma/prisma.service");
let ExpenseService = class ExpenseService {
    prisma;
    auditService;
    constructor(prisma, auditService) {
        this.prisma = prisma;
        this.auditService = auditService;
    }
    findAllForSchool(schoolId, filters) {
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
    async findOneForSchool(schoolId, id) {
        const expense = await this.prisma.expense.findFirst({
            where: { id, schoolId, deletedAt: null },
            include: {
                category: true,
                vendor: true,
                requestedBy: { select: { id: true, firstName: true, lastName: true } },
                approvedBy: { select: { id: true, firstName: true, lastName: true } }
            }
        });
        if (!expense)
            throw new common_1.NotFoundException("Expense not found");
        return expense;
    }
    async create(schoolId, requestedById, dto) {
        const branch = await this.prisma.branch.findFirst({ where: { id: dto.branchId, schoolId } });
        if (!branch)
            throw new common_1.NotFoundException("Branch not found");
        const category = await this.prisma.expenseCategory.findFirst({
            where: { id: dto.categoryId, schoolId }
        });
        if (!category)
            throw new common_1.NotFoundException("Expense category not found");
        if (dto.vendorId) {
            const vendor = await this.prisma.vendor.findFirst({ where: { id: dto.vendorId, schoolId } });
            if (!vendor)
                throw new common_1.NotFoundException("Vendor not found");
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
    async approve(schoolId, id, approvedById) {
        const expense = await this.findOneForSchool(schoolId, id);
        if (expense.status !== "PENDING") {
            throw new common_1.BadRequestException("Only pending expenses can be approved");
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
    async reject(schoolId, id, approvedById) {
        const expense = await this.findOneForSchool(schoolId, id);
        if (expense.status !== "PENDING") {
            throw new common_1.BadRequestException("Only pending expenses can be rejected");
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
    async markPaid(schoolId, id) {
        const expense = await this.findOneForSchool(schoolId, id);
        if (expense.status !== "APPROVED") {
            throw new common_1.BadRequestException("Only approved expenses can be marked paid");
        }
        return this.prisma.expense.update({ where: { id }, data: { status: "PAID" } });
    }
    async remove(schoolId, id) {
        const expense = await this.findOneForSchool(schoolId, id);
        if (expense.status === "PAID")
            throw new common_1.ConflictException("Cannot delete a paid expense");
        await this.prisma.expense.update({ where: { id }, data: { deletedAt: new Date() } });
    }
};
exports.ExpenseService = ExpenseService;
exports.ExpenseService = ExpenseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService])
], ExpenseService);
//# sourceMappingURL=expense.service.js.map