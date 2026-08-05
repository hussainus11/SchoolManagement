import { IsDateString, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";

export class CreateSalaryStructureDto {
  @IsString()
  userId: string;

  @IsNumber()
  @IsPositive()
  basicSalary: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  allowances?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  fixedDeductions?: number;

  @IsDateString()
  effectiveFrom: string;
}
