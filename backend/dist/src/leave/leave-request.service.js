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
exports.LeaveRequestService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
function calculateDayCount(startDate, endDate, isHalfDay) {
    if (isHalfDay)
        return 0.5;
    const diffMs = endDate.getTime() - startDate.getTime();
    return Math.round(diffMs / (24 * 60 * 60 * 1000)) + 1;
}
let LeaveRequestService = class LeaveRequestService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, filters) {
        return this.prisma.leaveRequest.findMany({
            where: { schoolId, ...filters },
            include: {
                teacher: { include: { user: { omit: { passwordHash: true } } } },
                staff: { include: { user: { omit: { passwordHash: true } } } },
                leaveType: true,
                approvedBy: { omit: { passwordHash: true } }
            },
            orderBy: { createdAt: "desc" }
        });
    }
    async resolvePerson(schoolId, userId, role, dto) {
        if (role === "TEACHER") {
            const teacher = await this.prisma.teacher.findFirst({ where: { userId, schoolId } });
            if (!teacher)
                throw new common_1.NotFoundException("Teacher profile not found for this user");
            return { teacherId: teacher.id, staffId: null };
        }
        if (role === "STAFF") {
            const staff = await this.prisma.staff.findFirst({ where: { userId, schoolId } });
            if (!staff)
                throw new common_1.NotFoundException("Staff profile not found for this user");
            return { teacherId: null, staffId: staff.id };
        }
        if (dto.teacherId && dto.staffId) {
            throw new common_1.BadRequestException("Specify either teacherId or staffId, not both");
        }
        if (dto.teacherId) {
            const teacher = await this.prisma.teacher.findFirst({
                where: { id: dto.teacherId, schoolId, deletedAt: null }
            });
            if (!teacher)
                throw new common_1.NotFoundException("Teacher not found");
            return { teacherId: teacher.id, staffId: null };
        }
        if (dto.staffId) {
            const staff = await this.prisma.staff.findFirst({ where: { id: dto.staffId, schoolId, deletedAt: null } });
            if (!staff)
                throw new common_1.NotFoundException("Staff member not found");
            return { teacherId: null, staffId: staff.id };
        }
        throw new common_1.BadRequestException("teacherId or staffId is required");
    }
    async create(schoolId, userId, role, dto) {
        const { teacherId, staffId } = await this.resolvePerson(schoolId, userId, role, dto);
        const leaveType = await this.prisma.leaveType.findFirst({ where: { id: dto.leaveTypeId, schoolId } });
        if (!leaveType)
            throw new common_1.NotFoundException("Leave type not found");
        const startDate = new Date(dto.startDate);
        const endDate = new Date(dto.endDate);
        if (endDate < startDate)
            throw new common_1.BadRequestException("endDate must be on or after startDate");
        if (dto.isHalfDay && startDate.getTime() !== endDate.getTime()) {
            throw new common_1.BadRequestException("Half-day leave requires the same start and end date");
        }
        const dayCount = calculateDayCount(startDate, endDate, !!dto.isHalfDay);
        return this.prisma.leaveRequest.create({
            data: {
                schoolId,
                teacherId,
                staffId,
                leaveTypeId: dto.leaveTypeId,
                startDate,
                endDate,
                isHalfDay: !!dto.isHalfDay,
                dayCount,
                reason: dto.reason
            },
            include: {
                teacher: { include: { user: { omit: { passwordHash: true } } } },
                staff: { include: { user: { omit: { passwordHash: true } } } },
                leaveType: true
            }
        });
    }
    async assertPending(schoolId, id) {
        const request = await this.prisma.leaveRequest.findFirst({ where: { id, schoolId } });
        if (!request)
            throw new common_1.NotFoundException("Leave request not found");
        if (request.status !== "PENDING")
            throw new common_1.ConflictException("This leave request has already been decided");
        return request;
    }
    async approve(schoolId, id, approvedById) {
        await this.assertPending(schoolId, id);
        return this.prisma.leaveRequest.update({
            where: { id },
            data: { status: "APPROVED", approvedById, approvedAt: new Date() },
            include: {
                teacher: { include: { user: { omit: { passwordHash: true } } } },
                staff: { include: { user: { omit: { passwordHash: true } } } },
                leaveType: true
            }
        });
    }
    async reject(schoolId, id, approvedById) {
        await this.assertPending(schoolId, id);
        return this.prisma.leaveRequest.update({
            where: { id },
            data: { status: "REJECTED", approvedById, approvedAt: new Date() },
            include: {
                teacher: { include: { user: { omit: { passwordHash: true } } } },
                staff: { include: { user: { omit: { passwordHash: true } } } },
                leaveType: true
            }
        });
    }
    async cancel(schoolId, userId, role, id) {
        const request = await this.assertPending(schoolId, id);
        if (role === "TEACHER") {
            const teacher = await this.prisma.teacher.findFirst({ where: { userId, schoolId } });
            if (!teacher || teacher.id !== request.teacherId) {
                throw new common_1.ConflictException("You can only cancel your own leave requests");
            }
        }
        if (role === "STAFF") {
            const staff = await this.prisma.staff.findFirst({ where: { userId, schoolId } });
            if (!staff || staff.id !== request.staffId) {
                throw new common_1.ConflictException("You can only cancel your own leave requests");
            }
        }
        return this.prisma.leaveRequest.update({ where: { id }, data: { status: "CANCELLED" } });
    }
    async getBalance(schoolId, params) {
        if (params.teacherId && params.staffId) {
            throw new common_1.BadRequestException("Specify either teacherId or staffId, not both");
        }
        let leaveGroup = null;
        if (params.teacherId) {
            const teacher = await this.prisma.teacher.findFirst({
                where: { id: params.teacherId, schoolId },
                include: { leaveGroup: { include: { allocations: { include: { leaveType: true } } } } }
            });
            if (!teacher)
                throw new common_1.NotFoundException("Teacher not found");
            leaveGroup = teacher.leaveGroup;
        }
        else if (params.staffId) {
            const staff = await this.prisma.staff.findFirst({
                where: { id: params.staffId, schoolId },
                include: { leaveGroup: { include: { allocations: { include: { leaveType: true } } } } }
            });
            if (!staff)
                throw new common_1.NotFoundException("Staff member not found");
            leaveGroup = staff.leaveGroup;
        }
        else {
            throw new common_1.BadRequestException("teacherId or staffId is required");
        }
        if (!leaveGroup)
            return { leaveGroup: null, balances: [] };
        const used = await this.prisma.leaveRequest.groupBy({
            by: ["leaveTypeId"],
            where: {
                schoolId,
                status: "APPROVED",
                teacherId: params.teacherId,
                staffId: params.staffId
            },
            _sum: { dayCount: true }
        });
        const usedByType = new Map(used.map((u) => [u.leaveTypeId, u._sum.dayCount ?? 0]));
        const balances = leaveGroup.allocations.map((allocation) => {
            const usedDays = usedByType.get(allocation.leaveTypeId) ?? 0;
            return {
                leaveTypeId: allocation.leaveTypeId,
                leaveTypeName: allocation.leaveType.name,
                daysPerYear: allocation.daysPerYear,
                used: usedDays,
                remaining: allocation.daysPerYear - usedDays
            };
        });
        return { leaveGroup: { id: leaveGroup.id, name: leaveGroup.name }, balances };
    }
};
exports.LeaveRequestService = LeaveRequestService;
exports.LeaveRequestService = LeaveRequestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LeaveRequestService);
//# sourceMappingURL=leave-request.service.js.map