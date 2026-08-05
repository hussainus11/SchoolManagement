import { IsInt, IsOptional, IsString, Min, MaxLength, MinLength } from "class-validator";

export class CreateVehicleDto {
  @IsString()
  branchId: string;

  @IsString()
  @MinLength(1)
  @MaxLength(30)
  registrationNumber: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  capacity?: number;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  driverName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  driverPhone?: string;
}
