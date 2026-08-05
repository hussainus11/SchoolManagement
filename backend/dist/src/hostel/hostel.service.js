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
exports.HostelService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let HostelService = class HostelService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, branchId) {
        return this.prisma.hostel.findMany({
            where: { schoolId, branchId },
            include: { rooms: { include: { allocations: { where: { vacatedDate: null } } } } },
            orderBy: { name: "asc" }
        });
    }
    async findOneForSchool(schoolId, id) {
        const hostel = await this.prisma.hostel.findFirst({
            where: { id, schoolId },
            include: { rooms: { include: { allocations: { where: { vacatedDate: null }, include: { student: true } } } } }
        });
        if (!hostel)
            throw new common_1.NotFoundException("Hostel not found");
        return hostel;
    }
    async assertBranchInSchool(schoolId, branchId) {
        const branch = await this.prisma.branch.findFirst({ where: { id: branchId, schoolId } });
        if (!branch)
            throw new common_1.NotFoundException("Branch not found");
    }
    async create(schoolId, dto) {
        await this.assertBranchInSchool(schoolId, dto.branchId);
        return this.prisma.hostel.create({ data: { ...dto, schoolId } });
    }
    async remove(schoolId, id) {
        await this.findOneForSchool(schoolId, id);
        const rooms = await this.prisma.hostelRoom.count({ where: { hostelId: id } });
        if (rooms > 0)
            throw new common_1.ConflictException("Cannot delete a hostel that still has rooms");
        await this.prisma.hostel.delete({ where: { id } });
    }
    async addRoom(schoolId, hostelId, dto) {
        await this.findOneForSchool(schoolId, hostelId);
        return this.prisma.hostelRoom.create({ data: { ...dto, hostelId } });
    }
    async removeRoom(schoolId, hostelId, roomId) {
        await this.findOneForSchool(schoolId, hostelId);
        const room = await this.prisma.hostelRoom.findFirst({ where: { id: roomId, hostelId } });
        if (!room)
            throw new common_1.NotFoundException("Room not found");
        const active = await this.prisma.hostelAllocation.count({ where: { roomId, vacatedDate: null } });
        if (active > 0)
            throw new common_1.ConflictException("Cannot delete a room with active allocations");
        await this.prisma.hostelRoom.delete({ where: { id: roomId } });
    }
};
exports.HostelService = HostelService;
exports.HostelService = HostelService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HostelService);
//# sourceMappingURL=hostel.service.js.map