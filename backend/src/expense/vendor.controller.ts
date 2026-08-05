import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateVendorDto } from "./dto/create-vendor.dto";
import { VendorService } from "./vendor.service";

@Controller("expenses/vendors")
@Audit("Vendor")
@Resource("expenses")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.ACCOUNTANT)
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload) {
    return this.vendorService.findAllForSchool(user.schoolId!);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateVendorDto) {
    return this.vendorService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: CreateVendorDto) {
    return this.vendorService.update(user.schoolId!, id, dto);
  }
}
