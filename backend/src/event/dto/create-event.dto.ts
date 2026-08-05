import { IsBoolean, IsDateString, IsEnum, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { EventType } from "../../../generated/prisma/client";

export class CreateEventDto {
  @IsOptional()
  @IsString()
  branchId?: string;

  @IsString()
  @MinLength(1)
  @MaxLength(200)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  location?: string;

  @IsEnum(EventType)
  type: EventType;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsOptional()
  @IsBoolean()
  isAllDay?: boolean;
}
