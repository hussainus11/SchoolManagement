import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateExamScheduleDto } from "./dto/create-exam-schedule.dto";

function overlaps(aStart: string, aEnd: string, bStart: string, bEnd: string) {
  return aStart < bEnd && bStart < aEnd;
}

@Injectable()
export class ExamScheduleService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, filters: { examId?: string; classId?: string; subjectId?: string }) {
    return this.prisma.examSchedule.findMany({
      where: { schoolId, ...filters },
      include: { exam: true, class: true, subject: true, room: true },
      orderBy: [{ examDate: "asc" }, { startTime: "asc" }]
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const schedule = await this.prisma.examSchedule.findFirst({
      where: { id, schoolId },
      include: { exam: true, class: true, subject: true, room: true }
    });
    if (!schedule) throw new NotFoundException("Exam schedule not found");
    return schedule;
  }

  private async assertRelationsInSchool(
    schoolId: string,
    dto: { branchId: string; examId: string; classId: string; subjectId: string; roomId: string }
  ) {
    const branch = await this.prisma.branch.findFirst({ where: { id: dto.branchId, schoolId } });
    if (!branch) throw new NotFoundException("Branch not found");

    const exam = await this.prisma.exam.findFirst({ where: { id: dto.examId, schoolId } });
    if (!exam) throw new NotFoundException("Exam not found");

    const klass = await this.prisma.class.findFirst({ where: { id: dto.classId, schoolId } });
    if (!klass) throw new NotFoundException("Class not found");

    const subject = await this.prisma.subject.findFirst({ where: { id: dto.subjectId, schoolId } });
    if (!subject) throw new NotFoundException("Subject not found");

    const room = await this.prisma.room.findFirst({ where: { id: dto.roomId, schoolId } });
    if (!room) throw new NotFoundException("Room not found");
  }

  private async assertNoRoomConflict(
    schoolId: string,
    dto: { roomId: string; examDate: string; startTime: string; endTime: string },
    excludeId?: string
  ) {
    const sameDay = await this.prisma.examSchedule.findMany({
      where: {
        schoolId,
        roomId: dto.roomId,
        examDate: new Date(dto.examDate),
        id: excludeId ? { not: excludeId } : undefined
      },
      include: { class: true, subject: true }
    });

    const conflict = sameDay.find((entry) =>
      overlaps(dto.startTime, dto.endTime, entry.startTime, entry.endTime)
    );
    if (conflict) {
      throw new ConflictException(
        `Room is already booked for ${conflict.class.name} - ${conflict.subject.name} from ${conflict.startTime} to ${conflict.endTime}`
      );
    }
  }

  async create(schoolId: string, dto: CreateExamScheduleDto) {
    await this.assertRelationsInSchool(schoolId, dto);
    await this.assertNoRoomConflict(schoolId, dto);

    return this.prisma.examSchedule.create({
      data: {
        schoolId,
        branchId: dto.branchId,
        examId: dto.examId,
        classId: dto.classId,
        subjectId: dto.subjectId,
        roomId: dto.roomId,
        examDate: new Date(dto.examDate),
        startTime: dto.startTime,
        endTime: dto.endTime,
        maxMarks: dto.maxMarks,
        passMarks: dto.passMarks
      },
      include: { exam: true, class: true, subject: true, room: true }
    });
  }

  async update(schoolId: string, id: string, dto: CreateExamScheduleDto) {
    await this.findOneForSchool(schoolId, id);
    await this.assertRelationsInSchool(schoolId, dto);
    await this.assertNoRoomConflict(schoolId, dto, id);

    return this.prisma.examSchedule.update({
      where: { id },
      data: {
        branchId: dto.branchId,
        examId: dto.examId,
        classId: dto.classId,
        subjectId: dto.subjectId,
        roomId: dto.roomId,
        examDate: new Date(dto.examDate),
        startTime: dto.startTime,
        endTime: dto.endTime,
        maxMarks: dto.maxMarks,
        passMarks: dto.passMarks
      },
      include: { exam: true, class: true, subject: true, room: true }
    });
  }

  async remove(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    const usage = await this.prisma.mark.count({ where: { examScheduleId: id } });
    if (usage > 0) {
      throw new ConflictException("Cannot delete an exam schedule that already has marks entered");
    }
    await this.prisma.examSchedule.delete({ where: { id } });
  }
}
