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
exports.MarkController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const resource_decorator_1 = require("../auth/decorators/resource.decorator");
const audit_decorator_1 = require("../audit/decorators/audit.decorator");
const enter_marks_dto_1 = require("./dto/enter-marks.dto");
const mark_service_1 = require("./mark.service");
let MarkController = class MarkController {
    markService;
    constructor(markService) {
        this.markService = markService;
    }
    findForExamSchedule(user, examScheduleId) {
        return this.markService.findForExamSchedule(user.schoolId, examScheduleId);
    }
    bulkEnter(user, dto) {
        return this.markService.bulkEnter(user.schoolId, user.sub, dto.examScheduleId, dto.entries);
    }
    getReportCard(user, studentId, examId) {
        return this.markService.getReportCard(user.schoolId, studentId, examId);
    }
};
exports.MarkController = MarkController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)("examScheduleId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], MarkController.prototype, "findForExamSchedule", null);
__decorate([
    (0, common_1.Post)("bulk-enter"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, enter_marks_dto_1.EnterMarksDto]),
    __metadata("design:returntype", void 0)
], MarkController.prototype, "bulkEnter", null);
__decorate([
    (0, common_1.Get)("report-card/:studentId/:examId"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("studentId")),
    __param(2, (0, common_1.Param)("examId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], MarkController.prototype, "getReportCard", null);
exports.MarkController = MarkController = __decorate([
    (0, common_1.Controller)("marks"),
    (0, audit_decorator_1.Audit)("Mark"),
    (0, resource_decorator_1.Resource)("marks"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN, client_1.Role.BRANCH_ADMIN, client_1.Role.TEACHER),
    __metadata("design:paramtypes", [mark_service_1.MarkService])
], MarkController);
//# sourceMappingURL=mark.controller.js.map