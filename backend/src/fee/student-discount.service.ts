import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateDiscountDto } from "./dto/create-discount.dto";

@Injectable()
export class StudentDiscountService {
  constructor(private readonly prisma: PrismaService) {}

  findForStudent(schoolId: string, studentId: string) {
    return this.prisma.studentDiscount.findMany({
      where: { schoolId, studentId },
      include: { feeHead: true },
      orderBy: { createdAt: "desc" }
    });
  }

  async create(schoolId: string, dto: CreateDiscountDto) {
    if (dto.type === "PERCENTAGE" && dto.value > 100) {
      throw new BadRequestException("A percentage discount cannot exceed 100");
    }

    const student = await this.prisma.student.findFirst({
      where: { id: dto.studentId, schoolId, deletedAt: null }
    });
    if (!student) throw new NotFoundException("Student not found");

    if (dto.feeHeadId) {
      const feeHead = await this.prisma.feeHead.findFirst({ where: { id: dto.feeHeadId, schoolId } });
      if (!feeHead) throw new NotFoundException("Fee head not found");
    }

    return this.prisma.studentDiscount.create({ data: { ...dto, schoolId }, include: { feeHead: true } });
  }

  async deactivate(schoolId: string, id: string) {
    const discount = await this.prisma.studentDiscount.findFirst({ where: { id, schoolId } });
    if (!discount) throw new NotFoundException("Discount not found");
    return this.prisma.studentDiscount.update({ where: { id }, data: { isActive: false } });
  }
}
