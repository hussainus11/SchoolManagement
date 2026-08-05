import { Prisma } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
export declare class AcademicYearService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string): Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        isCurrent: boolean;
    }[]>;
    create(schoolId: string, data: {
        name: string;
        startDate: Date;
        endDate: Date;
        isCurrent?: boolean;
    }): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        isCurrent: boolean;
    }>;
    createWithinTransaction(tx: Prisma.TransactionClient, schoolId: string, data: {
        name: string;
        startDate: Date;
        endDate: Date;
    }): Prisma.Prisma__AcademicYearClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        isCurrent: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    setCurrent(schoolId: string, id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        isCurrent: boolean;
    }>;
}
