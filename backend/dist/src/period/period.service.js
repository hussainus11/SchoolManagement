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
exports.PeriodService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PeriodService = class PeriodService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForBranch(schoolId, branchId) {
        return this.prisma.period.findMany({
            where: { schoolId, branchId },
            orderBy: { order: "asc" }
        });
    }
    async findOneForSchool(schoolId, id) {
        const period = await this.prisma.period.findFirst({ where: { id, schoolId } });
        if (!period)
            throw new common_1.NotFoundException("Period not found");
        return period;
    }
    async create(schoolId, data) {
        const branch = await this.prisma.branch.findFirst({ where: { id: data.branchId, schoolId } });
        if (!branch)
            throw new common_1.NotFoundException("Branch not found");
        return this.prisma.period.create({ data: { ...data, schoolId } });
    }
    async update(schoolId, id, data) {
        await this.findOneForSchool(schoolId, id);
        return this.prisma.period.update({ where: { id }, data });
    }
    async remove(schoolId, id) {
        await this.findOneForSchool(schoolId, id);
        const entryCount = await this.prisma.timetableEntry.count({ where: { periodId: id } });
        if (entryCount > 0) {
            throw new common_1.ConflictException("Cannot delete a period that is used in the timetable");
        }
        await this.prisma.period.delete({ where: { id } });
    }
};
exports.PeriodService = PeriodService;
exports.PeriodService = PeriodService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PeriodService);
//# sourceMappingURL=period.service.js.map