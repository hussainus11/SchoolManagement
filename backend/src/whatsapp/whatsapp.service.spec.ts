import { EncryptionService } from "../common/encryption.service";
import { PrismaService } from "../prisma/prisma.service";
import { WhatsAppNotConnectedException } from "./whatsapp.exceptions";
import { WhatsappRepository } from "./whatsapp.repository";
import { WhatsAppCloudApiService } from "./services/whatsapp-cloud-api.service";
import { WhatsappEmbeddedSignupService } from "./services/whatsapp-embedded-signup.service";
import { WhatsappService } from "./whatsapp.service";

describe("WhatsappService", () => {
  let repository: jest.Mocked<
    Pick<
      WhatsappRepository,
      | "findConnectionForSchool"
      | "findActiveConnectionForSchool"
      | "findTemplate"
      | "createMessageLog"
    >
  >;
  let embeddedSignup: Partial<WhatsappEmbeddedSignupService>;
  let cloudApi: Partial<WhatsAppCloudApiService>;
  let encryption: Partial<EncryptionService>;
  let service: WhatsappService;

  beforeEach(() => {
    repository = {
      findConnectionForSchool: jest.fn(),
      findActiveConnectionForSchool: jest.fn(),
      findTemplate: jest.fn(),
      createMessageLog: jest.fn().mockResolvedValue(undefined)
    };
    embeddedSignup = {
      toSafe: jest.fn((c) => ({
        status: c.status,
        displayPhoneNumber: c.displayPhoneNumber,
        verifiedName: c.verifiedName,
        connectedAt: null,
        lastError: c.lastError
      }))
    };
    cloudApi = { sendTemplateMessage: jest.fn() };
    encryption = { decrypt: jest.fn().mockReturnValue("decrypted-token") };

    service = new WhatsappService(
      repository as unknown as WhatsappRepository,
      embeddedSignup as WhatsappEmbeddedSignupService,
      cloudApi as WhatsAppCloudApiService,
      encryption as EncryptionService,
      {} as PrismaService
    );
  });

  describe("getStatus — never leaks the access token", () => {
    it("returns NOT_CONNECTED when the school has no connection row at all", async () => {
      repository.findConnectionForSchool.mockResolvedValue(null);

      const status = await service.getStatus("school-A");

      expect(status.status).toBe("NOT_CONNECTED");
    });

    it("the returned object contains no accessTokenEncrypted field even though the DB row has one", async () => {
      repository.findConnectionForSchool.mockResolvedValue({
        status: "CONNECTED",
        displayPhoneNumber: "+15551234567",
        verifiedName: "Test School",
        connectedAt: new Date(),
        lastError: null,
        accessTokenEncrypted: "super-secret-encrypted-blob",
        wabaId: "waba-1"
      } as never);

      const status = await service.getStatus("school-A");

      expect(JSON.stringify(status)).not.toContain("super-secret-encrypted-blob");
      expect(status).not.toHaveProperty("accessTokenEncrypted");
    });
  });

  describe("queueNotification — a school with no active connection is a silent no-op", () => {
    it("never creates a message log if the school hasn't connected WhatsApp", async () => {
      repository.findActiveConnectionForSchool.mockResolvedValue(null);

      await service.queueNotification({
        schoolId: "school-A",
        phoneNumber: "+15551234567",
        templateName: "fee_reminder",
        variables: {}
      });

      expect(repository.createMessageLog).not.toHaveBeenCalled();
    });
  });

  describe("sendNow — requires an active, verified connection", () => {
    it("throws WhatsAppNotConnectedException rather than attempting to send with no connection", async () => {
      repository.findActiveConnectionForSchool.mockResolvedValue(null);

      await expect(service.sendNow("school-A", "+15551234567", "fee_reminder", {})).rejects.toThrow(
        WhatsAppNotConnectedException
      );
      expect(cloudApi.sendTemplateMessage).not.toHaveBeenCalled();
    });

    it("decrypts the token only inside the service call, and sends via that school's own phoneNumberId", async () => {
      repository.findActiveConnectionForSchool.mockResolvedValue({
        id: "conn-1",
        phoneNumberId: "school-A-phone-id",
        accessTokenEncrypted: "encrypted-blob"
      } as never);
      repository.findTemplate.mockResolvedValue({
        metaTemplateName: "fee_reminder",
        language: "en_US",
        variablesSchema: ["student_name"]
      } as never);
      (cloudApi.sendTemplateMessage as jest.Mock).mockResolvedValue({ messages: [{ id: "wamid.1" }] });

      await service.sendNow("school-A", "+15551234567", "fee_reminder", { student_name: "Ali" });

      expect(encryption.decrypt).toHaveBeenCalledWith("encrypted-blob");
      expect(cloudApi.sendTemplateMessage).toHaveBeenCalledWith(
        expect.objectContaining({ phoneNumberId: "school-A-phone-id", accessToken: "decrypted-token" })
      );
    });
  });
});
