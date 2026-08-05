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
exports.LeaveRequestController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const resource_decorator_1 = require("../auth/decorators/resource.decorator");
const audit_decorator_1 = require("../audit/decorators/audit.decorator");
const create_leave_request_dto_1 = require("./dto/create-leave-request.dto");
const leave_request_service_1 = require("./leave-request.service");
let LeaveRequestController = class LeaveRequestController {
    leaveRequestService;
    constructor(leaveRequestService) {
        this.leaveRequestService = leaveRequestService;
    }
    findAll(user, teacherId, staffId, status) {
        return this.leaveRequestService.findAllForSchool(user.schoolId, { teacherId, staffId, status });
    }
    getBalance(user, teacherId, staffId) {
        return this.leaveRequestService.getBalance(user.schoolId, { teacherId, staffId });
    }
    create(user, dto) {
        return this.leaveRequestService.create(user.schoolId, user.sub, user.role, dto);
    }
    approve(user, id) {
        return this.leaveRequestService.approve(user.schoolId, id, user.sub);
    }
    reject(user, id) {
        return this.leaveRequestService.reject(user.schoolId, id, user.sub);
    }
    cancel(user, id) {
        return this.leaveRequestService.cancel(user.schoolId, user.sub, user.role, id);
    }
};
exports.LeaveRequestController = LeaveRequestController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)("teacherId")),
    __param(2, (0, common_1.Query)("staffId")),
    __param(3, (0, common_1.Query)("status")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], LeaveRequestController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("balance"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)("teacherId")),
    __param(2, (0, common_1.Query)("staffId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], LeaveRequestController.prototype, "getBalance", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_leave_request_dto_1.CreateLeaveRequestDto]),
    __metadata("design:returntype", void 0)
], LeaveRequestController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id/approve"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN, client_1.Role.BRANCH_ADMIN),
    (0, audit_decorator_1.AuditAction)("LEAVE_REQUEST_APPROVED"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], LeaveRequestController.prototype, "approve", null);
__decorate([
    (0, common_1.Patch)(":id/reject"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN, client_1.Role.BRANCH_ADMIN),
    (0, audit_decorator_1.AuditAction)("LEAVE_REQUEST_REJECTED"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], LeaveRequestController.prototype, "reject", null);
__decorate([
    (0, common_1.Patch)(":id/cancel"),
    (0, audit_decorator_1.AuditAction)("LEAVE_REQUEST_CANCELLED"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], LeaveRequestController.prototype, "cancel", null);
exports.LeaveRequestController = LeaveRequestController = __decorate([
    (0, common_1.Controller)("leave-requests"),
    (0, audit_decorator_1.Audit)("LeaveRequest"),
    (0, resource_decorator_1.Resource)("leave"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN, client_1.Role.BRANCH_ADMIN, client_1.Role.TEACHER, client_1.Role.STAFF),
    __metadata("design:paramtypes", [leave_request_service_1.LeaveRequestService])
], LeaveRequestController);
//# sourceMappingURL=leave-request.controller.js.map