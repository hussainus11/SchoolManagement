"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type WhatsAppStatusView = "NOT_CONNECTED" | "CONNECTING" | "CONNECTED" | "DISCONNECTED" | "ERROR";

export interface WhatsAppConnection {
  status: WhatsAppStatusView;
  displayPhoneNumber: string | null;
  verifiedName: string | null;
  connectedAt: string | null;
  lastError: string | null;
}

export interface EmbeddedSignupResult {
  code: string;
  wabaId: string;
  phoneNumberId: string;
  businessId?: string;
}

export function useWhatsAppStatus() {
  return useQuery({
    queryKey: ["whatsapp", "status"],
    queryFn: () => apiFetch<WhatsAppConnection>("/whatsapp/status"),
    // Poll while a connection attempt is in flight so the UI flips to CONNECTED/ERROR on its own
    // once the backend finishes verifying with Meta, without the admin needing to refresh.
    refetchInterval: (query) => (query.state.data?.status === "CONNECTING" ? 2000 : false)
  });
}

export function useConnectWhatsApp() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (result: EmbeddedSignupResult) =>
      apiFetch<WhatsAppConnection>("/whatsapp/connect", { method: "POST", body: JSON.stringify(result) }),
    onSuccess: (data) => queryClient.setQueryData(["whatsapp", "status"], data)
  });
}

export function useDisconnectWhatsApp() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => apiFetch<void>("/whatsapp/disconnect", { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["whatsapp", "status"] })
  });
}

export function useSendTestWhatsAppMessage() {
  return useMutation({
    mutationFn: (input: { to: string; templateName: string; variables: Record<string, string> }) =>
      apiFetch("/whatsapp/send-test", { method: "POST", body: JSON.stringify(input) })
  });
}
