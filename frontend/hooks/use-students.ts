"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { Guardian } from "./use-guardians";
import type { SchoolClass } from "./use-classes";

export type AcademicStatus = "ACTIVE" | "GRADUATED" | "TRANSFERRED" | "WITHDRAWN";
export type Gender = "MALE" | "FEMALE" | "OTHER";

export interface StudentSection {
  id: string;
  name: string;
  class: Pick<SchoolClass, "id" | "name">;
}

export interface StudentGuardianLink {
  id: string;
  studentId: string;
  guardianId: string;
  relation: "FATHER" | "MOTHER" | "GUARDIAN" | "OTHER";
  isPrimary: boolean;
  guardian: Guardian;
}

export interface Student {
  id: string;
  userId: string | null;
  schoolId: string;
  branchId: string;
  sectionId: string | null;
  admissionNumber: string;
  firstName: string;
  lastName: string;
  photoUrl: string | null;
  gender: Gender | null;
  dateOfBirth: string | null;
  bloodGroup: string | null;
  address: string | null;
  admissionDate: string;
  academicStatus: AcademicStatus;
  isActive: boolean;
  section?: StudentSection | null;
  guardians?: StudentGuardianLink[];
}

export interface CreateStudentInput {
  branchId: string;
  sectionId?: string;
  admissionNumber: string;
  firstName: string;
  lastName: string;
  gender?: Gender;
  dateOfBirth?: string;
  bloodGroup?: string;
  address?: string;
  admissionDate?: string;
}

export function useStudents(filters: { branchId?: string; sectionId?: string; search?: string } = {}) {
  const params = new URLSearchParams();
  if (filters.branchId) params.set("branchId", filters.branchId);
  if (filters.sectionId) params.set("sectionId", filters.sectionId);
  if (filters.search) params.set("search", filters.search);
  const qs = params.toString();

  return useQuery({
    queryKey: ["students", filters],
    queryFn: () => apiFetch<Student[]>(`/students${qs ? `?${qs}` : ""}`)
  });
}

export function useStudent(id: string | undefined) {
  return useQuery({
    queryKey: ["students", id],
    queryFn: () => apiFetch<Student>(`/students/${id}`),
    enabled: !!id
  });
}

export function useCreateStudent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateStudentInput) =>
      apiFetch<Student>("/students", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["students"] })
  });
}

export function useUpdateStudent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      ...input
    }: {
      id: string;
      firstName?: string;
      lastName?: string;
      sectionId?: string | null;
      gender?: Gender;
      dateOfBirth?: string;
      bloodGroup?: string;
      address?: string;
      academicStatus?: AcademicStatus;
    }) => apiFetch<Student>(`/students/${id}`, { method: "PATCH", body: JSON.stringify(input) }),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      queryClient.invalidateQueries({ queryKey: ["students", variables.id] });
    }
  });
}

export function useDeleteStudent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/students/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["students"] })
  });
}

export function useLinkGuardian() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      studentId,
      guardianId,
      relation,
      isPrimary
    }: {
      studentId: string;
      guardianId: string;
      relation: "FATHER" | "MOTHER" | "GUARDIAN" | "OTHER";
      isPrimary?: boolean;
    }) =>
      apiFetch(`/students/${studentId}/guardians/${guardianId}`, {
        method: "POST",
        body: JSON.stringify({ relation, isPrimary })
      }),
    onSuccess: (_data, variables) =>
      queryClient.invalidateQueries({ queryKey: ["students", variables.studentId] })
  });
}

export function useUnlinkGuardian() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ studentId, guardianId }: { studentId: string; guardianId: string }) =>
      apiFetch(`/students/${studentId}/guardians/${guardianId}`, { method: "DELETE" }),
    onSuccess: (_data, variables) =>
      queryClient.invalidateQueries({ queryKey: ["students", variables.studentId] })
  });
}

export function useUploadStudentPhoto() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, file }: { id: string; file: File }) => {
      const formData = new FormData();
      formData.append("file", file);
      return apiFetch<Student>(`/students/${id}/photo`, { method: "POST", body: formData });
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      queryClient.invalidateQueries({ queryKey: ["students", variables.id] });
    }
  });
}

export function useRemoveStudentPhoto() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch<Student>(`/students/${id}/photo`, { method: "DELETE" }),
    onSuccess: (_data, id) => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      queryClient.invalidateQueries({ queryKey: ["students", id] });
    }
  });
}
