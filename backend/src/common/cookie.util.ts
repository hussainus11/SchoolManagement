import type { Request, Response } from "express";

export const REFRESH_COOKIE_NAME = process.env.REFRESH_COOKIE_NAME ?? "refresh_token";
const COOKIE_SECURE = process.env.COOKIE_SECURE === "true";

// Path is "/" (not scoped to "/auth") because the frontend runs on a different port under the
// same "localhost" host: browsers key cookies by (domain, path) and ignore port, but the Next.js
// proxy.ts middleware needs this cookie on navigations under /schoolmanagement/** to do its
// coarse server-side auth-gate redirect. A "/auth"-scoped cookie would never reach it.
export function setRefreshCookie(res: Response, token: string, expiresAt: Date) {
  res.cookie(REFRESH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: COOKIE_SECURE,
    sameSite: "lax",
    path: "/",
    expires: expiresAt
  });
}

export function clearRefreshCookie(res: Response) {
  res.clearCookie(REFRESH_COOKIE_NAME, { path: "/" });
}

export function getRefreshCookie(req: Request): string | undefined {
  return req.cookies?.[REFRESH_COOKIE_NAME];
}
