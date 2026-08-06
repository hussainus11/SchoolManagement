"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { BillingRecord } from "@/lib/billing-status";

export interface School {
  id: string;
  name: string;
  slug: string;
  email: string | null;
  phone: string | null;
  address: string | null;
  logoUrl: string | null;
  idCardBackgroundColor: string;
  idCardForegroundColor: string;
  idCardBackgroundImageUrl: string | null;
  isActive: boolean;
  nextBillingDate: string | null;
}

export interface MyBilling extends School {
  billingRecords: BillingRecord[];
}

export interface Branch {
  id: string;
  schoolId: string;
  name: string;
  code: string;
  address: string | null;
  phone: string | null;
  isActive: boolean;
}

export interface AcademicYear {
  id: string;
  schoolId: string;
  name: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
}

export function useSchool(enabled = true) {
  return useQuery({
    queryKey: ["school"],
    queryFn: () => apiFetch<School>("/schools/me"),
    enabled
  });
}

export function useMyBilling() {
  return useQuery({
    queryKey: ["school", "billing"],
    queryFn: () => apiFetch<MyBilling>("/schools/me/billing")
  });
}

export function useUpdateSchool() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (
      input: Partial<
        Pick<
          School,
          "name" | "email" | "phone" | "address" | "logoUrl" | "idCardBackgroundColor" | "idCardForegroundColor"
        >
      >
    ) => apiFetch<School>("/schools/me", { method: "PATCH", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["school"] })
  });
}

export function useUploadIdCardBackground() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (file: File) => {
      const formData = new FormData();
      formData.append("file", file);
      return apiFetch<School>("/schools/me/id-card-background", { method: "POST", body: formData });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["school"] })
  });
}

export function useRemoveIdCardBackground() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => apiFetch<School>("/schools/me/id-card-background", { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["school"] })
  });
}

export function useUploadSchoolLogo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (file: File) => {
      const formData = new FormData();
      formData.append("file", file);
      return apiFetch<School>("/schools/me/logo", { method: "POST", body: formData });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["school"] })
  });
}

export function useRemoveSchoolLogo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => apiFetch<School>("/schools/me/logo", { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["school"] })
  });
}

export function useBranches() {
  return useQuery({
    queryKey: ["branches"],
    queryFn: () => apiFetch<Branch[]>("/branches")
  });
}

export function useCreateBranch() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { name: string; code: string; address?: string; phone?: string }) =>
      apiFetch<Branch>("/branches", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["branches"] })
  });
}

export function useUpdateBranch() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...input }: { id: string } & Partial<Pick<Branch, "name" | "code" | "address" | "phone" | "isActive">>) =>
      apiFetch<Branch>(`/branches/${id}`, { method: "PATCH", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["branches"] })
  });
}

export function useAcademicYears() {
  return useQuery({
    queryKey: ["academic-years"],
    queryFn: () => apiFetch<AcademicYear[]>("/academic-years")
  });
}

export function useCreateAcademicYear() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { name: string; startDate: string; endDate: string; isCurrent?: boolean }) =>
      apiFetch<AcademicYear>("/academic-years", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["academic-years"] })
  });
}

export function useSetCurrentAcademicYear() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      apiFetch<AcademicYear>(`/academic-years/${id}/set-current`, { method: "PATCH" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["academic-years"] })
  });
}
