import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateFeeHeadDto } from "./dto/create-fee-head.dto";
import { FeeHeadService } from "./fee-head.service";

@Controller("fees/heads")
@Audit("FeeHead")
@Resource("fees")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.ACCOUNTANT)
export class FeeHeadController {
  constructor(private readonly feeHeadService: FeeHeadService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload) {
    return this.feeHeadService.findAllForSchool(user.schoolId!);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateFeeHeadDto) {
    return this.feeHeadService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: CreateFeeHeadDto) {
    return this.feeHeadService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.feeHeadService.remove(user.schoolId!, id);
  }
}
