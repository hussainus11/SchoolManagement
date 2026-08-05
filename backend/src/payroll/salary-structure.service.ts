import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateSalaryStructureDto } from "./dto/create-salary-structure.dto";

@Injectable()
export class SalaryStructureService {
  constructor(private readonly prisma: PrismaService) {}

  findForUser(schoolId: string, userId: string) {
    return this.prisma.salaryStructure.findMany({
      where: { schoolId, userId },
      orderBy: { effectiveFrom: "desc" }
    });
  }

  async create(schoolId: string, dto: CreateSalaryStructureDto) {
    const user = await this.prisma.user.findFirst({
      where: { id: dto.userId, schoolId, deletedAt: null }
    });
    if (!user) throw new NotFoundException("User not found");

    return this.prisma.$transaction(async (tx) => {
      await tx.salaryStructure.updateMany({
        where: { schoolId, userId: dto.userId, isActive: true },
        data: { isActive: false }
      });
      return tx.salaryStructure.create({
        data: {
          schoolId,
          userId: dto.userId,
          basicSalary: dto.basicSalary,
          allowances: dto.allowances ?? 0,
          fixedDeductions: dto.fixedDeductions ?? 0,
          effectiveFrom: new Date(dto.effectiveFrom)
        }
      });
    });
  }

  async deactivate(schoolId: string, id: string) {
    const structure = await this.prisma.salaryStructure.findFirst({ where: { id, schoolId } });
    if (!structure) throw new NotFoundException("Salary structure not found");
    return this.prisma.salaryStructure.update({ where: { id }, data: { isActive: false } });
  }
}
