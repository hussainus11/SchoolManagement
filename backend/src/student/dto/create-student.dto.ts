import { IsDateString, IsEnum, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Gender } from "../../../generated/prisma/client";

export class CreateStudentDto {
  @IsString()
  branchId: string;

  @IsOptional()
  @IsString()
  sectionId?: string;

  @IsString()
  @MinLength(1)
  @MaxLength(50)
  admissionNumber: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  firstName: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  lastName: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @IsOptional()
  @IsString()
  @MaxLength(10)
  bloodGroup?: string;

  @IsOptional()
  @IsString()
  @MaxLength(300)
  address?: string;

  @IsOptional()
  @IsDateString()
  admissionDate?: string;
}
