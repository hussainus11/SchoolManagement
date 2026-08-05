import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { LeaveStatus, Role } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateLeaveRequestDto } from "./dto/create-leave-request.dto";

function calculateDayCount(startDate: Date, endDate: Date, isHalfDay: boolean): number {
  if (isHalfDay) return 0.5;
  const diffMs = endDate.getTime() - startDate.getTime();
  return Math.round(diffMs / (24 * 60 * 60 * 1000)) + 1;
}

@Injectable()
export class LeaveRequestService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(
    schoolId: string,
    filters: { teacherId?: string; staffId?: string; status?: LeaveStatus }
  ) {
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

  /** Resolves which person (teacher xor staff) this request is for, honoring self-service for
   *  TEACHER/STAFF callers and requiring an explicit target for admins. */
  private async resolvePerson(
    schoolId: string,
    userId: string,
    role: Role,
    dto: Pick<CreateLeaveRequestDto, "teacherId" | "staffId">
  ): Promise<{ teacherId: string | null; staffId: string | null }> {
    if (role === "TEACHER") {
      const teacher = await this.prisma.teacher.findFirst({ where: { userId, schoolId } });
      if (!teacher) throw new NotFoundException("Teacher profile not found for this user");
      return { teacherId: teacher.id, staffId: null };
    }
    if (role === "STAFF") {
      const staff = await this.prisma.staff.findFirst({ where: { userId, schoolId } });
      if (!staff) throw new NotFoundException("Staff profile not found for this user");
      return { teacherId: null, staffId: staff.id };
    }

    if (dto.teacherId && dto.staffId) {
      throw new BadRequestException("Specify either teacherId or staffId, not both");
    }
    if (dto.teacherId) {
      const teacher = await this.prisma.teacher.findFirst({
        where: { id: dto.teacherId, schoolId, deletedAt: null }
      });
      if (!teacher) throw new NotFoundException("Teacher not found");
      return { teacherId: teacher.id, staffId: null };
    }
    if (dto.staffId) {
      const staff = await this.prisma.staff.findFirst({ where: { id: dto.staffId, schoolId, deletedAt: null } });
      if (!staff) throw new NotFoundException("Staff member not found");
      return { teacherId: null, staffId: staff.id };
    }
    throw new BadRequestException("teacherId or staffId is required");
  }

  async create(schoolId: string, userId: string, role: Role, dto: CreateLeaveRequestDto) {
    const { teacherId, staffId } = await this.resolvePerson(schoolId, userId, role, dto);

    const leaveType = await this.prisma.leaveType.findFirst({ where: { id: dto.leaveTypeId, schoolId } });
    if (!leaveType) throw new NotFoundException("Leave type not found");

    const startDate = new Date(dto.startDate);
    const endDate = new Date(dto.endDate);
    if (endDate < startDate) throw new BadRequestException("endDate must be on or after startDate");
    if (dto.isHalfDay && startDate.getTime() !== endDate.getTime()) {
      throw new BadRequestException("Half-day leave requires the same start and end date");
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

  private async assertPending(schoolId: string, id: string) {
    const request = await this.prisma.leaveRequest.findFirst({ where: { id, schoolId } });
    if (!request) throw new NotFoundException("Leave request not found");
    if (request.status !== "PENDING") throw new ConflictException("This leave request has already been decided");
    return request;
  }

  async approve(schoolId: string, id: string, approvedById: string) {
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

  async reject(schoolId: string, id: string, approvedById: string) {
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

  async cancel(schoolId: string, userId: string, role: Role, id: string) {
    const request = await this.assertPending(schoolId, id);
    if (role === "TEACHER") {
      const teacher = await this.prisma.teacher.findFirst({ where: { userId, schoolId } });
      if (!teacher || teacher.id !== request.teacherId) {
        throw new ConflictException("You can only cancel your own leave requests");
      }
    }
    if (role === "STAFF") {
      const staff = await this.prisma.staff.findFirst({ where: { userId, schoolId } });
      if (!staff || staff.id !== request.staffId) {
        throw new ConflictException("You can only cancel your own leave requests");
      }
    }
    return this.prisma.leaveRequest.update({ where: { id }, data: { status: "CANCELLED" } });
  }

  async getBalance(schoolId: string, params: { teacherId?: string; staffId?: string }) {
    if (params.teacherId && params.staffId) {
      throw new BadRequestException("Specify either teacherId or staffId, not both");
    }

    let leaveGroup: { id: string; name: string; allocations: { leaveTypeId: string; daysPerYear: number; leaveType: { id: string; name: string } }[] } | null = null;

    if (params.teacherId) {
      const teacher = await this.prisma.teacher.findFirst({
        where: { id: params.teacherId, schoolId },
        include: { leaveGroup: { include: { allocations: { include: { leaveType: true } } } } }
      });
      if (!teacher) throw new NotFoundException("Teacher not found");
      leaveGroup = teacher.leaveGroup;
    } else if (params.staffId) {
      const staff = await this.prisma.staff.findFirst({
        where: { id: params.staffId, schoolId },
        include: { leaveGroup: { include: { allocations: { include: { leaveType: true } } } } }
      });
      if (!staff) throw new NotFoundException("Staff member not found");
      leaveGroup = staff.leaveGroup;
    } else {
      throw new BadRequestException("teacherId or staffId is required");
    }

    if (!leaveGroup) return { leaveGroup: null, balances: [] };

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
}
