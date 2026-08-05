import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AssignTransportDto } from "./dto/assign-transport.dto";
import { StudentTransportService } from "./student-transport.service";

@Controller("transport/assignments")
@Audit("StudentTransport")
@Resource("transport")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class StudentTransportController {
  constructor(private readonly studentTransportService: StudentTransportService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload, @Query("routeId") routeId?: string) {
    return this.studentTransportService.findAllForSchool(user.schoolId!, routeId);
  }

  @Post()
  assign(@CurrentUser() user: JwtPayload, @Body() dto: AssignTransportDto) {
    return this.studentTransportService.assign(user.schoolId!, dto);
  }

  @Delete(":studentId")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("studentId") studentId: string) {
    return this.studentTransportService.remove(user.schoolId!, studentId);
  }
}
