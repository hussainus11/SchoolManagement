import { IsInt, IsOptional, IsString, Min } from "class-validator";

export class AllocateHostelDto {
  @IsString()
  studentId: string;

  @IsString()
  roomId: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  bedNumber?: number;
}
