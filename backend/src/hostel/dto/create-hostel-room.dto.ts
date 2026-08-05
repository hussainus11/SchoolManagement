import { IsInt, IsString, Min, MaxLength, MinLength } from "class-validator";

export class CreateHostelRoomDto {
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  roomNumber: string;

  @IsInt()
  @Min(1)
  capacity: number;
}
