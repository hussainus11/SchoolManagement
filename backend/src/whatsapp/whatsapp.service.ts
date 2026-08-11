import { Injectable, Logger } from "@nestjs/common";
import { EncryptionService } from "../common/encryption.service";
import { PrismaService } from "../prisma/prisma.service";
import { DEFAULT_WHATSAPP_TEMPLATES, MAX_SEND_ATTEMPTS, QUEUE_BATCH_SIZE, RETRY_BASE_DELAY_MINUTES } from "./whatsapp.constants";
import { WhatsAppNotConnectedException, WhatsAppTemplateNotFoundException } from "./whatsapp.exceptions";
import { WhatsappRepository } from "./whatsapp.repository";
import type { EmbeddedSignupPayload, SafeWhatsAppConnection } from "./whatsapp.types";
import { WhatsAppCloudApiService } from "./services/whatsapp-cloud-api.service";
import { WhatsappEmbeddedSignupService } from "./services/whatsapp-embedded-signup.service";

interface QueueNotificationInput {
  schoolId: string;
  phoneNumber: string;
  guardianId?: string;
  studentId?: string;
  templateName: string;
  variables: Record<string, string>;
}

/** Facade the rest of the app talks to — controllers and other modules (e.g. InvoiceService for
 *  fee-due notices) never call the Graph API or repository directly. Every method is scoped by a
 *  schoolId that must come from the caller's own auth context, never from request input. */
@Injectable()
export class WhatsappService {
  private readonly logger = new Logger(WhatsappService.name);

  constructor(
    private readonly repository: WhatsappRepository,
    private readonly embeddedSignup: WhatsappEmbeddedSignupService,
    private readonly cloudApi: WhatsAppCloudApiService,
    private readonly encryption: EncryptionService,
    private readonly prisma: PrismaService
  ) {}

  async getStatus(schoolId: string): Promise<SafeWhatsAppConnection> {
    const connection = await this.repository.findConnectionForSchool(schoolId);
    if (!connection) {
      return { status: "NOT_CONNECTED", displayPhoneNumber: null, verifiedName: null, connectedAt: null, lastError: null };
    }
    return this.embeddedSignup.toSafe(connection);
  }

  connect(schoolId: string, payload: EmbeddedSignupPayload): Promise<SafeWhatsAppConnection> {
    return this.embeddedSignup.connect(schoolId, payload);
  }

  disconnect(schoolId: string): Promise<void> {
    return this.embeddedSignup.disconnect(schoolId);
  }

  /** Ensures the shared template catalog exists — called once at module init, idempotent. */
  async ensureDefaultTemplatesSeeded(): Promise<void> {
    const existing = await this.repository.countDefaultTemplates();
    if (existing > 0) return;
    await this.repository.seedDefaultTemplates(
      DEFAULT_WHATSAPP_TEMPLATES.map((t) => ({
        schoolId: null,
        name: t.name,
        metaTemplateName: t.metaTemplateName,
        language: t.language,
        category: t.category,
        variablesSchema: t.variablesSchema
      }))
    );
    this.logger.log(`Seeded ${DEFAULT_WHATSAPP_TEMPLATES.length} default WhatsApp templates.`);
  }

  /** Queues a single WhatsApp notification (never sends synchronously) — picked up by the cron
   *  worker in whatsapp-queue.processor. */
  async queueNotification(input: QueueNotificationInput): Promise<void> {
    const connection = await this.repository.findActiveConnectionForSchool(input.schoolId);
    if (!connection) {
      // A school that hasn't connected WhatsApp simply doesn't get WhatsApp notifications —
      // this must never throw and block the caller's primary action (e.g. invoice generation).
      return;
    }
    const template = await this.repository.findTemplate(input.schoolId, input.templateName);
    if (!template) {
      this.logger.warn(`No WhatsApp template "${input.templateName}" registered — skipping notification.`);
      return;
    }

    await this.repository.createMessageLog({
      schoolId: input.schoolId,
      connectionId: connection.id,
      guardianId: input.guardianId,
      studentId: input.studentId,
      phoneNumber: input.phoneNumber,
      templateName: input.templateName,
      language: template.language,
      variables: input.variables
    });
  }

