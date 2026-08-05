import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateExpenseCategoryDto } from "./dto/create-expense-category.dto";
import { ExpenseCategoryService } from "./expense-category.service";
export declare class ExpenseCategoryController {
    private readonly categoryService;
    constructor(categoryService: ExpenseCategoryService);
    findAll(user: JwtPayload): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        schoolId: string;
    }[]>;
    create(user: JwtPayload, dto: CreateExpenseCategoryDto): import("../../generated/prisma/models").Prisma__ExpenseCategoryClient<{
        id: string;
        name: string;
        createdAt: Date;
        schoolId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
}
