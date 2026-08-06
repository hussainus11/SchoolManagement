import { NextResponse, type NextRequest } from "next/server";

// Kept as a literal (not imported from lib/store/auth-store.ts) so the edge middleware bundle
// doesn't pull in zustand. Must match SESSION_MARKER_COOKIE there. This is a same-origin marker
// cookie the frontend sets itself on login/onboarding/refresh — NOT the backend's httpOnly
// refresh_token cookie, which lives on a different domain and is invisible to this middleware.
const SESSION_MARKER_COOKIE = "sm_session";

// Accessible regardless of auth state; never redirected either way. reset-password lives here
// (not GUEST_ONLY_PATHS) because an already-authenticated browser should still be able to use a
// reset link — otherwise a stale/different session on the same device would bounce it away.
const PUBLIC_PATHS = ["/schoolmanagement/pages/error", "/schoolmanagement/reset-password"];

// Only accessible when NOT authenticated; authenticated users get bounced to the dashboard.
const GUEST_ONLY_PATHS = [
  "/schoolmanagement/login",
  "/schoolmanagement/register",
  "/schoolmanagement/onboarding",
  "/schoolmanagement/forgot-password"
];

function matchesAny(pathname: string, paths: string[]) {
  return paths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/schoolmanagement", request.url));
  }

  if (matchesAny(pathname, PUBLIC_PATHS)) {
    return NextResponse.next();
  }

  const isAuthenticated = Boolean(request.cookies.get(SESSION_MARKER_COOKIE)?.value);
  const isGuestOnly = matchesAny(pathname, GUEST_ONLY_PATHS);

  if (!isAuthenticated && !isGuestOnly) {
    const loginUrl = new URL("/schoolmanagement/login/v1", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthenticated && isGuestOnly) {
    return NextResponse.redirect(new URL("/schoolmanagement", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/schoolmanagement/:path*"]
};
