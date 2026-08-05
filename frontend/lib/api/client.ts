import { useAuthStore } from "@/lib/store/auth-store";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

/** Resolves a backend-relative path (e.g. an uploaded file URL) to an absolute URL. */
export function resolveApiUrl(path: string | null | undefined) {
  if (!path) return undefined;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${API_URL}${path}`;
}

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

let refreshPromise: Promise<boolean> | null = null;

async function refreshSession(): Promise<boolean> {
  if (!refreshPromise) {
    refreshPromise = fetch(`${API_URL}/auth/refresh`, {
      method: "POST",
      credentials: "include"
    })
      .then(async (res) => {
        if (!res.ok) {
          useAuthStore.getState().clear();
          return false;
        }
        const data = await res.json();
        useAuthStore.getState().setSession(data.accessToken, data.user);
        return true;
      })
      .catch(() => {
        useAuthStore.getState().clear();
        return false;
      })
      .finally(() => {
        refreshPromise = null;
      });
  }
  return refreshPromise;
}

interface RequestOptions extends RequestInit {
  /** Skip attaching the Authorization header and skip the 401-refresh-retry (use for login/onboarding/refresh). */
  skipAuth?: boolean;
}

export async function apiFetch<T = unknown>(path: string, options: RequestOptions = {}): Promise<T> {
  const { skipAuth, headers, ...rest } = options;

  const buildHeaders = (): HeadersInit => {
    const accessToken = useAuthStore.getState().accessToken;
    return {
      // Omit Content-Type for FormData bodies so the browser sets the multipart boundary itself.
      ...(rest.body instanceof FormData ? {} : { "Content-Type": "application/json" }),
      ...(!skipAuth && accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      ...headers
    };
  };

  let res = await fetch(`${API_URL}${path}`, {
    ...rest,
    credentials: "include",
    headers: buildHeaders()
  });

  if (res.status === 401 && !skipAuth) {
    const refreshed = await refreshSession();
    if (refreshed) {
      res = await fetch(`${API_URL}${path}`, {
        ...rest,
        credentials: "include",
        headers: buildHeaders()
      });
    }
  }

  if (!res.ok) {
    const body = await res.json().catch(() => ({ message: res.statusText }));
    throw new ApiError(res.status, body.message ?? "Request failed");
  }

  if (res.status === 204) return undefined as T;
  return res.json();
}
