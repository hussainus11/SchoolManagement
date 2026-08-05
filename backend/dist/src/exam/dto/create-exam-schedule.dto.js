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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExamScheduleDto = void 0;
const class_validator_1 = require("class-validator");
const TIME_PATTERN = /^([01]\d|2[0-3]):([0-5]\d)$/;
class CreateExamScheduleDto {
    branchId;
    examId;
    classId;
    subjectId;
    roomId;
    examDate;
    startTime;
    endTime;
    maxMarks;
    passMarks;
}
exports.CreateExamScheduleDto = CreateExamScheduleDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExamScheduleDto.prototype, "branchId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExamScheduleDto.prototype, "examId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExamScheduleDto.prototype, "classId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExamScheduleDto.prototype, "subjectId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExamScheduleDto.prototype, "roomId", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateExamScheduleDto.prototype, "examDate", void 0);
__decorate([
    (0, class_validator_1.Matches)(TIME_PATTERN, { message: "startTime must be in HH:mm 24-hour format" }),
    __metadata("design:type", String)
], CreateExamScheduleDto.prototype, "startTime", void 0);
__decorate([
    (0, class_validator_1.Matches)(TIME_PATTERN, { message: "endTime must be in HH:mm 24-hour format" }),
    __metadata("design:type", String)
], CreateExamScheduleDto.prototype, "endTime", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateExamScheduleDto.prototype, "maxMarks", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateExamScheduleDto.prototype, "passMarks", void 0);
//# sourceMappingURL=create-exam-schedule.dto.js.map