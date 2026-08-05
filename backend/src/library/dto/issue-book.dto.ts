import { IsDateString, IsOptional, IsString } from "class-validator";

export class IssueBookDto {
  @IsString()
  bookId: string;

  @IsOptional()
  @IsString()
  studentId?: string;

  @IsOptional()
  @IsString()
  teacherId?: string;

  @IsDateString()
  dueDate: string;
}
