import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateRouteDto {
  @IsOptional()
  @IsString()
  vehicleId?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name?: string;
}
