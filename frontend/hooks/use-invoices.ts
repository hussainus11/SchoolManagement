"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { FeeHead } from "./use-fees";
import type { Student } from "./use-students";

export type InvoiceStatus = "PENDING" | "PARTIALLY_PAID" | "PAID" | "OVERDUE" | "CANCELLED";
export type PaymentMethod = "CASH" | "BANK_TRANSFER" | "CARD" | "CHEQUE" | "ONLINE";

export interface InvoiceItem {
  id: string;
  feeHeadId: string;
  amount: string;
  discount: string;
  feeHead: FeeHead;
}

export interface Payment {
  id: string;
  invoiceId: string;
  amount: string;
  method: PaymentMethod;
  reference: string | null;
  paidAt: string;
}

export interface Invoice {
  id: string;
  schoolId: string;
  studentId: string;
  academicYearId: string;
  invoiceNumber: string;
  period: string;
  issueDate: string;
  dueDate: string;
  subtotal: string;
  discountTotal: string;
  total: string;
  amountPaid: string;
  status: InvoiceStatus;
  student: Student;
  items: InvoiceItem[];
  payments?: Payment[];
}

export function useInvoices(
  filters: { studentId?: string; status?: InvoiceStatus; academicYearId?: string; period?: string } = {}
) {
  const params = new URLSearchParams();
  if (filters.studentId) params.set("studentId", filters.studentId);
  if (filters.status) params.set("status", filters.status);
  if (filters.academicYearId) params.set("academicYearId", filters.academicYearId);
  if (filters.period) params.set("period", filters.period);
  const qs = params.toString();

  return useQuery({
    queryKey: ["invoices", filters],
    queryFn: () => apiFetch<Invoice[]>(`/fees/invoices${qs ? `?${qs}` : ""}`)
  });
}

export function useInvoice(id: string | undefined) {
  return useQuery({
    queryKey: ["invoices", id],
    queryFn: () => apiFetch<Invoice>(`/fees/invoices/${id}`),
    enabled: !!id
  });
}

export function useGenerateInvoiceForStudent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { studentId: string; academicYearId: string; period: string; dueDate: string }) =>
      apiFetch<Invoice>("/fees/invoices/generate", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["invoices"] })
  });
}

export function useGenerateMonthlyInvoices() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { academicYearId: string; branchId?: string; period: string; dueDate: string }) =>
      apiFetch<{ created: number; skipped: number; total: number }>("/fees/invoices/generate-month", {
        method: "POST",
        body: JSON.stringify(input)
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["invoices"] })
  });
}

export function useRecordPayment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      invoiceId,
      ...input
    }: {
      invoiceId: string;
      amount: number;
      method: PaymentMethod;
      reference?: string;
      paidAt?: string;
    }) =>
      apiFetch<Invoice>(`/fees/invoices/${invoiceId}/payments`, {
        method: "POST",
        body: JSON.stringify(input)
      }),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      queryClient.invalidateQueries({ queryKey: ["invoices", variables.invoiceId] });
    }
  });
}

export function useDeleteInvoice() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/fees/invoices/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["invoices"] })
  });
}
