import { Injectable, Logger } from "@nestjs/common";
import * as crypto from "node:crypto";

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12;

/** AES-256-GCM encrypt/decrypt for secrets that must be stored in Postgres (e.g. WhatsApp access
 *  tokens) rather than kept only in memory. Key comes from WHATSAPP_ENCRYPTION_KEY — a 32-byte
 *  value, base64 or hex encoded. Never logs plaintext or the key. */
@Injectable()
export class EncryptionService {
  private readonly logger = new Logger(EncryptionService.name);
  private readonly key: Buffer | null;

  constructor() {
    this.key = this.loadKey();
  }

  private loadKey(): Buffer | null {
    const raw = process.env.WHATSAPP_ENCRYPTION_KEY;
    if (!raw) return null;

    const buf = raw.length === 64 && /^[0-9a-fA-F]+$/.test(raw) ? Buffer.from(raw, "hex") : Buffer.from(raw, "base64");

    if (buf.length !== 32) {
      this.logger.error(
        "WHATSAPP_ENCRYPTION_KEY must decode to exactly 32 bytes (base64 or hex). Encryption is disabled."
      );
      return null;
    }
    return buf;
  }

  get isConfigured(): boolean {
    return this.key !== null;
  }

  encrypt(plaintext: string): string {
    if (!this.key) {
      throw new Error("WHATSAPP_ENCRYPTION_KEY is not configured — cannot encrypt secrets.");
    }
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(ALGORITHM, this.key, iv);
    const encrypted = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
    const authTag = cipher.getAuthTag();
    return [iv.toString("base64"), authTag.toString("base64"), encrypted.toString("base64")].join(":");
  }

  decrypt(payload: string): string {
    if (!this.key) {
      throw new Error("WHATSAPP_ENCRYPTION_KEY is not configured — cannot decrypt secrets.");
    }
    const [ivB64, authTagB64, dataB64] = payload.split(":");
    if (!ivB64 || !authTagB64 || !dataB64) {
      throw new Error("Malformed encrypted payload.");
    }
    const decipher = crypto.createDecipheriv(ALGORITHM, this.key, Buffer.from(ivB64, "base64"));
    decipher.setAuthTag(Buffer.from(authTagB64, "base64"));
    const decrypted = Buffer.concat([decipher.update(Buffer.from(dataB64, "base64")), decipher.final()]);
    return decrypted.toString("utf8");
  }
}
