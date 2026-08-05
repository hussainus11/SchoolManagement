import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateHostelDto {
  @IsString()
  branchId: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  wardenName?: string;
}
