import { IsInt, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateRoomDto {
  @IsString()
  branchId: string;

  @IsString()
  @MinLength(1)
  @MaxLength(50)
  name: string;

  @IsOptional()
  @IsInt()
  capacity?: number;
}
