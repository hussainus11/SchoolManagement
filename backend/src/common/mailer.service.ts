import { Injectable, Logger } from "@nestjs/common";
import { createTransport, type Transporter } from "nodemailer";

interface SendMailInput {
  to: string;
  subject: string;
  text: string;
  html: string;
}

/** Thin wrapper around nodemailer. Without SMTP_* env vars configured, it logs the email instead
 *  of sending it — so password-reset (etc.) works out of the box in local dev without requiring
 *  a mail provider, and fails loudly-but-safely (never throws) if misconfigured in production. */
@Injectable()
export class MailerService {
  private readonly logger = new Logger(MailerService.name);
  private readonly transporter: Transporter | null;
  private readonly from: string;

  constructor() {
    this.from = process.env.SMTP_FROM ?? "no-reply@schoolmanagement.local";
    this.transporter = this.buildTransporter();
  }

  private buildTransporter(): Transporter | null {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) return null;

    return createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 587),
      secure: Number(SMTP_PORT ?? 587) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD }
    });
  }

  async send(input: SendMailInput): Promise<void> {
    if (!this.transporter) {
      this.logger.warn(
        `SMTP is not configured (set SMTP_HOST/SMTP_USER/SMTP_PASSWORD) — logging email instead of sending it.\n` +
          `To: ${input.to}\nSubject: ${input.subject}\n${input.text}`
      );
      return;
    }

    try {
      await this.transporter.sendMail({ from: this.from, ...input });
    } catch (error) {
      // A delivery failure shouldn't surface to the caller — forgotPassword() always returns a
      // generic success regardless, to avoid leaking whether an email exists either way.
      this.logger.error(`Failed to send email to ${input.to}`, error);
    }
  }
}
