"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { Gender, Student } from "./use-students";

export type AdmissionStatus =
  | "INQUIRY"
  | "APPLIED"
  | "TEST_SCHEDULED"
  | "TEST_COMPLETED"
  | "OFFERED"
  | "ENROLLED"
  | "REJECTED"
  | "WITHDRAWN";

export interface Admission {
  id: string;
  schoolId: string;
  branchId: string;
  applicantFirstName: string;
  applicantLastName: string;
  dateOfBirth: string | null;
  gender: Gender | null;
  gradeAppliedFor: string;
  guardianName: string;
  guardianPhone: string;
  guardianEmail: string | null;
  source: string | null;
  status: AdmissionStatus;
  testScore: string | null;
  testDate: string | null;
  offeredSectionId: string | null;
  offeredSection?: { id: string; name: string; class: { id: string; name: string } } | null;
  notes: string | null;
  convertedStudentId: string | null;
  convertedStudent?: Student | null;
  createdAt: string;
}

export function useAdmissions(filters: { branchId?: string; status?: AdmissionStatus } = {}) {
  const params = new URLSearchParams();
  if (filters.branchId) params.set("branchId", filters.branchId);
  if (filters.status) params.set("status", filters.status);
  const qs = params.toString();

  return useQuery({
    queryKey: ["admissions", filters],
    queryFn: () => apiFetch<Admission[]>(`/admissions${qs ? `?${qs}` : ""}`)
  });
}

export function useCreateAdmission() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: {
      branchId: string;
      applicantFirstName: string;
      applicantLastName: string;
      dateOfBirth?: string;
      gender?: Gender;
      gradeAppliedFor: string;
      guardianName: string;
      guardianPhone: string;
      guardianEmail?: string;
      source?: string;
    }) => apiFetch<Admission>("/admissions", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admissions"] })
  });
}

export function useUpdateAdmissionStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      ...input
    }: {
      id: string;
      status: AdmissionStatus;
      testScore?: number;
      testDate?: string;
      offeredSectionId?: string;
      notes?: string;
    }) => apiFetch<Admission>(`/admissions/${id}/status`, { method: "PATCH", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admissions"] })
  });
}

export function useEnrollAdmission() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      ...input
    }: {
      id: string;
      sectionId: string;
      admissionNumber: string;
      admissionDate?: string;
    }) => apiFetch<Admission>(`/admissions/${id}/enroll`, { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admissions"] });
      queryClient.invalidateQueries({ queryKey: ["students"] });
    }
  });
}

export function useDeleteAdmission() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/admissions/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admissions"] })
  });
}
