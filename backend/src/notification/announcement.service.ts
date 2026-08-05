import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateAnnouncementDto } from "./dto/create-announcement.dto";

@Injectable()
export class AnnouncementService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, branchId?: string) {
    return this.prisma.announcement.findMany({
      where: { schoolId, branchId },
      include: { createdBy: { omit: { passwordHash: true } } },
      orderBy: { createdAt: "desc" }
    });
  }

  async create(schoolId: string, createdById: string, dto: CreateAnnouncementDto) {
    if (dto.branchId) {
      const branch = await this.prisma.branch.findFirst({ where: { id: dto.branchId, schoolId } });
      if (!branch) throw new NotFoundException("Branch not found");
    }

    const recipients = await this.prisma.user.findMany({
      where: {
        schoolId,
        branchId: dto.branchId ?? undefined,
        role: { in: dto.targetRoles },
        isActive: true,
        deletedAt: null
      },
      select: { id: true }
    });

    return this.prisma.$transaction(async (tx) => {
      const announcement = await tx.announcement.create({
        data: {
          schoolId,
          branchId: dto.branchId,
          title: dto.title,
          body: dto.body,
          targetRoles: dto.targetRoles,
          createdById
        }
      });

      if (recipients.length > 0) {
        await tx.notification.createMany({
          data: recipients.map((r) => ({
            schoolId,
            userId: r.id,
            announcementId: announcement.id,
            type: "ANNOUNCEMENT" as const,
            title: dto.title,
            body: dto.body
          }))
        });
      }

      return announcement;
    });
  }
}
