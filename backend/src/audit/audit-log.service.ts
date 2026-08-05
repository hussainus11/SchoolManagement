import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AuditLogService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(
    schoolId: string,
    filters: { entityType?: string; userId?: string; startDate?: string; endDate?: string }
  ) {
    return this.prisma.auditLog.findMany({
      where: {
        schoolId,
        entityType: filters.entityType,
        userId: filters.userId,
        createdAt: {
          gte: filters.startDate ? new Date(filters.startDate) : undefined,
          lte: filters.endDate ? new Date(filters.endDate) : undefined
        }
      },
      include: { user: { omit: { passwordHash: true } } },
      orderBy: { createdAt: "desc" },
      take: 200
    });
  }
}
