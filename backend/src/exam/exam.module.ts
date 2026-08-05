import { Module } from "@nestjs/common";
import { ExamScheduleController } from "./exam-schedule.controller";
import { ExamScheduleService } from "./exam-schedule.service";
import { ExamTypeController } from "./exam-type.controller";
import { ExamTypeService } from "./exam-type.service";
import { ExamController } from "./exam.controller";
import { ExamService } from "./exam.service";
import { RoomController } from "./room.controller";
import { RoomService } from "./room.service";

@Module({
  controllers: [RoomController, ExamTypeController, ExamController, ExamScheduleController],
  providers: [RoomService, ExamTypeService, ExamService, ExamScheduleService],
  exports: [ExamScheduleService]
})
export class ExamModule {}
