"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamModule = void 0;
const common_1 = require("@nestjs/common");
const exam_schedule_controller_1 = require("./exam-schedule.controller");
const exam_schedule_service_1 = require("./exam-schedule.service");
const exam_type_controller_1 = require("./exam-type.controller");
const exam_type_service_1 = require("./exam-type.service");
const exam_controller_1 = require("./exam.controller");
const exam_service_1 = require("./exam.service");
const room_controller_1 = require("./room.controller");
const room_service_1 = require("./room.service");
let ExamModule = class ExamModule {
};
exports.ExamModule = ExamModule;
exports.ExamModule = ExamModule = __decorate([
    (0, common_1.Module)({
        controllers: [room_controller_1.RoomController, exam_type_controller_1.ExamTypeController, exam_controller_1.ExamController, exam_schedule_controller_1.ExamScheduleController],
        providers: [room_service_1.RoomService, exam_type_service_1.ExamTypeService, exam_service_1.ExamService, exam_schedule_service_1.ExamScheduleService],
        exports: [exam_schedule_service_1.ExamScheduleService]
    })
], ExamModule);
//# sourceMappingURL=exam.module.js.map