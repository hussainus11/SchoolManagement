import * as crypto from "node:crypto";
import { WhatsAppMessageStatus } from "../../../generated/prisma/client";
import { WhatsappRepository } from "../whatsapp.repository";
import { WhatsappWebhookService } from "./whatsapp-webhook.service";

describe("WhatsappWebhookService", () => {
  const originalSecret = process.env.META_APP_SECRET;
  const originalToken = process.env.META_WEBHOOK_VERIFY_TOKEN;

  afterEach(() => {
    process.env.META_APP_SECRET = originalSecret;
    process.env.META_WEBHOOK_VERIFY_TOKEN = originalToken;
  });

  describe("signature verification", () => {
    beforeEach(() => {
      process.env.META_APP_SECRET = "test-app-secret";
    });

    it("accepts a correctly signed body", () => {
      const service = new WhatsappWebhookService({} as WhatsappRepository);
      const rawBody = Buffer.from(JSON.stringify({ hello: "world" }));
      const signature = "sha256=" + crypto.createHmac("sha256", "test-app-secret").update(rawBody).digest("hex");

      expect(service.isValidSignature(rawBody, signature)).toBe(true);
    });

    it("rejects a body that was tampered with after signing", () => {
      const service = new WhatsappWebhookService({} as WhatsappRepository);
      const signature =
        "sha256=" + crypto.createHmac("sha256", "test-app-secret").update(Buffer.from('{"hello":"world"}')).digest("hex");
      const tamperedBody = Buffer.from('{"hello":"tampered"}');

      expect(service.isValidSignature(tamperedBody, signature)).toBe(false);
    });

    it("rejects a missing signature header rather than treating it as trusted", () => {
      const service = new WhatsappWebhookService({} as WhatsappRepository);
      expect(service.isValidSignature(Buffer.from("{}"), undefined)).toBe(false);
    });
  });

  describe("verify token", () => {
    it("only accepts the exact configured META_WEBHOOK_VERIFY_TOKEN", () => {
      process.env.META_WEBHOOK_VERIFY_TOKEN = "correct-token";
      const service = new WhatsappWebhookService({} as WhatsappRepository);

      expect(service.isValidVerifyToken("correct-token")).toBe(true);
      expect(service.isValidVerifyToken("wrong-token")).toBe(false);
    });
  });

  describe("processEvent — idempotency and robustness", () => {
    let repository: jest.Mocked<Pick<WhatsappRepository, "findMessageByMetaId" | "updateMessageStatusById">>;
    let service: WhatsappWebhookService;

    beforeEach(() => {
      repository = {
        findMessageByMetaId: jest.fn(),
        updateMessageStatusById: jest.fn().mockResolvedValue(undefined)
      };
      service = new WhatsappWebhookService(repository as unknown as WhatsappRepository);
    });

    function statusPayload(status: string, id = "wamid.abc123") {
      return { entry: [{ changes: [{ value: { statuses: [{ id, status, timestamp: "1700000000" }] } }] }] };
    }

    it("applies a forward status transition (sent -> delivered)", async () => {
      repository.findMessageByMetaId.mockResolvedValue({ id: "log-1", status: WhatsAppMessageStatus.SENT } as never);

      await service.processEvent(statusPayload("delivered"));

      expect(repository.updateMessageStatusById).toHaveBeenCalledWith(
        "log-1",
        WhatsAppMessageStatus.DELIVERED,
        expect.objectContaining({ deliveredAt: expect.any(Date) }),
        undefined
      );
    });

    it("ignores a redelivered webhook that doesn't move the status forward (idempotent)", async () => {
      repository.findMessageByMetaId.mockResolvedValue({ id: "log-1", status: WhatsAppMessageStatus.READ } as never);

      // Meta redelivers the same "delivered" webhook after we already recorded READ.
      await service.processEvent(statusPayload("delivered"));

      expect(repository.updateMessageStatusById).not.toHaveBeenCalled();
    });

    it("ignores status updates for a message id we don't have a log for", async () => {
      repository.findMessageByMetaId.mockResolvedValue(null);

      await service.processEvent(statusPayload("sent", "wamid.unknown"));

      expect(repository.updateMessageStatusById).not.toHaveBeenCalled();
    });

    it("never throws on a malformed/unrecognized payload shape", async () => {
      await expect(service.processEvent({ nonsense: true })).resolves.toBeUndefined();
      await expect(service.processEvent(null)).resolves.toBeUndefined();
      await expect(service.processEvent(undefined)).resolves.toBeUndefined();
      expect(repository.updateMessageStatusById).not.toHaveBeenCalled();
    });

    it("ignores an unrecognized status string instead of crashing", async () => {
      repository.findMessageByMetaId.mockResolvedValue({ id: "log-1", status: WhatsAppMessageStatus.SENT } as never);

      await service.processEvent(statusPayload("deleted_by_meta_someday"));

      expect(repository.updateMessageStatusById).not.toHaveBeenCalled();
    });
  });
});
