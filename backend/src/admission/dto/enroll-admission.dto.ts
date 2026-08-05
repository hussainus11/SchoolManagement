import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class EnrollAdmissionDto {
  @IsString()
  sectionId: string;

  @IsString()
  @MinLength(1)
  @MaxLength(50)
  admissionNumber: string;

  @IsOptional()
  @IsString()
  @MaxLength(10)
  admissionDate?: string;
}
