import { IsEmail } from "class-validator";

export class CreateStudentLoginDto {
  @IsEmail()
  email: string;
}
