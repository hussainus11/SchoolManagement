import { IsNumber, IsPositive, IsOptional } from "class-validator";

export class UpdateFeeStructureDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount?: number;
}
