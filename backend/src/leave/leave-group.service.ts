import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateLeaveGroupDto } from "./dto/create-leave-group.dto";
import { UpdateLeaveGroupDto } from "./dto/update-leave-group.dto";

@Injectable()
export class LeaveGroupService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string) {
    return this.prisma.leaveGroup.findMany({
      where: { schoolId },
      include: {
        allocations: { include: { leaveType: true } },
        _count: { select: { teachers: true, staff: true } }
      },
      orderBy: { name: "asc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const group = await this.prisma.leaveGroup.findFirst({
      where: { id, schoolId },
      include: { allocations: { include: { leaveType: true } } }
    });
    if (!group) throw new NotFoundException("Leave group not found");
    return group;
  }

  private async assertLeaveTypesBelongToSchool(schoolId: string, leaveTypeIds: string[]) {
    const count = await this.prisma.leaveType.count({ where: { id: { in: leaveTypeIds }, schoolId } });
    if (count !== new Set(leaveTypeIds).size) {
      throw new NotFoundException("One or more leave types were not found");
    }
  }

  async create(schoolId: string, dto: CreateLeaveGroupDto) {
    const existing = await this.prisma.leaveGroup.findUnique({
      where: { schoolId_name: { schoolId, name: dto.name } }
    });
    if (existing) throw new ConflictException("A leave group with this name already exists");

    if (dto.allocations?.length) {
      await this.assertLeaveTypesBelongToSchool(
        schoolId,
        dto.allocations.map((a) => a.leaveTypeId)
      );
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

  async update(schoolId: string, id: string, dto: UpdateLeaveGroupDto) {
    await this.findOneForSchool(schoolId, id);

    if (dto.name) {
      const existing = await this.prisma.leaveGroup.findUnique({
        where: { schoolId_name: { schoolId, name: dto.name } }
      });
      if (existing && existing.id !== id) {
        throw new ConflictException("A leave group with this name already exists");
      }
    }

    if (dto.allocations?.length) {
      await this.assertLeaveTypesBelongToSchool(
        schoolId,
        dto.allocations.map((a) => a.leaveTypeId)
      );
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

  async remove(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    const [teacherCount, staffCount] = await Promise.all([
      this.prisma.teacher.count({ where: { leaveGroupId: id } }),
      this.prisma.staff.count({ where: { leaveGroupId: id } })
    ]);
    if (teacherCount > 0 || staffCount > 0) {
      throw new ConflictException("Cannot delete a leave group that is still assigned to teachers or staff");
    }
    await this.prisma.leaveGroup.delete({ where: { id } });
  }
}
