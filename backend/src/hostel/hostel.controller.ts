import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateHostelRoomDto } from "./dto/create-hostel-room.dto";
import { CreateHostelDto } from "./dto/create-hostel.dto";
import { HostelService } from "./hostel.service";

@Controller("hostels")
@Audit("Hostel")
@Resource("hostel")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class HostelController {
  constructor(private readonly hostelService: HostelService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload, @Query("branchId") branchId?: string) {
    return this.hostelService.findAllForSchool(user.schoolId!, branchId);
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.hostelService.findOneForSchool(user.schoolId!, id);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateHostelDto) {
    return this.hostelService.create(user.schoolId!, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.hostelService.remove(user.schoolId!, id);
  }

  @Post(":id/rooms")
  addRoom(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: CreateHostelRoomDto) {
    return this.hostelService.addRoom(user.schoolId!, id, dto);
  }

  @Delete(":id/rooms/:roomId")
  @HttpCode(HttpStatus.NO_CONTENT)
  removeRoom(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Param("roomId") roomId: string) {
    return this.hostelService.removeRoom(user.schoolId!, id, roomId);
  }
}
