import { Module } from "@nestjs/common";
import { StudentAttendanceController } from "./student-attendance.controller";
import { StudentAttendanceService } from "./student-attendance.service";
import { TeacherAttendanceController } from "./teacher-attendance.controller";
import { TeacherAttendanceService } from "./teacher-attendance.service";

@Module({
  controllers: [StudentAttendanceController, TeacherAttendanceController],
  providers: [StudentAttendanceService, TeacherAttendanceService]
})
export class AttendanceModule {}
