import { Injectable } from "@nestjs/common";
import { Prisma, Role } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  findById(id: string) {
    return this.prisma.user.findFirst({ where: { id, deletedAt: null } });
  }

  create(data: {
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    role: Role;
    schoolId?: string;
    branchId?: string;
  }) {
    return this.prisma.user.create({ data });
  }

  createWithinTransaction(
    tx: Prisma.TransactionClient,
    data: {
      email: string;
      passwordHash: string;
      firstName: string;
      lastName: string;
      role: Role;
      schoolId?: string;
      branchId?: string;
    }
  ) {
    return tx.user.create({ data });
  }

  markLoggedIn(id: string) {
    return this.prisma.user.update({ where: { id }, data: { lastLoginAt: new Date() } });
  }
}
