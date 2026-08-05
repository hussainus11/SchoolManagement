import { PrismaService } from "../prisma/prisma.service";
import { CreateBookDto } from "./dto/create-book.dto";
export declare class BookService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, search?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
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
    findOneForSchool(schoolId: string, id: string): Promise<{
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
    create(schoolId: string, dto: CreateBookDto): import("../../generated/prisma/models").Prisma__BookClient<{
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
    update(schoolId: string, id: string, dto: CreateBookDto): Promise<{
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
    remove(schoolId: string, id: string): Promise<void>;
}
