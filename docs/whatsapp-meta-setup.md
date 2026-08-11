# WhatsApp (Meta Cloud API) setup

This app lets each school connect its own WhatsApp Business number via Meta's official
**Embedded Signup** (current version, v4 — released October 2025; the older v2 flow is being
deprecated October 15, 2026, and isn't used here). No admin ever touches an access token, a
WABA ID, or the Graph API directly — the backend handles all of that.

This doc covers the one-time setup a **developer** does in the Meta App Dashboard. Once done, any
school admin can connect their number from **Settings → WhatsApp** with a single click.

## 1. Create a Meta App

1. Go to [developers.facebook.com/apps](https://developers.facebook.com/apps) → **Create App**.
2. Choose the **Business** app type.
3. Once created, add the **WhatsApp** product from the App Dashboard (this also provisions a
   default test WABA/number you can use before going live).

## 2. Set up Facebook Login for Business + Embedded Signup

Embedded Signup is configured through **Facebook Login for Business**, not the WhatsApp product
page itself:

1. In the App Dashboard, add the **Facebook Login for Business** product.
2. Under it, create a **Configuration** for WhatsApp Embedded Signup. Meta's UI walks you through
   selecting the permissions the configuration requests — at minimum you need
   `whatsapp_business_management` and `whatsapp_business_messaging`.
3. Copy the **Configuration ID** — this is `META_EMBEDDED_SIGNUP_CONFIG_ID` /
   `NEXT_PUBLIC_META_EMBEDDED_SIGNUP_CONFIG_ID`.
4. **Important:** Meta's dashboard shows a ready-to-use JS code sample for your specific
   configuration (the `FB.login()` call and the token-exchange request). This app's
   implementation follows the general documented shape — see [Token exchange caveat](#token-exchange-caveat)
   below — but if your dashboard's sample differs in any parameter, trust the dashboard, not this
   doc, and adjust `backend/src/whatsapp/services/whatsapp-cloud-api.service.ts` accordingly.

## 3. App Dashboard basics

- **Settings → Basic**: copy the **App ID** (`META_APP_ID` / `NEXT_PUBLIC_META_APP_ID`) and **App
  Secret** (`META_APP_SECRET` — backend only, never expose this).
- **App Domains** / **Website** platform: add your frontend's production domain (and
  `localhost` for dev) — Meta's Embedded Signup popup checks the calling page's origin.

## 4. Webhooks

1. In the WhatsApp product's **Configuration** tab, set the webhook **Callback URL** to:
   `https://<your-backend-domain>/webhooks/whatsapp`
2. Set the **Verify Token** to any random string you choose, and put the same value in
   `META_WEBHOOK_VERIFY_TOKEN` on the backend.
3. Subscribe to at least the **messages** webhook field (message status updates — sent,
   delivered, read, failed — arrive through this).

Per-school webhook subscription (subscribing your app to receive events for a *specific* school's
WABA) happens automatically, in code, right after that school completes Embedded Signup — you
don't configure this per school in the dashboard.

## 5. Environment variables

Backend (`backend/.env`):

| Variable | Where it comes from |
|---|---|
| `META_APP_ID` | App Dashboard → Settings → Basic |
| `META_APP_SECRET` | App Dashboard → Settings → Basic (**secret — backend only**) |
| `META_GRAPH_API_VERSION` | e.g. `v22.0` — bump periodically, Meta supports each version ~2 years |
| `META_EMBEDDED_SIGNUP_CONFIG_ID` | Facebook Login for Business → your Embedded Signup configuration |
| `META_WEBHOOK_VERIFY_TOKEN` | Any random string you choose; must match the dashboard's webhook config |
| `WHATSAPP_ENCRYPTION_KEY` | Generate locally — see below. Encrypts stored access tokens at rest. |

Generate the encryption key once:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Frontend (`frontend/.env`):

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_META_APP_ID` | Same as backend's `META_APP_ID` (not secret — Meta's own JS SDK needs it client-side) |
| `NEXT_PUBLIC_META_EMBEDDED_SIGNUP_CONFIG_ID` | Same as backend's `META_EMBEDDED_SIGNUP_CONFIG_ID` |

## 6. How a school connects (admin-facing flow)

1. Admin goes to **Settings → WhatsApp**.
2. Clicks **Connect WhatsApp**. This loads Meta's real JS SDK and opens Meta's own popup — nothing
   simulated.
3. The admin follows Meta's steps: log into (or create) a Meta Business, select/create a WhatsApp
   Business Account and phone number, verify the number by SMS/call.
4. On completion, the frontend receives the WABA ID, phone number ID, and business ID (via a
   `postMessage` event from Meta) plus a short-lived authorization code (via the SDK's login
   callback), and sends all of it to the backend.
5. The backend exchanges the code for an access token, **independently verifies with Meta** that
   the phone number really belongs to that WABA, subscribes to webhooks for it, registers the
   number for Cloud API use, encrypts the token, and stores the connection against that school
   only.
6. The page shows **Connected**, with the business name and WhatsApp number — never the token.

If verification fails at any point, the connection is marked **Connection error** with a plain-
language message; it's never marked Connected on unverified data.

## 7. How to test sending a parent notification

1. Connect a school's WhatsApp as above (a test number from Meta's dashboard works fine for this).
2. Generate a fee invoice for a student who has a guardian with a phone number on file
   (`Guardians → [guardian] → phone`). This automatically queues a `fee_reminder` WhatsApp message
   — no separate action needed.
3. The message is sent by a background job (`WhatsAppQueueSchedulerService`, a `@Cron` job) that
   runs every minute, so allow up to ~60 seconds. Check `WhatsAppMessageLog` rows in the DB (or
   add an admin view later) to see `status` move from `QUEUED` → `SENT` → `DELIVERED`/`READ`.
4. To test immediately without waiting on an invoice, use `POST /whatsapp/send-test` (School Admin
   / Branch Admin only) with `{ "to": "+15551234567", "templateName": "fee_reminder", "variables":
   { "student_name": "...", "amount": "...", "due_date": "..." } }` — this sends synchronously and
   returns Meta's response.

**Note on templates:** Meta requires business-initiated messages to use a pre-approved message
template. The template names this app ships with (`fee_reminder`, `fee_receipt`,
`attendance_alert`, `absence_notification`, `exam_result`, `school_announcement`) must each be
created and approved in **Meta Business Suite → WhatsApp Manager → Message Templates** before
sending will succeed — this app registers the *mapping* (local name → Meta template name), it
cannot create or auto-approve templates through the API.

## 8. Troubleshooting common errors

| Symptom | Likely cause |
|---|---|
| "Couldn't verify the WhatsApp Business Account with Meta" | The signed-in Meta user didn't actually complete the WABA/phone selection step, or permissions weren't granted in the Embedded Signup configuration. |
| "the phone number reported by the signup flow doesn't belong to that business account" | Should not normally happen — indicates a tampered/replayed request; retry Connect. |
| Template send fails with a template-not-found-style Graph API error | The named template isn't approved (or approved under a different name/language) in WhatsApp Manager yet. |
| Phone registration (`/register`) fails with error 133016 | The 10-registrations-per-72-hours rate limit for that number was hit — wait it out. |
| Webhook POSTs return 401 | `META_APP_SECRET` doesn't match what's set in the Meta dashboard, or the raw request body was modified in transit (check any proxy/CDN in front of the backend isn't rewriting the body). |

## 9. What's NOT automated (App Review / production requirements)

- **Message template approval** is manual, per template, in WhatsApp Manager (see above) — not
  something this integration can do via API.
- **Meta App Review**: while your app is in Development mode, Embedded Signup and messaging work
  for numbers/users added as testers on the app. To onboard real schools in production, the app
  needs **App Review** approval for the `whatsapp_business_management` and
  `whatsapp_business_messaging` permissions (Business verification is also required by Meta for
  this). This is a manual review process in the App Dashboard, outside this codebase.
- **Business verification**: Meta may require your Business Manager to complete Meta's Business
  Verification before allowing production-volume messaging.

## Token exchange caveat

The authorization code returned by Embedded Signup's `FB.login()` callback is exchanged for an
access token via `GET https://graph.facebook.com/{version}/oauth/access_token` with `client_id`,
`client_secret`, and `code` (implemented in `whatsapp-cloud-api.service.ts`). Because this is the
popup-based Embedded Signup flow (not a redirect-based OAuth flow), no `redirect_uri` is sent.
This matches the shape of Meta's documented Embedded Signup sample implementations, but Meta's own
App Dashboard shows an exact code sample tailored to your specific app/configuration — if code
exchange ever starts failing with an invalid-verification-code-style error, compare against that
dashboard sample first.
