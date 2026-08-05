import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { EventService } from "./event.service";
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    find(user: JwtPayload, startDate: string, endDate: string, branchId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
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
        type: import("../../generated/prisma/enums").EventType;
        isAllDay: boolean;
        createdById: string;
    }[]>;
    create(user: JwtPayload, dto: CreateEventDto): Promise<{
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
        type: import("../../generated/prisma/enums").EventType;
        isAllDay: boolean;
        createdById: string;
    }>;
    update(user: JwtPayload, id: string, dto: UpdateEventDto): Promise<{
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
        type: import("../../generated/prisma/enums").EventType;
        isAllDay: boolean;
        createdById: string;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
}
