import { IsDateString, IsEnum, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { DisciplineSeverity } from "../../../generated/prisma/client";

export class CreateDisciplineIncidentDto {
  @IsString()
  studentId: string;

  @IsOptional()
  @IsDateString()
  incidentDate?: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  category: string;

  @IsOptional()
  @IsEnum(DisciplineSeverity)
  severity?: DisciplineSeverity;

  @IsString()
  @MinLength(1)
  @MaxLength(2000)
  description: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  actionTaken?: string;
}
