import { IsString } from "class-validator";

export class AddClassSubjectDto {
  @IsString()
  subjectId: string;
}
