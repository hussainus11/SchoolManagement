import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AnnouncementService } from "./announcement.service";
import { CreateAnnouncementDto } from "./dto/create-announcement.dto";

@Controller("announcements")
@Audit("Announcement")
@Resource("announcements")
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload, @Query("branchId") branchId?: string) {
    return this.announcementService.findAllForSchool(user.schoolId!, branchId);
  }

  @Post()
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateAnnouncementDto) {
    return this.announcementService.create(user.schoolId!, user.sub, dto);
  }
}
