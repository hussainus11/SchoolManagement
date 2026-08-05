import { IsNumber, IsOptional, Min } from "class-validator";

export class ReturnBookDto {
  @IsOptional()
  @IsNumber()
  @Min(0)
  fineAmount?: number;
}
