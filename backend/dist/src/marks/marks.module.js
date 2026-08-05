"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarksModule = void 0;
const common_1 = require("@nestjs/common");
const grade_scale_controller_1 = require("./grade-scale.controller");
const grade_scale_service_1 = require("./grade-scale.service");
const mark_controller_1 = require("./mark.controller");
const mark_service_1 = require("./mark.service");
let MarksModule = class MarksModule {
};
exports.MarksModule = MarksModule;
exports.MarksModule = MarksModule = __decorate([
    (0, common_1.Module)({
        controllers: [grade_scale_controller_1.GradeScaleController, mark_controller_1.MarkController],
        providers: [grade_scale_service_1.GradeScaleService, mark_service_1.MarkService],
        exports: [mark_service_1.MarkService]
    })
], MarksModule);
//# sourceMappingURL=marks.module.js.map