import { Module } from "@nestjs/common";
import { AuditModule } from "../audit/audit.module";
import { NotificationModule } from "../notification/notification.module";
import { FeeHeadController } from "./fee-head.controller";
import { FeeHeadService } from "./fee-head.service";
import { FeeStructureController } from "./fee-structure.controller";
import { FeeStructureService } from "./fee-structure.service";
import { InvoiceController } from "./invoice.controller";
import { InvoiceService } from "./invoice.service";
import { StudentDiscountController } from "./student-discount.controller";
import { StudentDiscountService } from "./student-discount.service";

@Module({
  imports: [AuditModule, NotificationModule],
  controllers: [FeeHeadController, FeeStructureController, StudentDiscountController, InvoiceController],
  providers: [FeeHeadService, FeeStructureService, StudentDiscountService, InvoiceService],
  exports: [InvoiceService]
})
export class FeeModule {}
