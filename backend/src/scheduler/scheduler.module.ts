import { Module } from "@nestjs/common";
import { FeeModule } from "../fee/fee.module";
import { PayrollModule } from "../payroll/payroll.module";
import { WhatsappModule } from "../whatsapp/whatsapp.module";
import { BillingSchedulerService } from "./billing-scheduler.service";
import { WhatsAppQueueSchedulerService } from "./whatsapp-queue-scheduler.service";

@Module({
  imports: [FeeModule, PayrollModule, WhatsappModule],
  providers: [BillingSchedulerService, WhatsAppQueueSchedulerService]
})
export class SchedulerModule {}
