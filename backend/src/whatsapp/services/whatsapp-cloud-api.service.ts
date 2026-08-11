import { Injectable, Logger } from "@nestjs/common";
import { graphApiBaseUrl } from "../whatsapp.constants";
import { WhatsAppGraphApiException } from "../whatsapp.exceptions";
import type {
  GraphBusinessAccountInfo,
  GraphErrorBody,
  GraphPhoneNumberInfo,
  GraphSendMessageResponse
} from "../whatsapp.types";

/** Every real call to Meta's Graph API for WhatsApp Cloud API goes through this service — nothing
 *  else in the app talks to graph.facebook.com directly. Access tokens are passed in per-call
 *  (already decrypted by the caller) and are never logged; only response bodies with the token
 *  redacted are logged on failure. */
@Injectable()
export class WhatsAppCloudApiService {
  private readonly logger = new Logger(WhatsAppCloudApiService.name);

  /** Exchanges the Embedded Signup authorization code (30-second TTL) for an access token.
   *  This is the Embedded Signup / Facebook Login for Business code exchange — there is no
   *  redirect involved (the code comes from the FB.login() JS SDK popup callback), so no
   *  redirect_uri is sent. Cross-check this against the exact sample snippet Meta's own App
   *  Dashboard shows for your app if this ever starts failing with an invalid-verification-code error. */
  async exchangeCodeForToken(code: string): Promise<{ accessToken: string; expiresIn?: number }> {
    const appId = process.env.META_APP_ID;
    const appSecret = process.env.META_APP_SECRET;
    if (!appId || !appSecret) {
      throw new Error("META_APP_ID / META_APP_SECRET are not configured.");
    }

    const url = new URL(`${graphApiBaseUrl()}/oauth/access_token`);
    url.searchParams.set("client_id", appId);
    url.searchParams.set("client_secret", appSecret);
    url.searchParams.set("code", code);

    const res = await fetch(url.toString());
    const body = (await res.json()) as { access_token: string; expires_in?: number } & GraphErrorBody;
    if (!res.ok) {
      throw this.toGraphException(body, "exchange the Embedded Signup code for an access token");
    }
    return { accessToken: body.access_token, expiresIn: body.expires_in };
  }

  async getBusinessAccount(wabaId: string, accessToken: string): Promise<GraphBusinessAccountInfo> {
    const url = `${graphApiBaseUrl()}/${wabaId}?fields=id,name,timezone_id,message_template_namespace`;
    return this.get<GraphBusinessAccountInfo>(url, accessToken, "look up the WhatsApp Business Account");
  }

  async getPhoneNumber(phoneNumberId: string, accessToken: string): Promise<GraphPhoneNumberInfo> {
    const url = `${graphApiBaseUrl()}/${phoneNumberId}?fields=id,display_phone_number,verified_name,code_verification_status,quality_rating`;
    return this.get<GraphPhoneNumberInfo>(url, accessToken, "look up the WhatsApp phone number");
  }

  /** Lists the phone numbers that actually belong to a WABA — used to verify the phoneNumberId
   *  the frontend reported genuinely belongs to the wabaId it also reported, rather than trusting
   *  the browser's word for it. */
  async listPhoneNumbersForWaba(wabaId: string, accessToken: string): Promise<string[]> {
    const url = `${graphApiBaseUrl()}/${wabaId}/phone_numbers?fields=id`;
    const body = await this.get<{ data?: Array<{ id: string }> }>(
      url,
      accessToken,
      "list phone numbers for the business account"
    );
    return (body.data ?? []).map((p) => p.id);
  }

  /** Subscribes our app to receive webhooks (message status, incoming messages) for this WABA —
   *  required once per connection, per Meta's Embedded Signup implementation guide. */
  async subscribeAppToWaba(wabaId: string, accessToken: string): Promise<void> {
    const url = `${graphApiBaseUrl()}/${wabaId}/subscribed_apps`;
    await this.post(url, accessToken, {}, "subscribe to WhatsApp webhooks for this business account");
  }

  async unsubscribeAppFromWaba(wabaId: string, accessToken: string): Promise<void> {
    const url = `${graphApiBaseUrl()}/${wabaId}/subscribed_apps`;
    const res = await fetch(url, { method: "DELETE", headers: this.authHeader(accessToken) });
    if (!res.ok) {
      const body = (await res.json().catch(() => ({}))) as GraphErrorBody;
      this.logger.warn(`Failed to unsubscribe app from WABA ${wabaId}: ${this.safeErrorMessage(body)}`);
    }
  }

  /** Cloud-API-registers the phone number so it can send/receive via our app (separate step from
   *  Embedded Signup itself). A random 6-digit PIN is generated server-side — the admin is never
   *  asked for one, this is purely a Meta requirement for two-step verification on the number. */
  async registerPhoneNumber(phoneNumberId: string, accessToken: string, pin: string): Promise<void> {
    const url = `${graphApiBaseUrl()}/${phoneNumberId}/register`;
    await this.post(url, accessToken, { messaging_product: "whatsapp", pin }, "register the phone number for Cloud API use");
  }

  async sendTemplateMessage(params: {
    phoneNumberId: string;
    accessToken: string;
    to: string;
    templateName: string;
    language: string;
    bodyParams?: string[];
  }): Promise<GraphSendMessageResponse> {
    const url = `${graphApiBaseUrl()}/${params.phoneNumberId}/messages`;
    const components = params.bodyParams?.length
      ? [{ type: "body", parameters: params.bodyParams.map((text) => ({ type: "text", text })) }]
      : undefined;

    return this.post<GraphSendMessageResponse>(
      url,
      params.accessToken,
      {
        messaging_product: "whatsapp",
        to: params.to,
        type: "template",
        template: { name: params.templateName, language: { code: params.language }, components }
      },
      "send a WhatsApp template message"
    );
  }

  private authHeader(accessToken: string): Record<string, string> {
    return { Authorization: `Bearer ${accessToken}` };
  }

  private async get<T>(url: string, accessToken: string, action: string): Promise<T> {
    const res = await fetch(url, { headers: this.authHeader(accessToken) });
    const body = (await res.json()) as T & GraphErrorBody;
    if (!res.ok) throw this.toGraphException(body, action);
    return body;
  }

  private async post<T>(url: string, accessToken: string, payload: unknown, action: string): Promise<T> {
    const res = await fetch(url, {
      method: "POST",
      headers: { ...this.authHeader(accessToken), "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const body = (await res.json()) as T & GraphErrorBody;
    if (!res.ok) throw this.toGraphException(body, action);
    return body;
  }

  private safeErrorMessage(body: GraphErrorBody): string {
    return body?.error?.error_user_msg || body?.error?.message || "Unknown Meta API error";
  }

  private toGraphException(body: GraphErrorBody, action: string): WhatsAppGraphApiException {
    const message = this.safeErrorMessage(body);
    // Log the technical detail server-side (never the token — the token is never in this body).
    this.logger.error(`Failed to ${action}: ${message} (code=${body?.error?.code})`);
    return new WhatsAppGraphApiException(`Couldn't ${action}: ${message}`, body?.error?.code);
  }
}
