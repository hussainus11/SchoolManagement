import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateVehicleDto } from "./dto/create-vehicle.dto";
import { VehicleService } from "./vehicle.service";

@Controller("transport/vehicles")
@Audit("Vehicle")
@Resource("transport")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload, @Query("branchId") branchId?: string) {
    return this.vehicleService.findAllForSchool(user.schoolId!, branchId);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateVehicleDto) {
    return this.vehicleService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: CreateVehicleDto) {
    return this.vehicleService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.vehicleService.remove(user.schoolId!, id);
  }
}
