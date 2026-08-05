import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { NotificationService } from "./notification.service";
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    find(user: JwtPayload, unreadOnly?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        schoolId: string;
        userId: string;
        title: string;
        type: import("../../generated/prisma/enums").NotificationType;
        body: string;
        announcementId: string | null;
        link: string | null;
        isRead: boolean;
    }[]>;
    unreadCount(user: JwtPayload): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<number>;
    markRead(user: JwtPayload, id: string): Promise<{
        id: string;
        createdAt: Date;
        schoolId: string;
        userId: string;
        title: string;
        type: import("../../generated/prisma/enums").NotificationType;
        body: string;
        announcementId: string | null;
        link: string | null;
        isRead: boolean;
    }>;
    markAllRead(user: JwtPayload): Promise<void>;
}
