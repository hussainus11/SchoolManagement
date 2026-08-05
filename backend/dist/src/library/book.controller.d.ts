import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { BookService } from "./book.service";
import { CreateBookDto } from "./dto/create-book.dto";
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    findAll(user: JwtPayload, search?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        title: string;
        author: string | null;
        isbn: string | null;
        category: string | null;
        totalCopies: number;
        availableCopies: number;
    }[]>;
    create(user: JwtPayload, dto: CreateBookDto): import("../../generated/prisma/models").Prisma__BookClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        title: string;
        author: string | null;
        isbn: string | null;
        category: string | null;
        totalCopies: number;
        availableCopies: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(user: JwtPayload, id: string, dto: CreateBookDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        title: string;
        author: string | null;
        isbn: string | null;
        category: string | null;
        totalCopies: number;
        availableCopies: number;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
}
