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
import { ExpenseStatus, Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit, AuditAction, SkipAudit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateExpenseDto } from "./dto/create-expense.dto";
import { ExpenseService } from "./expense.service";

@Controller("expenses")
@Audit("Expense")
@Resource("expenses")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.ACCOUNTANT)
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Get()
  findAll(
    @CurrentUser() user: JwtPayload,
    @Query("branchId") branchId?: string,
    @Query("status") status?: ExpenseStatus,
    @Query("categoryId") categoryId?: string
  ) {
    return this.expenseService.findAllForSchool(user.schoolId!, { branchId, status, categoryId });
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.expenseService.findOneForSchool(user.schoolId!, id);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateExpenseDto) {
    return this.expenseService.create(user.schoolId!, user.sub, dto);
  }

  @Patch(":id/approve")
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  @SkipAudit()
  approve(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.expenseService.approve(user.schoolId!, id, user.sub);
  }

  @Patch(":id/reject")
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  @SkipAudit()
  reject(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.expenseService.reject(user.schoolId!, id, user.sub);
  }

  @Patch(":id/mark-paid")
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.ACCOUNTANT)
  @AuditAction("EXPENSE_MARKED_PAID")
  markPaid(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.expenseService.markPaid(user.schoolId!, id);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.expenseService.remove(user.schoolId!, id);
  }
}
