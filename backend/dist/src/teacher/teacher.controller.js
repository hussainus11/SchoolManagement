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
exports.TeacherController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const client_1 = require("../../generated/prisma/client");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const resource_decorator_1 = require("../auth/decorators/resource.decorator");
const audit_decorator_1 = require("../audit/decorators/audit.decorator");
const image_upload_util_1 = require("../common/image-upload.util");
const create_qualification_dto_1 = require("./dto/create-qualification.dto");
const create_teacher_dto_1 = require("./dto/create-teacher.dto");
const update_teacher_dto_1 = require("./dto/update-teacher.dto");
const teacher_service_1 = require("./teacher.service");
let TeacherController = class TeacherController {
    teacherService;
    constructor(teacherService) {
        this.teacherService = teacherService;
    }
    findAll(user, branchId, search) {
        return this.teacherService.findAllForSchool(user.schoolId, { branchId, search });
    }
    findOne(user, id) {
        return this.teacherService.findOneForSchool(user.schoolId, id);
    }
    create(user, dto) {
        return this.teacherService.create(user.schoolId, dto);
    }
    update(user, id, dto) {
        return this.teacherService.update(user.schoolId, id, dto);
    }
    remove(user, id) {
        return this.teacherService.remove(user.schoolId, id);
    }
    addQualification(user, id, dto) {
        return this.teacherService.addQualification(user.schoolId, id, dto);
    }
    removeQualification(user, id, qualificationId) {
        return this.teacherService.removeQualification(user.schoolId, id, qualificationId);
    }
    uploadPhoto(user, id, file) {
        if (!file)
            throw new common_1.BadRequestException("No file uploaded");
        return this.teacherService.setPhoto(user.schoolId, id, `/uploads/profile-photos/${file.filename}`);
    }
    removePhoto(user, id) {
        return this.teacherService.removePhoto(user.schoolId, id);
    }
    resetPassword(user, id) {
        return this.teacherService.resetPassword(user.schoolId, id);
    }
};
exports.TeacherController = TeacherController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)("branchId")),
    __param(2, (0, common_1.Query)("search")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_teacher_dto_1.CreateTeacherDto]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_teacher_dto_1.UpdateTeacherDto]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(":id/qualifications"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_qualification_dto_1.CreateQualificationDto]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "addQualification", null);
__decorate([
    (0, common_1.Delete)(":id/qualifications/:qualificationId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Param)("qualificationId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "removeQualification", null);
__decorate([
    (0, common_1.Post)(":id/photo"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file", (0, image_upload_util_1.imageUploadOptions)("profile-photos"))),
    (0, audit_decorator_1.AuditAction)("TEACHER_PHOTO_UPDATED"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "uploadPhoto", null);
__decorate([
    (0, common_1.Delete)(":id/photo"),
    (0, audit_decorator_1.AuditAction)("TEACHER_PHOTO_REMOVED"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "removePhoto", null);
__decorate([
    (0, common_1.Post)(":id/reset-password"),
    (0, audit_decorator_1.AuditAction)("TEACHER_PASSWORD_RESET"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "resetPassword", null);
exports.TeacherController = TeacherController = __decorate([
    (0, common_1.Controller)("teachers"),
    (0, audit_decorator_1.Audit)("Teacher"),
    (0, resource_decorator_1.Resource)("teachers"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN, client_1.Role.BRANCH_ADMIN),
    __metadata("design:paramtypes", [teacher_service_1.TeacherService])
], TeacherController);
//# sourceMappingURL=teacher.controller.js.map