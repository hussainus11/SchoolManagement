import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { Role } from "../../generated/prisma/client";
import { Audit, SkipAudit } from "../audit/decorators/audit.decorator";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Resource } from "../auth/decorators/resource.decorator";
import { Roles } from "../auth/decorators/roles.decorator";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { ConnectWhatsAppDto } from "./dto/connect-whatsapp.dto";
import { SendTestMessageDto } from "./dto/send-test-message.dto";
import { WhatsappService } from "./whatsapp.service";

/** Every handler derives the school from the authenticated admin's JWT (`user.schoolId`) — the
 *  request body never carries a schoolId, so there is no way for an admin of one school to
 *  connect, inspect, or disconnect another school's WhatsApp number. */
@Controller("whatsapp")
@Audit("WhatsAppConnection")
@Resource("settings")
@Roles(Role.SCHOOL_ADMIN, Role.BRANCH_ADMIN)
export class WhatsappController {
  constructor(private readonly whatsappService: WhatsappService) {}

  @Get("status")
  @SkipAudit()
  getStatus(@CurrentUser() user: JwtPayload) {
    return this.whatsappService.getStatus(user.schoolId!);
  }

  @Post("connect")
  connect(@CurrentUser() user: JwtPayload, @Body() dto: ConnectWhatsAppDto) {
    return this.whatsappService.connect(user.schoolId!, dto);
  }

  @Delete("disconnect")
  @HttpCode(HttpStatus.NO_CONTENT)
  async disconnect(@CurrentUser() user: JwtPayload) {
    await this.whatsappService.disconnect(user.schoolId!);
  }

  @Post("send-test")
  sendTest(@CurrentUser() user: JwtPayload, @Body() dto: SendTestMessageDto) {
    return this.whatsappService.sendNow(user.schoolId!, dto.to, dto.templateName, dto.variables);
  }
}
