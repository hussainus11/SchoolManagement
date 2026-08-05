"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { TeacherUser } from "./use-teachers";

export interface Staff {
  id: string;
  userId: string;
  schoolId: string;
  branchId: string;
  customRoleId: string | null;
  leaveGroupId: string | null;
  employeeCode: string;
  designation: string;
  photoUrl: string | null;
  gender: "MALE" | "FEMALE" | "OTHER" | null;
  dateOfBirth: string | null;
  joiningDate: string;
  address: string | null;
  emergencyPhone: string | null;
  isActive: boolean;
  user: TeacherUser;
  customRole?: { id: string; name: string } | null;
  leaveGroup?: { id: string; name: string } | null;
}

export interface CreateStaffInput {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  branchId: string;
  employeeCode: string;
  designation: string;
  gender?: "MALE" | "FEMALE" | "OTHER";
  dateOfBirth?: string;
  joiningDate?: string;
  address?: string;
  emergencyPhone?: string;
  customRoleId: string;
  leaveGroupId?: string;
}

export function useStaffList(filters: { branchId?: string; search?: string } = {}) {
  const params = new URLSearchParams();
  if (filters.branchId) params.set("branchId", filters.branchId);
  if (filters.search) params.set("search", filters.search);
  const qs = params.toString();

  return useQuery({
    queryKey: ["staff", filters],
    queryFn: () => apiFetch<Staff[]>(`/staff${qs ? `?${qs}` : ""}`)
  });
}

export function useStaffMember(id: string | undefined) {
  return useQuery({
    queryKey: ["staff", id],
    queryFn: () => apiFetch<Staff>(`/staff/${id}`),
    enabled: !!id
  });
}

export function useCreateStaff() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateStaffInput) =>
      apiFetch<{ staff: Staff; tempPassword: string }>("/staff", {
        method: "POST",
        body: JSON.stringify(input)
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["staff"] })
  });
}

export function useUpdateStaff() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      ...input
    }: { id: string } & Partial<
      Pick<Staff, "designation" | "gender" | "dateOfBirth" | "address" | "emergencyPhone">
    > & { firstName?: string; lastName?: string; phone?: string }) =>
      apiFetch<Staff>(`/staff/${id}`, { method: "PATCH", body: JSON.stringify(input) }),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["staff"] });
      queryClient.invalidateQueries({ queryKey: ["staff", variables.id] });
    }
  });
}

export function useDeleteStaff() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/staff/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["staff"] })
  });
}

export function useUploadStaffPhoto() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, file }: { id: string; file: File }) => {
      const formData = new FormData();
      formData.append("file", file);
      return apiFetch<Staff>(`/staff/${id}/photo`, { method: "POST", body: formData });
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["staff"] });
      queryClient.invalidateQueries({ queryKey: ["staff", variables.id] });
    }
  });
}

export function useRemoveStaffPhoto() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch<Staff>(`/staff/${id}/photo`, { method: "DELETE" }),
    onSuccess: (_data, id) => {
      queryClient.invalidateQueries({ queryKey: ["staff"] });
      queryClient.invalidateQueries({ queryKey: ["staff", id] });
    }
  });
}

export function useResetStaffPassword() {
  return useMutation({
    mutationFn: (id: string) => apiFetch<{ tempPassword: string }>(`/staff/${id}/reset-password`, { method: "POST" })
  });
}
