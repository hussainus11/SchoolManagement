import { IsEnum, IsNumber, IsPositive, IsString } from "class-validator";
import { FeeFrequency } from "../../../generated/prisma/client";

export class CreateFeeStructureDto {
  @IsString()
  classId: string;

  @IsString()
  feeHeadId: string;

  @IsString()
  academicYearId: string;

  @IsNumber()
  @IsPositive()
  amount: number;

  @IsEnum(FeeFrequency)
  frequency: FeeFrequency;
}
