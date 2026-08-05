import { IsString, MaxLength, MinLength } from "class-validator";

export class RecordSubmissionDto {
  @IsString()
  @MinLength(1)
  @MaxLength(5000)
  submissionText: string;
}
