import { IsEnum, IsNumber, IsOptional, IsPositive, IsString, MaxLength } from "class-validator";
import { DiscountType } from "../../../generated/prisma/client";

export class CreateDiscountDto {
  @IsString()
  studentId: string;

  @IsOptional()
  @IsString()
  feeHeadId?: string;

  @IsEnum(DiscountType)
  type: DiscountType;

  @IsNumber()
  @IsPositive()
  value: number;

  @IsOptional()
  @IsString()
  @MaxLength(300)
  reason?: string;
}
