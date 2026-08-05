import { Prisma } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
export declare class SubjectService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string): Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
        imageUrl: string | null;
    }[]>;
    findOneForSchool(schoolId: string, id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
        imageUrl: string | null;
    }>;
    create(schoolId: string, data: {
        name: string;
        code: string;
    }): Prisma.Prisma__SubjectClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
        imageUrl: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    update(schoolId: string, id: string, data: Prisma.SubjectUpdateInput): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
        imageUrl: string | null;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
    setImage(schoolId: string, id: string, imageUrl: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
        imageUrl: string | null;
    }>;
    removeImage(schoolId: string, id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        code: string;
        imageUrl: string | null;
    }>;
}
