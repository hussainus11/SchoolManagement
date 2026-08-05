"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { LeaveType } from "./use-leave";

export interface LeaveGroupAllocation {
  id: string;
  leaveGroupId: string;
  leaveTypeId: string;
  daysPerYear: number;
  leaveType: LeaveType;
}

export interface LeaveGroup {
  id: string;
  schoolId: string;
  name: string;
  allocations: LeaveGroupAllocation[];
  _count?: { teachers: number; staff: number };
}

export interface LeaveGroupAllocationInput {
  leaveTypeId: string;
  daysPerYear: number;
}

export interface LeaveBalanceEntry {
  leaveTypeId: string;
  leaveTypeName: string;
  daysPerYear: number;
  used: number;
  remaining: number;
}

export interface LeaveBalance {
  leaveGroup: { id: string; name: string } | null;
  balances: LeaveBalanceEntry[];
}

export function useLeaveGroups() {
  return useQuery({
    queryKey: ["leave-groups"],
    queryFn: () => apiFetch<LeaveGroup[]>("/leave-groups")
  });
}

export function useCreateLeaveGroup() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { name: string; allocations?: LeaveGroupAllocationInput[] }) =>
      apiFetch<LeaveGroup>("/leave-groups", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["leave-groups"] })
  });
}

export function useUpdateLeaveGroup() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...input }: { id: string; name?: string; allocations?: LeaveGroupAllocationInput[] }) =>
      apiFetch<LeaveGroup>(`/leave-groups/${id}`, { method: "PATCH", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["leave-groups"] })
  });
}

export function useDeleteLeaveGroup() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/leave-groups/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["leave-groups"] })
  });
}

export function useLeaveBalance(params: { teacherId?: string; staffId?: string }) {
  const query = new URLSearchParams();
  if (params.teacherId) query.set("teacherId", params.teacherId);
  if (params.staffId) query.set("staffId", params.staffId);

  return useQuery({
    queryKey: ["leave-balance", params],
    queryFn: () => apiFetch<LeaveBalance>(`/leave-requests/balance?${query.toString()}`),
    enabled: !!(params.teacherId || params.staffId)
  });
}
