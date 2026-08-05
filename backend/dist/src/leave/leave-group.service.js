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
exports.LeaveGroupService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let LeaveGroupService = class LeaveGroupService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId) {
        return this.prisma.leaveGroup.findMany({
            where: { schoolId },
            include: {
                allocations: { include: { leaveType: true } },
                _count: { select: { teachers: true, staff: true } }
            },
            orderBy: { name: "asc" }
        });
    }
    async findOneForSchool(schoolId, id) {
        const group = await this.prisma.leaveGroup.findFirst({
            where: { id, schoolId },
            include: { allocations: { include: { leaveType: true } } }
        });
        if (!group)
            throw new common_1.NotFoundException("Leave group not found");
        return group;
    }
    async assertLeaveTypesBelongToSchool(schoolId, leaveTypeIds) {
        const count = await this.prisma.leaveType.count({ where: { id: { in: leaveTypeIds }, schoolId } });
        if (count !== new Set(leaveTypeIds).size) {
            throw new common_1.NotFoundException("One or more leave types were not found");
        }
    }
    async create(schoolId, dto) {
        const existing = await this.prisma.leaveGroup.findUnique({
            where: { schoolId_name: { schoolId, name: dto.name } }
        });
        if (existing)
            throw new common_1.ConflictException("A leave group with this name already exists");
        if (dto.allocations?.length) {
            await this.assertLeaveTypesBelongToSchool(schoolId, dto.allocations.map((a) => a.leaveTypeId));
        }
        return this.prisma.leaveGroup.create({
            data: {
                schoolId,
                name: dto.name,
                allocations: dto.allocations
                    ? { create: dto.allocations.map((a) => ({ leaveTypeId: a.leaveTypeId, daysPerYear: a.daysPerYear })) }
                    : undefined
            },
            include: { allocations: { include: { leaveType: true } } }
        });
    }
    async update(schoolId, id, dto) {
        await this.findOneForSchool(schoolId, id);
        if (dto.name) {
            const existing = await this.prisma.leaveGroup.findUnique({
                where: { schoolId_name: { schoolId, name: dto.name } }
            });
            if (existing && existing.id !== id) {
                throw new common_1.ConflictException("A leave group with this name already exists");
            }
        }
        if (dto.allocations?.length) {
            await this.assertLeaveTypesBelongToSchool(schoolId, dto.allocations.map((a) => a.leaveTypeId));
        }
        return this.prisma.$transaction(async (tx) => {
            if (dto.allocations) {
                await tx.leaveGroupAllocation.deleteMany({ where: { leaveGroupId: id } });
            }
            return tx.leaveGroup.update({
                where: { id },
                data: {
                    name: dto.name,
                    allocations: dto.allocations
                        ? { create: dto.allocations.map((a) => ({ leaveTypeId: a.leaveTypeId, daysPerYear: a.daysPerYear })) }
                        : undefined
                },
                include: { allocations: { include: { leaveType: true } } }
            });
        });
    }
    async remove(schoolId, id) {
        await this.findOneForSchool(schoolId, id);
        const [teacherCount, staffCount] = await Promise.all([
            this.prisma.teacher.count({ where: { leaveGroupId: id } }),
            this.prisma.staff.count({ where: { leaveGroupId: id } })
        ]);
        if (teacherCount > 0 || staffCount > 0) {
            throw new common_1.ConflictException("Cannot delete a leave group that is still assigned to teachers or staff");
        }
        await this.prisma.leaveGroup.delete({ where: { id } });
    }
};
exports.LeaveGroupService = LeaveGroupService;
exports.LeaveGroupService = LeaveGroupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LeaveGroupService);
//# sourceMappingURL=leave-group.service.js.map