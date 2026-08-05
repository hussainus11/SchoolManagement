import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateAssignmentDto } from "./dto/create-assignment.dto";

@Injectable()
export class AssignmentService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, filters: { sectionId?: string; subjectId?: string; teacherId?: string }) {
    return this.prisma.assignment.findMany({
      where: { schoolId, deletedAt: null, ...filters },
      include: { subject: true, teacher: { include: { user: { omit: { passwordHash: true } } } }, section: { include: { class: true } } },
      orderBy: { dueDate: "desc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const assignment = await this.prisma.assignment.findFirst({
      where: { id, schoolId, deletedAt: null },
      include: {
        subject: true,
        teacher: { include: { user: { omit: { passwordHash: true } } } },
        section: { include: { class: true } },
        submissions: { include: { student: true }, orderBy: { student: { firstName: "asc" } } }
      }
    });
    if (!assignment) throw new NotFoundException("Assignment not found");
    return assignment;
  }

  async create(schoolId: string, dto: CreateAssignmentDto) {
    const section = await this.prisma.section.findFirst({
      where: { id: dto.sectionId, class: { schoolId } }
    });
    if (!section) throw new NotFoundException("Section not found");

    const subject = await this.prisma.subject.findFirst({ where: { id: dto.subjectId, schoolId } });
    if (!subject) throw new NotFoundException("Subject not found");

    const teacher = await this.prisma.teacher.findFirst({
      where: { id: dto.teacherId, schoolId, deletedAt: null }
    });
    if (!teacher) throw new NotFoundException("Teacher not found");

    const students = await this.prisma.student.findMany({
      where: { schoolId, sectionId: dto.sectionId, deletedAt: null, isActive: true }
    });

    return this.prisma.$transaction(async (tx) => {
      const assignment = await tx.assignment.create({
        data: {
          schoolId,
          sectionId: dto.sectionId,
          subjectId: dto.subjectId,
          teacherId: dto.teacherId,
          title: dto.title,
          description: dto.description,
          dueDate: new Date(dto.dueDate)
        }
      });

      if (students.length > 0) {
        await tx.assignmentSubmission.createMany({
          data: students.map((student) => ({
            schoolId,
            assignmentId: assignment.id,
            studentId: student.id
          }))
        });
      }

      return assignment;
    });
  }

  async remove(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    await this.prisma.assignment.update({ where: { id }, data: { deletedAt: new Date() } });
  }
}
