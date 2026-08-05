import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { BookIssueService } from "./book-issue.service";
import { IssueBookDto } from "./dto/issue-book.dto";
import { ReturnBookDto } from "./dto/return-book.dto";

@Controller("library/issues")
@Audit("BookIssue")
@Resource("library")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class BookIssueController {
  constructor(private readonly bookIssueService: BookIssueService) {}

  @Get()
  findAll(
    @CurrentUser() user: JwtPayload,
    @Query("status") status?: "ISSUED" | "RETURNED" | "LOST",
    @Query("studentId") studentId?: string,
    @Query("teacherId") teacherId?: string
  ) {
    return this.bookIssueService.findAllForSchool(user.schoolId!, { status, studentId, teacherId });
  }

  @Post()
  issue(@CurrentUser() user: JwtPayload, @Body() dto: IssueBookDto) {
    return this.bookIssueService.issue(user.schoolId!, user.sub, dto);
  }

  @Patch(":id/return")
  returnBook(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: ReturnBookDto) {
    return this.bookIssueService.returnBook(user.schoolId!, id, dto.fineAmount);
  }

  @Patch(":id/lost")
  markLost(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: ReturnBookDto) {
    return this.bookIssueService.markLost(user.schoolId!, id, dto.fineAmount);
  }
}
