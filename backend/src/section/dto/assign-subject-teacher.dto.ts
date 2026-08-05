import { IsString } from "class-validator";

export class AssignSubjectTeacherDto {
  @IsString()
  subjectId: string;

  @IsString()
  teacherId: string;
}
