import { IsDateString, IsEmail, IsEnum, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Gender } from "../../../generated/prisma/client";

export class CreateAdmissionDto {
  @IsString()
  branchId: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  applicantFirstName: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  applicantLastName: string;

  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsString()
  @MinLength(1)
  @MaxLength(50)
  gradeAppliedFor: string;

  @IsString()
  @MinLength(1)
  @MaxLength(200)
  guardianName: string;

  @IsString()
  @MinLength(1)
  @MaxLength(30)
  guardianPhone: string;

  @IsOptional()
  @IsEmail()
  guardianEmail?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  source?: string;
}
