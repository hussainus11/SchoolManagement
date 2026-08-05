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
import { CreateFeeStructureDto } from "./dto/create-fee-structure.dto";
import { UpdateFeeStructureDto } from "./dto/update-fee-structure.dto";
import { FeeStructureService } from "./fee-structure.service";

@Controller("fees/structures")
@Audit("FeeStructure")
@Resource("fees")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.ACCOUNTANT)
export class FeeStructureController {
  constructor(private readonly feeStructureService: FeeStructureService) {}

  @Get()
  findAll(
    @CurrentUser() user: JwtPayload,
    @Query("classId") classId?: string,
    @Query("academicYearId") academicYearId?: string
  ) {
    return this.feeStructureService.findAllForSchool(user.schoolId!, { classId, academicYearId });
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateFeeStructureDto) {
    return this.feeStructureService.create(user.schoolId!, dto);
  }

  @Patch(":id")
  update(@CurrentUser() user: JwtPayload, @Param("id") id: string, @Body() dto: UpdateFeeStructureDto) {
    return this.feeStructureService.update(user.schoolId!, id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.feeStructureService.remove(user.schoolId!, id);
  }
}
