"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export interface Visitor {
  id: string;
  schoolId: string;
  branchId: string;
  name: string;
  phone: string | null;
  purpose: string;
  personToMeet: string | null;
  checkInAt: string;
  checkOutAt: string | null;
}

export function useVisitors(filters: { branchId?: string; active?: boolean } = {}) {
  const params = new URLSearchParams();
  if (filters.branchId) params.set("branchId", filters.branchId);
  if (filters.active) params.set("active", "true");
  const qs = params.toString();

  return useQuery({
    queryKey: ["visitors", filters],
    queryFn: () => apiFetch<Visitor[]>(`/visitors${qs ? `?${qs}` : ""}`)
  });
}

export function useCheckInVisitor() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { branchId: string; name: string; phone?: string; purpose: string; personToMeet?: string }) =>
      apiFetch<Visitor>("/visitors", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["visitors"] })
  });
}

export function useCheckOutVisitor() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch<Visitor>(`/visitors/${id}/check-out`, { method: "PATCH" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["visitors"] })
  });
}
