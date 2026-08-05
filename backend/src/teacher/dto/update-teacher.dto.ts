import { IsDateString, IsEnum, IsOptional, IsString, MaxLength } from "class-validator";
import { Gender } from "../../../generated/prisma/client";

export class UpdateTeacherDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  firstName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  lastName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  phone?: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @IsOptional()
  @IsString()
  @MaxLength(300)
  address?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  emergencyPhone?: string;

  @IsOptional()
  @IsString()
  customRoleId?: string | null;

  @IsOptional()
  @IsString()
  leaveGroupId?: string | null;
}
