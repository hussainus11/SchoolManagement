import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query
} from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { GenerateMonthPayslipsDto } from "./dto/generate-month-payslips.dto";
import { GenerateUserPayslipDto } from "./dto/generate-user-payslip.dto";
import { PayslipService } from "./payslip.service";

@Controller("payroll/payslips")
@Audit("Payslip")
@Resource("payroll")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class PayslipController {
  constructor(private readonly payslipService: PayslipService) {}

  @Get()
  findAll(
    @CurrentUser() user: JwtPayload,
    @Query("userId") userId?: string,
    @Query("month") month?: string
  ) {
    return this.payslipService.findAllForSchool(user.schoolId!, { userId, month });
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.payslipService.findOneForSchool(user.schoolId!, id);
  }

  @Post("generate")
  generateForUser(@CurrentUser() user: JwtPayload, @Body() dto: GenerateUserPayslipDto) {
    return this.payslipService.generateForUser(user.schoolId!, dto.userId, dto.month);
  }

  @Post("generate-month")
  generateForMonth(@CurrentUser() user: JwtPayload, @Body() dto: GenerateMonthPayslipsDto) {
    return this.payslipService.generateForMonth(user.schoolId!, dto.month);
  }

  @Patch(":id/finalize")
  finalize(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.payslipService.finalize(user.schoolId!, id);
  }

  @Patch(":id/mark-paid")
  markPaid(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.payslipService.markPaid(user.schoolId!, id);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.payslipService.remove(user.schoolId!, id);
  }
}
