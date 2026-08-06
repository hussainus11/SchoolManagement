"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { BillingRecord } from "@/lib/billing-status";

export interface AdminSchool {
  id: string;
  name: string;
  slug: string;
  email: string | null;
  phone: string | null;
  address: string | null;
  logoUrl: string | null;
  isActive: boolean;
  nextBillingDate: string | null;
  createdAt: string;
  updatedAt: string;
  _count: { branches: number; users: number; billingRecords: number };
}

export type { BillingRecord };

export interface AdminSchoolDetail extends AdminSchool {
  billingRecords: BillingRecord[];
}

export function useAdminSchools() {
  return useQuery({
    queryKey: ["admin", "schools"],
    queryFn: () => apiFetch<AdminSchool[]>("/admin/schools")
  });
}

export function useAdminSchool(id: string | undefined) {
  return useQuery({
    queryKey: ["admin", "schools", id],
    queryFn: () => apiFetch<AdminSchoolDetail>(`/admin/schools/${id}`),
    enabled: !!id
  });
}

export function useRecordBilling() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      ...input
    }: {
      id: string;
      nextBillingDate: string;
      amount?: number;
      note?: string;
    }) => apiFetch<BillingRecord>(`/admin/schools/${id}/billing`, { method: "POST", body: JSON.stringify(input) }),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["admin", "schools"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "schools", variables.id] });
    }
  });
}
