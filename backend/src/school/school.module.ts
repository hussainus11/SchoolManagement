import { Module } from "@nestjs/common";
import { AdminSchoolController } from "./admin-school.controller";
import { SchoolController } from "./school.controller";
import { SchoolService } from "./school.service";

@Module({
  controllers: [SchoolController, AdminSchoolController],
  providers: [SchoolService],
  exports: [SchoolService]
})
export class SchoolModule {}
