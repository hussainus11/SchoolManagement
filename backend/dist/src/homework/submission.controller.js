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
exports.SubmissionController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const resource_decorator_1 = require("../auth/decorators/resource.decorator");
const audit_decorator_1 = require("../audit/decorators/audit.decorator");
const grade_submission_dto_1 = require("./dto/grade-submission.dto");
const record_submission_dto_1 = require("./dto/record-submission.dto");
const submission_service_1 = require("./submission.service");
let SubmissionController = class SubmissionController {
    submissionService;
    constructor(submissionService) {
        this.submissionService = submissionService;
    }
    find(user, assignmentId, studentId) {
        if (assignmentId)
            return this.submissionService.findForAssignment(user.schoolId, assignmentId);
        if (studentId)
            return this.submissionService.findForStudent(user.schoolId, studentId);
        return [];
    }
    record(user, id, dto) {
        return this.submissionService.record(user.schoolId, id, dto.submissionText);
    }
    grade(user, id, dto) {
        return this.submissionService.grade(user.schoolId, id, user.sub, dto.marksObtained, dto.feedback);
    }
};
exports.SubmissionController = SubmissionController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)("assignmentId")),
    __param(2, (0, common_1.Query)("studentId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], SubmissionController.prototype, "find", null);
__decorate([
    (0, common_1.Patch)(":id/record"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, record_submission_dto_1.RecordSubmissionDto]),
    __metadata("design:returntype", void 0)
], SubmissionController.prototype, "record", null);
__decorate([
    (0, common_1.Patch)(":id/grade"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, grade_submission_dto_1.GradeSubmissionDto]),
    __metadata("design:returntype", void 0)
], SubmissionController.prototype, "grade", null);
exports.SubmissionController = SubmissionController = __decorate([
    (0, common_1.Controller)("submissions"),
    (0, audit_decorator_1.Audit)("AssignmentSubmission"),
    (0, resource_decorator_1.Resource)("homework"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN, client_1.Role.BRANCH_ADMIN, client_1.Role.TEACHER),
    __metadata("design:paramtypes", [submission_service_1.SubmissionService])
], SubmissionController);
//# sourceMappingURL=submission.controller.js.map