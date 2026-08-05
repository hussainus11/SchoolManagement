import { IsInt, IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateClassDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsInt()
  order?: number;
}
