import { IsEnum, IsOptional, IsString, MaxLength } from "class-validator";
import { AttendanceStatus } from "../../../generated/prisma/client";

export class UpdateAttendanceDto {
  @IsOptional()
  @IsEnum(AttendanceStatus)
  status?: AttendanceStatus;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  remarks?: string;
}
