import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class BranchService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string) {
    return this.prisma.branch.findMany({ where: { schoolId }, orderBy: { createdAt: "asc" } });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const branch = await this.prisma.branch.findFirst({ where: { id, schoolId } });
    if (!branch) throw new NotFoundException("Branch not found");
    return branch;
  }

  create(schoolId: string, data: { name: string; code: string; address?: string; phone?: string }) {
    return this.prisma.branch.create({ data: { ...data, schoolId } });
  }

  createWithinTransaction(
    tx: Prisma.TransactionClient,
    schoolId: string,
    data: { name: string; code: string }
  ) {
    return tx.branch.create({ data: { ...data, schoolId } });
  }

  async update(schoolId: string, id: string, data: Prisma.BranchUpdateInput) {
    await this.findOneForSchool(schoolId, id);
    return this.prisma.branch.update({ where: { id }, data });
  }
}
