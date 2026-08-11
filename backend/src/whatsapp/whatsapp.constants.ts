/** Graph API version to call if META_GRAPH_API_VERSION isn't set. Bump periodically —
 *  Meta supports each version for ~2 years. See developers.facebook.com/docs/graph-api/changelog. */
export const DEFAULT_GRAPH_API_VERSION = "v22.0";

export function graphApiVersion(): string {
  return process.env.META_GRAPH_API_VERSION || DEFAULT_GRAPH_API_VERSION;
}

export function graphApiBaseUrl(): string {
  return `https://graph.facebook.com/${graphApiVersion()}`;
}

/** How many QUEUED WhatsAppMessageLog rows the cron worker sends per tick, so a bulk notify
 *  (e.g. 5,000 parents) never blocks a request and stays under Meta's messaging rate limits. */
export const QUEUE_BATCH_SIZE = 50;

/** Failed sends are retried with exponential backoff, capped, then left FAILED for good. */
export const MAX_SEND_ATTEMPTS = 5;
export const RETRY_BASE_DELAY_MINUTES = 2;

/** Local template name -> Meta-approved template registry, seeded once if missing. Meta template
 *  approval itself happens in WhatsApp Manager (Meta Business Suite) — this only records which
 *  approved template name/language/category a local event maps to. Schools can override a subset
 *  of these (schoolId set) if they get their own custom-worded template approved. */
export const DEFAULT_WHATSAPP_TEMPLATES: Array<{
  name: string;
  metaTemplateName: string;
  language: string;
  category: string;
  variablesSchema: string[];
}> = [
  {
    name: "fee_reminder",
    metaTemplateName: "fee_reminder",
    language: "en_US",
    category: "UTILITY",
    variablesSchema: ["student_name", "amount", "due_date"]
  },
  {
    name: "fee_receipt",
    metaTemplateName: "fee_receipt",
    language: "en_US",
    category: "UTILITY",
    variablesSchema: ["student_name", "amount", "receipt_number"]
  },
  {
    name: "attendance_alert",
    metaTemplateName: "attendance_alert",
    language: "en_US",
    category: "UTILITY",
    variablesSchema: ["student_name", "date", "status"]
  },
  {
    name: "absence_notification",
    metaTemplateName: "absence_notification",
    language: "en_US",
    category: "UTILITY",
    variablesSchema: ["student_name", "date"]
  },
  {
    name: "exam_result",
    metaTemplateName: "exam_result",
    language: "en_US",
    category: "UTILITY",
    variablesSchema: ["student_name", "exam_name", "result_link"]
  },
  {
    name: "school_announcement",
    metaTemplateName: "school_announcement",
    language: "en_US",
    category: "MARKETING",
    variablesSchema: ["title", "message"]
  }
];
