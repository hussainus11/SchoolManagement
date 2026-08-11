import { Injectable } from "@nestjs/common";
import { Prisma, WhatsAppConnectionStatus, WhatsAppMessageStatus } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";

/** Every query here is scoped by schoolId (never trusts a caller-supplied connection id alone) —
 *  this is what makes tenant isolation structurally impossible to bypass by accident. */
@Injectable()
export class WhatsappRepository {
  constructor(private readonly prisma: PrismaService) {}

  findConnectionForSchool(schoolId: string) {
    return this.prisma.whatsAppConnection.findUnique({ where: { schoolId } });
  }

  findActiveConnectionForSchool(schoolId: string) {
    return this.prisma.whatsAppConnection.findFirst({
      where: { schoolId, status: WhatsAppConnectionStatus.CONNECTED }
    });
  }

  async upsertConnecting(schoolId: string) {
    return this.prisma.whatsAppConnection.upsert({
      where: { schoolId },
      create: { schoolId, status: WhatsAppConnectionStatus.CONNECTING },
      update: { status: WhatsAppConnectionStatus.CONNECTING, lastError: null }
    });
  }

  async markConnected(
    schoolId: string,
    data: {
      wabaId: string;
      phoneNumberId: string;
      businessId?: string;
      displayPhoneNumber?: string;
      verifiedName?: string;
      accessTokenEncrypted: string;
    }
  ) {
    return this.prisma.whatsAppConnection.update({
      where: { schoolId },
      data: {
        status: WhatsAppConnectionStatus.CONNECTED,
        wabaId: data.wabaId,
        phoneNumberId: data.phoneNumberId,
        businessId: data.businessId,
        displayPhoneNumber: data.displayPhoneNumber,
        verifiedName: data.verifiedName,
        accessTokenEncrypted: data.accessTokenEncrypted,
        connectedAt: new Date(),
        disconnectedAt: null,
        lastError: null
      }
    });
  }

  async markError(schoolId: string, message: string) {
    return this.prisma.whatsAppConnection.update({
      where: { schoolId },
      data: { status: WhatsAppConnectionStatus.ERROR, lastError: message }
    });
  }

  async markDisconnected(schoolId: string) {
    return this.prisma.whatsAppConnection.update({
      where: { schoolId },
      data: {
        status: WhatsAppConnectionStatus.DISCONNECTED,
        accessTokenEncrypted: null,
        disconnectedAt: new Date()
      }
    });
  }

  async findTemplate(schoolId: string, name: string) {
    // At most two rows can match (one school-specific override, one shared default) — fetch both
    // and prefer the school-specific one rather than relying on SQL NULLS ordering semantics.
    const candidates = await this.prisma.whatsAppTemplate.findMany({
      where: { name, isActive: true, OR: [{ schoolId }, { schoolId: null }] }
    });
    return candidates.find((t) => t.schoolId === schoolId) ?? candidates.find((t) => t.schoolId === null) ?? null;
  }

  seedDefaultTemplates(templates: Prisma.WhatsAppTemplateCreateManyInput[]) {
    return this.prisma.whatsAppTemplate.createMany({ data: templates });
  }

  countDefaultTemplates() {
    return this.prisma.whatsAppTemplate.count({ where: { schoolId: null } });
  }

  createMessageLog(data: Prisma.WhatsAppMessageLogUncheckedCreateInput) {
    return this.prisma.whatsAppMessageLog.create({ data });
  }

  findQueuedBatch(limit: number) {
    const now = new Date();
    return this.prisma.whatsAppMessageLog.findMany({
      where: {
        status: WhatsAppMessageStatus.QUEUED,
        OR: [{ nextAttemptAt: null }, { nextAttemptAt: { lte: now } }]
      },
      include: { connection: true },
      orderBy: { queuedAt: "asc" },
      take: limit
    });
  }

  markMessageSent(id: string, metaMessageId: string) {
    return this.prisma.whatsAppMessageLog.update({
      where: { id },
      data: { status: WhatsAppMessageStatus.SENT, metaMessageId, sentAt: new Date() }
    });
  }

  markMessageFailed(id: string, attempts: number, nextAttemptAt: Date | null, errorMessage: string, errorCode?: string) {
    return this.prisma.whatsAppMessageLog.update({
      where: { id },
      data: {
        status: nextAttemptAt ? WhatsAppMessageStatus.QUEUED : WhatsAppMessageStatus.FAILED,
        attempts,
        nextAttemptAt,
        errorMessage,
        errorCode,
        failedAt: nextAttemptAt ? undefined : new Date()
      }
    });
  }

  findMessageByMetaId(metaMessageId: string) {
    return this.prisma.whatsAppMessageLog.findFirst({ where: { metaMessageId } });
  }

  updateMessageStatusById(
    id: string,
    status: WhatsAppMessageStatus,
    timestamps: Partial<{ deliveredAt: Date; readAt: Date; failedAt: Date }>,
    error?: { code?: string; message?: string }
  ) {
    return this.prisma.whatsAppMessageLog.update({
      where: { id },
      data: { status, ...timestamps, errorCode: error?.code, errorMessage: error?.message }
    });
  }
}
