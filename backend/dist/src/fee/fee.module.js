"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeModule = void 0;
const common_1 = require("@nestjs/common");
const audit_module_1 = require("../audit/audit.module");
const notification_module_1 = require("../notification/notification.module");
const fee_head_controller_1 = require("./fee-head.controller");
const fee_head_service_1 = require("./fee-head.service");
const fee_structure_controller_1 = require("./fee-structure.controller");
const fee_structure_service_1 = require("./fee-structure.service");
const invoice_controller_1 = require("./invoice.controller");
const invoice_service_1 = require("./invoice.service");
const student_discount_controller_1 = require("./student-discount.controller");
const student_discount_service_1 = require("./student-discount.service");
let FeeModule = class FeeModule {
};
exports.FeeModule = FeeModule;
exports.FeeModule = FeeModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule, notification_module_1.NotificationModule],
        controllers: [fee_head_controller_1.FeeHeadController, fee_structure_controller_1.FeeStructureController, student_discount_controller_1.StudentDiscountController, invoice_controller_1.InvoiceController],
        providers: [fee_head_service_1.FeeHeadService, fee_structure_service_1.FeeStructureService, student_discount_service_1.StudentDiscountService, invoice_service_1.InvoiceService],
        exports: [invoice_service_1.InvoiceService]
    })
], FeeModule);
//# sourceMappingURL=fee.module.js.map