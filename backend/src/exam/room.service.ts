import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateRoomDto } from "./dto/create-room.dto";

@Injectable()
export class RoomService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, branchId?: string) {
    return this.prisma.room.findMany({
      where: { schoolId, branchId },
      orderBy: { name: "asc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const room = await this.prisma.room.findFirst({ where: { id, schoolId } });
    if (!room) throw new NotFoundException("Room not found");
    return room;
  }

  private async assertBranchInSchool(schoolId: string, branchId: string) {
    const branch = await this.prisma.branch.findFirst({ where: { id: branchId, schoolId } });
    if (!branch) throw new NotFoundException("Branch not found");
  }

  async create(schoolId: string, dto: CreateRoomDto) {
    await this.assertBranchInSchool(schoolId, dto.branchId);
    return this.prisma.room.create({ data: { ...dto, schoolId } });
  }

  async update(schoolId: string, id: string, dto: CreateRoomDto) {
    await this.findOneForSchool(schoolId, id);
    await this.assertBranchInSchool(schoolId, dto.branchId);
    return this.prisma.room.update({ where: { id }, data: dto });
  }

  async remove(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    const usage = await this.prisma.examSchedule.count({ where: { roomId: id } });
    if (usage > 0) {
      throw new ConflictException("Cannot delete a room that is used in an exam schedule");
    }
    await this.prisma.room.delete({ where: { id } });
  }
}
