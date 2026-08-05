import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IssueBookDto } from "./dto/issue-book.dto";

@Injectable()
export class BookIssueService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(
    schoolId: string,
    filters: { status?: "ISSUED" | "RETURNED" | "LOST"; studentId?: string; teacherId?: string }
  ) {
    return this.prisma.bookIssue.findMany({
      where: { schoolId, ...filters },
      include: { book: true, student: true, teacher: { include: { user: { omit: { passwordHash: true } } } } },
      orderBy: { issueDate: "desc" }
    });
  }

  async issue(schoolId: string, issuedById: string, dto: IssueBookDto) {
    if (!dto.studentId && !dto.teacherId) {
      throw new BadRequestException("Either studentId or teacherId is required");
    }
    if (dto.studentId && dto.teacherId) {
      throw new BadRequestException("Provide only one of studentId or teacherId");
    }

    const book = await this.prisma.book.findFirst({ where: { id: dto.bookId, schoolId } });
    if (!book) throw new NotFoundException("Book not found");
    if (book.availableCopies <= 0) throw new ConflictException("No copies of this book are currently available");

    if (dto.studentId) {
      const student = await this.prisma.student.findFirst({
        where: { id: dto.studentId, schoolId, deletedAt: null }
      });
      if (!student) throw new NotFoundException("Student not found");
    }
    if (dto.teacherId) {
      const teacher = await this.prisma.teacher.findFirst({
        where: { id: dto.teacherId, schoolId, deletedAt: null }
      });
      if (!teacher) throw new NotFoundException("Teacher not found");
    }

    return this.prisma.$transaction(async (tx) => {
      await tx.book.update({ where: { id: dto.bookId }, data: { availableCopies: { decrement: 1 } } });
      return tx.bookIssue.create({
        data: {
          schoolId,
          bookId: dto.bookId,
          studentId: dto.studentId,
          teacherId: dto.teacherId,
          dueDate: new Date(dto.dueDate),
          issuedById
        },
        include: { book: true, student: true, teacher: { include: { user: { omit: { passwordHash: true } } } } }
      });
    });
  }

  private async assertIssuedInSchool(schoolId: string, id: string) {
    const issue = await this.prisma.bookIssue.findFirst({ where: { id, schoolId } });
    if (!issue) throw new NotFoundException("Book issue record not found");
    if (issue.status !== "ISSUED") throw new ConflictException("This book has already been returned or marked lost");
    return issue;
  }

  async returnBook(schoolId: string, id: string, fineAmount?: number) {
    const issue = await this.assertIssuedInSchool(schoolId, id);

    return this.prisma.$transaction(async (tx) => {
      await tx.book.update({ where: { id: issue.bookId }, data: { availableCopies: { increment: 1 } } });
      return tx.bookIssue.update({
        where: { id },
        data: { status: "RETURNED", returnDate: new Date(), fineAmount },
        include: { book: true, student: true, teacher: { include: { user: { omit: { passwordHash: true } } } } }
      });
    });
  }

  async markLost(schoolId: string, id: string, fineAmount?: number) {
    const issue = await this.assertIssuedInSchool(schoolId, id);

    return this.prisma.$transaction(async (tx) => {
      await tx.book.update({
        where: { id: issue.bookId },
        data: { totalCopies: { decrement: 1 } }
      });
      return tx.bookIssue.update({
        where: { id },
        data: { status: "LOST", fineAmount },
        include: { book: true, student: true, teacher: { include: { user: { omit: { passwordHash: true } } } } }
      });
    });
  }
}
