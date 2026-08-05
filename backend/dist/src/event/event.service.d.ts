import { EventType } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
interface EventInput {
    branchId?: string;
    title: string;
    description?: string;
    location?: string;
    type: EventType;
    startDate: string;
    endDate: string;
    isAllDay?: boolean;
}
export declare class EventService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findInRange(schoolId: string, filters: {
        startDate: string;
        endDate: string;
        branchId?: string;
    }): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        branchId: string | null;
        title: string;
        description: string | null;
        location: string | null;
        type: EventType;
        isAllDay: boolean;
        createdById: string;
    }[]>;
    findOneForSchool(schoolId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        branchId: string | null;
        title: string;
        description: string | null;
        location: string | null;
        type: EventType;
        isAllDay: boolean;
        createdById: string;
    }>;
    private assertBranchInSchool;
    create(schoolId: string, createdById: string, data: EventInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        branchId: string | null;
        title: string;
        description: string | null;
        location: string | null;
        type: EventType;
        isAllDay: boolean;
        createdById: string;
    }>;
    update(schoolId: string, id: string, data: Partial<EventInput>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        branchId: string | null;
        title: string;
        description: string | null;
        location: string | null;
        type: EventType;
        isAllDay: boolean;
        createdById: string;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
}
export {};
