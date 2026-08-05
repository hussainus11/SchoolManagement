import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { BranchService } from "./branch.service";
import { CreateBranchDto } from "./dto/create-branch.dto";
import { UpdateBranchDto } from "./dto/update-branch.dto";

@Controller("branches")
@Audit("Branch")
@Resource("settings")
@Roles(Role.SCHOOL_ADMIN)
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload) {
    return this.branchService.findAllForSchool(user.schoolId!);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateBranchDto) {
    return this.branchService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: UpdateBranchDto) {
    return this.branchService.update(user.schoolId!, id, dto);
  }
}
