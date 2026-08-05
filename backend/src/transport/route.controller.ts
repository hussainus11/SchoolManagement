import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateRouteStopDto } from "./dto/create-route-stop.dto";
import { CreateRouteDto } from "./dto/create-route.dto";
import { UpdateRouteDto } from "./dto/update-route.dto";
import { RouteService } from "./route.service";

@Controller("transport/routes")
@Audit("Route")
@Resource("transport")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Get()
  findAll(@CurrentUser() user: JwtPayload) {
    return this.routeService.findAllForSchool(user.schoolId!);
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.routeService.findOneForSchool(user.schoolId!, id);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateRouteDto) {
    return this.routeService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: UpdateRouteDto) {
    return this.routeService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.routeService.remove(user.schoolId!, id);
  }

  @Post(":id/stops")
  addStop(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: CreateRouteStopDto) {
    return this.routeService.addStop(user.schoolId!, id, dto);
  }

  @Delete(":id/stops/:stopId")
  @HttpCode(HttpStatus.NO_CONTENT)
  removeStop(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Param("stopId") stopId: string) {
    return this.routeService.removeStop(user.schoolId!, id, stopId);
  }
}
