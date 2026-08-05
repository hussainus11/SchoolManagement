import { Module } from "@nestjs/common";
import { LeaveGroupController } from "./leave-group.controller";
import { LeaveGroupService } from "./leave-group.service";
import { LeaveRequestController } from "./leave-request.controller";
import { LeaveRequestService } from "./leave-request.service";
import { LeaveTypeController } from "./leave-type.controller";
import { LeaveTypeService } from "./leave-type.service";

@Module({
  controllers: [LeaveTypeController, LeaveGroupController, LeaveRequestController],
  providers: [LeaveTypeService, LeaveGroupService, LeaveRequestService]
})
export class LeaveModule {}
