import { Module } from "@nestjs/common";
import { PayslipController } from "./payslip.controller";
import { PayslipService } from "./payslip.service";
import { SalaryStructureController } from "./salary-structure.controller";
import { SalaryStructureService } from "./salary-structure.service";

@Module({
  controllers: [SalaryStructureController, PayslipController],
  providers: [SalaryStructureService, PayslipService],
  exports: [PayslipService]
})
export class PayrollModule {}
