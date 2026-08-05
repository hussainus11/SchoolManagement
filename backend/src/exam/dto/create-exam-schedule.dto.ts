import { IsDateString, IsNumber, IsPositive, IsString, Matches } from "class-validator";

const TIME_PATTERN = /^([01]\d|2[0-3]):([0-5]\d)$/;

export class CreateExamScheduleDto {
  @IsString()
  branchId: string;

  @IsString()
  examId: string;

  @IsString()
  classId: string;

  @IsString()
  subjectId: string;

  @IsString()
  roomId: string;

  @IsDateString()
  examDate: string;

  @Matches(TIME_PATTERN, { message: "startTime must be in HH:mm 24-hour format" })
  startTime: string;

  @Matches(TIME_PATTERN, { message: "endTime must be in HH:mm 24-hour format" })
  endTime: string;

  @IsNumber()
  @IsPositive()
  maxMarks: number;

  @IsNumber()
  @IsPositive()
  passMarks: number;
}
