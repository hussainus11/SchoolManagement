import { Injectable, NotFoundException } from "@nestjs/common";
import { EventType } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";

interface EventInput {
  branchId?: string;
  title: string;
  description?: string;
  location?: string;
  type: EventType;
  startDate: string;
  endDate: string;
  isAllDay?: boolean;
}

function endOfDay(dateString: string) {
  const date = new Date(dateString);
  date.setHours(23, 59, 59, 999);
  return date;
}

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  findInRange(schoolId: string, filters: { startDate: string; endDate: string; branchId?: string }) {
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

  async findOneForSchool(schoolId: string, id: string) {
    const event = await this.prisma.schoolEvent.findFirst({ where: { id, schoolId } });
    if (!event) throw new NotFoundException("Event not found");
    return event;
  }

  private async assertBranchInSchool(schoolId: string, branchId: string) {
    const branch = await this.prisma.branch.findFirst({ where: { id: branchId, schoolId } });
    if (!branch) throw new NotFoundException("Branch not found");
  }

  async create(schoolId: string, createdById: string, data: EventInput) {
    if (data.branchId) await this.assertBranchInSchool(schoolId, data.branchId);

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

  async update(schoolId: string, id: string, data: Partial<EventInput>) {
    await this.findOneForSchool(schoolId, id);
    if (data.branchId) await this.assertBranchInSchool(schoolId, data.branchId);

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

  async remove(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    await this.prisma.schoolEvent.delete({ where: { id } });
  }
}
