import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateLeaveTypeDto } from "./dto/create-leave-type.dto";

@Injectable()
export class LeaveTypeService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string) {
    return this.prisma.leaveType.findMany({ where: { schoolId }, orderBy: { name: "asc" } });
  }

  create(schoolId: string, dto: CreateLeaveTypeDto) {
    return this.prisma.leaveType.create({ data: { ...dto, schoolId } });
  }

  async remove(schoolId: string, id: string) {
    const leaveType = await this.prisma.leaveType.findFirst({ where: { id, schoolId } });
    if (!leaveType) throw new NotFoundException("Leave type not found");
    const usage = await this.prisma.leaveRequest.count({ where: { leaveTypeId: id } });
    if (usage > 0) throw new ConflictException("Cannot delete a leave type that has requests");
    await this.prisma.leaveType.delete({ where: { id } });
  }
}
