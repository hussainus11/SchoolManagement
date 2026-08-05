import { EventType } from "../../../generated/prisma/client";
export declare class CreateEventDto {
    branchId?: string;
    title: string;
    description?: string;
    location?: string;
    type: EventType;
    startDate: string;
    endDate: string;
    isAllDay?: boolean;
}
