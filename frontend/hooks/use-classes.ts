"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { Subject } from "./use-subjects";

export interface SchoolClass {
  id: string;
  schoolId: string;
  branchId: string;
  academicYearId: string;
  name: string;
  order: number;
  sections?: { id: string; name: string; capacity: number | null }[];
  classSubjects?: { id: string; subjectId: string; subject: Subject }[];
}

export function useClasses(filters: { branchId?: string; academicYearId?: string } = {}) {
  const params = new URLSearchParams();
  if (filters.branchId) params.set("branchId", filters.branchId);
  if (filters.academicYearId) params.set("academicYearId", filters.academicYearId);
  const qs = params.toString();

  return useQuery({
    queryKey: ["classes", filters],
    queryFn: () => apiFetch<SchoolClass[]>(`/classes${qs ? `?${qs}` : ""}`)
  });
}

export function useClass(id: string | undefined) {
  return useQuery({
    queryKey: ["classes", id],
    queryFn: () => apiFetch<SchoolClass>(`/classes/${id}`),
    enabled: !!id
  });
}

export function useCreateClass() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { branchId: string; academicYearId: string; name: string; order?: number }) =>
      apiFetch<SchoolClass>("/classes", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["classes"] })
  });
}

export function useUpdateClass() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...input }: { id: string; name?: string; order?: number }) =>
      apiFetch<SchoolClass>(`/classes/${id}`, { method: "PATCH", body: JSON.stringify(input) }),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["classes"] });
      queryClient.invalidateQueries({ queryKey: ["classes", variables.id] });
    }
  });
}

export function useDeleteClass() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/classes/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["classes"] })
  });
}

export function useAddClassSubject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ classId, subjectId }: { classId: string; subjectId: string }) =>
      apiFetch(`/classes/${classId}/subjects`, { method: "POST", body: JSON.stringify({ subjectId }) }),
    onSuccess: (_data, variables) =>
      queryClient.invalidateQueries({ queryKey: ["classes", variables.classId] })
  });
}

export function useRemoveClassSubject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ classId, subjectId }: { classId: string; subjectId: string }) =>
      apiFetch(`/classes/${classId}/subjects/${subjectId}`, { method: "DELETE" }),
    onSuccess: (_data, variables) =>
      queryClient.invalidateQueries({ queryKey: ["classes", variables.classId] })
  });
}
