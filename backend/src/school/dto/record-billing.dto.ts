import { IsDateString, IsNumber, IsOptional, IsString, Min, MaxLength } from "class-validator";

export class RecordBillingDto {
  @IsDateString()
  nextBillingDate: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  note?: string;
}
