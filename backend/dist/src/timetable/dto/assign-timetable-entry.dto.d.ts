import { DayOfWeek } from "../../../generated/prisma/client";
export declare class AssignTimetableEntryDto {
    sectionId: string;
    periodId: string;
    dayOfWeek: DayOfWeek;
    subjectId: string;
    teacherId: string;
}
