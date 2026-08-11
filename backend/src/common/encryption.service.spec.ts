import { EncryptionService } from "./encryption.service";

describe("EncryptionService", () => {
  const originalKey = process.env.WHATSAPP_ENCRYPTION_KEY;

  afterEach(() => {
    process.env.WHATSAPP_ENCRYPTION_KEY = originalKey;
  });

  it("round-trips plaintext through encrypt/decrypt", () => {
    process.env.WHATSAPP_ENCRYPTION_KEY = Buffer.alloc(32, 7).toString("base64");
    const service = new EncryptionService();

    const ciphertext = service.encrypt("super-secret-access-token");
    expect(ciphertext).not.toContain("super-secret-access-token");
    expect(service.decrypt(ciphertext)).toBe("super-secret-access-token");
  });

  it("produces a different ciphertext each time (random IV) even for the same plaintext", () => {
    process.env.WHATSAPP_ENCRYPTION_KEY = Buffer.alloc(32, 3).toString("base64");
    const service = new EncryptionService();

    const a = service.encrypt("same-token");
    const b = service.encrypt("same-token");
    expect(a).not.toEqual(b);
  });

  it("rejects a tampered ciphertext instead of silently returning garbage", () => {
    process.env.WHATSAPP_ENCRYPTION_KEY = Buffer.alloc(32, 5).toString("base64");
    const service = new EncryptionService();

    const ciphertext = service.encrypt("token");
    const [iv, authTag, data] = ciphertext.split(":");
    const tampered = [iv, authTag, Buffer.from("tampered").toString("base64")].join(":");
    void data;

    expect(() => service.decrypt(tampered)).toThrow();
  });

  it("treats a missing key as unconfigured rather than silently no-op encrypting", () => {
    delete process.env.WHATSAPP_ENCRYPTION_KEY;
    const service = new EncryptionService();

    expect(service.isConfigured).toBe(false);
    expect(() => service.encrypt("token")).toThrow();
  });
});
