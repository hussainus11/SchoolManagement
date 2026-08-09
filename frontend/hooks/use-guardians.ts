"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { Invoice } from "./use-invoices";
import type { Student } from "./use-students";

export interface Guardian {
  id: string;
  schoolId: string;
  firstName: string;
  lastName: string;
  email: string | null;
  phone: string | null;
  _count?: { students: number };
}

export interface GuardianDiscount {
  id: string;
  schoolId: string;
  guardianId: string;
  feeHeadId: string | null;
  type: "PERCENTAGE" | "FIXED";
  value: string;
  reason: string | null;
  isActive: boolean;
  feeHead: { id: string; name: string } | null;
}

export interface GuardianLedgerChild {
  studentId: string;
  relation: "FATHER" | "MOTHER" | "GUARDIAN" | "OTHER";
  isPrimary: boolean;
  student: Student;
}

export interface GuardianLedger {
  guardian: Guardian;
  children: GuardianLedgerChild[];
  discounts: GuardianDiscount[];
  invoices: Invoice[];
  totals: { billed: number; paid: number; discount: number; due: number };
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

export function useGuardianLedger(id: string | undefined) {
  return useQuery({
    queryKey: ["guardians", id, "ledger"],
    queryFn: () => apiFetch<GuardianLedger>(`/guardians/${id}/ledger`),
    enabled: !!id
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

export function useGuardianDiscounts(guardianId: string | undefined) {
  return useQuery({
    queryKey: ["guardian-discounts", { guardianId }],
    queryFn: () => apiFetch<GuardianDiscount[]>(`/fees/guardian-discounts?guardianId=${guardianId}`),
    enabled: !!guardianId
  });
}

export function useCreateGuardianDiscount() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: {
      guardianId: string;
      feeHeadId?: string;
      type: "PERCENTAGE" | "FIXED";
      value: number;
      reason?: string;
    }) => apiFetch<GuardianDiscount>("/fees/guardian-discounts", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["guardian-discounts", { guardianId: variables.guardianId }] });
      queryClient.invalidateQueries({ queryKey: ["guardians", variables.guardianId, "ledger"] });
    }
  });
}

export function useDeactivateGuardianDiscount() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/fees/guardian-discounts/${id}/deactivate`, { method: "PATCH" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["guardian-discounts"] });
      queryClient.invalidateQueries({ queryKey: ["guardians"] });
    }
  });
}
