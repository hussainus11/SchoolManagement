import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Audit, AuditAction } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { RecordBillingDto } from "./dto/record-billing.dto";
import { SchoolService } from "./school.service";

/** Platform-owner view across every tenant — separate from SchoolController's "my school"
 *  self-service endpoints. Only the seeded SUPER_ADMIN account can reach these. */
@Controller("admin/schools")
@Audit("School")
@Roles(Role.SUPER_ADMIN)
export class AdminSchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Get()
  findAll() {
    return this.schoolService.findAllForAdmin();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.schoolService.findAdminDetail(id);
  }

  @Post(":id/billing")
  @AuditAction("SCHOOL_BILLING_RECORDED")
  recordBilling(
    @CurrentUser() user: JwtPayload,
    @Param("id") id: string,
    @Body() dto: RecordBillingDto
  ) {
    return this.schoolService.recordBilling(id, user.sub, dto);
  }
}
