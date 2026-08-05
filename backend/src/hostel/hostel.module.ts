import { Module } from "@nestjs/common";
import { HostelAllocationController } from "./hostel-allocation.controller";
import { HostelAllocationService } from "./hostel-allocation.service";
import { HostelController } from "./hostel.controller";
import { HostelService } from "./hostel.service";

@Module({
  controllers: [HostelController, HostelAllocationController],
  providers: [HostelService, HostelAllocationService]
})
export class HostelModule {}
