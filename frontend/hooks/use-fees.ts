"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type FeeFrequency = "MONTHLY" | "QUARTERLY" | "ANNUAL" | "ONE_TIME";
export type DiscountType = "PERCENTAGE" | "FIXED";

export interface FeeHead {
  id: string;
  schoolId: string;
  name: string;
}

export interface FeeStructure {
  id: string;
  schoolId: string;
  classId: string;
  feeHeadId: string;
  academicYearId: string;
  amount: string;
  frequency: FeeFrequency;
  feeHead: FeeHead;
  class: { id: string; name: string };
}

export interface StudentDiscount {
  id: string;
  schoolId: string;
  studentId: string;
  feeHeadId: string | null;
  type: DiscountType;
  value: string;
  reason: string | null;
  isActive: boolean;
  feeHead: FeeHead | null;
}

export function useFeeHeads() {
  return useQuery({
    queryKey: ["fee-heads"],
    queryFn: () => apiFetch<FeeHead[]>("/fees/heads")
  });
}

export function useCreateFeeHead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { name: string }) =>
      apiFetch<FeeHead>("/fees/heads", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["fee-heads"] })
  });
}

export function useDeleteFeeHead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/fees/heads/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["fee-heads"] })
  });
}

export function useFeeStructures(filters: { classId?: string; academicYearId?: string } = {}) {
  const params = new URLSearchParams();
  if (filters.classId) params.set("classId", filters.classId);
  if (filters.academicYearId) params.set("academicYearId", filters.academicYearId);
  const qs = params.toString();

  return useQuery({
    queryKey: ["fee-structures", filters],
    queryFn: () => apiFetch<FeeStructure[]>(`/fees/structures${qs ? `?${qs}` : ""}`)
  });
}

export function useCreateFeeStructure() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: {
      classId: string;
      feeHeadId: string;
      academicYearId: string;
      amount: number;
      frequency: FeeFrequency;
    }) => apiFetch<FeeStructure>("/fees/structures", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["fee-structures"] })
  });
}

export function useDeleteFeeStructure() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/fees/structures/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["fee-structures"] })
  });
}

export function useStudentDiscounts(studentId: string | undefined) {
  return useQuery({
    queryKey: ["discounts", { studentId }],
    queryFn: () => apiFetch<StudentDiscount[]>(`/fees/discounts?studentId=${studentId}`),
    enabled: !!studentId
  });
}

export function useCreateDiscount() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: {
      studentId: string;
      feeHeadId?: string;
      type: DiscountType;
      value: number;
      reason?: string;
    }) => apiFetch<StudentDiscount>("/fees/discounts", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: (_data, variables) =>
      queryClient.invalidateQueries({ queryKey: ["discounts", { studentId: variables.studentId }] })
  });
}

export function useDeactivateDiscount() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/fees/discounts/${id}/deactivate`, { method: "PATCH" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["discounts"] })
  });
}
