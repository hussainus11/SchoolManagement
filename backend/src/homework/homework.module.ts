import { Module } from "@nestjs/common";
import { AssignmentController } from "./assignment.controller";
import { AssignmentService } from "./assignment.service";
import { SubmissionController } from "./submission.controller";
import { SubmissionService } from "./submission.service";

@Module({
  controllers: [AssignmentController, SubmissionController],
  providers: [AssignmentService, SubmissionService]
})
export class HomeworkModule {}
