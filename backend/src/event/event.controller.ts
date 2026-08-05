import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query
} from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { EventService } from "./event.service";

@Controller("events")
@Audit("Event")
@Resource("calendar")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  find(
    @CurrentUser() user: JwtPayload,
    @Query("startDate") startDate: string,
    @Query("endDate") endDate: string,
    @Query("branchId") branchId?: string
  ) {
    return this.eventService.findInRange(user.schoolId!, { startDate, endDate, branchId });
  }

  @Post()
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateEventDto) {
    return this.eventService.create(user.schoolId!, user.sub, dto);
  }

  @Patch(":id")
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: UpdateEventDto) {
    return this.eventService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.eventService.remove(user.schoolId!, id);
  }
}
