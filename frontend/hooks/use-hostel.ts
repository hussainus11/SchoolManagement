"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { Student } from "./use-students";

export interface HostelAllocation {
  id: string;
  schoolId: string;
  roomId: string;
  studentId: string;
  bedNumber: number | null;
  allocatedDate: string;
  vacatedDate: string | null;
  student: Student;
  room?: HostelRoom & { hostel: Hostel };
}

export interface HostelRoom {
  id: string;
  hostelId: string;
  roomNumber: string;
  capacity: number;
  allocations: HostelAllocation[];
}

export interface Hostel {
  id: string;
  schoolId: string;
  branchId: string;
  name: string;
  wardenName: string | null;
  rooms: HostelRoom[];
}

export function useHostels(branchId?: string) {
  return useQuery({
    queryKey: ["hostels", { branchId }],
    queryFn: () => apiFetch<Hostel[]>(`/hostels${branchId ? `?branchId=${branchId}` : ""}`)
  });
}

export function useHostel(id: string | undefined) {
  return useQuery({
    queryKey: ["hostels", id],
    queryFn: () => apiFetch<Hostel>(`/hostels/${id}`),
    enabled: !!id
  });
}

export function useCreateHostel() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { branchId: string; name: string; wardenName?: string }) =>
      apiFetch<Hostel>("/hostels", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hostels"] })
  });
}

export function useDeleteHostel() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/hostels/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hostels"] })
  });
}

export function useAddHostelRoom() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ hostelId, ...input }: { hostelId: string; roomNumber: string; capacity: number }) =>
      apiFetch<HostelRoom>(`/hostels/${hostelId}/rooms`, { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hostels"] })
  });
}

export function useRemoveHostelRoom() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ hostelId, roomId }: { hostelId: string; roomId: string }) =>
      apiFetch(`/hostels/${hostelId}/rooms/${roomId}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hostels"] })
  });
}

export function useHostelAllocations(filters: { roomId?: string; active?: boolean } = {}) {
  const params = new URLSearchParams();
  if (filters.roomId) params.set("roomId", filters.roomId);
  if (filters.active) params.set("active", "true");
  const qs = params.toString();

  return useQuery({
    queryKey: ["hostel-allocations", filters],
    queryFn: () => apiFetch<HostelAllocation[]>(`/hostel-allocations${qs ? `?${qs}` : ""}`)
  });
}

export function useAllocateHostel() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { studentId: string; roomId: string; bedNumber?: number }) =>
      apiFetch<HostelAllocation>("/hostel-allocations", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hostel-allocations"] });
      queryClient.invalidateQueries({ queryKey: ["hostels"] });
    }
  });
}

export function useVacateHostel() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch<HostelAllocation>(`/hostel-allocations/${id}/vacate`, { method: "PATCH" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hostel-allocations"] });
      queryClient.invalidateQueries({ queryKey: ["hostels"] });
    }
  });
}
