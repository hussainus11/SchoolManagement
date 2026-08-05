import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateBookDto } from "./dto/create-book.dto";

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, search?: string) {
    return this.prisma.book.findMany({
      where: {
        schoolId,
        ...(search
          ? {
              OR: [
                { title: { contains: search, mode: "insensitive" } },
                { author: { contains: search, mode: "insensitive" } },
                { isbn: { contains: search, mode: "insensitive" } }
              ]
            }
          : {})
      },
      orderBy: { title: "asc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const book = await this.prisma.book.findFirst({ where: { id, schoolId } });
    if (!book) throw new NotFoundException("Book not found");
    return book;
  }

  create(schoolId: string, dto: CreateBookDto) {
    return this.prisma.book.create({
      data: { ...dto, schoolId, availableCopies: dto.totalCopies }
    });
  }

  async update(schoolId: string, id: string, dto: CreateBookDto) {
    const book = await this.findOneForSchool(schoolId, id);
    const issuedCount = book.totalCopies - book.availableCopies;
    if (dto.totalCopies < issuedCount) {
      throw new ConflictException(`Cannot reduce total copies below ${issuedCount} currently issued`);
    }
    return this.prisma.book.update({
      where: { id },
      data: { ...dto, availableCopies: dto.totalCopies - issuedCount }
    });
  }

  async remove(schoolId: string, id: string) {
    const book = await this.findOneForSchool(schoolId, id);
    if (book.availableCopies !== book.totalCopies) {
      throw new ConflictException("Cannot delete a book with copies currently issued");
    }
    await this.prisma.book.delete({ where: { id } });
  }
}
