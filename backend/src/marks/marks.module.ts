import { Module } from "@nestjs/common";
import { GradeScaleController } from "./grade-scale.controller";
import { GradeScaleService } from "./grade-scale.service";
import { MarkController } from "./mark.controller";
import { MarkService } from "./mark.service";

@Module({
  controllers: [GradeScaleController, MarkController],
  providers: [GradeScaleService, MarkService],
  exports: [MarkService]
})
export class MarksModule {}
