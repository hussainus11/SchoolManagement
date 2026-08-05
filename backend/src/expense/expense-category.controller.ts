import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateExpenseCategoryDto } from "./dto/create-expense-category.dto";
import { ExpenseCategoryService } from "./expense-category.service";

@Controller("expenses/categories")
@Audit("ExpenseCategory")
@Resource("expenses")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.ACCOUNTANT)
export class ExpenseCategoryController {
  constructor(private readonly categoryService: ExpenseCategoryService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload) {
    return this.categoryService.findAllForSchool(user.schoolId!);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateExpenseCategoryDto) {
    return this.categoryService.create(user.schoolId!, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.categoryService.remove(user.schoolId!, id);
  }
}
