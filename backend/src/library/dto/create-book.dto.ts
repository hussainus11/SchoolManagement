import { IsInt, IsOptional, IsString, Min, MaxLength, MinLength } from "class-validator";

export class CreateBookDto {
  @IsString()
  @MinLength(1)
  @MaxLength(300)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  author?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  isbn?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  category?: string;

  @IsInt()
  @Min(1)
  totalCopies: number;
}
