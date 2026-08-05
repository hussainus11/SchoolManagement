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
exports.HostelAllocationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let HostelAllocationService = class HostelAllocationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, filters) {
        return this.prisma.hostelAllocation.findMany({
            where: {
                schoolId,
                roomId: filters.roomId,
                vacatedDate: filters.active ? null : undefined
            },
            include: { student: true, room: { include: { hostel: true } } },
            orderBy: { allocatedDate: "desc" }
        });
    }
    async allocate(schoolId, dto) {
        const student = await this.prisma.student.findFirst({
            where: { id: dto.studentId, schoolId, deletedAt: null }
        });
        if (!student)
            throw new common_1.NotFoundException("Student not found");
        const room = await this.prisma.hostelRoom.findFirst({
            where: { id: dto.roomId, hostel: { schoolId } }
        });
        if (!room)
            throw new common_1.NotFoundException("Room not found");
        const existingForStudent = await this.prisma.hostelAllocation.findFirst({
            where: { studentId: dto.studentId, vacatedDate: null }
        });
        if (existingForStudent)
            throw new common_1.ConflictException("Student already has an active hostel allocation");
        const occupied = await this.prisma.hostelAllocation.count({ where: { roomId: dto.roomId, vacatedDate: null } });
        if (occupied >= room.capacity)
            throw new common_1.ConflictException("Room is at full capacity");
        return this.prisma.hostelAllocation.create({
            data: { schoolId, studentId: dto.studentId, roomId: dto.roomId, bedNumber: dto.bedNumber },
            include: { student: true, room: { include: { hostel: true } } }
        });
    }
    async vacate(schoolId, id) {
        const allocation = await this.prisma.hostelAllocation.findFirst({ where: { id, schoolId } });
        if (!allocation)
            throw new common_1.NotFoundException("Allocation not found");
        if (allocation.vacatedDate)
            throw new common_1.ConflictException("This allocation has already been vacated");
        return this.prisma.hostelAllocation.update({
            where: { id },
            data: { vacatedDate: new Date() },
            include: { student: true, room: { include: { hostel: true } } }
        });
    }
};
exports.HostelAllocationService = HostelAllocationService;
exports.HostelAllocationService = HostelAllocationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HostelAllocationService);
//# sourceMappingURL=hostel-allocation.service.js.map