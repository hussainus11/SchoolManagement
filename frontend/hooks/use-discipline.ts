"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { Student } from "./use-students";

export type DisciplineSeverity = "MINOR" | "MODERATE" | "MAJOR";

export interface DisciplineIncident {
  id: string;
  schoolId: string;
  studentId: string;
  reportedById: string;
  incidentDate: string;
  category: string;
  severity: DisciplineSeverity;
  description: string;
  actionTaken: string | null;
  student: Student;
  reportedBy: { id: string; firstName: string; lastName: string };
}

export function useDisciplineIncidents(studentId?: string) {
  return useQuery({
    queryKey: ["discipline-incidents", { studentId }],
    queryFn: () => apiFetch<DisciplineIncident[]>(`/discipline-incidents${studentId ? `?studentId=${studentId}` : ""}`)
  });
}

export function useCreateDisciplineIncident() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: {
      studentId: string;
      incidentDate?: string;
      category: string;
      severity?: DisciplineSeverity;
      description: string;
      actionTaken?: string;
    }) => apiFetch<DisciplineIncident>("/discipline-incidents", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["discipline-incidents"] })
  });
}

export function useDeleteDisciplineIncident() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/discipline-incidents/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["discipline-incidents"] })
  });
}
