import { IsEnum, IsString } from "class-validator";
import { DayOfWeek } from "../../../generated/prisma/client";

export class AssignTimetableEntryDto {
  @IsString()
  sectionId: string;

  @IsString()
  periodId: string;

  @IsEnum(DayOfWeek)
  dayOfWeek: DayOfWeek;

  @IsString()
  subjectId: string;

  @IsString()
  teacherId: string;
}
