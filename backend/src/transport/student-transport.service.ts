import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssignTransportDto } from "./dto/assign-transport.dto";

@Injectable()
export class StudentTransportService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, routeId?: string) {
    return this.prisma.studentTransport.findMany({
      where: { schoolId, routeId },
      include: { student: true, route: { include: { vehicle: true } }, stop: true },
      orderBy: { createdAt: "desc" }
    });
  }

  async assign(schoolId: string, dto: AssignTransportDto) {
    const student = await this.prisma.student.findFirst({
      where: { id: dto.studentId, schoolId, deletedAt: null }
    });
    if (!student) throw new NotFoundException("Student not found");

    const stop = await this.prisma.routeStop.findFirst({
      where: { id: dto.stopId, routeId: dto.routeId, route: { schoolId } }
    });
    if (!stop) throw new NotFoundException("Stop not found on this route");

    return this.prisma.studentTransport.upsert({
      where: { studentId: dto.studentId },
      create: { schoolId, studentId: dto.studentId, routeId: dto.routeId, stopId: dto.stopId },
      update: { routeId: dto.routeId, stopId: dto.stopId },
      include: { student: true, route: { include: { vehicle: true } }, stop: true }
    });
  }

  async remove(schoolId: string, studentId: string) {
    const assignment = await this.prisma.studentTransport.findFirst({ where: { studentId, schoolId } });
    if (!assignment) throw new NotFoundException("Transport assignment not found");
    await this.prisma.studentTransport.delete({ where: { studentId } });
  }
}
