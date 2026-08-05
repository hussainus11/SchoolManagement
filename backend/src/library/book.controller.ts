import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { BookService } from "./book.service";
import { CreateBookDto } from "./dto/create-book.dto";

@Controller("library/books")
@Audit("Book")
@Resource("library")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.TEACHER)
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload, @Query("search") search?: string) {
    return this.bookService.findAllForSchool(user.schoolId!, search);
  }

  @Post()
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateBookDto) {
    return this.bookService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: CreateBookDto) {
    return this.bookService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.bookService.remove(user.schoolId!, id);
  }
}
