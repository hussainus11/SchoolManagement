import { IsNumber, IsOptional, IsString, Min, MaxLength } from "class-validator";

export class GradeSubmissionDto {
  @IsNumber()
  @Min(0)
  marksObtained: number;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  feedback?: string;
}
