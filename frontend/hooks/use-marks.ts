"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { Student } from "./use-students";

export interface GradeScale {
  id: string;
  schoolId: string;
  grade: string;
  minPercentage: string;
  maxPercentage: string;
  remarks: string | null;
}

export interface Mark {
  id: string;
  schoolId: string;
  examScheduleId: string;
  studentId: string;
  marksObtained: string | null;
  isAbsent: boolean;
  remarks: string | null;
  student: Student;
}

export interface ReportCardSubject {
  subjectId: string;
  subjectName: string;
  maxMarks: number;
  passMarks: number;
  marksObtained: string | null;
  isAbsent: boolean;
  status: "PENDING" | "ABSENT" | "GRADED";
}

export interface ReportCard {
  student: { id: string; firstName: string; lastName: string };
  exam: { id: string; name: string; examType: string };
  subjects: ReportCardSubject[];
  totalMax: number;
  totalObtained: number;
  percentage: number;
  grade: string | null;
}

interface MarkEntryInput {
  studentId: string;
  marksObtained?: number;
  isAbsent?: boolean;
  remarks?: string;
}

export function useGradeScales() {
  return useQuery({
    queryKey: ["grade-scales"],
    queryFn: () => apiFetch<GradeScale[]>("/grade-scales")
  });
}

export function useCreateGradeScale() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { grade: string; minPercentage: number; maxPercentage: number; remarks?: string }) =>
      apiFetch<GradeScale>("/grade-scales", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["grade-scales"] })
  });
}

export function useDeleteGradeScale() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/grade-scales/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["grade-scales"] })
  });
}

export function useMarksForExamSchedule(examScheduleId: string | undefined) {
  return useQuery({
    queryKey: ["marks", { examScheduleId }],
    queryFn: () => apiFetch<Mark[]>(`/marks?examScheduleId=${examScheduleId}`),
    enabled: !!examScheduleId
  });
}

export function useBulkEnterMarks() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { examScheduleId: string; entries: MarkEntryInput[] }) =>
      apiFetch<Mark[]>("/marks/bulk-enter", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: (_data, variables) =>
      queryClient.invalidateQueries({ queryKey: ["marks", { examScheduleId: variables.examScheduleId }] })
  });
}

export function useReportCard(studentId: string | undefined, examId: string | undefined) {
  return useQuery({
    queryKey: ["report-card", { studentId, examId }],
    queryFn: () => apiFetch<ReportCard>(`/marks/report-card/${studentId}/${examId}`),
    enabled: !!studentId && !!examId
  });
}
