import { Module } from "@nestjs/common";
import { RouteController } from "./route.controller";
import { RouteService } from "./route.service";
import { StudentTransportController } from "./student-transport.controller";
import { StudentTransportService } from "./student-transport.service";
import { VehicleController } from "./vehicle.controller";
import { VehicleService } from "./vehicle.service";

@Module({
  controllers: [VehicleController, RouteController, StudentTransportController],
  providers: [VehicleService, RouteService, StudentTransportService]
})
export class TransportModule {}
