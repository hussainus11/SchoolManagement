"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveModule = void 0;
const common_1 = require("@nestjs/common");
const leave_group_controller_1 = require("./leave-group.controller");
const leave_group_service_1 = require("./leave-group.service");
const leave_request_controller_1 = require("./leave-request.controller");
const leave_request_service_1 = require("./leave-request.service");
const leave_type_controller_1 = require("./leave-type.controller");
const leave_type_service_1 = require("./leave-type.service");
let LeaveModule = class LeaveModule {
};
exports.LeaveModule = LeaveModule;
exports.LeaveModule = LeaveModule = __decorate([
    (0, common_1.Module)({
        controllers: [leave_type_controller_1.LeaveTypeController, leave_group_controller_1.LeaveGroupController, leave_request_controller_1.LeaveRequestController],
        providers: [leave_type_service_1.LeaveTypeService, leave_group_service_1.LeaveGroupService, leave_request_service_1.LeaveRequestService]
    })
], LeaveModule);
//# sourceMappingURL=leave.module.js.map