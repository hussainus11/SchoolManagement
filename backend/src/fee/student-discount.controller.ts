import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateDiscountDto } from "./dto/create-discount.dto";
import { StudentDiscountService } from "./student-discount.service";

@Controller("fees/discounts")
@Audit("StudentDiscount")
@Resource("fees")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.ACCOUNTANT)
export class StudentDiscountController {
  constructor(private readonly discountService: StudentDiscountService) {}

  @Get()
  findForStudent(@CurrentUser() user: JwtPayload, @Query("studentId") studentId: string) {
    return this.discountService.findForStudent(user.schoolId!, studentId);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateDiscountDto) {
    return this.discountService.create(user.schoolId!, dto);
  }

  @Patch(":id/deactivate")
  deactivate(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.discountService.deactivate(user.schoolId!, id);
  }
}
