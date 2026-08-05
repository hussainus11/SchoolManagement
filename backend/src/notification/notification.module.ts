import { Module } from "@nestjs/common";
import { AnnouncementController } from "./announcement.controller";
import { AnnouncementService } from "./announcement.service";
import { NotificationController } from "./notification.controller";
import { NotificationService } from "./notification.service";

@Module({
  controllers: [AnnouncementController, NotificationController],
  providers: [AnnouncementService, NotificationService],
  exports: [NotificationService]
})
export class NotificationModule {}
