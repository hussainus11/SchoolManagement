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
exports.ExamTypeController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const resource_decorator_1 = require("../auth/decorators/resource.decorator");
const audit_decorator_1 = require("../audit/decorators/audit.decorator");
const create_exam_type_dto_1 = require("./dto/create-exam-type.dto");
const exam_type_service_1 = require("./exam-type.service");
let ExamTypeController = class ExamTypeController {
    examTypeService;
    constructor(examTypeService) {
        this.examTypeService = examTypeService;
    }
    findAll(user) {
        return this.examTypeService.findAllForSchool(user.schoolId);
    }
    create(user, dto) {
        return this.examTypeService.create(user.schoolId, dto);
    }
    update(user, id, dto) {
        return this.examTypeService.update(user.schoolId, id, dto);
    }
    remove(user, id) {
        return this.examTypeService.remove(user.schoolId, id);
    }
};
exports.ExamTypeController = ExamTypeController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExamTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_exam_type_dto_1.CreateExamTypeDto]),
    __metadata("design:returntype", void 0)
], ExamTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_exam_type_dto_1.CreateExamTypeDto]),
    __metadata("design:returntype", void 0)
], ExamTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ExamTypeController.prototype, "remove", null);
exports.ExamTypeController = ExamTypeController = __decorate([
    (0, common_1.Controller)("exam-types"),
    (0, audit_decorator_1.Audit)("ExamType"),
    (0, resource_decorator_1.Resource)("exams"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN, client_1.Role.BRANCH_ADMIN),
    __metadata("design:paramtypes", [exam_type_service_1.ExamTypeService])
], ExamTypeController);
//# sourceMappingURL=exam-type.controller.js.map