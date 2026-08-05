import { InvoiceService } from "../fee/invoice.service";
import { PayslipService } from "../payroll/payslip.service";
import { PrismaService } from "../prisma/prisma.service";
export declare class BillingSchedulerService {
    private readonly prisma;
    private readonly invoiceService;
    private readonly payslipService;
    private readonly logger;
    constructor(prisma: PrismaService, invoiceService: InvoiceService, payslipService: PayslipService);
    generateMonthlyBilling(): Promise<void>;
    private currentMonth;
    private dueDateForPeriod;
}
