import { IsDateString, IsNumber, IsOptional, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export class CreateExpenseDto {
  @IsString()
  branchId: string;

  @IsString()
  categoryId: string;

  @IsOptional()
  @IsString()
  vendorId?: string;

  @IsString()
  @MinLength(1)
  @MaxLength(500)
  description: string;

  @IsNumber()
  @IsPositive()
  amount: number;

  @IsDateString()
  expenseDate: string;
}
