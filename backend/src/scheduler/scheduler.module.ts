import { Module } from "@nestjs/common";
import { FeeModule } from "../fee/fee.module";
import { PayrollModule } from "../payroll/payroll.module";
import { BillingSchedulerService } from "./billing-scheduler.service";

@Module({
  imports: [FeeModule, PayrollModule],
  providers: [BillingSchedulerService]
})
export class SchedulerModule {}
