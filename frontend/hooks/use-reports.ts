"use client";

import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export interface AttendanceSummaryStudentRow {
  studentId: string;
  firstName: string;
  lastName: string;
  present: number;
  total: number;
  percentage: number;
}

export interface AttendanceSummarySectionRow {
  sectionId: string;
  className: string;
  sectionName: string;
  present: number;
  total: number;
  percentage: number;
}

export interface FeeCollectionRow {
  period: string;
  invoiced: number;
  collected: number;
  outstanding: number;
}

export interface ExamPerformanceRow {
  subjectId: string;
  subjectName: string;
  totalEntered: number;
  totalAbsent: number;
  passed: number;
  passRate: number;
  averagePercentage: number;
}

export function useAttendanceSummary(filters: {
  branchId?: string;
  sectionId?: string;
  startDate?: string;
  endDate?: string;
}) {
  const params = new URLSearchParams();
  if (filters.branchId) params.set("branchId", filters.branchId);
  if (filters.sectionId) params.set("sectionId", filters.sectionId);
  if (filters.startDate) params.set("startDate", filters.startDate);
  if (filters.endDate) params.set("endDate", filters.endDate);
  const qs = params.toString();

  return useQuery({
    queryKey: ["reports", "attendance-summary", filters],
    queryFn: () =>
      apiFetch<(AttendanceSummaryStudentRow | AttendanceSummarySectionRow)[]>(
        `/reports/attendance-summary${qs ? `?${qs}` : ""}`
      )
  });
}

export function useFeeCollectionSummary(branchId?: string) {
  return useQuery({
    queryKey: ["reports", "fee-collection", branchId],
    queryFn: () => apiFetch<FeeCollectionRow[]>(`/reports/fee-collection${branchId ? `?branchId=${branchId}` : ""}`)
  });
}

export function useExamPerformance(examId: string | undefined) {
  return useQuery({
    queryKey: ["reports", "exam-performance", examId],
    queryFn: () => apiFetch<ExamPerformanceRow[]>(`/reports/exam-performance?examId=${examId}`),
    enabled: !!examId
  });
}
