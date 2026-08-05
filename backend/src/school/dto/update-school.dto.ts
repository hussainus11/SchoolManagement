import { IsEmail, IsOptional, IsString, Matches, MaxLength } from "class-validator";

const HEX_COLOR_PATTERN = /^#([0-9A-Fa-f]{6})$/;

export class UpdateSchoolDto {
  @IsOptional()
  @IsString()
  @MaxLength(200)
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  phone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(300)
  address?: string;

  @IsOptional()
  @IsString()
  logoUrl?: string;

  @IsOptional()
  @Matches(HEX_COLOR_PATTERN, { message: "idCardBackgroundColor must be a hex color like #1E3A8A" })
  idCardBackgroundColor?: string;

  @IsOptional()
  @Matches(HEX_COLOR_PATTERN, { message: "idCardForegroundColor must be a hex color like #FFFFFF" })
  idCardForegroundColor?: string;
}
