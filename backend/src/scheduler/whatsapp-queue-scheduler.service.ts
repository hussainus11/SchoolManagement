import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { WhatsappService } from "../whatsapp/whatsapp.service";

/** Drains the WhatsAppMessageLog outbox once a minute, in bounded batches — the same "cron over
 *  a DB table" shape as BillingSchedulerService, deliberately avoiding a new queue dependency
 *  (Bull/Redis) the deployment doesn't already have. A message queued by an admin action is sent
 *  within about a minute rather than synchronously inside that action's HTTP request. */
@Injectable()
export class WhatsAppQueueSchedulerService {
  private readonly logger = new Logger(WhatsAppQueueSchedulerService.name);

  constructor(private readonly whatsappService: WhatsappService) {}

  @Cron(CronExpression.EVERY_MINUTE)
  async processQueue() {
    const { sent, failed } = await this.whatsappService.processQueuedBatch();
    if (sent || failed) {
      this.logger.log(`Processed WhatsApp queue batch: ${sent} sent, ${failed} failed/retrying.`);
    }
  }
}
