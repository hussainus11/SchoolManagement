import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateHostelRoomDto } from "./dto/create-hostel-room.dto";
import { CreateHostelDto } from "./dto/create-hostel.dto";

@Injectable()
export class HostelService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, branchId?: string) {
    return this.prisma.hostel.findMany({
      where: { schoolId, branchId },
      include: { rooms: { include: { allocations: { where: { vacatedDate: null } } } } },
      orderBy: { name: "asc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const hostel = await this.prisma.hostel.findFirst({
      where: { id, schoolId },
      include: { rooms: { include: { allocations: { where: { vacatedDate: null }, include: { student: true } } } } }
    });
    if (!hostel) throw new NotFoundException("Hostel not found");
    return hostel;
  }

  private async assertBranchInSchool(schoolId: string, branchId: string) {
    const branch = await this.prisma.branch.findFirst({ where: { id: branchId, schoolId } });
    if (!branch) throw new NotFoundException("Branch not found");
  }

  async create(schoolId: string, dto: CreateHostelDto) {
    await this.assertBranchInSchool(schoolId, dto.branchId);
    return this.prisma.hostel.create({ data: { ...dto, schoolId } });
  }

  async remove(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    const rooms = await this.prisma.hostelRoom.count({ where: { hostelId: id } });
    if (rooms > 0) throw new ConflictException("Cannot delete a hostel that still has rooms");
    await this.prisma.hostel.delete({ where: { id } });
  }

  async addRoom(schoolId: string, hostelId: string, dto: CreateHostelRoomDto) {
    await this.findOneForSchool(schoolId, hostelId);
    return this.prisma.hostelRoom.create({ data: { ...dto, hostelId } });
  }

  async removeRoom(schoolId: string, hostelId: string, roomId: string) {
    await this.findOneForSchool(schoolId, hostelId);
    const room = await this.prisma.hostelRoom.findFirst({ where: { id: roomId, hostelId } });
    if (!room) throw new NotFoundException("Room not found");
    const active = await this.prisma.hostelAllocation.count({ where: { roomId, vacatedDate: null } });
    if (active > 0) throw new ConflictException("Cannot delete a room with active allocations");
    await this.prisma.hostelRoom.delete({ where: { id: roomId } });
  }
}
