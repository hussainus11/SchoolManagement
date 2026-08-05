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
var BillingSchedulerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingSchedulerService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const invoice_service_1 = require("../fee/invoice.service");
const payslip_service_1 = require("../payroll/payslip.service");
const prisma_service_1 = require("../prisma/prisma.service");
let BillingSchedulerService = BillingSchedulerService_1 = class BillingSchedulerService {
    prisma;
    invoiceService;
    payslipService;
    logger = new common_1.Logger(BillingSchedulerService_1.name);
    constructor(prisma, invoiceService, payslipService) {
        this.prisma = prisma;
        this.invoiceService = invoiceService;
        this.payslipService = payslipService;
    }
    async generateMonthlyBilling() {
        const period = this.currentMonth();
        const dueDate = this.dueDateForPeriod(period);
        const schools = await this.prisma.school.findMany({ where: { isActive: true } });
        for (const school of schools) {
            const currentYear = await this.prisma.academicYear.findFirst({
                where: { schoolId: school.id, isCurrent: true }
            });
            if (!currentYear)
                continue;
            try {
                const result = await this.invoiceService.generateForMonth(school.id, {
                    academicYearId: currentYear.id,
                    period,
                    dueDate
                });
                this.logger.log(`Invoices for ${school.name} (${period}): ${JSON.stringify(result)}`);
            }
            catch (error) {
                this.logger.error(`Invoice generation failed for ${school.name}`, error);
            }
            try {
                const result = await this.payslipService.generateForMonth(school.id, period);
                this.logger.log(`Payslips for ${school.name} (${period}): ${JSON.stringify(result)}`);
            }
            catch (error) {
                this.logger.error(`Payslip generation failed for ${school.name}`, error);
            }
        }
    }
    currentMonth() {
        const now = new Date();
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
    }
    dueDateForPeriod(period) {
        const [year, month] = period.split("-").map(Number);
        return new Date(year, month - 1, 10).toISOString();
    }
};
exports.BillingSchedulerService = BillingSchedulerService;
__decorate([
    (0, schedule_1.Cron)("0 1 1 * *"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BillingSchedulerService.prototype, "generateMonthlyBilling", null);
exports.BillingSchedulerService = BillingSchedulerService = BillingSchedulerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        invoice_service_1.InvoiceService,
        payslip_service_1.PayslipService])
], BillingSchedulerService);
//# sourceMappingURL=billing-scheduler.service.js.map