import { IsOptional, IsString } from "class-validator";

export class AssignClassTeacherDto {
  @IsOptional()
  @IsString()
  teacherId?: string | null;
}
