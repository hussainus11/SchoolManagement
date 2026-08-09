import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateGuardianDiscountDto } from "./dto/create-guardian-discount.dto";
import { GuardianDiscountService } from "./guardian-discount.service";

@Controller("fees/guardian-discounts")
@Audit("GuardianDiscount")
@Resource("fees")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.ACCOUNTANT)
export class GuardianDiscountController {
  constructor(private readonly discountService: GuardianDiscountService) {}

  @Get()
  findForGuardian(@CurrentUser() user: JwtPayload, @Query("guardianId") guardianId: string) {
    return this.discountService.findForGuardian(user.schoolId!, guardianId);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateGuardianDiscountDto) {
    return this.discountService.create(user.schoolId!, dto);
  }

  @Patch(":id/deactivate")
  deactivate(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.discountService.deactivate(user.schoolId!, id);
  }
}
