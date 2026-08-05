"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import { useAuthStore, type AuthUser } from "@/lib/store/auth-store";

interface SessionResponse {
  accessToken: string;
  user: AuthUser;
}

export interface OnboardSchoolInput {
  schoolName: string;
  schoolEmail?: string;
  schoolPhone?: string;
  academicYearName: string;
  academicYearStart: string;
  academicYearEnd: string;
  adminFirstName: string;
  adminLastName: string;
  adminEmail: string;
  adminPassword: string;
}

interface OnboardSchoolResponse extends SessionResponse {
  school: { id: string; name: string; slug: string };
}

/** Silently attempts to exchange the httpOnly refresh cookie for a fresh access token on app load. */
export function useHydrateSession() {
  const setSession = useAuthStore((s) => s.setSession);
  const clear = useAuthStore((s) => s.clear);

  return useQuery({
    queryKey: ["auth", "hydrate"],
    queryFn: async () => {
      try {
        const data = await apiFetch<SessionResponse>("/auth/refresh", {
          method: "POST",
          skipAuth: true
        });
        setSession(data.accessToken, data.user);
        return data.user;
      } catch {
        clear();
        return null;
      }
    },
    staleTime: Infinity,
    retry: false,
    refetchOnWindowFocus: false
  });
}

export function useLogin() {
  const setSession = useAuthStore((s) => s.setSession);

  return useMutation({
    mutationFn: (input: { email: string; password: string }) =>
      apiFetch<SessionResponse>("/auth/login", {
        method: "POST",
        skipAuth: true,
        body: JSON.stringify(input)
      }),
    onSuccess: (data) => setSession(data.accessToken, data.user)
  });
}

export function useOnboardSchool() {
  const setSession = useAuthStore((s) => s.setSession);

  return useMutation({
    mutationFn: (input: OnboardSchoolInput) =>
      apiFetch<OnboardSchoolResponse>("/onboarding", {
        method: "POST",
        skipAuth: true,
        body: JSON.stringify(input)
      }),
    onSuccess: (data) => setSession(data.accessToken, data.user)
  });
}

export function useChangePassword() {
  const setSession = useAuthStore((s) => s.setSession);

  return useMutation({
    mutationFn: (input: { currentPassword: string; newPassword: string }) =>
      apiFetch<SessionResponse>("/auth/change-password", {
        method: "POST",
        body: JSON.stringify(input)
      }),
    onSuccess: (data) => setSession(data.accessToken, data.user)
  });
}

export function useLogout() {
  const clear = useAuthStore((s) => s.clear);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => apiFetch("/auth/logout", { method: "POST" }),
    onSettled: () => {
      clear();
      queryClient.clear();
    }
  });
}
