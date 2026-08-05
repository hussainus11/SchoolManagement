import { IsInt, IsNumber, IsOptional, IsString, Min, MaxLength, MinLength } from "class-validator";

export class CreateRouteStopDto {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  order?: number;

  @IsNumber()
  @Min(0)
  fee: number;
}
