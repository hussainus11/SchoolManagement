import { IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateGradeScaleDto {
  @IsString()
  @MinLength(1)
  @MaxLength(10)
  grade: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  minPercentage: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  maxPercentage: number;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  remarks?: string;
}
