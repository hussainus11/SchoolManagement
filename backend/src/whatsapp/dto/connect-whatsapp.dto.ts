import { IsOptional, IsString, MinLength } from "class-validator";

/** What the frontend posts after Meta's Embedded Signup completes. Deliberately has no schoolId
 *  field — the school is always taken from the authenticated admin's JWT, never from the body. */
export class ConnectWhatsAppDto {
  @IsString()
  @MinLength(1)
  code!: string;

  @IsString()
  @MinLength(1)
  wabaId!: string;

  @IsString()
  @MinLength(1)
  phoneNumberId!: string;

  @IsOptional()
  @IsString()
  businessId?: string;
}
