import { Type } from "class-transformer";
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  ValidateNested
} from "class-validator";

class InvoiceItemInputDto {
  @IsString()
  feeHeadId: string;

  @IsNumber()
  @IsPositive()
  amount: number;

  @IsOptional()
  @IsNumber()
  discount?: number;
}

export class CreateInvoiceDto {
  @IsString()
  studentId: string;

  @IsString()
  academicYearId: string;

  @IsString()
  @MaxLength(50)
  period: string;

  @IsDateString()
  dueDate: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => InvoiceItemInputDto)
  items: InvoiceItemInputDto[];
}
