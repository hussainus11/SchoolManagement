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
exports.BookIssueService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BookIssueService = class BookIssueService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, filters) {
        return this.prisma.bookIssue.findMany({
            where: { schoolId, ...filters },
            include: { book: true, student: true, teacher: { include: { user: { omit: { passwordHash: true } } } } },
            orderBy: { issueDate: "desc" }
        });
    }
    async issue(schoolId, issuedById, dto) {
        if (!dto.studentId && !dto.teacherId) {
            throw new common_1.BadRequestException("Either studentId or teacherId is required");
        }
        if (dto.studentId && dto.teacherId) {
            throw new common_1.BadRequestException("Provide only one of studentId or teacherId");
        }
        const book = await this.prisma.book.findFirst({ where: { id: dto.bookId, schoolId } });
        if (!book)
            throw new common_1.NotFoundException("Book not found");
        if (book.availableCopies <= 0)
            throw new common_1.ConflictException("No copies of this book are currently available");
        if (dto.studentId) {
            const student = await this.prisma.student.findFirst({
                where: { id: dto.studentId, schoolId, deletedAt: null }
            });
            if (!student)
                throw new common_1.NotFoundException("Student not found");
        }
        if (dto.teacherId) {
            const teacher = await this.prisma.teacher.findFirst({
                where: { id: dto.teacherId, schoolId, deletedAt: null }
            });
            if (!teacher)
                throw new common_1.NotFoundException("Teacher not found");
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
    async assertIssuedInSchool(schoolId, id) {
        const issue = await this.prisma.bookIssue.findFirst({ where: { id, schoolId } });
        if (!issue)
            throw new common_1.NotFoundException("Book issue record not found");
        if (issue.status !== "ISSUED")
            throw new common_1.ConflictException("This book has already been returned or marked lost");
        return issue;
    }
    async returnBook(schoolId, id, fineAmount) {
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
    async markLost(schoolId, id, fineAmount) {
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
};
exports.BookIssueService = BookIssueService;
exports.BookIssueService = BookIssueService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookIssueService);
//# sourceMappingURL=book-issue.service.js.map