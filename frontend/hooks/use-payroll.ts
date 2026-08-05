"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type PayslipStatus = "DRAFT" | "FINALIZED" | "PAID";

export interface SalaryStructure {
  id: string;
  schoolId: string;
  userId: string;
  basicSalary: string;
  allowances: string;
  fixedDeductions: string;
  effectiveFrom: string;
  isActive: boolean;
}

export interface Payslip {
  id: string;
  schoolId: string;
  userId: string;
  salaryStructureId: string;
  month: string;
  basicSalary: string;
  allowances: string;
  attendanceDeduction: string;
  otherDeductions: string;
  netSalary: string;
  status: PayslipStatus;
  paidAt: string | null;
  user: { id: string; firstName: string; lastName: string; email: string };
}

export function useSalaryStructures(userId: string | undefined) {
  return useQuery({
    queryKey: ["salary-structures", { userId }],
    queryFn: () => apiFetch<SalaryStructure[]>(`/payroll/salary-structures?userId=${userId}`),
    enabled: !!userId
  });
}

export function useCreateSalaryStructure() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: {
      userId: string;
      basicSalary: number;
      allowances?: number;
      fixedDeductions?: number;
      effectiveFrom: string;
    }) =>
      apiFetch<SalaryStructure>("/payroll/salary-structures", {
        method: "POST",
        body: JSON.stringify(input)
      }),
    onSuccess: (_data, variables) =>
      queryClient.invalidateQueries({ queryKey: ["salary-structures", { userId: variables.userId }] })
  });
}

export function usePayslips(filters: { userId?: string; month?: string } = {}) {
  const params = new URLSearchParams();
  if (filters.userId) params.set("userId", filters.userId);
  if (filters.month) params.set("month", filters.month);
  const qs = params.toString();

  return useQuery({
    queryKey: ["payslips", filters],
    queryFn: () => apiFetch<Payslip[]>(`/payroll/payslips${qs ? `?${qs}` : ""}`)
  });
}

export function usePayslip(id: string | undefined) {
  return useQuery({
    queryKey: ["payslips", id],
    queryFn: () => apiFetch<Payslip>(`/payroll/payslips/${id}`),
    enabled: !!id
  });
}

export function useGeneratePayslipForUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { userId: string; month: string }) =>
      apiFetch<Payslip>("/payroll/payslips/generate", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["payslips"] })
  });
}

export function useGenerateMonthlyPayslips() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { month: string }) =>
      apiFetch<{ created: number; skipped: number; total: number }>("/payroll/payslips/generate-month", {
        method: "POST",
        body: JSON.stringify(input)
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["payslips"] })
  });
}

export function useFinalizePayslip() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch<Payslip>(`/payroll/payslips/${id}/finalize`, { method: "PATCH" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["payslips"] })
  });
}

export function useMarkPayslipPaid() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch<Payslip>(`/payroll/payslips/${id}/mark-paid`, { method: "PATCH" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["payslips"] })
  });
}
