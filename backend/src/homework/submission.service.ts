import { Injectable, NotFoundException } from "@nestjs/common";
import { SubmissionStatus } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SubmissionService {
  constructor(private readonly prisma: PrismaService) {}

  findForAssignment(schoolId: string, assignmentId: string) {
    return this.prisma.assignmentSubmission.findMany({
      where: { schoolId, assignmentId },
      include: { student: true },
      orderBy: { student: { firstName: "asc" } }
    });
  }

  findForStudent(schoolId: string, studentId: string) {
    return this.prisma.assignmentSubmission.findMany({
      where: { schoolId, studentId },
      include: { assignment: { include: { subject: true, section: { include: { class: true } } } } },
      orderBy: { assignment: { dueDate: "desc" } }
    });
  }

  private async assertInSchool(schoolId: string, id: string) {
    const submission = await this.prisma.assignmentSubmission.findFirst({
      where: { id, schoolId },
      include: { assignment: true }
    });
    if (!submission) throw new NotFoundException("Submission not found");
    return submission;
  }

  async record(schoolId: string, id: string, submissionText: string) {
    const submission = await this.assertInSchool(schoolId, id);
    const now = new Date();
    const status: SubmissionStatus = now > submission.assignment.dueDate ? "LATE" : "SUBMITTED";

    return this.prisma.assignmentSubmission.update({
      where: { id },
      data: { submissionText, submittedAt: now, status }
    });
  }

  async grade(schoolId: string, id: string, gradedById: string, marksObtained: number, feedback?: string) {
    await this.assertInSchool(schoolId, id);
    return this.prisma.assignmentSubmission.update({
      where: { id },
      data: { marksObtained, feedback, gradedById, gradedAt: new Date(), status: "GRADED" }
    });
  }
}
