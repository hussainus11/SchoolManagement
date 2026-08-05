import { Prisma } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
export declare class PeriodService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForBranch(schoolId: string, branchId: string): Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        order: number;
        startTime: string;
        endTime: string;
    }[]>;
    findOneForSchool(schoolId: string, id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        order: number;
        startTime: string;
        endTime: string;
    }>;
    create(schoolId: string, data: {
        branchId: string;
        name: string;
        startTime: string;
        endTime: string;
        order?: number;
    }): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        order: number;
        startTime: string;
        endTime: string;
    }>;
    update(schoolId: string, id: string, data: Prisma.PeriodUpdateInput): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        order: number;
        startTime: string;
        endTime: string;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
}
