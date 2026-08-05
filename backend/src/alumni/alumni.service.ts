import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateAlumniDto } from "./dto/create-alumni.dto";

@Injectable()
export class AlumniService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, search?: string) {
    return this.prisma.alumni.findMany({
      where: {
        schoolId,
        ...(search
          ? {
              OR: [
                { firstName: { contains: search, mode: "insensitive" } },
                { lastName: { contains: search, mode: "insensitive" } },
                { currentOccupation: { contains: search, mode: "insensitive" } }
              ]
            }
          : {})
      },
      orderBy: { graduationYear: "desc" }
    });
  }

  async create(schoolId: string, dto: CreateAlumniDto) {
    if (dto.studentId) {
      const student = await this.prisma.student.findFirst({ where: { id: dto.studentId, schoolId } });
      if (!student) throw new NotFoundException("Student not found");
      const existing = await this.prisma.alumni.findUnique({ where: { studentId: dto.studentId } });
      if (existing) throw new ConflictException("This student already has an alumni record");
    }

    return this.prisma.alumni.create({ data: { ...dto, schoolId } });
  }

  async update(schoolId: string, id: string, dto: CreateAlumniDto) {
    const alumni = await this.prisma.alumni.findFirst({ where: { id, schoolId } });
    if (!alumni) throw new NotFoundException("Alumni record not found");
    return this.prisma.alumni.update({ where: { id }, data: dto });
  }

  async remove(schoolId: string, id: string) {
    const alumni = await this.prisma.alumni.findFirst({ where: { id, schoolId } });
    if (!alumni) throw new NotFoundException("Alumni record not found");
    await this.prisma.alumni.delete({ where: { id } });
  }
}
