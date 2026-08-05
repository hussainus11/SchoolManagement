import { NotificationType } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
export declare class NotificationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    notifyStudentGuardians(schoolId: string, studentId: string, type: NotificationType, title: string, body: string, link?: string): Promise<void>;
    findForUser(schoolId: string, userId: string, unreadOnly?: boolean): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        schoolId: string;
        userId: string;
        title: string;
        type: NotificationType;
        body: string;
        announcementId: string | null;
        link: string | null;
        isRead: boolean;
    }[]>;
    unreadCount(schoolId: string, userId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<number>;
    markRead(schoolId: string, userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        schoolId: string;
        userId: string;
        title: string;
        type: NotificationType;
        body: string;
        announcementId: string | null;
        link: string | null;
        isRead: boolean;
    }>;
    markAllRead(schoolId: string, userId: string): Promise<void>;
}
