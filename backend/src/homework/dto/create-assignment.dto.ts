import { IsDateString, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateAssignmentDto {
  @IsString()
  sectionId: string;

  @IsString()
  subjectId: string;

  @IsString()
  teacherId: string;

  @IsString()
  @MinLength(1)
  @MaxLength(200)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;

  @IsDateString()
  dueDate: string;
}
