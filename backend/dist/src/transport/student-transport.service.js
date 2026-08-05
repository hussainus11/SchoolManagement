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
exports.StudentTransportService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let StudentTransportService = class StudentTransportService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, routeId) {
        return this.prisma.studentTransport.findMany({
            where: { schoolId, routeId },
            include: { student: true, route: { include: { vehicle: true } }, stop: true },
            orderBy: { createdAt: "desc" }
        });
    }
    async assign(schoolId, dto) {
        const student = await this.prisma.student.findFirst({
            where: { id: dto.studentId, schoolId, deletedAt: null }
        });
        if (!student)
            throw new common_1.NotFoundException("Student not found");
        const stop = await this.prisma.routeStop.findFirst({
            where: { id: dto.stopId, routeId: dto.routeId, route: { schoolId } }
        });
        if (!stop)
            throw new common_1.NotFoundException("Stop not found on this route");
        return this.prisma.studentTransport.upsert({
            where: { studentId: dto.studentId },
            create: { schoolId, studentId: dto.studentId, routeId: dto.routeId, stopId: dto.stopId },
            update: { routeId: dto.routeId, stopId: dto.stopId },
            include: { student: true, route: { include: { vehicle: true } }, stop: true }
        });
    }
    async remove(schoolId, studentId) {
        const assignment = await this.prisma.studentTransport.findFirst({ where: { studentId, schoolId } });
        if (!assignment)
            throw new common_1.NotFoundException("Transport assignment not found");
        await this.prisma.studentTransport.delete({ where: { studentId } });
    }
};
exports.StudentTransportService = StudentTransportService;
exports.StudentTransportService = StudentTransportService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StudentTransportService);
//# sourceMappingURL=student-transport.service.js.map