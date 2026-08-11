import { EncryptionService } from "../../common/encryption.service";
import { WhatsAppVerificationFailedException } from "../whatsapp.exceptions";
import { WhatsappRepository } from "../whatsapp.repository";
import type { EmbeddedSignupPayload } from "../whatsapp.types";
import { WhatsAppCloudApiService } from "./whatsapp-cloud-api.service";
import { WhatsappEmbeddedSignupService } from "./whatsapp-embedded-signup.service";

describe("WhatsappEmbeddedSignupService — connect flow (Meta API mocked, never called for real)", () => {
  let repository: jest.Mocked<WhatsappRepository>;
  let cloudApi: jest.Mocked<WhatsAppCloudApiService>;
  let encryption: jest.Mocked<EncryptionService>;
  let service: WhatsappEmbeddedSignupService;

  const payload: EmbeddedSignupPayload = { code: "auth-code", wabaId: "waba-1", phoneNumberId: "phone-1" };

  beforeEach(() => {
    repository = {
      upsertConnecting: jest.fn().mockResolvedValue(undefined),
      markConnected: jest.fn().mockResolvedValue({
        status: "CONNECTED",
        displayPhoneNumber: "+15551234567",
        verifiedName: "Test School",
        connectedAt: new Date(),
        lastError: null
      }),
      markError: jest.fn().mockResolvedValue(undefined),
      markDisconnected: jest.fn().mockResolvedValue(undefined),
      findConnectionForSchool: jest.fn()
    } as unknown as jest.Mocked<WhatsappRepository>;

    cloudApi = {
      exchangeCodeForToken: jest.fn().mockResolvedValue({ accessToken: "real-meta-token", expiresIn: 3600 }),
      getBusinessAccount: jest.fn().mockResolvedValue({ id: "waba-1", name: "Test School" }),
      listPhoneNumbersForWaba: jest.fn().mockResolvedValue(["phone-1"]),
      getPhoneNumber: jest.fn().mockResolvedValue({ id: "phone-1", display_phone_number: "+15551234567", verified_name: "Test School" }),
      subscribeAppToWaba: jest.fn().mockResolvedValue(undefined),
      registerPhoneNumber: jest.fn().mockResolvedValue(undefined),
      unsubscribeAppFromWaba: jest.fn().mockResolvedValue(undefined)
    } as unknown as jest.Mocked<WhatsAppCloudApiService>;

    encryption = {
      encrypt: jest.fn().mockReturnValue("encrypted-token-blob"),
      decrypt: jest.fn().mockReturnValue("real-meta-token")
    } as unknown as jest.Mocked<EncryptionService>;

    service = new WhatsappEmbeddedSignupService(repository, cloudApi, encryption);
  });

  it("verifies the phone number belongs to the WABA before storing anything, and never stores the raw token", async () => {
    await service.connect("school-A", payload);

    expect(cloudApi.listPhoneNumbersForWaba).toHaveBeenCalledWith("waba-1", "real-meta-token");
    expect(encryption.encrypt).toHaveBeenCalledWith("real-meta-token");
    expect(repository.markConnected).toHaveBeenCalledWith(
      "school-A",
      expect.objectContaining({ accessTokenEncrypted: "encrypted-token-blob" })
    );
    // The raw access token must never reach the DB call directly.
    const [, data] = repository.markConnected.mock.calls[0] as [string, Record<string, unknown>];
    expect(Object.values(data)).not.toContain("real-meta-token");
  });

  it("subscribes to webhooks and registers the phone number before marking the connection CONNECTED", async () => {
    await service.connect("school-A", payload);

    expect(cloudApi.subscribeAppToWaba).toHaveBeenCalledWith("waba-1", "real-meta-token");
    expect(cloudApi.registerPhoneNumber).toHaveBeenCalledWith("phone-1", "real-meta-token", expect.any(String));
    expect(repository.markConnected).toHaveBeenCalled();
  });

  it("refuses to connect when the reported phone number doesn't actually belong to the WABA", async () => {
    cloudApi.listPhoneNumbersForWaba.mockResolvedValue(["some-other-phone-id"]);

    await expect(service.connect("school-A", payload)).rejects.toThrow(WhatsAppVerificationFailedException);
    expect(repository.markConnected).not.toHaveBeenCalled();
    expect(repository.markError).toHaveBeenCalledWith("school-A", expect.any(String));
  });

  it("marks the connection as ERROR (not CONNECTED) when Meta's API call fails, and never swallows the error", async () => {
    cloudApi.exchangeCodeForToken.mockRejectedValue(new Error("invalid_grant: code expired"));

    await expect(service.connect("school-A", payload)).rejects.toThrow("invalid_grant: code expired");
    expect(repository.markConnected).not.toHaveBeenCalled();
    expect(repository.markError).toHaveBeenCalledWith("school-A", "invalid_grant: code expired");
  });

  it("disconnect() clears the connection locally even if Meta's unsubscribe call fails", async () => {
    repository.findConnectionForSchool.mockResolvedValue({
      accessTokenEncrypted: "encrypted-token-blob",
      wabaId: "waba-1"
    } as never);
    cloudApi.unsubscribeAppFromWaba.mockRejectedValue(new Error("network error"));

    await service.disconnect("school-A");

    expect(repository.markDisconnected).toHaveBeenCalledWith("school-A");
  });
});
