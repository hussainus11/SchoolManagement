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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const resource_decorator_1 = require("../auth/decorators/resource.decorator");
const audit_decorator_1 = require("../audit/decorators/audit.decorator");
const create_invoice_dto_1 = require("./dto/create-invoice.dto");
const generate_monthly_invoices_dto_1 = require("./dto/generate-monthly-invoices.dto");
const generate_student_invoice_dto_1 = require("./dto/generate-student-invoice.dto");
const record_payment_dto_1 = require("./dto/record-payment.dto");
const invoice_service_1 = require("./invoice.service");
let InvoiceController = class InvoiceController {
    invoiceService;
    constructor(invoiceService) {
        this.invoiceService = invoiceService;
    }
    findAll(user, studentId, status, academicYearId, period) {
        return this.invoiceService.findAllForSchool(user.schoolId, { studentId, status, academicYearId, period });
    }
    findOne(user, id) {
        return this.invoiceService.findOneForSchool(user.schoolId, id);
    }
    create(user, dto) {
        return this.invoiceService.createManual(user.schoolId, dto);
    }
    generateForStudent(user, dto) {
        return this.invoiceService.generateForStudent(user.schoolId, dto);
    }
    generateForMonth(user, dto) {
        return this.invoiceService.generateForMonth(user.schoolId, dto);
    }
    recordPayment(user, id, dto) {
        return this.invoiceService.recordPayment(user.schoolId, id, user.sub, dto);
    }
    remove(user, id) {
        return this.invoiceService.remove(user.schoolId, id);
    }
};
exports.InvoiceController = InvoiceController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)("studentId")),
    __param(2, (0, common_1.Query)("status")),
    __param(3, (0, common_1.Query)("academicYearId")),
    __param(4, (0, common_1.Query)("period")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_invoice_dto_1.CreateInvoiceDto]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("generate"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, generate_student_invoice_dto_1.GenerateStudentInvoiceDto]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "generateForStudent", null);
__decorate([
    (0, common_1.Post)("generate-month"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, generate_monthly_invoices_dto_1.GenerateMonthlyInvoicesDto]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "generateForMonth", null);
__decorate([
    (0, common_1.Post)(":id/payments"),
    (0, audit_decorator_1.SkipAudit)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, record_payment_dto_1.RecordPaymentDto]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "recordPayment", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "remove", null);
exports.InvoiceController = InvoiceController = __decorate([
    (0, common_1.Controller)("fees/invoices"),
    (0, audit_decorator_1.Audit)("Invoice"),
    (0, resource_decorator_1.Resource)("fees"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN, client_1.Role.BRANCH_ADMIN, client_1.Role.ACCOUNTANT),
    __metadata("design:paramtypes", [invoice_service_1.InvoiceService])
], InvoiceController);
//# sourceMappingURL=invoice.controller.js.map