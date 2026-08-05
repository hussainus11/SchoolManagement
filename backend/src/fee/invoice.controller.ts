import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query
} from "@nestjs/common";
import { InvoiceStatus, Role } from "../../generated/prisma/client";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Audit, SkipAudit } from "../audit/decorators/audit.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateInvoiceDto } from "./dto/create-invoice.dto";
import { GenerateMonthlyInvoicesDto } from "./dto/generate-monthly-invoices.dto";
import { GenerateStudentInvoiceDto } from "./dto/generate-student-invoice.dto";
import { RecordPaymentDto } from "./dto/record-payment.dto";
import { InvoiceService } from "./invoice.service";

@Controller("fees/invoices")
@Audit("Invoice")
@Resource("fees")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN, Role.ACCOUNTANT)
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get()
  findAll(
    @CurrentUser() user: JwtPayload,
    @Query("studentId") studentId?: string,
    @Query("status") status?: InvoiceStatus,
    @Query("academicYearId") academicYearId?: string,
    @Query("period") period?: string
  ) {
    return this.invoiceService.findAllForSchool(user.schoolId!, { studentId, status, academicYearId, period });
  }

  @Get(":id")
  findOne(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.invoiceService.findOneForSchool(user.schoolId!, id);
  }

  @Post()
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateInvoiceDto) {
    return this.invoiceService.createManual(user.schoolId!, dto);
  }

  @Post("generate")
  generateForStudent(@CurrentUser() user: JwtPayload, @Body() dto: GenerateStudentInvoiceDto) {
    return this.invoiceService.generateForStudent(user.schoolId!, dto);
  }

  @Post("generate-month")
  generateForMonth(@CurrentUser() user: JwtPayload, @Body() dto: GenerateMonthlyInvoicesDto) {
    return this.invoiceService.generateForMonth(user.schoolId!, dto);
  }

  @Post(":id/payments")
  @SkipAudit()
  recordPayment(
    @CurrentUser() user: JwtPayload,
    @Param("id") id: string,
    @Body() dto: RecordPaymentDto
  ) {
    return this.invoiceService.recordPayment(user.schoolId!, id, user.sub, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@CurrentUser() user: JwtPayload, @Param("id") id: string) {
    return this.invoiceService.remove(user.schoolId!, id);
  }
}