  /** Queues the same template to every guardian of a student who has a phone number on file —
   *  independent of whether they have a portal login, unlike the in-app NotificationService. */
  async queueForStudentGuardians(
    schoolId: string,
    studentId: string,
    templateName: string,
    variables: Record<string, string>
  ): Promise<void> {
    const links = await this.prisma.studentGuardian.findMany({
      where: { studentId, guardian: { phone: { not: null } } },
      include: { guardian: true }
    });
    for (const link of links) {
      if (!link.guardian.phone) continue;
      await this.queueNotification({
        schoolId,
        phoneNumber: link.guardian.phone,
        guardianId: link.guardian.id,
        studentId,
        templateName,
        variables
      });
    }
  }

  /** Sends a single template message immediately — used by the "send test message" admin action
   *  and by the queue worker. Requires a CONNECTED school; never accepts a phoneNumberId/token
   *  from the caller. */
  async sendNow(schoolId: string, to: string, templateName: string, variables: Record<string, string>) {
    const connection = await this.repository.findActiveConnectionForSchool(schoolId);
    if (!connection || !connection.phoneNumberId || !connection.accessTokenEncrypted) {
      throw new WhatsAppNotConnectedException();
    }
    const template = await this.repository.findTemplate(schoolId, templateName);
    if (!template) throw new WhatsAppTemplateNotFoundException(templateName);

    const schema = Array.isArray(template.variablesSchema) ? (template.variablesSchema as string[]) : [];
    const bodyParams = schema.map((key) => variables[key] ?? "");
    const accessToken = this.encryption.decrypt(connection.accessTokenEncrypted);

    return this.cloudApi.sendTemplateMessage({
      phoneNumberId: connection.phoneNumberId,
      accessToken,
      to,
      templateName: template.metaTemplateName,
      language: template.language,
      bodyParams
    });
  }

  /** Called every tick by WhatsAppSchedulerService (@Cron). Processes a bounded batch of QUEUED
   *  messages so a bulk notify (e.g. 5,000 parents) never happens inside one HTTP request, and
   *  retries transient failures with exponential backoff instead of hammering Meta's API. */
  async processQueuedBatch(): Promise<{ sent: number; failed: number }> {
    const batch = await this.repository.findQueuedBatch(QUEUE_BATCH_SIZE);
    let sent = 0;
    let failed = 0;

    for (const message of batch) {
      try {
        if (message.connection.status !== "CONNECTED" || !message.connection.accessTokenEncrypted) {
          throw new Error("WhatsApp connection is no longer active.");
        }
        const template = await this.repository.findTemplate(message.schoolId, message.templateName);
        if (!template) throw new Error(`Template "${message.templateName}" is no longer registered.`);

        const schema = Array.isArray(template.variablesSchema) ? (template.variablesSchema as string[]) : [];
        const variables = (message.variables as Record<string, string> | null) ?? {};
        const bodyParams = schema.map((key) => variables[key] ?? "");
        const accessToken = this.encryption.decrypt(message.connection.accessTokenEncrypted);

        const result = await this.cloudApi.sendTemplateMessage({
          phoneNumberId: message.connection.phoneNumberId!,
          accessToken,
          to: message.phoneNumber,
          templateName: template.metaTemplateName,
          language: template.language,
          bodyParams
        });

        const metaMessageId = result.messages?.[0]?.id ?? "";
        await this.repository.markMessageSent(message.id, metaMessageId);
        sent++;
      } catch (error) {
        const attempts = message.attempts + 1;
        const isPermanent = attempts >= MAX_SEND_ATTEMPTS;
        const nextAttemptAt = isPermanent
          ? null
          : new Date(Date.now() + RETRY_BASE_DELAY_MINUTES * 60_000 * 2 ** (attempts - 1));
        const errorMessage = error instanceof Error ? error.message : "Unknown error sending WhatsApp message.";
        await this.repository.markMessageFailed(message.id, attempts, nextAttemptAt, errorMessage);
        this.logger.error(`WhatsApp send failed for message ${message.id} (attempt ${attempts}): ${errorMessage}`);
        failed++;
      }
    }

    return { sent, failed };
  }
}
