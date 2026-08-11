import { BadRequestException, ConflictException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import * as crypto from "node:crypto";
import { InvoiceStatus, Prisma } from "../../generated/prisma/client";
import { AuditService } from "../audit/audit.service";
import { NotificationService } from "../notification/notification.service";
import { PrismaService } from "../prisma/prisma.service";
import { WhatsappService } from "../whatsapp/whatsapp.service";
import { CreateInvoiceDto } from "./dto/create-invoice.dto";
import { GenerateMonthlyInvoicesDto } from "./dto/generate-monthly-invoices.dto";
import { GenerateStudentInvoiceDto } from "./dto/generate-student-invoice.dto";
import { RecordPaymentDto } from "./dto/record-payment.dto";

function generateInvoiceNumber(period: string, admissionNumber: string) {
  const suffix = crypto.randomBytes(2).toString("hex");
  return `INV-${period}-${admissionNumber}-${suffix}`.toUpperCase();
}

interface StudentForInvoice {
  id: string;
  sectionId: string | null;
  admissionNumber: string;
}

@Injectable()
export class InvoiceService {
  private readonly logger = new Logger(InvoiceService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly auditService: AuditService,
    private readonly notificationService: NotificationService,
    private readonly whatsappService: WhatsappService
  ) {}

  private async notifyFeeDue(
    schoolId: string,
    student: StudentForInvoice & { firstName: string; lastName: string },
    period: string,
    total: number,
    dueDate: Date
  ) {
    await this.notificationService.notifyStudentGuardians(
      schoolId,
      student.id,
      "FEE_DUE",
      "New invoice generated",
      `A new invoice for ${period} (total ${total.toFixed(2)}) has been generated.`,
      "/schoolmanagement/portal/fees"
    );

    // Additive, best-effort: a school that hasn't connected WhatsApp (or any queueing failure)
    // must never block invoice generation, which is why this is isolated in its own try/catch.
    try {
      await this.whatsappService.queueForStudentGuardians(schoolId, student.id, "fee_reminder", {
        student_name: `${student.firstName} ${student.lastName}`,
        amount: total.toFixed(2),
        due_date: dueDate.toDateString()
      });
    } catch (error) {
      this.logger.error(`Failed to queue WhatsApp fee reminder for student ${student.id}: ${(error as Error).message}`);
    }
  }

  findAllForSchool(
    schoolId: string,
    filters: { studentId?: string; status?: InvoiceStatus; academicYearId?: string; period?: string }
  ) {
    return this.prisma.invoice.findMany({
      where: { schoolId, deletedAt: null, ...filters },
      include: { student: true, items: { include: { feeHead: true } } },
      orderBy: { issueDate: "desc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const invoice = await this.prisma.invoice.findFirst({
      where: { id, schoolId, deletedAt: null },
      include: {
        student: true,
        items: { include: { feeHead: true } },
        payments: { orderBy: { paidAt: "desc" } }
      }
    });
    if (!invoice) throw new NotFoundException("Invoice not found");
    return invoice;
  }

  private async buildInvoiceForStudent(
    tx: Prisma.TransactionClient,
    schoolId: string,
    student: StudentForInvoice,
    academicYearId: string,
    period: string,
    dueDate: Date
  ) {
    if (!student.sectionId) return null;

    const section = await tx.section.findUnique({ where: { id: student.sectionId } });
    if (!section) return null;

    const structures = await tx.feeStructure.findMany({
      where: { schoolId, classId: section.classId, academicYearId, frequency: "MONTHLY" }
    });
    if (structures.length === 0) return null;

    const discounts = await tx.studentDiscount.findMany({
      where: { schoolId, studentId: student.id, isActive: true }
    });

    // Collective/sibling discounts live on the guardian, not the student, so a family with
    // multiple enrolled children gets it applied to each child's invoice individually rather
    // than needing to be configured per class or per student.
    const guardianLinks = await tx.studentGuardian.findMany({
      where: { studentId: student.id },
      select: { guardianId: true }
    });
    const guardianDiscounts = guardianLinks.length
      ? await tx.guardianDiscount.findMany({
          where: { schoolId, guardianId: { in: guardianLinks.map((g) => g.guardianId) }, isActive: true }
        })
      : [];

    const allDiscounts = [...discounts, ...guardianDiscounts];

    let subtotal = 0;
    let discountTotal = 0;
    const items: { feeHeadId: string; amount: number; discount: number }[] = [];

    for (const structure of structures) {
      const amount = Number(structure.amount);
      const applicable = allDiscounts.filter((d) => !d.feeHeadId || d.feeHeadId === structure.feeHeadId);
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

  async generateForStudent(schoolId: string, dto: GenerateStudentInvoiceDto) {
    const student = await this.prisma.student.findFirst({
      where: { id: dto.studentId, schoolId, deletedAt: null }
    });
    if (!student) throw new NotFoundException("Student not found");

    const existing = await this.prisma.invoice.findFirst({
      where: { schoolId, studentId: student.id, period: dto.period, deletedAt: null }
    });
    if (existing) throw new ConflictException("An invoice for this student and period already exists");

    const invoice = await this.prisma.$transaction((tx) =>
      this.buildInvoiceForStudent(tx, schoolId, student, dto.academicYearId, dto.period, new Date(dto.dueDate))
    );
    if (!invoice) throw new BadRequestException("No monthly fee structure found for this student's class");
    await this.notifyFeeDue(schoolId, student, dto.period, Number(invoice.total), new Date(dto.dueDate));
    return this.findOneForSchool(schoolId, invoice.id);
  }

  async generateForMonth(schoolId: string, dto: GenerateMonthlyInvoicesDto) {
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

      const invoice = await this.prisma.$transaction((tx) =>
        this.buildInvoiceForStudent(tx, schoolId, student, dto.academicYearId, dto.period, new Date(dto.dueDate))
      );
      if (invoice) {
        created++;
        await this.notifyFeeDue(schoolId, student, dto.period, Number(invoice.total), new Date(dto.dueDate));
      } else skipped++;
    }

    return { created, skipped, total: students.length };
  }

  async createManual(schoolId: string, dto: CreateInvoiceDto) {
    const student = await this.prisma.student.findFirst({
      where: { id: dto.studentId, schoolId, deletedAt: null }
    });
    if (!student) throw new NotFoundException("Student not found");

    const year = await this.prisma.academicYear.findFirst({
      where: { id: dto.academicYearId, schoolId }
    });
    if (!year) throw new NotFoundException("Academic year not found");

    let subtotal = 0;
    let discountTotal = 0;
    for (const item of dto.items) {
      const feeHead = await this.prisma.feeHead.findFirst({ where: { id: item.feeHeadId, schoolId } });
      if (!feeHead) throw new NotFoundException(`Fee head ${item.feeHeadId} not found`);
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

    await this.notifyFeeDue(schoolId, student, dto.period, Number(invoice.total), new Date(dto.dueDate));
    return this.findOneForSchool(schoolId, invoice.id);
  }

  private computeStatus(total: number, amountPaid: number): InvoiceStatus {
    if (amountPaid <= 0) return InvoiceStatus.PENDING;
    if (amountPaid >= total) return InvoiceStatus.PAID;
    return InvoiceStatus.PARTIALLY_PAID;
  }

  async recordPayment(schoolId: string, invoiceId: string, recordedById: string, dto: RecordPaymentDto) {
    const invoice = await this.findOneForSchool(schoolId, invoiceId);
    const outstanding = Number(invoice.total) - Number(invoice.amountPaid);
    if (dto.amount > outstanding + 0.01) {
      throw new BadRequestException(
        `Payment of ${dto.amount} exceeds the outstanding balance of ${outstanding.toFixed(2)}`
      );
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

  async remove(schoolId: string, id: string) {
    const invoice = await this.findOneForSchool(schoolId, id);
    if (Number(invoice.amountPaid) > 0) {
      throw new ConflictException("Cannot cancel an invoice that has payments recorded");
    }
    await this.prisma.invoice.update({
      where: { id },
      data: { deletedAt: new Date(), status: "CANCELLED" }
    });
  }
}
