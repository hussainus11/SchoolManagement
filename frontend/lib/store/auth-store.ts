import { create } from "zustand";

export type Role =
  | "SUPER_ADMIN"
  | "SCHOOL_ADMIN"
  | "BRANCH_ADMIN"
  | "TEACHER"
  | "ACCOUNTANT"
  | "PARENT"
  | "STUDENT";

export interface AuthUser {
  id: string;
  schoolId: string | null;
  branchId: string | null;
  email: string;
  firstName: string;
  lastName: string;
  phone: string | null;
  role: Role;
  isActive: boolean;
  mustChangePassword: boolean;
}

interface AuthState {
  accessToken: string | null;
  user: AuthUser | null;
  setSession: (accessToken: string, user: AuthUser) => void;
  clear: () => void;
}

// Coarse "am I logged in" signal for proxy.ts's server-side redirect gate. It has to be a
// same-origin cookie set by the frontend itself: the real session lives in an httpOnly cookie on
// the *backend's* domain, which is invisible to the frontend's own middleware once frontend and
// backend are on genuinely different domains (as opposed to same-hostname-different-port in local
// dev, where browsers don't distinguish cookies by port and it happened to work anyway).
export const SESSION_MARKER_COOKIE = "sm_session";
const SESSION_MARKER_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

function setSessionMarkerCookie() {
  if (typeof document === "undefined") return;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${SESSION_MARKER_COOKIE}=1; path=/; max-age=${SESSION_MARKER_MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
}

function clearSessionMarkerCookie() {
  if (typeof document === "undefined") return;
  document.cookie = `${SESSION_MARKER_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  setSession: (accessToken, user) => {
    setSessionMarkerCookie();
    set({ accessToken, user });
  },
  clear: () => {
    clearSessionMarkerCookie();
    set({ accessToken: null, user: null });
  }
}));
