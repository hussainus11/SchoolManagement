import { Injectable, Logger } from "@nestjs/common";
import * as crypto from "node:crypto";
import { WhatsAppMessageStatus } from "../../../generated/prisma/client";
import { WhatsappRepository } from "../whatsapp.repository";
import type { WhatsAppWebhookStatus, WebhookStatusEntry } from "../whatsapp.types";

const STATUS_RANK: Record<WhatsAppMessageStatus, number> = {
  QUEUED: 0,
  SENT: 1,
  DELIVERED: 2,
  READ: 3,
  FAILED: 4
};

const WEBHOOK_STATUS_TO_DB: Record<WhatsAppWebhookStatus, WhatsAppMessageStatus> = {
  sent: WhatsAppMessageStatus.SENT,
  delivered: WhatsAppMessageStatus.DELIVERED,
  read: WhatsAppMessageStatus.READ,
  failed: WhatsAppMessageStatus.FAILED
};

/** Handles Meta's WhatsApp webhook: GET verification handshake and POST event delivery.
 *  Processing is idempotent (keyed by Meta's own message id, applied only if it moves the
 *  message's status forward) so redelivered/out-of-order webhooks never corrupt message state,
 *  and it never throws — an unrecognized event shape is logged and ignored, not a crash. */
@Injectable()
export class WhatsappWebhookService {
  private readonly logger = new Logger(WhatsappWebhookService.name);

  constructor(private readonly repository: WhatsappRepository) {}

  isValidVerifyToken(token: string): boolean {
    const expected = process.env.META_WEBHOOK_VERIFY_TOKEN;
    return !!expected && token === expected;
  }

  isValidSignature(rawBody: Buffer | undefined, signatureHeader: string | undefined): boolean {
    const appSecret = process.env.META_APP_SECRET;
    if (!appSecret || !rawBody || !signatureHeader?.startsWith("sha256=")) return false;

    const expected = crypto.createHmac("sha256", appSecret).update(rawBody).digest("hex");
    const provided = signatureHeader.slice("sha256=".length);

    // Buffers must be equal length for timingSafeEqual — a length mismatch already means "invalid".
    const expectedBuf = Buffer.from(expected, "hex");
    const providedBuf = Buffer.from(provided, "hex");
    if (expectedBuf.length !== providedBuf.length) return false;
    return crypto.timingSafeEqual(expectedBuf, providedBuf);
  }

  async processEvent(body: unknown): Promise<void> {
    const entries = (body as { entry?: unknown[] })?.entry;
    if (!Array.isArray(entries)) {
      this.logger.warn("Received WhatsApp webhook with no entry[] — ignoring.");
      return;
    }

    for (const entry of entries) {
      const changes = (entry as { changes?: unknown[] })?.changes;
      if (!Array.isArray(changes)) continue;

      for (const change of changes) {
        const value = (change as { value?: Record<string, unknown> })?.value;
        if (!value) continue;

        const statuses = value.statuses as WebhookStatusEntry[] | undefined;
        if (Array.isArray(statuses)) {
          for (const status of statuses) {
            await this.applyStatusUpdate(status).catch((error) =>
              this.logger.error(`Failed to apply status update for message ${status?.id}: ${(error as Error).message}`)
            );
          }
        }

        // Incoming (parent-initiated) messages aren't part of the notification-sending flow yet —
        // logged for visibility only, never crashes on an unrecognized/unhandled event shape.
        if (Array.isArray(value.messages)) {
          this.logger.log(`Received ${value.messages.length} inbound WhatsApp message event(s).`);
        }
      }
    }
  }

  private async applyStatusUpdate(status: WebhookStatusEntry): Promise<void> {
    if (!status?.id || !status.status) return;
    const newDbStatus = WEBHOOK_STATUS_TO_DB[status.status];
    if (!newDbStatus) {
      this.logger.warn(`Unrecognized WhatsApp webhook status "${status.status}" — ignoring.`);
      return;
    }

    const message = await this.repository.findMessageByMetaId(status.id);
    if (!message) return; // Not one of ours (or not yet SENT-recorded) — safe to ignore.

    if (STATUS_RANK[newDbStatus] <= STATUS_RANK[message.status] && newDbStatus !== WhatsAppMessageStatus.FAILED) {
      return; // Already at/beyond this status — idempotent no-op for redelivered webhooks.
    }

    const timestamps: Partial<{ deliveredAt: Date; readAt: Date; failedAt: Date }> = {};
    const eventTime = status.timestamp ? new Date(Number(status.timestamp) * 1000) : new Date();
    if (newDbStatus === WhatsAppMessageStatus.DELIVERED) timestamps.deliveredAt = eventTime;
    if (newDbStatus === WhatsAppMessageStatus.READ) timestamps.readAt = eventTime;
    if (newDbStatus === WhatsAppMessageStatus.FAILED) timestamps.failedAt = eventTime;

    const firstError = status.errors?.[0];
    await this.repository.updateMessageStatusById(
      message.id,
      newDbStatus,
      timestamps,
      firstError ? { code: String(firstError.code), message: firstError.message || firstError.title } : undefined
    );
  }
}
