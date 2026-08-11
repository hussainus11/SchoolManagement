import { Injectable, Logger } from "@nestjs/common";
import * as crypto from "node:crypto";
import { EncryptionService } from "../../common/encryption.service";
import { WhatsAppConnectionStatus } from "../../../generated/prisma/client";
import { WhatsappRepository } from "../whatsapp.repository";
import { WhatsAppVerificationFailedException } from "../whatsapp.exceptions";
import type { EmbeddedSignupPayload, SafeWhatsAppConnection } from "../whatsapp.types";
import { WhatsAppCloudApiService } from "./whatsapp-cloud-api.service";

/** Orchestrates Meta's Embedded Signup connect flow, per the current (v4, Oct 2025) implementation:
 *  the frontend hands us the FB.login() authorization code plus the WABA/phone/business ids from
 *  the WA_EMBEDDED_SIGNUP postMessage event, and this service does everything sensitive
 *  server-side — code exchange, ownership verification against the Graph API, webhook
 *  subscription, and Cloud API phone registration — before ever marking a connection CONNECTED. */
@Injectable()
export class WhatsappEmbeddedSignupService {
  private readonly logger = new Logger(WhatsappEmbeddedSignupService.name);

  constructor(
    private readonly repository: WhatsappRepository,
    private readonly cloudApi: WhatsAppCloudApiService,
    private readonly encryption: EncryptionService
  ) {}

  async connect(schoolId: string, payload: EmbeddedSignupPayload): Promise<SafeWhatsAppConnection> {
    await this.repository.upsertConnecting(schoolId);

    try {
      const { accessToken, expiresIn } = await this.cloudApi.exchangeCodeForToken(payload.code);

      // Verify against Meta rather than trusting the browser: the WABA must exist and be
      // readable with this token, and the phone number must genuinely belong to it.
      const [waba, ownedPhoneNumberIds] = await Promise.all([
        this.cloudApi.getBusinessAccount(payload.wabaId, accessToken),
        this.cloudApi.listPhoneNumbersForWaba(payload.wabaId, accessToken)
      ]);

      if (!ownedPhoneNumberIds.includes(payload.phoneNumberId)) {
        throw new WhatsAppVerificationFailedException(
          "the phone number reported by the signup flow doesn't belong to that business account."
        );
      }

      const phoneNumber = await this.cloudApi.getPhoneNumber(payload.phoneNumberId, accessToken);

      // Subscribe our app to this WABA's webhooks so message status updates flow to /webhooks/whatsapp.
      await this.cloudApi.subscribeAppToWaba(payload.wabaId, accessToken);

      // Cloud API requires the number to be registered under a PIN before it can send/receive.
      // The admin never sees or sets this — it's an internal Meta 2FA requirement, generated here.
      const pin = crypto.randomInt(0, 1_000_000).toString().padStart(6, "0");
      await this.cloudApi.registerPhoneNumber(payload.phoneNumberId, accessToken, pin);

      const accessTokenEncrypted = this.encryption.encrypt(accessToken);
      const connection = await this.repository.markConnected(schoolId, {
        wabaId: payload.wabaId,
        phoneNumberId: payload.phoneNumberId,
        businessId: payload.businessId ?? waba.id,
        displayPhoneNumber: phoneNumber.display_phone_number,
        verifiedName: phoneNumber.verified_name ?? waba.name,
        accessTokenEncrypted
      });
      void expiresIn; // System-user tokens from this flow are effectively long-lived; nothing to schedule yet.

      this.logger.log(`School ${schoolId} connected WhatsApp number ${phoneNumber.display_phone_number ?? payload.phoneNumberId}.`);
      return this.toSafe(connection);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error while connecting to Meta.";
      await this.repository.markError(schoolId, message);
      throw error;
    }
  }

  async disconnect(schoolId: string): Promise<void> {
    const connection = await this.repository.findConnectionForSchool(schoolId);
    if (connection?.accessTokenEncrypted && connection.wabaId) {
      try {
        const accessToken = this.encryption.decrypt(connection.accessTokenEncrypted);
        await this.cloudApi.unsubscribeAppFromWaba(connection.wabaId, accessToken);
      } catch (error) {
        // Best-effort — Meta-side unsubscribe failing shouldn't block the school from disconnecting
        // locally; message history and audit trail are preserved regardless.
        this.logger.warn(`Failed to unsubscribe app from WABA during disconnect: ${(error as Error).message}`);
      }
    }
    await this.repository.markDisconnected(schoolId);
  }

  toSafe(connection: {
    status: WhatsAppConnectionStatus;
    displayPhoneNumber: string | null;
    verifiedName: string | null;
    connectedAt: Date | null;
    lastError: string | null;
  }): SafeWhatsAppConnection {
    return {
      status: connection.status,
      displayPhoneNumber: connection.displayPhoneNumber,
      verifiedName: connection.verifiedName,
      connectedAt: connection.connectedAt?.toISOString() ?? null,
      lastError: connection.lastError
    };
  }
}
