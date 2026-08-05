import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateFeeHeadDto } from "./dto/create-fee-head.dto";

@Injectable()
export class FeeHeadService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string) {
    return this.prisma.feeHead.findMany({ where: { schoolId }, orderBy: { name: "asc" } });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const feeHead = await this.prisma.feeHead.findFirst({ where: { id, schoolId } });
    if (!feeHead) throw new NotFoundException("Fee head not found");
    return feeHead;
  }

  create(schoolId: string, dto: CreateFeeHeadDto) {
    return this.prisma.feeHead.create({ data: { ...dto, schoolId } });
  }

  async update(schoolId: string, id: string, dto: CreateFeeHeadDto) {
    await this.findOneForSchool(schoolId, id);
    return this.prisma.feeHead.update({ where: { id }, data: dto });
  }

  async remove(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    const usage = await this.prisma.feeStructure.count({ where: { feeHeadId: id } });
    if (usage > 0) {
      throw new ConflictException("Cannot delete a fee head that is used in a fee structure");
    }
    await this.prisma.feeHead.delete({ where: { id } });
  }
}
