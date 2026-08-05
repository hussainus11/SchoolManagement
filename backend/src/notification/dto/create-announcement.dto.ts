import { ArrayMinSize, IsArray, IsEnum, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Role } from "../../../generated/prisma/client";

export class CreateAnnouncementDto {
  @IsOptional()
  @IsString()
  branchId?: string;

  @IsString()
  @MinLength(1)
  @MaxLength(200)
  title: string;

  @IsString()
  @MinLength(1)
  @MaxLength(2000)
  body: string;

  @IsArray()
  @ArrayMinSize(1)
  @IsEnum(Role, { each: true })
  targetRoles: Role[];
}
