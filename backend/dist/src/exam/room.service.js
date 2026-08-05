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
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RoomService = class RoomService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, branchId) {
        return this.prisma.room.findMany({
            where: { schoolId, branchId },
            orderBy: { name: "asc" }
        });
    }
    async findOneForSchool(schoolId, id) {
        const room = await this.prisma.room.findFirst({ where: { id, schoolId } });
        if (!room)
            throw new common_1.NotFoundException("Room not found");
        return room;
    }
    async assertBranchInSchool(schoolId, branchId) {
        const branch = await this.prisma.branch.findFirst({ where: { id: branchId, schoolId } });
        if (!branch)
            throw new common_1.NotFoundException("Branch not found");
    }
    async create(schoolId, dto) {
        await this.assertBranchInSchool(schoolId, dto.branchId);
        return this.prisma.room.create({ data: { ...dto, schoolId } });
    }
    async update(schoolId, id, dto) {
        await this.findOneForSchool(schoolId, id);
        await this.assertBranchInSchool(schoolId, dto.branchId);
        return this.prisma.room.update({ where: { id }, data: dto });
    }
    async remove(schoolId, id) {
        await this.findOneForSchool(schoolId, id);
        const usage = await this.prisma.examSchedule.count({ where: { roomId: id } });
        if (usage > 0) {
            throw new common_1.ConflictException("Cannot delete a room that is used in an exam schedule");
        }
        await this.prisma.room.delete({ where: { id } });
    }
};
exports.RoomService = RoomService;
exports.RoomService = RoomService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoomService);
//# sourceMappingURL=room.service.js.map