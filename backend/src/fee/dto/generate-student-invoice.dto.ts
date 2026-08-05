import { IsDateString, IsString, MaxLength } from "class-validator";

export class GenerateStudentInvoiceDto {
  @IsString()
  studentId: string;

  @IsString()
  academicYearId: string;

  @IsString()
  @MaxLength(50)
  period: string;

  @IsDateString()
  dueDate: string;
}
