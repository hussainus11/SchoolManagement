import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AssetCategoryService } from "./asset-category.service";
import { CreateAssetCategoryDto } from "./dto/create-asset-category.dto";

@Controller("inventory/categories")
@Audit("AssetCategory")
@Resource("inventory")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class AssetCategoryController {
  constructor(private readonly assetCategoryService: AssetCategoryService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload) {
    return this.assetCategoryService.findAllForSchool(user.schoolId!);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateAssetCategoryDto) {
    return this.assetCategoryService.create(user.schoolId!, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.assetCategoryService.remove(user.schoolId!, id);
  }
}
