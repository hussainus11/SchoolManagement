import { IsEmail, IsInt, IsOptional, IsString, Max, Min, MaxLength, MinLength } from "class-validator";

export class CreateAlumniDto {
  @IsOptional()
  @IsString()
  studentId?: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  firstName: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  lastName: string;

  @IsInt()
  @Min(1950)
  @Max(2100)
  graduationYear: number;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  currentOccupation?: string;

  @IsOptional()
  @IsEmail()
  contactEmail?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  contactPhone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  notes?: string;
}
