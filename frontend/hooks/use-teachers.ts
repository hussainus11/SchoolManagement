"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export interface TeacherUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string | null;
  isActive: boolean;
}

export interface Qualification {
  id: string;
  teacherId: string;
  degree: string;
  institution: string | null;
  yearCompleted: number | null;
}

export interface Teacher {
  id: string;
  userId: string;
  schoolId: string;
  branchId: string;
  customRoleId: string | null;
  leaveGroupId: string | null;
  employeeCode: string;
  photoUrl: string | null;
  gender: "MALE" | "FEMALE" | "OTHER" | null;
  dateOfBirth: string | null;
  joiningDate: string;
  address: string | null;
  emergencyPhone: string | null;
  isActive: boolean;
  user: TeacherUser;
  qualifications: Qualification[];
  customRole?: { id: string; name: string } | null;
  leaveGroup?: { id: string; name: string } | null;
}

export interface CreateTeacherInput {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  branchId: string;
  employeeCode: string;
  gender?: "MALE" | "FEMALE" | "OTHER";
  dateOfBirth?: string;
  joiningDate?: string;
  address?: string;
  emergencyPhone?: string;
  customRoleId: string;
  leaveGroupId?: string;
}

export function useTeachers(filters: { branchId?: string; search?: string } = {}) {
  const params = new URLSearchParams();
  if (filters.branchId) params.set("branchId", filters.branchId);
  if (filters.search) params.set("search", filters.search);
  const qs = params.toString();

  return useQuery({
    queryKey: ["teachers", filters],
    queryFn: () => apiFetch<Teacher[]>(`/teachers${qs ? `?${qs}` : ""}`)
  });
}

export function useTeacher(id: string | undefined) {
  return useQuery({
    queryKey: ["teachers", id],
    queryFn: () => apiFetch<Teacher>(`/teachers/${id}`),
    enabled: !!id
  });
}

export function useCreateTeacher() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateTeacherInput) =>
      apiFetch<{ teacher: Teacher; tempPassword: string }>("/teachers", {
        method: "POST",
        body: JSON.stringify(input)
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["teachers"] })
  });
}

export function useUpdateTeacher() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      ...input
    }: { id: string } & Partial<
      Pick<
        Teacher,
        "gender" | "dateOfBirth" | "address" | "emergencyPhone"
      >
    > & { firstName?: string; lastName?: string; phone?: string }) =>
      apiFetch<Teacher>(`/teachers/${id}`, { method: "PATCH", body: JSON.stringify(input) }),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
      queryClient.invalidateQueries({ queryKey: ["teachers", variables.id] });
    }
  });
}

export function useDeleteTeacher() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/teachers/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["teachers"] })
  });
}

export function useAddQualification() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      teacherId,
      ...input
    }: {
      teacherId: string;
      degree: string;
      institution?: string;
      yearCompleted?: number;
    }) =>
      apiFetch<Qualification>(`/teachers/${teacherId}/qualifications`, {
        method: "POST",
        body: JSON.stringify(input)
      }),
    onSuccess: (_data, variables) =>
      queryClient.invalidateQueries({ queryKey: ["teachers", variables.teacherId] })
  });
}

export function useRemoveQualification() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ teacherId, qualificationId }: { teacherId: string; qualificationId: string }) =>
      apiFetch(`/teachers/${teacherId}/qualifications/${qualificationId}`, { method: "DELETE" }),
    onSuccess: (_data, variables) =>
      queryClient.invalidateQueries({ queryKey: ["teachers", variables.teacherId] })
  });
}

export function useUploadTeacherPhoto() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, file }: { id: string; file: File }) => {
      const formData = new FormData();
      formData.append("file", file);
      return apiFetch<Teacher>(`/teachers/${id}/photo`, { method: "POST", body: formData });
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
      queryClient.invalidateQueries({ queryKey: ["teachers", variables.id] });
    }
  });
}

export function useRemoveTeacherPhoto() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch<Teacher>(`/teachers/${id}/photo`, { method: "DELETE" }),
    onSuccess: (_data, id) => {
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
      queryClient.invalidateQueries({ queryKey: ["teachers", id] });
    }
  });
}

export function useResetTeacherPassword() {
  return useMutation({
    mutationFn: (id: string) => apiFetch<{ tempPassword: string }>(`/teachers/${id}/reset-password`, { method: "POST" })
  });
}
