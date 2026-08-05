import { Module } from "@nestjs/common";
import { MarksModule } from "../marks/marks.module";
import { PortalController } from "./portal.controller";
import { PortalService } from "./portal.service";

@Module({
  imports: [MarksModule],
  controllers: [PortalController],
  providers: [PortalService]
})
export class PortalModule {}
