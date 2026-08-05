"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceService = void 0;
const common_1 = require("@nestjs/common");
const crypto = __importStar(require("node:crypto"));
const client_1 = require("../../generated/prisma/client");
const audit_service_1 = require("../audit/audit.service");
const notification_service_1 = require("../notification/notification.service");
const prisma_service_1 = require("../prisma/prisma.service");
function generateInvoiceNumber(period, admissionNumber) {
    const suffix = crypto.randomBytes(2).toString("hex");
    return `INV-${period}-${admissionNumber}-${suffix}`.toUpperCase();
}
let InvoiceService = class InvoiceService {
    prisma;
    auditService;
    notificationService;
    constructor(prisma, auditService, notificationService) {
        this.prisma = prisma;
        this.auditService = auditService;
        this.notificationService = notificationService;
    }
    notifyFeeDue(schoolId, studentId, period, total) {
        return this.notificationService.notifyStudentGuardians(schoolId, studentId, "FEE_DUE", "New invoice generated", `A new invoice for ${period} (total ${total.toFixed(2)}) has been generated.`, "/schoolmanagement/portal/fees");
    }
    findAllForSchool(schoolId, filters) {
        return this.prisma.invoice.findMany({
            where: { schoolId, deletedAt: null, ...filters },
            include: { student: true, items: { include: { feeHead: true } } },
            orderBy: { issueDate: "desc" }
        });
    }
    async findOneForSchool(schoolId, id) {
        const invoice = await this.prisma.invoice.findFirst({
            where: { id, schoolId, deletedAt: null },
            include: {
                student: true,
                items: { include: { feeHead: true } },
                payments: { orderBy: { paidAt: "desc" } }
            }
        });
        if (!invoice)
            throw new common_1.NotFoundException("Invoice not found");
        return invoice;
    }
    async buildInvoiceForStudent(tx, schoolId, student, academicYearId, period, dueDate) {
        if (!student.sectionId)
            return null;
        const section = await tx.section.findUnique({ where: { id: student.sectionId } });
        if (!section)
            return null;
        const structures = await tx.feeStructure.findMany({
            where: { schoolId, classId: section.classId, academicYearId, frequency: "MONTHLY" }
        });
        if (structures.length === 0)
            return null;
        const discounts = await tx.studentDiscount.findMany({
            where: { schoolId, studentId: student.id, isActive: true }
        });
        let subtotal = 0;
        let discountTotal = 0;
        const items = [];
        for (const structure of structures) {
            const amount = Number(structure.amount);
            const applicable = discounts.filter((d) => !d.feeHeadId || d.feeHeadId === structure.feeHeadId);
            let discount = 0;
            for (const d of applicable) {
                discount += d.type === "PERCENTAGE" ? (amount * Number(d.value)) / 100 : Number(d.value);
            }
            discount = Math.min(discount, amount);
            subtotal += amount;
            discountTotal += discount;
            items.push({ feeHeadId: structure.feeHeadId, amount, discount });
        }
        return tx.invoice.create({
            data: {
                schoolId,
                studentId: student.id,
                academicYearId,
                invoiceNumber: generateInvoiceNumber(period, student.admissionNumber),
                period,
                issueDate: new Date(),
                dueDate,
                subtotal,
                discountTotal,
                total: subtotal - discountTotal,
                items: { create: items }
            }
        });
    }
    async generateForStudent(schoolId, dto) {
        const student = await this.prisma.student.findFirst({
            where: { id: dto.studentId, schoolId, deletedAt: null }
        });
        if (!student)
            throw new common_1.NotFoundException("Student not found");
        const existing = await this.prisma.invoice.findFirst({
            where: { schoolId, studentId: student.id, period: dto.period, deletedAt: null }
        });
        if (existing)
            throw new common_1.ConflictException("An invoice for this student and period already exists");
        const invoice = await this.prisma.$transaction((tx) => this.buildInvoiceForStudent(tx, schoolId, student, dto.academicYearId, dto.period, new Date(dto.dueDate)));
        if (!invoice)
            throw new common_1.BadRequestException("No monthly fee structure found for this student's class");
        await this.notifyFeeDue(schoolId, student.id, dto.period, Number(invoice.total));
        return this.findOneForSchool(schoolId, invoice.id);
    }
    async generateForMonth(schoolId, dto) {
        const students = await this.prisma.student.findMany({
            where: {
                schoolId,
                deletedAt: null,
                isActive: true,
                branchId: dto.branchId,
                sectionId: { not: null }
            }
        });
        let created = 0;
        let skipped = 0;
        for (const student of students) {
            const existing = await this.prisma.invoice.findFirst({
                where: { schoolId, studentId: student.id, period: dto.period, deletedAt: null }
            });
            if (existing) {
                skipped++;
                continue;
            }
            const invoice = await this.prisma.$transaction((tx) => this.buildInvoiceForStudent(tx, schoolId, student, dto.academicYearId, dto.period, new Date(dto.dueDate)));
            if (invoice) {
                created++;
                await this.notifyFeeDue(schoolId, student.id, dto.period, Number(invoice.total));
            }
            else
                skipped++;
        }
        return { created, skipped, total: students.length };
    }
    async createManual(schoolId, dto) {
        const student = await this.prisma.student.findFirst({
            where: { id: dto.studentId, schoolId, deletedAt: null }
        });
        if (!student)
            throw new common_1.NotFoundException("Student not found");
        const year = await this.prisma.academicYear.findFirst({
            where: { id: dto.academicYearId, schoolId }
        });
        if (!year)
            throw new common_1.NotFoundException("Academic year not found");
        let subtotal = 0;
        let discountTotal = 0;
        for (const item of dto.items) {
            const feeHead = await this.prisma.feeHead.findFirst({ where: { id: item.feeHeadId, schoolId } });
            if (!feeHead)
                throw new common_1.NotFoundException(`Fee head ${item.feeHeadId} not found`);
            subtotal += item.amount;
            discountTotal += item.discount ?? 0;
        }
        const invoice = await this.prisma.invoice.create({
            data: {
                schoolId,
                studentId: dto.studentId,
                academicYearId: dto.academicYearId,
                invoiceNumber: generateInvoiceNumber(dto.period, student.admissionNumber),
                period: dto.period,
                issueDate: new Date(),
                dueDate: new Date(dto.dueDate),
                subtotal,
                discountTotal,
                total: subtotal - discountTotal,
                items: {
                    create: dto.items.map((i) => ({
                        feeHeadId: i.feeHeadId,
                        amount: i.amount,
                        discount: i.discount ?? 0
                    }))
                }
            }
        });
        await this.notifyFeeDue(schoolId, student.id, dto.period, Number(invoice.total));
        return this.findOneForSchool(schoolId, invoice.id);
    }
    computeStatus(total, amountPaid) {
        if (amountPaid <= 0)
            return client_1.InvoiceStatus.PENDING;
        if (amountPaid >= total)
            return client_1.InvoiceStatus.PAID;
        return client_1.InvoiceStatus.PARTIALLY_PAID;
    }
    async recordPayment(schoolId, invoiceId, recordedById, dto) {
        const invoice = await this.findOneForSchool(schoolId, invoiceId);
        const outstanding = Number(invoice.total) - Number(invoice.amountPaid);
        if (dto.amount > outstanding + 0.01) {
            throw new common_1.BadRequestException(`Payment of ${dto.amount} exceeds the outstanding balance of ${outstanding.toFixed(2)}`);
        }
        const newAmountPaid = Number(invoice.amountPaid) + dto.amount;
        const status = this.computeStatus(Number(invoice.total), newAmountPaid);
        await this.prisma.$transaction([
            this.prisma.payment.create({
                data: {
                    schoolId,
                    invoiceId,
                    amount: dto.amount,
                    method: dto.method,
                    reference: dto.reference,
                    paidAt: dto.paidAt ? new Date(dto.paidAt) : new Date(),
                    recordedById
                }
            }),
            this.prisma.invoice.update({ where: { id: invoiceId }, data: { amountPaid: newAmountPaid, status } })
        ]);
        await this.auditService.log({
            schoolId,
            userId: recordedById,
            action: "PAYMENT_RECORDED",
            entityType: "Invoice",
            entityId: invoiceId,
            after: { amount: dto.amount, method: dto.method }
        });
        return this.findOneForSchool(schoolId, invoiceId);
    }
    async remove(schoolId, id) {
        const invoice = await this.findOneForSchool(schoolId, id);
        if (Number(invoice.amountPaid) > 0) {
            throw new common_1.ConflictException("Cannot cancel an invoice that has payments recorded");
        }
        await this.prisma.invoice.update({
            where: { id },
            data: { deletedAt: new Date(), status: "CANCELLED" }
        });
    }
};
exports.InvoiceService = InvoiceService;
exports.InvoiceService = InvoiceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        notification_service_1.NotificationService])
], InvoiceService);
//# sourceMappingURL=invoice.service.js.map