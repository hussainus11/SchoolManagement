"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { Staff } from "./use-staff";
import type { Teacher } from "./use-teachers";

export type LeaveStatus = "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED";

export interface LeaveType {
  id: string;
  schoolId: string;
  name: string;
}

export interface LeaveRequest {
  id: string;
  schoolId: string;
  teacherId: string | null;
  staffId: string | null;
  leaveTypeId: string;
  startDate: string;
  endDate: string;
  isHalfDay: boolean;
  dayCount: number;
  reason: string | null;
  status: LeaveStatus;
  approvedById: string | null;
  approvedAt: string | null;
  teacher: Teacher | null;
  staff: Staff | null;
  leaveType: LeaveType;
  approvedBy: { id: string; firstName: string; lastName: string } | null;
}

export function useLeaveTypes() {
  return useQuery({
    queryKey: ["leave-types"],
    queryFn: () => apiFetch<LeaveType[]>("/leave-types")
  });
}

export function useCreateLeaveType() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { name: string }) =>
      apiFetch<LeaveType>("/leave-types", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["leave-types"] })
  });
}

export function useDeleteLeaveType() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/leave-types/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["leave-types"] })
  });
}

export function useLeaveRequests(filters: { teacherId?: string; staffId?: string; status?: LeaveStatus } = {}) {
  const params = new URLSearchParams();
  if (filters.teacherId) params.set("teacherId", filters.teacherId);
  if (filters.staffId) params.set("staffId", filters.staffId);
  if (filters.status) params.set("status", filters.status);
  const qs = params.toString();

  return useQuery({
    queryKey: ["leave-requests", filters],
    queryFn: () => apiFetch<LeaveRequest[]>(`/leave-requests${qs ? `?${qs}` : ""}`)
  });
}

export function useCreateLeaveRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: {
      teacherId?: string;
      staffId?: string;
      leaveTypeId: string;
      startDate: string;
      endDate: string;
      isHalfDay?: boolean;
      reason?: string;
    }) => apiFetch<LeaveRequest>("/leave-requests", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leave-requests"] });
      queryClient.invalidateQueries({ queryKey: ["leave-balance"] });
    }
  });
}

export function useApproveLeaveRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch<LeaveRequest>(`/leave-requests/${id}/approve`, { method: "PATCH" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leave-requests"] });
      queryClient.invalidateQueries({ queryKey: ["leave-balance"] });
    }
  });
}

export function useRejectLeaveRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch<LeaveRequest>(`/leave-requests/${id}/reject`, { method: "PATCH" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["leave-requests"] })
  });
}

export function useCancelLeaveRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch<LeaveRequest>(`/leave-requests/${id}/cancel`, { method: "PATCH" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leave-requests"] });
      queryClient.invalidateQueries({ queryKey: ["leave-balance"] });
    }
  });
}
