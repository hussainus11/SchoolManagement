"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type ExpenseStatus = "PENDING" | "APPROVED" | "REJECTED" | "PAID";

export interface ExpenseCategory {
  id: string;
  schoolId: string;
  name: string;
}

export interface Vendor {
  id: string;
  schoolId: string;
  name: string;
  phone: string | null;
  email: string | null;
  address: string | null;
}

export interface Expense {
  id: string;
  schoolId: string;
  branchId: string;
  categoryId: string;
  vendorId: string | null;
  description: string;
  amount: string;
  expenseDate: string;
  status: ExpenseStatus;
  category: ExpenseCategory;
  vendor: Vendor | null;
  requestedBy: { id: string; firstName: string; lastName: string };
  approvedBy: { id: string; firstName: string; lastName: string } | null;
}

export function useExpenseCategories() {
  return useQuery({
    queryKey: ["expense-categories"],
    queryFn: () => apiFetch<ExpenseCategory[]>("/expenses/categories")
  });
}

export function useCreateExpenseCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { name: string }) =>
      apiFetch<ExpenseCategory>("/expenses/categories", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["expense-categories"] })
  });
}

export function useVendors() {
  return useQuery({
    queryKey: ["vendors"],
    queryFn: () => apiFetch<Vendor[]>("/expenses/vendors")
  });
}

export function useCreateVendor() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { name: string; phone?: string; email?: string; address?: string }) =>
      apiFetch<Vendor>("/expenses/vendors", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["vendors"] })
  });
}

export function useExpenses(filters: { branchId?: string; status?: ExpenseStatus; categoryId?: string } = {}) {
  const params = new URLSearchParams();
  if (filters.branchId) params.set("branchId", filters.branchId);
  if (filters.status) params.set("status", filters.status);
  if (filters.categoryId) params.set("categoryId", filters.categoryId);
  const qs = params.toString();

  return useQuery({
    queryKey: ["expenses", filters],
    queryFn: () => apiFetch<Expense[]>(`/expenses${qs ? `?${qs}` : ""}`)
  });
}

export function useCreateExpense() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: {
      branchId: string;
      categoryId: string;
      vendorId?: string;
      description: string;
      amount: number;
      expenseDate: string;
    }) => apiFetch<Expense>("/expenses", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["expenses"] })
  });
}

export function useApproveExpense() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch<Expense>(`/expenses/${id}/approve`, { method: "PATCH" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["expenses"] })
  });
}

export function useRejectExpense() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch<Expense>(`/expenses/${id}/reject`, { method: "PATCH" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["expenses"] })
  });
}

export function useMarkExpensePaid() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch<Expense>(`/expenses/${id}/mark-paid`, { method: "PATCH" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["expenses"] })
  });
}
