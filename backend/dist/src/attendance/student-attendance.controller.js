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
exports.StudentAttendanceController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const resource_decorator_1 = require("../auth/decorators/resource.decorator");
const audit_decorator_1 = require("../audit/decorators/audit.decorator");
const mark_student_attendance_dto_1 = require("./dto/mark-student-attendance.dto");
const update_attendance_dto_1 = require("./dto/update-attendance.dto");
const student_attendance_service_1 = require("./student-attendance.service");
let StudentAttendanceController = class StudentAttendanceController {
    attendanceService;
    constructor(attendanceService) {
        this.attendanceService = attendanceService;
    }
    find(user, sectionId, date, studentId, startDate, endDate) {
        if (studentId) {
            return this.attendanceService.findForStudent(user.schoolId, studentId, { startDate, endDate });
        }
        if (sectionId && date) {
            return this.attendanceService.findForSectionAndDate(user.schoolId, sectionId, date);
        }
        return [];
    }
    bulkMark(user, dto) {
        return this.attendanceService.bulkMark(user.schoolId, user.sub, dto.sectionId, dto.date, dto.entries);
    }
    update(user, id, dto) {
        return this.attendanceService.update(user.schoolId, id, dto, user.sub);
    }
};
exports.StudentAttendanceController = StudentAttendanceController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)("sectionId")),
    __param(2, (0, common_1.Query)("date")),
    __param(3, (0, common_1.Query)("studentId")),
    __param(4, (0, common_1.Query)("startDate")),
    __param(5, (0, common_1.Query)("endDate")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], StudentAttendanceController.prototype, "find", null);
__decorate([
    (0, common_1.Post)("bulk-mark"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, mark_student_attendance_dto_1.MarkStudentAttendanceDto]),
    __metadata("design:returntype", void 0)
], StudentAttendanceController.prototype, "bulkMark", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_attendance_dto_1.UpdateAttendanceDto]),
    __metadata("design:returntype", void 0)
], StudentAttendanceController.prototype, "update", null);
exports.StudentAttendanceController = StudentAttendanceController = __decorate([
    (0, common_1.Controller)("attendance/students"),
    (0, audit_decorator_1.Audit)("StudentAttendance"),
    (0, resource_decorator_1.Resource)("attendance"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN, client_1.Role.BRANCH_ADMIN, client_1.Role.TEACHER),
    __metadata("design:paramtypes", [student_attendance_service_1.StudentAttendanceService])
], StudentAttendanceController);
//# sourceMappingURL=student-attendance.controller.js.map