import { IsDateString, IsEnum, IsNumber, IsOptional, IsString, Min, MaxLength } from "class-validator";
import { AdmissionStatus } from "../../../generated/prisma/client";

export class UpdateAdmissionStatusDto {
  @IsEnum(AdmissionStatus)
  status: AdmissionStatus;

  @IsOptional()
  @IsNumber()
  @Min(0)
  testScore?: number;

  @IsOptional()
  @IsDateString()
  testDate?: string;

  @IsOptional()
  @IsString()
  offeredSectionId?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  notes?: string;
}
