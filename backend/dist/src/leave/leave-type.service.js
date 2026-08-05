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
exports.LeaveTypeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let LeaveTypeService = class LeaveTypeService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId) {
        return this.prisma.leaveType.findMany({ where: { schoolId }, orderBy: { name: "asc" } });
    }
    create(schoolId, dto) {
        return this.prisma.leaveType.create({ data: { ...dto, schoolId } });
    }
    async remove(schoolId, id) {
        const leaveType = await this.prisma.leaveType.findFirst({ where: { id, schoolId } });
        if (!leaveType)
            throw new common_1.NotFoundException("Leave type not found");
        const usage = await this.prisma.leaveRequest.count({ where: { leaveTypeId: id } });
        if (usage > 0)
            throw new common_1.ConflictException("Cannot delete a leave type that has requests");
        await this.prisma.leaveType.delete({ where: { id } });
    }
};
exports.LeaveTypeService = LeaveTypeService;
exports.LeaveTypeService = LeaveTypeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LeaveTypeService);
//# sourceMappingURL=leave-type.service.js.map