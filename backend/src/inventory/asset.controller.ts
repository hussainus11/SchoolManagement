import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from "@nestjs/common";
import { AssetStatus, Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AssetService } from "./asset.service";
import { CreateAssetDto } from "./dto/create-asset.dto";

@Controller("inventory/assets")
@Audit("Asset")
@Resource("inventory")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Get()
  findAll(
    @CurrentUser() user: JwtPayload,
    @Query("branchId") branchId?: string,
    @Query("categoryId") categoryId?: string,
    @Query("status") status?: AssetStatus
  ) {
    return this.assetService.findAllForSchool(user.schoolId!, { branchId, categoryId, status });
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.assetService.findOneForSchool(user.schoolId!, id);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateAssetDto) {
    return this.assetService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: CreateAssetDto) {
    return this.assetService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.assetService.remove(user.schoolId!, id);
  }
}
