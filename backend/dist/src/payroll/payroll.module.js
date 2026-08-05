"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollModule = void 0;
const common_1 = require("@nestjs/common");
const payslip_controller_1 = require("./payslip.controller");
const payslip_service_1 = require("./payslip.service");
const salary_structure_controller_1 = require("./salary-structure.controller");
const salary_structure_service_1 = require("./salary-structure.service");
let PayrollModule = class PayrollModule {
};
exports.PayrollModule = PayrollModule;
exports.PayrollModule = PayrollModule = __decorate([
    (0, common_1.Module)({
        controllers: [salary_structure_controller_1.SalaryStructureController, payslip_controller_1.PayslipController],
        providers: [salary_structure_service_1.SalaryStructureService, payslip_service_1.PayslipService],
        exports: [payslip_service_1.PayslipService]
    })
], PayrollModule);
//# sourceMappingURL=payroll.module.js.map