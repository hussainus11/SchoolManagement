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
exports.SalaryStructureController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const resource_decorator_1 = require("../auth/decorators/resource.decorator");
const audit_decorator_1 = require("../audit/decorators/audit.decorator");
const create_salary_structure_dto_1 = require("./dto/create-salary-structure.dto");
const salary_structure_service_1 = require("./salary-structure.service");
let SalaryStructureController = class SalaryStructureController {
    salaryStructureService;
    constructor(salaryStructureService) {
        this.salaryStructureService = salaryStructureService;
    }
    findForUser(user, userId) {
        return this.salaryStructureService.findForUser(user.schoolId, userId);
    }
    create(user, dto) {
        return this.salaryStructureService.create(user.schoolId, dto);
    }
    deactivate(user, id) {
        return this.salaryStructureService.deactivate(user.schoolId, id);
    }
};
exports.SalaryStructureController = SalaryStructureController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], SalaryStructureController.prototype, "findForUser", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_salary_structure_dto_1.CreateSalaryStructureDto]),
    __metadata("design:returntype", void 0)
], SalaryStructureController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id/deactivate"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], SalaryStructureController.prototype, "deactivate", null);
exports.SalaryStructureController = SalaryStructureController = __decorate([
    (0, common_1.Controller)("payroll/salary-structures"),
    (0, audit_decorator_1.Audit)("SalaryStructure"),
    (0, resource_decorator_1.Resource)("payroll"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN, client_1.Role.BRANCH_ADMIN),
    __metadata("design:paramtypes", [salary_structure_service_1.SalaryStructureService])
], SalaryStructureController);
//# sourceMappingURL=salary-structure.controller.js.map