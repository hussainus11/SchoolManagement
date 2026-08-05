import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateRouteDto {
  @IsString()
  vehicleId: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name: string;
}
