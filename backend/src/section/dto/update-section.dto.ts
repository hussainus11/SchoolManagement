import { IsInt, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";

export class UpdateSectionDto {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  name?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(500)
  capacity?: number;
}
