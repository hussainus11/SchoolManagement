import { Body, Controller, Get, Param, Patch, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { GradeSubmissionDto } from "./dto/grade-submission.dto";
import { RecordSubmissionDto } from "./dto/record-submission.dto";
import { SubmissionService } from "./submission.service";

@Controller("submissions")
@Audit("AssignmentSubmission")
@Resource("homework")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.TEACHER)
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Get()
  find(
    @CurrentUser() user: JwtPayload,
    @Query("assignmentId") assignmentId?: string,
    @Query("studentId") studentId?: string
  ) {
    if (assignmentId) return this.submissionService.findForAssignment(user.schoolId!, assignmentId);
    if (studentId) return this.submissionService.findForStudent(user.schoolId!, studentId);
    return [];
  }

  @Patch(":id/record")
  record(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: RecordSubmissionDto) {
    return this.submissionService.record(user.schoolId!, id, dto.submissionText);
  }

  @Patch(":id/grade")
  grade(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: GradeSubmissionDto) {
    return this.submissionService.grade(user.schoolId!, id, user.sub, dto.marksObtained, dto.feedback);
  }
}
