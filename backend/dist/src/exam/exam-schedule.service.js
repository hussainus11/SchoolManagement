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
exports.ExamScheduleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
function overlaps(aStart, aEnd, bStart, bEnd) {
    return aStart < bEnd && bStart < aEnd;
}
let ExamScheduleService = class ExamScheduleService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, filters) {
        return this.prisma.examSchedule.findMany({
            where: { schoolId, ...filters },
            include: { exam: true, class: true, subject: true, room: true },
            orderBy: [{ examDate: "asc" }, { startTime: "asc" }]
        });
    }
    async findOneForSchool(schoolId, id) {
        const schedule = await this.prisma.examSchedule.findFirst({
            where: { id, schoolId },
            include: { exam: true, class: true, subject: true, room: true }
        });
        if (!schedule)
            throw new common_1.NotFoundException("Exam schedule not found");
        return schedule;
    }
    async assertRelationsInSchool(schoolId, dto) {
        const branch = await this.prisma.branch.findFirst({ where: { id: dto.branchId, schoolId } });
        if (!branch)
            throw new common_1.NotFoundException("Branch not found");
        const exam = await this.prisma.exam.findFirst({ where: { id: dto.examId, schoolId } });
        if (!exam)
            throw new common_1.NotFoundException("Exam not found");
        const klass = await this.prisma.class.findFirst({ where: { id: dto.classId, schoolId } });
        if (!klass)
            throw new common_1.NotFoundException("Class not found");
        const subject = await this.prisma.subject.findFirst({ where: { id: dto.subjectId, schoolId } });
        if (!subject)
            throw new common_1.NotFoundException("Subject not found");
        const room = await this.prisma.room.findFirst({ where: { id: dto.roomId, schoolId } });
        if (!room)
            throw new common_1.NotFoundException("Room not found");
    }
    async assertNoRoomConflict(schoolId, dto, excludeId) {
        const sameDay = await this.prisma.examSchedule.findMany({
            where: {
                schoolId,
                roomId: dto.roomId,
                examDate: new Date(dto.examDate),
                id: excludeId ? { not: excludeId } : undefined
            },
            include: { class: true, subject: true }
        });
        const conflict = sameDay.find((entry) => overlaps(dto.startTime, dto.endTime, entry.startTime, entry.endTime));
        if (conflict) {
            throw new common_1.ConflictException(`Room is already booked for ${conflict.class.name} - ${conflict.subject.name} from ${conflict.startTime} to ${conflict.endTime}`);
        }
    }
    async create(schoolId, dto) {
        await this.assertRelationsInSchool(schoolId, dto);
        await this.assertNoRoomConflict(schoolId, dto);
        return this.prisma.examSchedule.create({
            data: {
                schoolId,
                branchId: dto.branchId,
                examId: dto.examId,
                classId: dto.classId,
                subjectId: dto.subjectId,
                roomId: dto.roomId,
                examDate: new Date(dto.examDate),
                startTime: dto.startTime,
                endTime: dto.endTime,
                maxMarks: dto.maxMarks,
                passMarks: dto.passMarks
            },
            include: { exam: true, class: true, subject: true, room: true }
        });
    }
    async update(schoolId, id, dto) {
        await this.findOneForSchool(schoolId, id);
        await this.assertRelationsInSchool(schoolId, dto);
        await this.assertNoRoomConflict(schoolId, dto, id);
        return this.prisma.examSchedule.update({
            where: { id },
            data: {
                branchId: dto.branchId,
                examId: dto.examId,
                classId: dto.classId,
                subjectId: dto.subjectId,
                roomId: dto.roomId,
                examDate: new Date(dto.examDate),
                startTime: dto.startTime,
                endTime: dto.endTime,
                maxMarks: dto.maxMarks,
                passMarks: dto.passMarks
            },
            include: { exam: true, class: true, subject: true, room: true }
        });
    }
    async remove(schoolId, id) {
        await this.findOneForSchool(schoolId, id);
        const usage = await this.prisma.mark.count({ where: { examScheduleId: id } });
        if (usage > 0) {
            throw new common_1.ConflictException("Cannot delete an exam schedule that already has marks entered");
        }
        await this.prisma.examSchedule.delete({ where: { id } });
    }
};
exports.ExamScheduleService = ExamScheduleService;
exports.ExamScheduleService = ExamScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ExamScheduleService);
//# sourceMappingURL=exam-schedule.service.js.map