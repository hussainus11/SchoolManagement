"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export interface Guardian {
  id: string;
  schoolId: string;
  firstName: string;
  lastName: string;
  email: string | null;
  phone: string | null;
}

export function useGuardians(search?: string) {
  const params = new URLSearchParams();
  if (search) params.set("search", search);
  const qs = params.toString();

  return useQuery({
    queryKey: ["guardians", { search }],
    queryFn: () => apiFetch<Guardian[]>(`/guardians${qs ? `?${qs}` : ""}`)
  });
}

export function useCreateGuardian() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { firstName: string; lastName: string; email?: string; phone?: string }) =>
      apiFetch<Guardian>("/guardians", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["guardians"] })
  });
}
