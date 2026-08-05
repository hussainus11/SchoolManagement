import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateSubjectDto } from "./dto/create-subject.dto";
import { UpdateSubjectDto } from "./dto/update-subject.dto";
import { SubjectService } from "./subject.service";
export declare class SubjectController {
    private readonly subjectService;
    constructor(subjectService: SubjectService);
    findAll(user: JwtPayload): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
        imageUrl: string | null;
    }[]>;
    findOne(user: JwtPayload, id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
        imageUrl: string | null;
    }>;
    create(user: JwtPayload, dto: CreateSubjectDto): import("../../generated/prisma/models").Prisma__SubjectClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
        imageUrl: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(user: JwtPayload, id: string, dto: UpdateSubjectDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
        imageUrl: string | null;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
    uploadImage(user: JwtPayload, id: string, file: Express.Multer.File): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
        imageUrl: string | null;
    }>;
    removeImage(user: JwtPayload, id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
        imageUrl: string | null;
    }>;
}
