import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AcademicYearService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string) {
    return this.prisma.academicYear.findMany({
      where: { schoolId },
      orderBy: { startDate: "desc" }
    });
  }

  async create(
    schoolId: string,
    data: { name: string; startDate: Date; endDate: Date; isCurrent?: boolean }
  ) {
    if (data.isCurrent) {
      await this.prisma.academicYear.updateMany({
        where: { schoolId, isCurrent: true },
        data: { isCurrent: false }
      });
    }
    return this.prisma.academicYear.create({ data: { ...data, schoolId } });
  }

  createWithinTransaction(
    tx: Prisma.TransactionClient,
    schoolId: string,
    data: { name: string; startDate: Date; endDate: Date }
  ) {
    return tx.academicYear.create({ data: { ...data, schoolId, isCurrent: true } });
  }

  async setCurrent(schoolId: string, id: string) {
    const year = await this.prisma.academicYear.findFirst({ where: { id, schoolId } });
    if (!year) throw new NotFoundException("Academic year not found");

    await this.prisma.$transaction([
      this.prisma.academicYear.updateMany({
        where: { schoolId, isCurrent: true },
        data: { isCurrent: false }
      }),
      this.prisma.academicYear.update({ where: { id }, data: { isCurrent: true } })
    ]);

    return this.prisma.academicYear.findUniqueOrThrow({ where: { id } });
  }
}
