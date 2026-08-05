"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { SchoolClass } from "./use-classes";
import type { Subject } from "./use-subjects";
import type { Student } from "./use-students";
import type { Teacher } from "./use-teachers";

export type SubmissionStatus = "PENDING" | "SUBMITTED" | "LATE" | "GRADED";

export interface Assignment {
  id: string;
  schoolId: string;
  sectionId: string;
  subjectId: string;
  teacherId: string;
  title: string;
  description: string | null;
  assignedDate: string;
  dueDate: string;
  subject: Subject;
  teacher: Teacher;
  section: { id: string; name: string; class: Pick<SchoolClass, "id" | "name"> };
  submissions?: AssignmentSubmission[];
}

export interface AssignmentSubmission {
  id: string;
  schoolId: string;
  assignmentId: string;
  studentId: string;
  status: SubmissionStatus;
  submissionText: string | null;
  submittedAt: string | null;
  marksObtained: string | null;
  feedback: string | null;
  gradedById: string | null;
  gradedAt: string | null;
  student?: Student;
  assignment?: Pick<Assignment, "id" | "title" | "dueDate" | "subject" | "section">;
}

export function useAssignments(filters: { sectionId?: string; subjectId?: string; teacherId?: string } = {}) {
  const params = new URLSearchParams();
  if (filters.sectionId) params.set("sectionId", filters.sectionId);
  if (filters.subjectId) params.set("subjectId", filters.subjectId);
  if (filters.teacherId) params.set("teacherId", filters.teacherId);
  const qs = params.toString();

  return useQuery({
    queryKey: ["assignments", filters],
    queryFn: () => apiFetch<Assignment[]>(`/assignments${qs ? `?${qs}` : ""}`)
  });
}

export function useAssignment(id: string | undefined) {
  return useQuery({
    queryKey: ["assignments", id],
    queryFn: () => apiFetch<Assignment>(`/assignments/${id}`),
    enabled: !!id
  });
}

export function useCreateAssignment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: {
      sectionId: string;
      subjectId: string;
      teacherId: string;
      title: string;
      description?: string;
      dueDate: string;
    }) => apiFetch<Assignment>("/assignments", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["assignments"] })
  });
}

export function useDeleteAssignment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/assignments/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["assignments"] })
  });
}

export function useSubmissionsForAssignment(assignmentId: string | undefined) {
  return useQuery({
    queryKey: ["submissions", { assignmentId }],
    queryFn: () => apiFetch<AssignmentSubmission[]>(`/submissions?assignmentId=${assignmentId}`),
    enabled: !!assignmentId
  });
}

export function useSubmissionsForStudent(studentId: string | undefined) {
  return useQuery({
    queryKey: ["submissions", { studentId }],
    queryFn: () => apiFetch<AssignmentSubmission[]>(`/submissions?studentId=${studentId}`),
    enabled: !!studentId
  });
}

export function useRecordSubmission() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, submissionText }: { id: string; submissionText: string }) =>
      apiFetch<AssignmentSubmission>(`/submissions/${id}/record`, {
        method: "PATCH",
        body: JSON.stringify({ submissionText })
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["submissions"] })
  });
}

export function useGradeSubmission() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, marksObtained, feedback }: { id: string; marksObtained: number; feedback?: string }) =>
      apiFetch<AssignmentSubmission>(`/submissions/${id}/grade`, {
        method: "PATCH",
        body: JSON.stringify({ marksObtained, feedback })
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["submissions"] })
  });
}
