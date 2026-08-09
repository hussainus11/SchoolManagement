import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import * as crypto from "node:crypto";
import { Role } from "../../generated/prisma/client";
import { AuthService } from "../auth/auth.service";
import { PrismaService } from "../prisma/prisma.service";
import { CreateGuardianDto } from "./dto/create-guardian.dto";

function generateTempPassword() {
  return crypto.randomBytes(9).toString("base64url");
}

@Injectable()
export class GuardianService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, search?: string) {
    return this.prisma.guardian.findMany({
      where: {
        schoolId,
        ...(search
          ? {
              OR: [
                { firstName: { contains: search, mode: "insensitive" } },
                { lastName: { contains: search, mode: "insensitive" } },
                { email: { contains: search, mode: "insensitive" } },
                { phone: { contains: search, mode: "insensitive" } }
              ]
            }
          : {})
      },
      include: { _count: { select: { students: true } } },
      orderBy: { createdAt: "desc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const guardian = await this.prisma.guardian.findFirst({ where: { id, schoolId } });
    if (!guardian) throw new NotFoundException("Guardian not found");
    return guardian;
  }

  /** Consolidated view across every child linked to this guardian — combined billed/paid/due
   *  totals plus each child's invoices, so a family's account can be seen and managed as one
   *  instead of piecing it together from separate per-student invoice lists. */
  async getLedger(schoolId: string, guardianId: string) {
    const guardian = await this.findOneForSchool(schoolId, guardianId);

    const links = await this.prisma.studentGuardian.findMany({
      where: { guardianId },
      include: {
        student: { include: { section: { include: { class: true } } } }
      }
    });
    const studentIds = links.map((l) => l.studentId);

    const invoices = studentIds.length
      ? await this.prisma.invoice.findMany({
          where: { schoolId, studentId: { in: studentIds }, deletedAt: null },
          include: {
            student: true,
            items: { include: { feeHead: true } },
            payments: { orderBy: { paidAt: "desc" } }
          },
          orderBy: { issueDate: "desc" }
        })
      : [];

    const discounts = await this.prisma.guardianDiscount.findMany({
      where: { schoolId, guardianId },
      include: { feeHead: true },
      orderBy: { createdAt: "desc" }
    });

    const totals = invoices.reduce(
      (acc, invoice) => ({
        billed: acc.billed + Number(invoice.total),
        paid: acc.paid + Number(invoice.amountPaid),
        discount: acc.discount + Number(invoice.discountTotal)
      }),
      { billed: 0, paid: 0, discount: 0 }
    );

    return {
      guardian,
      children: links.map((link) => ({
        studentId: link.studentId,
        relation: link.relation,
        isPrimary: link.isPrimary,
        student: link.student
      })),
      discounts,
      invoices,
      totals: { ...totals, due: totals.billed - totals.paid }
    };
  }

  create(schoolId: string, dto: CreateGuardianDto) {
    return this.prisma.guardian.create({ data: { ...dto, schoolId } });
  }

  async createLogin(schoolId: string, id: string) {
    const guardian = await this.findOneForSchool(schoolId, id);
    if (guardian.userId) throw new ConflictException("This guardian already has a portal login");
    if (!guardian.email) throw new ConflictException("Guardian must have an email to create a login");

    const existingUser = await this.prisma.user.findUnique({ where: { email: guardian.email } });
    if (existingUser) throw new ConflictException("A user with this email already exists");

    const tempPassword = generateTempPassword();
    const passwordHash = await AuthService.hashPassword(tempPassword);

    const user = await this.prisma.$transaction(async (tx) => {
      const createdUser = await tx.user.create({
        data: {
          email: guardian.email!,
          passwordHash,
          firstName: guardian.firstName,
          lastName: guardian.lastName,
          phone: guardian.phone,
          role: Role.PARENT,
          schoolId
        }
      });
      await tx.guardian.update({ where: { id }, data: { userId: createdUser.id } });
      return createdUser;
    });

    return { userId: user.id, email: user.email, tempPassword };
  }
}
