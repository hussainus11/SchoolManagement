import { IsInt, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

const TIME_PATTERN = /^([01]\d|2[0-3]):([0-5]\d)$/;

export class CreatePeriodDto {
  @IsString()
  branchId: string;

  @IsString()
  @MinLength(1)
  @MaxLength(50)
  name: string;

  @Matches(TIME_PATTERN, { message: "startTime must be in HH:mm 24-hour format" })
  startTime: string;

  @Matches(TIME_PATTERN, { message: "endTime must be in HH:mm 24-hour format" })
  endTime: string;

  @IsOptional()
  @IsInt()
  order?: number;
}
