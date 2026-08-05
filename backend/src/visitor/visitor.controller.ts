import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateVisitorDto } from "./dto/create-visitor.dto";
import { VisitorService } from "./visitor.service";

@Controller("visitors")
@Audit("Visitor")
@Resource("visitors")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class VisitorController {
  constructor(private readonly visitorService: VisitorService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload, @Query("branchId") branchId?: string, @Query("active") active?: string) {
    return this.visitorService.findAllForSchool(user.schoolId!, { branchId, active: active === "true" ? true : undefined });
  }

  @Post()
  checkIn(@CurrentUser() user: JwtPayload, @Body() dto: CreateVisitorDto) {
    return this.visitorService.checkIn(user.schoolId!, dto);
  }

  @Patch(":id/check-out")
  checkOut(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.visitorService.checkOut(user.schoolId!, id);
  }
}
