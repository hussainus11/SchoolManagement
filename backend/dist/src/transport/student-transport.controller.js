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
exports.StudentTransportController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const resource_decorator_1 = require("../auth/decorators/resource.decorator");
const audit_decorator_1 = require("../audit/decorators/audit.decorator");
const assign_transport_dto_1 = require("./dto/assign-transport.dto");
const student_transport_service_1 = require("./student-transport.service");
let StudentTransportController = class StudentTransportController {
    studentTransportService;
    constructor(studentTransportService) {
        this.studentTransportService = studentTransportService;
    }
    findAll(user, routeId) {
        return this.studentTransportService.findAllForSchool(user.schoolId, routeId);
    }
    assign(user, dto) {
        return this.studentTransportService.assign(user.schoolId, dto);
    }
    remove(user, studentId) {
        return this.studentTransportService.remove(user.schoolId, studentId);
    }
};
exports.StudentTransportController = StudentTransportController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)("routeId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], StudentTransportController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, assign_transport_dto_1.AssignTransportDto]),
    __metadata("design:returntype", void 0)
], StudentTransportController.prototype, "assign", null);
__decorate([
    (0, common_1.Delete)(":studentId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("studentId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], StudentTransportController.prototype, "remove", null);
exports.StudentTransportController = StudentTransportController = __decorate([
    (0, common_1.Controller)("transport/assignments"),
    (0, audit_decorator_1.Audit)("StudentTransport"),
    (0, resource_decorator_1.Resource)("transport"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN, client_1.Role.BRANCH_ADMIN),
    __metadata("design:paramtypes", [student_transport_service_1.StudentTransportService])
], StudentTransportController);
//# sourceMappingURL=student-transport.controller.js.map