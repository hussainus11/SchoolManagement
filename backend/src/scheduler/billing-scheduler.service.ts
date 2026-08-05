import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { InvoiceService } from "../fee/invoice.service";
import { PayslipService } from "../payroll/payslip.service";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class BillingSchedulerService {
  private readonly logger = new Logger(BillingSchedulerService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly invoiceService: InvoiceService,
    private readonly payslipService: PayslipService
  ) {}

  // 01:00 on the 1st of every month
  @Cron("0 1 1 * *")
  async generateMonthlyBilling() {
    const period = this.currentMonth();
    const dueDate = this.dueDateForPeriod(period);
    const schools = await this.prisma.school.findMany({ where: { isActive: true } });

    for (const school of schools) {
      const currentYear = await this.prisma.academicYear.findFirst({
        where: { schoolId: school.id, isCurrent: true }
      });
      if (!currentYear) continue;

      try {
        const result = await this.invoiceService.generateForMonth(school.id, {
          academicYearId: currentYear.id,
          period,
          dueDate
        });
        this.logger.log(`Invoices for ${school.name} (${period}): ${JSON.stringify(result)}`);
      } catch (error) {
        this.logger.error(`Invoice generation failed for ${school.name}`, error as Error);
      }

      try {
        const result = await this.payslipService.generateForMonth(school.id, period);
        this.logger.log(`Payslips for ${school.name} (${period}): ${JSON.stringify(result)}`);
      } catch (error) {
        this.logger.error(`Payslip generation failed for ${school.name}`, error as Error);
      }
    }
  }

  private currentMonth() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  }

  private dueDateForPeriod(period: string) {
    const [year, month] = period.split("-").map(Number);
    return new Date(year, month - 1, 10).toISOString();
  }
}
