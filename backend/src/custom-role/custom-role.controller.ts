import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { RESOURCE_CATALOG } from "../common/resource-catalog";
import { CustomRoleService } from "./custom-role.service";
import { CreateCustomRoleDto } from "./dto/create-custom-role.dto";
import { UpdateCustomRoleDto } from "./dto/update-custom-role.dto";

@Controller("custom-roles")
@Audit("CustomRole")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class CustomRoleController {
  constructor(private readonly customRoleService: CustomRoleService) {}

  @Get("catalog")
  getCatalog() {
    return RESOURCE_CATALOG;
  }

  @Get()
  findAll(@CurrentUser() user: JwtPayload) {
    return this.customRoleService.findAllForSchool(user.schoolId!);
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.customRoleService.findOneForSchool(user.schoolId!, id);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateCustomRoleDto) {
    return this.customRoleService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: UpdateCustomRoleDto) {
    return this.customRoleService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.customRoleService.remove(user.schoolId!, id);
  }
}
