import { IsDateString, IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class OnboardSchoolDto {
  @IsString()
  @MinLength(2)
  @MaxLength(200)
  schoolName: string;

  @IsOptional()
  @IsEmail()
  schoolEmail?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  schoolPhone?: string;

  @IsString()
  @MaxLength(50)
  academicYearName: string;

  @IsDateString()
  academicYearStart: string;

  @IsDateString()
  academicYearEnd: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  adminFirstName: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  adminLastName: string;

  @IsEmail()
  adminEmail: string;

  @IsString()
  @MinLength(8)
  @MaxLength(100)
  adminPassword: string;
}
