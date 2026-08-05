import { Controller, Get, Param, Patch, Query } from "@nestjs/common";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { NotificationService } from "./notification.service";

@Controller("notifications")
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  find(@CurrentUser() user: JwtPayload, @Query("unreadOnly") unreadOnly?: string) {
    return this.notificationService.findForUser(user.schoolId!, user.sub, unreadOnly === "true");
  }

  @Get("unread-count")
  unreadCount(@CurrentUser() user: JwtPayload) {
    return this.notificationService.unreadCount(user.schoolId!, user.sub);
  }

  @Patch(":id/read")
  markRead(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.notificationService.markRead(user.schoolId!, user.sub, id);
  }

  @Patch("read-all")
  markAllRead(@CurrentUser() user: JwtPayload) {
    return this.notificationService.markAllRead(user.schoolId!, user.sub);
  }
}
