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
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
function endOfDay(dateString) {
    const date = new Date(dateString);
    date.setHours(23, 59, 59, 999);
    return date;
}
let EventService = class EventService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findInRange(schoolId, filters) {
        return this.prisma.schoolEvent.findMany({
            where: {
                schoolId,
                ...(filters.branchId ? { OR: [{ branchId: null }, { branchId: filters.branchId }] } : {}),
                startDate: { lte: endOfDay(filters.endDate) },
                endDate: { gte: new Date(filters.startDate) }
            },
            orderBy: { startDate: "asc" }
        });
    }
    async findOneForSchool(schoolId, id) {
        const event = await this.prisma.schoolEvent.findFirst({ where: { id, schoolId } });
        if (!event)
            throw new common_1.NotFoundException("Event not found");
        return event;
    }
    async assertBranchInSchool(schoolId, branchId) {
        const branch = await this.prisma.branch.findFirst({ where: { id: branchId, schoolId } });
        if (!branch)
            throw new common_1.NotFoundException("Branch not found");
    }
    async create(schoolId, createdById, data) {
        if (data.branchId)
            await this.assertBranchInSchool(schoolId, data.branchId);
        return this.prisma.schoolEvent.create({
            data: {
                schoolId,
                branchId: data.branchId,
                title: data.title,
                description: data.description,
                location: data.location,
                type: data.type,
                startDate: new Date(data.startDate),
                endDate: new Date(data.endDate),
                isAllDay: data.isAllDay ?? true,
                createdById
            }
        });
    }
    async update(schoolId, id, data) {
        await this.findOneForSchool(schoolId, id);
        if (data.branchId)
            await this.assertBranchInSchool(schoolId, data.branchId);
        return this.prisma.schoolEvent.update({
            where: { id },
            data: {
                branchId: data.branchId,
                title: data.title,
                description: data.description,
                location: data.location,
                type: data.type,
                startDate: data.startDate ? new Date(data.startDate) : undefined,
                endDate: data.endDate ? new Date(data.endDate) : undefined,
                isAllDay: data.isAllDay
            }
        });
    }
    async remove(schoolId, id) {
        await this.findOneForSchool(schoolId, id);
        await this.prisma.schoolEvent.delete({ where: { id } });
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EventService);
//# sourceMappingURL=event.service.js.map