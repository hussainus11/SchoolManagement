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
exports.AcademicYearController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const resource_decorator_1 = require("../auth/decorators/resource.decorator");
const audit_decorator_1 = require("../audit/decorators/audit.decorator");
const academic_year_service_1 = require("./academic-year.service");
const create_academic_year_dto_1 = require("./dto/create-academic-year.dto");
let AcademicYearController = class AcademicYearController {
    academicYearService;
    constructor(academicYearService) {
        this.academicYearService = academicYearService;
    }
    findAll(user) {
        return this.academicYearService.findAllForSchool(user.schoolId);
    }
    create(user, dto) {
        return this.academicYearService.create(user.schoolId, {
            name: dto.name,
            startDate: new Date(dto.startDate),
            endDate: new Date(dto.endDate),
            isCurrent: dto.isCurrent
        });
    }
    setCurrent(user, id) {
        return this.academicYearService.setCurrent(user.schoolId, id);
    }
};
exports.AcademicYearController = AcademicYearController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AcademicYearController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_academic_year_dto_1.CreateAcademicYearDto]),
    __metadata("design:returntype", void 0)
], AcademicYearController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id/set-current"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AcademicYearController.prototype, "setCurrent", null);
exports.AcademicYearController = AcademicYearController = __decorate([
    (0, common_1.Controller)("academic-years"),
    (0, audit_decorator_1.Audit)("AcademicYear"),
    (0, resource_decorator_1.Resource)("settings"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN),
    __metadata("design:paramtypes", [academic_year_service_1.AcademicYearService])
], AcademicYearController);
//# sourceMappingURL=academic-year.controller.js.map