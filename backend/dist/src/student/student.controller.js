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
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const client_1 = require("../../generated/prisma/client");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const resource_decorator_1 = require("../auth/decorators/resource.decorator");
const audit_decorator_1 = require("../audit/decorators/audit.decorator");
const image_upload_util_1 = require("../common/image-upload.util");
const create_student_login_dto_1 = require("./dto/create-student-login.dto");
const create_student_dto_1 = require("./dto/create-student.dto");
const link_guardian_dto_1 = require("./dto/link-guardian.dto");
const update_student_dto_1 = require("./dto/update-student.dto");
const student_service_1 = require("./student.service");
let StudentController = class StudentController {
    studentService;
    constructor(studentService) {
        this.studentService = studentService;
    }
    findAll(user, branchId, sectionId, search) {
        return this.studentService.findAllForSchool(user.schoolId, { branchId, sectionId, search });
    }
    findOne(user, id) {
        return this.studentService.findOneForSchool(user.schoolId, id);
    }
    create(user, dto) {
        return this.studentService.create(user.schoolId, dto);
    }
    update(user, id, dto) {
        return this.studentService.update(user.schoolId, id, dto);
    }
    remove(user, id) {
        return this.studentService.remove(user.schoolId, id);
    }
    linkGuardian(user, id, guardianId, dto) {
        return this.studentService.linkGuardian(user.schoolId, id, guardianId, dto);
    }
    unlinkGuardian(user, id, guardianId) {
        return this.studentService.unlinkGuardian(user.schoolId, id, guardianId);
    }
    createLogin(user, id, dto) {
        return this.studentService.createLogin(user.schoolId, id, dto);
    }
    uploadPhoto(user, id, file) {
        if (!file)
            throw new common_1.BadRequestException("No file uploaded");
        return this.studentService.setPhoto(user.schoolId, id, `/uploads/profile-photos/${file.filename}`);
    }
    removePhoto(user, id) {
        return this.studentService.removePhoto(user.schoolId, id);
    }
};
exports.StudentController = StudentController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)("branchId")),
    __param(2, (0, common_1.Query)("sectionId")),
    __param(3, (0, common_1.Query)("search")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_student_dto_1.CreateStudentDto]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_student_dto_1.UpdateStudentDto]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(":id/guardians/:guardianId"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Param)("guardianId")),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, link_guardian_dto_1.LinkGuardianDto]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "linkGuardian", null);
__decorate([
    (0, common_1.Delete)(":id/guardians/:guardianId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Param)("guardianId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "unlinkGuardian", null);
__decorate([
    (0, common_1.Post)(":id/create-login"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_student_login_dto_1.CreateStudentLoginDto]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "createLogin", null);
__decorate([
    (0, common_1.Post)(":id/photo"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file", (0, image_upload_util_1.imageUploadOptions)("profile-photos"))),
    (0, audit_decorator_1.AuditAction)("STUDENT_PHOTO_UPDATED"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "uploadPhoto", null);
__decorate([
    (0, common_1.Delete)(":id/photo"),
    (0, audit_decorator_1.AuditAction)("STUDENT_PHOTO_REMOVED"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "removePhoto", null);
exports.StudentController = StudentController = __decorate([
    (0, common_1.Controller)("students"),
    (0, audit_decorator_1.Audit)("Student"),
    (0, resource_decorator_1.Resource)("students"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN, client_1.Role.BRANCH_ADMIN),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentController);
//# sourceMappingURL=student.controller.js.map