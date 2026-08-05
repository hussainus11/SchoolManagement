import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateVisitorDto } from "./dto/create-visitor.dto";

@Injectable()
export class VisitorService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, filters: { branchId?: string; active?: boolean }) {
    return this.prisma.visitor.findMany({
      where: { schoolId, branchId: filters.branchId, checkOutAt: filters.active ? null : undefined },
      orderBy: { checkInAt: "desc" }
    });
  }

  async checkIn(schoolId: string, dto: CreateVisitorDto) {
    const branch = await this.prisma.branch.findFirst({ where: { id: dto.branchId, schoolId } });
    if (!branch) throw new NotFoundException("Branch not found");
    return this.prisma.visitor.create({ data: { ...dto, schoolId } });
  }

  async checkOut(schoolId: string, id: string) {
    const visitor = await this.prisma.visitor.findFirst({ where: { id, schoolId } });
    if (!visitor) throw new NotFoundException("Visitor not found");
    if (visitor.checkOutAt) throw new ConflictException("This visitor has already checked out");
    return this.prisma.visitor.update({ where: { id }, data: { checkOutAt: new Date() } });
  }
}
