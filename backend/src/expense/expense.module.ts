import { Module } from "@nestjs/common";
import { AuditModule } from "../audit/audit.module";
import { ExpenseCategoryController } from "./expense-category.controller";
import { ExpenseCategoryService } from "./expense-category.service";
import { ExpenseController } from "./expense.controller";
import { ExpenseService } from "./expense.service";
import { VendorController } from "./vendor.controller";
import { VendorService } from "./vendor.service";

@Module({
  imports: [AuditModule],
  controllers: [ExpenseCategoryController, VendorController, ExpenseController],
  providers: [ExpenseCategoryService, VendorService, ExpenseService]
})
export class ExpenseModule {}
