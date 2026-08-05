"use client";

import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import { useBranchFilterStore } from "@/lib/store/branch-filter-store";

export interface DashboardSummary {
  totalStudents: number;
  passingStudents: number;
  currentSuccessRate: number;
  previousSuccessRate: number;
  attendanceBreakdown: { present: number; absent: number; late: number };
  activityRate: number;
  attendanceRateBar: number;
  feeCollectionRateBar: number;
  inProgressCount: number;
  completedCount: number;
  topStudents: { id: string; name: string; percentage: number }[];
  feeCollectionByMonth: { period: string; collected: number }[];
  recentAssignments: {
    id: string;
    title: string;
    subject: string;
    className: string;
    submissionRate: number;
    gradingRate: number;
  }[];
}

export function useDashboardSummary() {
  const branchId = useBranchFilterStore((s) => s.selectedBranchId);

  return useQuery({
    queryKey: ["dashboard", "summary", branchId],
    queryFn: () =>
      apiFetch<DashboardSummary>(`/dashboard/summary${branchId ? `?branchId=${branchId}` : ""}`)
  });
}
