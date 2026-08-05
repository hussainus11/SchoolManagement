import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit, AuditAction } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AllocateHostelDto } from "./dto/allocate-hostel.dto";
import { HostelAllocationService } from "./hostel-allocation.service";

@Controller("hostel-allocations")
@Audit("HostelAllocation")
@Resource("hostel")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class HostelAllocationController {
  constructor(private readonly hostelAllocationService: HostelAllocationService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload, @Query("roomId") roomId?: string, @Query("active") active?: string) {
    return this.hostelAllocationService.findAllForSchool(user.schoolId!, {
      roomId,
      active: active === "true" ? true : undefined
    });
  }

  @Post()
  allocate(@CurrentUser() user: JwtPayload, @Body() dto: AllocateHostelDto) {
    return this.hostelAllocationService.allocate(user.schoolId!, dto);
  }

  @Patch(":id/vacate")
  @AuditAction("HOSTEL_ALLOCATION_VACATED")
  vacate(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.hostelAllocationService.vacate(user.schoolId!, id);
  }
}
