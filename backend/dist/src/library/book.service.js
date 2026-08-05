"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BookService = class BookService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, search) {
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
    async findOneForSchool(schoolId, id) {
        const book = await this.prisma.book.findFirst({ where: { id, schoolId } });
        if (!book)
            throw new common_1.NotFoundException("Book not found");
        return book;
    }
    create(schoolId, dto) {
        return this.prisma.book.create({
            data: { ...dto, schoolId, availableCopies: dto.totalCopies }
        });
    }
    async update(schoolId, id, dto) {
        const book = await this.findOneForSchool(schoolId, id);
        const issuedCount = book.totalCopies - book.availableCopies;
        if (dto.totalCopies < issuedCount) {
            throw new common_1.ConflictException(`Cannot reduce total copies below ${issuedCount} currently issued`);
        }
        return this.prisma.book.update({
            where: { id },
            data: { ...dto, availableCopies: dto.totalCopies - issuedCount }
        });
    }
    async remove(schoolId, id) {
        const book = await this.findOneForSchool(schoolId, id);
        if (book.availableCopies !== book.totalCopies) {
            throw new common_1.ConflictException("Cannot delete a book with copies currently issued");
        }
        await this.prisma.book.delete({ where: { id } });
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookService);
//# sourceMappingURL=book.service.js.map