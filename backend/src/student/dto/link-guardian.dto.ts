import { IsBoolean, IsEnum, IsOptional } from "class-validator";
import { GuardianRelation } from "../../../generated/prisma/client";

export class LinkGuardianDto {
  @IsEnum(GuardianRelation)
  relation: GuardianRelation;

  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean;
}
