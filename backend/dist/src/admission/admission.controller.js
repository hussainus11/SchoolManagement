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
exports.AdmissionController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const resource_decorator_1 = require("../auth/decorators/resource.decorator");
const audit_decorator_1 = require("../audit/decorators/audit.decorator");
const admission_service_1 = require("./admission.service");
const create_admission_dto_1 = require("./dto/create-admission.dto");
const enroll_admission_dto_1 = require("./dto/enroll-admission.dto");
const update_admission_status_dto_1 = require("./dto/update-admission-status.dto");
let AdmissionController = class AdmissionController {
    admissionService;
    constructor(admissionService) {
        this.admissionService = admissionService;
    }
    findAll(user, branchId, status) {
        return this.admissionService.findAllForSchool(user.schoolId, { branchId, status });
    }
    findOne(user, id) {
        return this.admissionService.findOneForSchool(user.schoolId, id);
    }
    create(user, dto) {
        return this.admissionService.create(user.schoolId, dto);
    }
    updateStatus(user, id, dto) {
        return this.admissionService.updateStatus(user.schoolId, id, dto);
    }
    enroll(user, id, dto) {
        return this.admissionService.enroll(user.schoolId, id, dto);
    }
    remove(user, id) {
        return this.admissionService.remove(user.schoolId, id);
    }
};
exports.AdmissionController = AdmissionController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)("branchId")),
    __param(2, (0, common_1.Query)("status")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], AdmissionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AdmissionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_admission_dto_1.CreateAdmissionDto]),
    __metadata("design:returntype", void 0)
], AdmissionController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id/status"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_admission_status_dto_1.UpdateAdmissionStatusDto]),
    __metadata("design:returntype", void 0)
], AdmissionController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Post)(":id/enroll"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, enroll_admission_dto_1.EnrollAdmissionDto]),
    __metadata("design:returntype", void 0)
], AdmissionController.prototype, "enroll", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AdmissionController.prototype, "remove", null);
exports.AdmissionController = AdmissionController = __decorate([
    (0, common_1.Controller)("admissions"),
    (0, audit_decorator_1.Audit)("Admission"),
    (0, resource_decorator_1.Resource)("admissions"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN, client_1.Role.BRANCH_ADMIN),
    __metadata("design:paramtypes", [admission_service_1.AdmissionService])
], AdmissionController);
//# sourceMappingURL=admission.controller.js.map