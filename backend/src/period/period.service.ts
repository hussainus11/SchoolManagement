import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PeriodService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForBranch(schoolId: string, branchId: string) {
    return this.prisma.period.findMany({
      where: { schoolId, branchId },
      orderBy: { order: "asc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const period = await this.prisma.period.findFirst({ where: { id, schoolId } });
    if (!period) throw new NotFoundException("Period not found");
    return period;
  }

  async create(schoolId: string, data: { branchId: string; name: string; startTime: string; endTime: string; order?: number }) {
    const branch = await this.prisma.branch.findFirst({ where: { id: data.branchId, schoolId } });
    if (!branch) throw new NotFoundException("Branch not found");
    return this.prisma.period.create({ data: { ...data, schoolId } });
  }

  async update(schoolId: string, id: string, data: Prisma.PeriodUpdateInput) {
    await this.findOneForSchool(schoolId, id);
    return this.prisma.period.update({ where: { id }, data });
  }

  async remove(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    const entryCount = await this.prisma.timetableEntry.count({ where: { periodId: id } });
    if (entryCount > 0) {
      throw new ConflictException("Cannot delete a period that is used in the timetable");
    }
    await this.prisma.period.delete({ where: { id } });
  }
}
