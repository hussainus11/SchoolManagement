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
exports.SectionController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const resource_decorator_1 = require("../auth/decorators/resource.decorator");
const audit_decorator_1 = require("../audit/decorators/audit.decorator");
const assign_class_teacher_dto_1 = require("./dto/assign-class-teacher.dto");
const assign_subject_teacher_dto_1 = require("./dto/assign-subject-teacher.dto");
const create_section_dto_1 = require("./dto/create-section.dto");
const update_section_dto_1 = require("./dto/update-section.dto");
const section_service_1 = require("./section.service");
let SectionController = class SectionController {
    sectionService;
    constructor(sectionService) {
        this.sectionService = sectionService;
    }
    findAll(user, classId) {
        return this.sectionService.findAllForClass(user.schoolId, classId);
    }
    findOne(user, id) {
        return this.sectionService.findOneForSchool(user.schoolId, id);
    }
    create(user, dto) {
        return this.sectionService.create(user.schoolId, dto);
    }
    update(user, id, dto) {
        return this.sectionService.update(user.schoolId, id, dto);
    }
    remove(user, id) {
        return this.sectionService.remove(user.schoolId, id);
    }
    assignClassTeacher(user, id, dto) {
        return this.sectionService.assignClassTeacher(user.schoolId, id, dto.teacherId);
    }
    addSubjectTeacher(user, id, dto) {
        return this.sectionService.addSubjectTeacher(user.schoolId, id, dto.subjectId, dto.teacherId);
    }
    removeSubjectTeacher(user, id, subjectId) {
        return this.sectionService.removeSubjectTeacher(user.schoolId, id, subjectId);
    }
};
exports.SectionController = SectionController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)("classId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], SectionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], SectionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_section_dto_1.CreateSectionDto]),
    __metadata("design:returntype", void 0)
], SectionController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_section_dto_1.UpdateSectionDto]),
    __metadata("design:returntype", void 0)
], SectionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], SectionController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(":id/class-teacher"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, assign_class_teacher_dto_1.AssignClassTeacherDto]),
    __metadata("design:returntype", void 0)
], SectionController.prototype, "assignClassTeacher", null);
__decorate([
    (0, common_1.Post)(":id/subject-teachers"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, assign_subject_teacher_dto_1.AssignSubjectTeacherDto]),
    __metadata("design:returntype", void 0)
], SectionController.prototype, "addSubjectTeacher", null);
__decorate([
    (0, common_1.Delete)(":id/subject-teachers/:subjectId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Param)("subjectId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], SectionController.prototype, "removeSubjectTeacher", null);
exports.SectionController = SectionController = __decorate([
    (0, common_1.Controller)("sections"),
    (0, audit_decorator_1.Audit)("Section"),
    (0, resource_decorator_1.Resource)("classes"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN, client_1.Role.BRANCH_ADMIN),
    __metadata("design:paramtypes", [section_service_1.SectionService])
], SectionController);
//# sourceMappingURL=section.controller.js.map