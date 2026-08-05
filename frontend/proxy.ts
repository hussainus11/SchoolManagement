import { NextResponse, type NextRequest } from "next/server";

const REFRESH_COOKIE_NAME = "refresh_token";

// Accessible regardless of auth state; never redirected either way.
const PUBLIC_PATHS = ["/schoolmanagement/pages/error"];

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

  const isAuthenticated = Boolean(request.cookies.get(REFRESH_COOKIE_NAME)?.value);
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
