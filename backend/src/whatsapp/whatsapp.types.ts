import { WhatsAppConnectionStatus } from "../../generated/prisma/client";

/** What the frontend sends after Meta's Embedded Signup finishes. `code` is the 30-second-TTL
 *  authorization code from the FB.login() JS SDK callback; wabaId/phoneNumberId/businessId come
 *  from the WA_EMBEDDED_SIGNUP postMessage event. None of this is a credential by itself — the
 *  backend must still exchange the code and verify everything against the Graph API. */
export interface EmbeddedSignupPayload {
  code: string;
  wabaId: string;
  phoneNumberId: string;
  businessId?: string;
}

/** The DB enum has no row for "never connected" (there's simply no row) — this adds that state
 *  for the frontend, which needs NOT_CONNECTED/CONNECTING/CONNECTED/DISCONNECTED/ERROR. */
export type WhatsAppStatusView = WhatsAppConnectionStatus | "NOT_CONNECTED";

/** Connection info that is safe to return to the frontend — never includes the access token. */
export interface SafeWhatsAppConnection {
  status: WhatsAppStatusView;
  displayPhoneNumber: string | null;
  verifiedName: string | null;
  connectedAt: string | null;
  lastError: string | null;
}

export interface GraphPhoneNumberInfo {
  id: string;
  display_phone_number?: string;
  verified_name?: string;
  code_verification_status?: string;
  quality_rating?: string;
}

export interface GraphBusinessAccountInfo {
  id: string;
  name?: string;
  timezone_id?: string;
  message_template_namespace?: string;
}

export interface GraphSendMessageResponse {
  messaging_product: "whatsapp";
  contacts?: Array<{ input: string; wa_id: string }>;
  messages?: Array<{ id: string }>;
}

export interface GraphErrorBody {
  error?: {
    message?: string;
    type?: string;
    code?: number;
    error_subcode?: number;
    error_user_title?: string;
    error_user_msg?: string;
    fbtrace_id?: string;
  };
}

/** Meta webhook status callback statuses we track. */
export type WhatsAppWebhookStatus = "sent" | "delivered" | "read" | "failed";

export interface WebhookStatusEntry {
  id: string;
  status: WhatsAppWebhookStatus;
  timestamp: string;
  errors?: Array<{ code: number; title?: string; message?: string }>;
}
