import { IsInt, IsOptional, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateQualificationDto {
  @IsString()
  @MinLength(1)
  @MaxLength(200)
  degree: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  institution?: string;

  @IsOptional()
  @IsInt()
  @Min(1950)
  @Max(2100)
  yearCompleted?: number;
}
