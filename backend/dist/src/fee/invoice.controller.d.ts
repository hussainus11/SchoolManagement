import { InvoiceStatus } from "../../generated/prisma/client";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateInvoiceDto } from "./dto/create-invoice.dto";
import { GenerateMonthlyInvoicesDto } from "./dto/generate-monthly-invoices.dto";
import { GenerateStudentInvoiceDto } from "./dto/generate-student-invoice.dto";
import { RecordPaymentDto } from "./dto/record-payment.dto";
import { InvoiceService } from "./invoice.service";
export declare class InvoiceController {
    private readonly invoiceService;
    constructor(invoiceService: InvoiceService);
    findAll(user: JwtPayload, studentId?: string, status?: InvoiceStatus, academicYearId?: string, period?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        student: {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            firstName: string;
            lastName: string;
            deletedAt: Date | null;
            userId: string | null;
            sectionId: string | null;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            admissionNumber: string;
            bloodGroup: string | null;
            admissionDate: Date;
            academicStatus: import("../../generated/prisma/enums").AcademicStatus;
        };
        items: ({
            feeHead: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            feeHeadId: string;
            amount: import("@prisma/client-runtime-utils").Decimal;
            invoiceId: string;
            discount: import("@prisma/client-runtime-utils").Decimal;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        deletedAt: Date | null;
        academicYearId: string;
        studentId: string;
        status: InvoiceStatus;
        invoiceNumber: string;
        period: string;
        issueDate: Date;
        dueDate: Date;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        discountTotal: import("@prisma/client-runtime-utils").Decimal;
        total: import("@prisma/client-runtime-utils").Decimal;
        amountPaid: import("@prisma/client-runtime-utils").Decimal;
    })[]>;
    findOne(user: JwtPayload, id: string): Promise<{
        student: {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            firstName: string;
            lastName: string;
            deletedAt: Date | null;
            userId: string | null;
            sectionId: string | null;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            admissionNumber: string;
            bloodGroup: string | null;
            admissionDate: Date;
            academicStatus: import("../../generated/prisma/enums").AcademicStatus;
        };
        payments: {
            id: string;
            createdAt: Date;
            schoolId: string;
            deletedAt: Date | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            invoiceId: string;
            method: import("../../generated/prisma/enums").PaymentMethod;
            reference: string | null;
            paidAt: Date;
            recordedById: string;
        }[];
        items: ({
            feeHead: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            feeHeadId: string;
            amount: import("@prisma/client-runtime-utils").Decimal;
            invoiceId: string;
            discount: import("@prisma/client-runtime-utils").Decimal;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        deletedAt: Date | null;
        academicYearId: string;
        studentId: string;
        status: InvoiceStatus;
        invoiceNumber: string;
        period: string;
        issueDate: Date;
        dueDate: Date;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        discountTotal: import("@prisma/client-runtime-utils").Decimal;
        total: import("@prisma/client-runtime-utils").Decimal;
        amountPaid: import("@prisma/client-runtime-utils").Decimal;
    }>;
    create(user: JwtPayload, dto: CreateInvoiceDto): Promise<{
        student: {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            firstName: string;
            lastName: string;
            deletedAt: Date | null;
            userId: string | null;
            sectionId: string | null;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            admissionNumber: string;
            bloodGroup: string | null;
            admissionDate: Date;
            academicStatus: import("../../generated/prisma/enums").AcademicStatus;
        };
        payments: {
            id: string;
            createdAt: Date;
            schoolId: string;
            deletedAt: Date | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            invoiceId: string;
            method: import("../../generated/prisma/enums").PaymentMethod;
            reference: string | null;
            paidAt: Date;
            recordedById: string;
        }[];
        items: ({
            feeHead: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            feeHeadId: string;
            amount: import("@prisma/client-runtime-utils").Decimal;
            invoiceId: string;
            discount: import("@prisma/client-runtime-utils").Decimal;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        deletedAt: Date | null;
        academicYearId: string;
        studentId: string;
        status: InvoiceStatus;
        invoiceNumber: string;
        period: string;
        issueDate: Date;
        dueDate: Date;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        discountTotal: import("@prisma/client-runtime-utils").Decimal;
        total: import("@prisma/client-runtime-utils").Decimal;
        amountPaid: import("@prisma/client-runtime-utils").Decimal;
    }>;
    generateForStudent(user: JwtPayload, dto: GenerateStudentInvoiceDto): Promise<{
        student: {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            firstName: string;
            lastName: string;
            deletedAt: Date | null;
            userId: string | null;
            sectionId: string | null;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            admissionNumber: string;
            bloodGroup: string | null;
            admissionDate: Date;
            academicStatus: import("../../generated/prisma/enums").AcademicStatus;
        };
        payments: {
            id: string;
            createdAt: Date;
            schoolId: string;
            deletedAt: Date | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            invoiceId: string;
            method: import("../../generated/prisma/enums").PaymentMethod;
            reference: string | null;
            paidAt: Date;
            recordedById: string;
        }[];
        items: ({
            feeHead: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            feeHeadId: string;
            amount: import("@prisma/client-runtime-utils").Decimal;
            invoiceId: string;
            discount: import("@prisma/client-runtime-utils").Decimal;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        deletedAt: Date | null;
        academicYearId: string;
        studentId: string;
        status: InvoiceStatus;
        invoiceNumber: string;
        period: string;
        issueDate: Date;
        dueDate: Date;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        discountTotal: import("@prisma/client-runtime-utils").Decimal;
        total: import("@prisma/client-runtime-utils").Decimal;
        amountPaid: import("@prisma/client-runtime-utils").Decimal;
    }>;
    generateForMonth(user: JwtPayload, dto: GenerateMonthlyInvoicesDto): Promise<{
        created: number;
        skipped: number;
        total: number;
    }>;
    recordPayment(user: JwtPayload, id: string, dto: RecordPaymentDto): Promise<{
        student: {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            firstName: string;
            lastName: string;
            deletedAt: Date | null;
            userId: string | null;
            sectionId: string | null;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            admissionNumber: string;
            bloodGroup: string | null;
            admissionDate: Date;
            academicStatus: import("../../generated/prisma/enums").AcademicStatus;
        };
        payments: {
            id: string;
            createdAt: Date;
            schoolId: string;
            deletedAt: Date | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            invoiceId: string;
            method: import("../../generated/prisma/enums").PaymentMethod;
            reference: string | null;
            paidAt: Date;
            recordedById: string;
        }[];
        items: ({
            feeHead: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            feeHeadId: string;
            amount: import("@prisma/client-runtime-utils").Decimal;
            invoiceId: string;
            discount: import("@prisma/client-runtime-utils").Decimal;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        deletedAt: Date | null;
        academicYearId: string;
        studentId: string;
        status: InvoiceStatus;
        invoiceNumber: string;
        period: string;
        issueDate: Date;
        dueDate: Date;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        discountTotal: import("@prisma/client-runtime-utils").Decimal;
        total: import("@prisma/client-runtime-utils").Decimal;
        amountPaid: import("@prisma/client-runtime-utils").Decimal;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
}
