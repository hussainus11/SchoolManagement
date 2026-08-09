import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateGuardianDiscountDto } from "./dto/create-guardian-discount.dto";

@Injectable()
export class GuardianDiscountService {
  constructor(private readonly prisma: PrismaService) {}

  findForGuardian(schoolId: string, guardianId: string) {
    return this.prisma.guardianDiscount.findMany({
      where: { schoolId, guardianId },
      include: { feeHead: true },
      orderBy: { createdAt: "desc" }
    });
  }

  async create(schoolId: string, dto: CreateGuardianDiscountDto) {
    if (dto.type === "PERCENTAGE" && dto.value > 100) {
      throw new BadRequestException("A percentage discount cannot exceed 100");
    }

    const guardian = await this.prisma.guardian.findFirst({ where: { id: dto.guardianId, schoolId } });
    if (!guardian) throw new NotFoundException("Guardian not found");

    if (dto.feeHeadId) {
      const feeHead = await this.prisma.feeHead.findFirst({ where: { id: dto.feeHeadId, schoolId } });
      if (!feeHead) throw new NotFoundException("Fee head not found");
    }

    return this.prisma.guardianDiscount.create({ data: { ...dto, schoolId }, include: { feeHead: true } });
  }

  async deactivate(schoolId: string, id: string) {
    const discount = await this.prisma.guardianDiscount.findFirst({ where: { id, schoolId } });
    if (!discount) throw new NotFoundException("Discount not found");
    return this.prisma.guardianDiscount.update({ where: { id }, data: { isActive: false } });
  }
}
