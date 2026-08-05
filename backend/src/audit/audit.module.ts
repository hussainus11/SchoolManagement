import { Module } from "@nestjs/common";
import { AuditLogController } from "./audit-log.controller";
import { AuditLogService } from "./audit-log.service";
import { AuditService } from "./audit.service";

@Module({
  controllers: [AuditLogController],
  providers: [AuditService, AuditLogService],
  exports: [AuditService]
})
export class AuditModule {}
