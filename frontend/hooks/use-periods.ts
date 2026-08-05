"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export interface Period {
  id: string;
  schoolId: string;
  branchId: string;
  name: string;
  startTime: string;
  endTime: string;
  order: number;
}

export function usePeriods(branchId: string | undefined) {
  return useQuery({
    queryKey: ["periods", { branchId }],
    queryFn: () => apiFetch<Period[]>(`/periods?branchId=${branchId}`),
    enabled: !!branchId
  });
}

export function useCreatePeriod() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { branchId: string; name: string; startTime: string; endTime: string; order?: number }) =>
      apiFetch<Period>("/periods", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["periods"] })
  });
}

export function useDeletePeriod() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/periods/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["periods"] })
  });
}
