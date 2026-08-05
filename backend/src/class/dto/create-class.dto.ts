import { IsInt, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateClassDto {
  @IsString()
  branchId: string;

  @IsString()
  academicYearId: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name: string;

  @IsOptional()
  @IsInt()
  order?: number;
}
