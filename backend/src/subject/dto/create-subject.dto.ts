import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateSubjectDto {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name: string;

  @IsString()
  @MinLength(1)
  @MaxLength(20)
  code: string;
}
