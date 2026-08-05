import { IsDateString, IsOptional, IsString, MaxLength } from "class-validator";

export class GenerateMonthlyInvoicesDto {
  @IsString()
  academicYearId: string;

  @IsOptional()
  @IsString()
  branchId?: string;

  @IsString()
  @MaxLength(50)
  period: string;

  @IsDateString()
  dueDate: string;
}
