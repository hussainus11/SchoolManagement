import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateDisciplineIncidentDto } from "./dto/create-discipline-incident.dto";

@Injectable()
export class DisciplineService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, studentId?: string) {
    return this.prisma.disciplineIncident.findMany({
      where: { schoolId, studentId },
      include: { student: true, reportedBy: { omit: { passwordHash: true } } },
      orderBy: { incidentDate: "desc" }
    });
  }

  async create(schoolId: string, reportedById: string, dto: CreateDisciplineIncidentDto) {
    const student = await this.prisma.student.findFirst({
      where: { id: dto.studentId, schoolId, deletedAt: null }
    });
    if (!student) throw new NotFoundException("Student not found");

    return this.prisma.disciplineIncident.create({
      data: {
        schoolId,
        studentId: dto.studentId,
        reportedById,
        incidentDate: dto.incidentDate ? new Date(dto.incidentDate) : undefined,
        category: dto.category,
        severity: dto.severity,
        description: dto.description,
        actionTaken: dto.actionTaken
      },
      include: { student: true, reportedBy: { omit: { passwordHash: true } } }
    });
  }

  async remove(schoolId: string, id: string) {
    const incident = await this.prisma.disciplineIncident.findFirst({ where: { id, schoolId } });
    if (!incident) throw new NotFoundException("Discipline incident not found");
    await this.prisma.disciplineIncident.delete({ where: { id } });
  }
}
