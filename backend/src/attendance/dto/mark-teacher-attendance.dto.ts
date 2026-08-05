import { Type } from "class-transformer";
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested
} from "class-validator";
import { AttendanceStatus } from "../../../generated/prisma/client";

class TeacherAttendanceEntryDto {
  @IsString()
  teacherId: string;

  @IsEnum(AttendanceStatus)
  status: AttendanceStatus;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  remarks?: string;
}

export class MarkTeacherAttendanceDto {
  @IsString()
  branchId: string;

  @IsDateString()
  date: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => TeacherAttendanceEntryDto)
  entries: TeacherAttendanceEntryDto[];
}
