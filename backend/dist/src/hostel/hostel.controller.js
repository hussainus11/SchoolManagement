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
exports.HostelController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const resource_decorator_1 = require("../auth/decorators/resource.decorator");
const audit_decorator_1 = require("../audit/decorators/audit.decorator");
const create_hostel_room_dto_1 = require("./dto/create-hostel-room.dto");
const create_hostel_dto_1 = require("./dto/create-hostel.dto");
const hostel_service_1 = require("./hostel.service");
let HostelController = class HostelController {
    hostelService;
    constructor(hostelService) {
        this.hostelService = hostelService;
    }
    findAll(user, branchId) {
        return this.hostelService.findAllForSchool(user.schoolId, branchId);
    }
    findOne(user, id) {
        return this.hostelService.findOneForSchool(user.schoolId, id);
    }
    create(user, dto) {
        return this.hostelService.create(user.schoolId, dto);
    }
    remove(user, id) {
        return this.hostelService.remove(user.schoolId, id);
    }
    addRoom(user, id, dto) {
        return this.hostelService.addRoom(user.schoolId, id, dto);
    }
    removeRoom(user, id, roomId) {
        return this.hostelService.removeRoom(user.schoolId, id, roomId);
    }
};
exports.HostelController = HostelController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)("branchId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], HostelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], HostelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_hostel_dto_1.CreateHostelDto]),
    __metadata("design:returntype", void 0)
], HostelController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], HostelController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(":id/rooms"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_hostel_room_dto_1.CreateHostelRoomDto]),
    __metadata("design:returntype", void 0)
], HostelController.prototype, "addRoom", null);
__decorate([
    (0, common_1.Delete)(":id/rooms/:roomId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Param)("roomId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], HostelController.prototype, "removeRoom", null);
exports.HostelController = HostelController = __decorate([
    (0, common_1.Controller)("hostels"),
    (0, audit_decorator_1.Audit)("Hostel"),
    (0, resource_decorator_1.Resource)("hostel"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN, client_1.Role.BRANCH_ADMIN),
    __metadata("design:paramtypes", [hostel_service_1.HostelService])
], HostelController);
//# sourceMappingURL=hostel.controller.js.map