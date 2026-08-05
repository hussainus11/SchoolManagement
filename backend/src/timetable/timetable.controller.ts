import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AssignTimetableEntryDto } from "./dto/assign-timetable-entry.dto";
import { TimetableService } from "./timetable.service";

@Controller("timetable")
@Audit("TimetableEntry")
@Resource("timetable")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class TimetableController {
  constructor(private readonly timetableService: TimetableService) {}

  @Get()
  find(
    @CurrentUser() user: JwtPayload,
    @Query("sectionId") sectionId?: string,
    @Query("teacherId") teacherId?: string
  ) {
    if (teacherId) return this.timetableService.findForTeacher(user.schoolId!, teacherId);
    if (sectionId) return this.timetableService.findForSection(user.schoolId!, sectionId);
    return [];
  }

  @Post()
  assign(@CurrentUser() user: JwtPayload, @Body() dto: AssignTimetableEntryDto) {
    return this.timetableService.assign(user.schoolId!, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.timetableService.remove(user.schoolId!, id);
  }
}
