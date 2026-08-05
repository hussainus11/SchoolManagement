import { IsDateString, IsEnum, IsNumber, IsOptional, IsString, Min, MaxLength, MinLength } from "class-validator";
import { AssetStatus } from "../../../generated/prisma/client";

export class CreateAssetDto {
  @IsString()
  branchId: string;

  @IsString()
  categoryId: string;

  @IsString()
  @MinLength(1)
  @MaxLength(200)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  serialNumber?: string;

  @IsOptional()
  @IsDateString()
  purchaseDate?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  purchaseCost?: number;

  @IsOptional()
  @IsEnum(AssetStatus)
  status?: AssetStatus;

  @IsOptional()
  @IsString()
  assignedToTeacherId?: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  location?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  notes?: string;
}
