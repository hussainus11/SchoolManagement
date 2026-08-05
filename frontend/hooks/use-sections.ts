"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { Subject } from "./use-subjects";
import type { Teacher } from "./use-teachers";

export interface Section {
  id: string;
  classId: string;
  name: string;
  capacity: number | null;
  classTeacherId: string | null;
  classTeacher?: Teacher | null;
  subjectTeachers?: { id: string; subjectId: string; teacherId: string; subject: Subject; teacher: Teacher }[];
}

export function useSections(classId: string | undefined) {
  return useQuery({
    queryKey: ["sections", { classId }],
    queryFn: () => apiFetch<Section[]>(`/sections?classId=${classId}`),
    enabled: !!classId
  });
}

export function useSection(id: string | undefined) {
  return useQuery({
    queryKey: ["sections", id],
    queryFn: () => apiFetch<Section>(`/sections/${id}`),
    enabled: !!id
  });
}

export function useCreateSection() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { classId: string; name: string; capacity?: number }) =>
      apiFetch<Section>("/sections", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["sections", { classId: variables.classId }] });
      queryClient.invalidateQueries({ queryKey: ["classes", variables.classId] });
    }
  });
}

export function useDeleteSection() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/sections/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["sections"] })
  });
}

export function useAssignClassTeacher() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ sectionId, teacherId }: { sectionId: string; teacherId: string | null }) =>
      apiFetch<Section>(`/sections/${sectionId}/class-teacher`, {
        method: "PATCH",
        body: JSON.stringify({ teacherId })
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["sections"] })
  });
}

export function useAssignSubjectTeacher() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      sectionId,
      subjectId,
      teacherId
    }: {
      sectionId: string;
      subjectId: string;
      teacherId: string;
    }) =>
      apiFetch(`/sections/${sectionId}/subject-teachers`, {
        method: "POST",
        body: JSON.stringify({ subjectId, teacherId })
      }),
    onSuccess: (_data, variables) =>
      queryClient.invalidateQueries({ queryKey: ["sections", variables.sectionId] })
  });
}

export function useRemoveSubjectTeacher() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ sectionId, subjectId }: { sectionId: string; subjectId: string }) =>
      apiFetch(`/sections/${sectionId}/subject-teachers/${subjectId}`, { method: "DELETE" }),
    onSuccess: (_data, variables) =>
      queryClient.invalidateQueries({ queryKey: ["sections", variables.sectionId] })
  });
}
