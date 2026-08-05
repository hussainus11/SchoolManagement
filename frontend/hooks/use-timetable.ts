"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { Period } from "./use-periods";
import type { Subject } from "./use-subjects";
import type { Teacher } from "./use-teachers";

export type DayOfWeek =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

export interface TimetableEntry {
  id: string;
  sectionId: string;
  periodId: string;
  dayOfWeek: DayOfWeek;
  subjectId: string;
  teacherId: string;
  period: Period;
  subject: Subject;
  teacher: Teacher;
}

export function useTimetableForSection(sectionId: string | undefined) {
  return useQuery({
    queryKey: ["timetable", { sectionId }],
    queryFn: () => apiFetch<TimetableEntry[]>(`/timetable?sectionId=${sectionId}`),
    enabled: !!sectionId
  });
}

export function useAssignTimetableEntry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: {
      sectionId: string;
      periodId: string;
      dayOfWeek: DayOfWeek;
      subjectId: string;
      teacherId: string;
    }) => apiFetch<TimetableEntry>("/timetable", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: (_data, variables) =>
      queryClient.invalidateQueries({ queryKey: ["timetable", { sectionId: variables.sectionId }] })
  });
}

export function useRemoveTimetableEntry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id }: { id: string; sectionId: string }) =>
      apiFetch(`/timetable/${id}`, { method: "DELETE" }),
    onSuccess: (_data, variables) =>
      queryClient.invalidateQueries({ queryKey: ["timetable", { sectionId: variables.sectionId }] })
  });
}
