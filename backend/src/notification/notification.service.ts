import { Injectable, NotFoundException } from "@nestjs/common";
import { NotificationType } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class NotificationService {
  constructor(private readonly prisma: PrismaService) {}

  async notifyStudentGuardians(
    schoolId: string,
    studentId: string,
    type: NotificationType,
    title: string,
    body: string,
    link?: string
  ) {
    const links = await this.prisma.studentGuardian.findMany({
      where: { studentId, guardian: { userId: { not: null } } },
      include: { guardian: true }
    });
    const userIds = links
      .map((l) => l.guardian.userId)
      .filter((id): id is string => id !== null);
    if (userIds.length === 0) return;

    await this.prisma.notification.createMany({
      data: userIds.map((userId) => ({ schoolId, userId, type, title, body, link }))
    });
  }

  findForUser(schoolId: string, userId: string, unreadOnly?: boolean) {
    return this.prisma.notification.findMany({
      where: { schoolId, userId, isRead: unreadOnly ? false : undefined },
      orderBy: { createdAt: "desc" },
      take: 50
    });
  }

  unreadCount(schoolId: string, userId: string) {
    return this.prisma.notification.count({ where: { schoolId, userId, isRead: false } });
  }

  async markRead(schoolId: string, userId: string, id: string) {
    const notification = await this.prisma.notification.findFirst({ where: { id, schoolId, userId } });
    if (!notification) throw new NotFoundException("Notification not found");
    return this.prisma.notification.update({ where: { id }, data: { isRead: true } });
  }

  async markAllRead(schoolId: string, userId: string) {
    await this.prisma.notification.updateMany({
      where: { schoolId, userId, isRead: false },
      data: { isRead: true }
    });
  }
}
