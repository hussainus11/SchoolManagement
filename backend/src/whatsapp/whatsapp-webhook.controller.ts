import { Controller, Get, HttpStatus, Post, Query, Req, Res } from "@nestjs/common";
import type { RawBodyRequest } from "@nestjs/common";
import type { Request, Response } from "express";
import { Public } from "../auth/decorators/public.decorator";
import { SkipAudit } from "../audit/decorators/audit.decorator";
import { WhatsappWebhookService } from "./services/whatsapp-webhook.service";

/** Meta calls these routes directly (no user session), so both handlers are @Public(). Kept as
 *  its own controller — separate from WhatsappController's admin-only, @Roles-gated routes — so
 *  the public/authenticated boundary is obvious at a glance. */
@Controller("webhooks/whatsapp")
@SkipAudit()
export class WhatsappWebhookController {
  constructor(private readonly webhookService: WhatsappWebhookService) {}

  @Public()
  @Get()
  verify(@Query() query: Record<string, string>, @Res() res: Response) {
    const mode = query["hub.mode"];
    const token = query["hub.verify_token"];
    const challenge = query["hub.challenge"];

    if (mode === "subscribe" && token && this.webhookService.isValidVerifyToken(token)) {
      res.status(HttpStatus.OK).send(challenge);
      return;
    }
    res.status(HttpStatus.FORBIDDEN).send("Verification failed");
  }

  @Public()
  @Post()
  async receive(@Req() req: RawBodyRequest<Request>, @Res() res: Response) {
    const signature = req.headers["x-hub-signature-256"] as string | undefined;
    if (!this.webhookService.isValidSignature(req.rawBody, signature)) {
      res.status(HttpStatus.UNAUTHORIZED).send();
      return;
    }

    // Ack immediately so Meta doesn't retry-storm us on a slow downstream update; process after.
    // The response is already sent, so any processing error must be swallowed here (logged inside
    // the service) rather than thrown, or Nest's exception filter would try to write to a
    // response that's already closed.
    res.status(HttpStatus.OK).send();
    try {
      await this.webhookService.processEvent(req.body);
    } catch {
      // Already logged by processEvent's own per-item handling; nothing more to do here.
    }
  }
}
