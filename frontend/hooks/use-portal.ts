"use client";

import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { Exam } from "./use-exams";
import type { Invoice } from "./use-invoices";
import type { ReportCard } from "./use-marks";
import type { Student } from "./use-students";
import type { StudentAttendanceRecord } from "./use-attendance";
import type { AssignmentSubmission } from "./use-homework";

export function usePortalStudents() {
  return useQuery({
    queryKey: ["portal", "students"],
    queryFn: () => apiFetch<Student[]>("/portal/students")
  });
}

export function usePortalAttendance(studentId: string | undefined) {
  return useQuery({
    queryKey: ["portal", "attendance", studentId],
    queryFn: () => apiFetch<StudentAttendanceRecord[]>(`/portal/students/${studentId}/attendance`),
    enabled: !!studentId
  });
}

export function usePortalInvoices(studentId: string | undefined) {
  return useQuery({
    queryKey: ["portal", "invoices", studentId],
    queryFn: () => apiFetch<Invoice[]>(`/portal/students/${studentId}/invoices`),
    enabled: !!studentId
  });
}

export function usePortalSubmissions(studentId: string | undefined) {
  return useQuery({
    queryKey: ["portal", "submissions", studentId],
    queryFn: () => apiFetch<AssignmentSubmission[]>(`/portal/students/${studentId}/submissions`),
    enabled: !!studentId
  });
}

export function usePortalExams(studentId: string | undefined) {
  return useQuery({
    queryKey: ["portal", "exams", studentId],
    queryFn: () => apiFetch<Exam[]>(`/portal/students/${studentId}/exams`),
    enabled: !!studentId
  });
}

export function usePortalReportCard(studentId: string | undefined, examId: string | undefined) {
  return useQuery({
    queryKey: ["portal", "report-card", studentId, examId],
    queryFn: () => apiFetch<ReportCard>(`/portal/students/${studentId}/report-card/${examId}`),
    enabled: !!studentId && !!examId
  });
}
