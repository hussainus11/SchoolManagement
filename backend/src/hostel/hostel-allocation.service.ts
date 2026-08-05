import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AllocateHostelDto } from "./dto/allocate-hostel.dto";

@Injectable()
export class HostelAllocationService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, filters: { roomId?: string; active?: boolean }) {
    return this.prisma.hostelAllocation.findMany({
      where: {
        schoolId,
        roomId: filters.roomId,
        vacatedDate: filters.active ? null : undefined
      },
      include: { student: true, room: { include: { hostel: true } } },
      orderBy: { allocatedDate: "desc" }
    });
  }

  async allocate(schoolId: string, dto: AllocateHostelDto) {
    const student = await this.prisma.student.findFirst({
      where: { id: dto.studentId, schoolId, deletedAt: null }
    });
    if (!student) throw new NotFoundException("Student not found");

    const room = await this.prisma.hostelRoom.findFirst({
      where: { id: dto.roomId, hostel: { schoolId } }
    });
    if (!room) throw new NotFoundException("Room not found");

    const existingForStudent = await this.prisma.hostelAllocation.findFirst({
      where: { studentId: dto.studentId, vacatedDate: null }
    });
    if (existingForStudent) throw new ConflictException("Student already has an active hostel allocation");

    const occupied = await this.prisma.hostelAllocation.count({ where: { roomId: dto.roomId, vacatedDate: null } });
    if (occupied >= room.capacity) throw new ConflictException("Room is at full capacity");

    return this.prisma.hostelAllocation.create({
      data: { schoolId, studentId: dto.studentId, roomId: dto.roomId, bedNumber: dto.bedNumber },
      include: { student: true, room: { include: { hostel: true } } }
    });
  }

  async vacate(schoolId: string, id: string) {
    const allocation = await this.prisma.hostelAllocation.findFirst({ where: { id, schoolId } });
    if (!allocation) throw new NotFoundException("Allocation not found");
    if (allocation.vacatedDate) throw new ConflictException("This allocation has already been vacated");

    return this.prisma.hostelAllocation.update({
      where: { id },
      data: { vacatedDate: new Date() },
      include: { student: true, room: { include: { hostel: true } } }
    });
  }
}
