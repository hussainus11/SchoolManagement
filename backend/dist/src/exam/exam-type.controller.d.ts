import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateExamTypeDto } from "./dto/create-exam-type.dto";
import { ExamTypeService } from "./exam-type.service";
export declare class ExamTypeController {
    private readonly examTypeService;
    constructor(examTypeService: ExamTypeService);
    findAll(user: JwtPayload): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
    }[]>;
    create(user: JwtPayload, dto: CreateExamTypeDto): import("../../generated/prisma/models").Prisma__ExamTypeClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(user: JwtPayload, id: string, dto: CreateExamTypeDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
}
