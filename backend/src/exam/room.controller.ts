import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateRoomDto } from "./dto/create-room.dto";
import { RoomService } from "./room.service";

@Controller("rooms")
@Audit("ExamRoom")
@Resource("exams")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload, @Query("branchId") branchId?: string) {
    return this.roomService.findAllForSchool(user.schoolId!, branchId);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateRoomDto) {
    return this.roomService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: CreateRoomDto) {
    return this.roomService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.roomService.remove(user.schoolId!, id);
  }
}
