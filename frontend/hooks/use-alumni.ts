"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export interface Alumni {
  id: string;
  schoolId: string;
  studentId: string | null;
  firstName: string;
  lastName: string;
  graduationYear: number;
  currentOccupation: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  notes: string | null;
}

export interface CreateAlumniInput {
  studentId?: string;
  firstName: string;
  lastName: string;
  graduationYear: number;
  currentOccupation?: string;
  contactEmail?: string;
  contactPhone?: string;
  notes?: string;
}

export function useAlumni(search?: string) {
  return useQuery({
    queryKey: ["alumni", { search }],
    queryFn: () => apiFetch<Alumni[]>(`/alumni${search ? `?search=${search}` : ""}`)
  });
}

export function useCreateAlumni() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateAlumniInput) =>
      apiFetch<Alumni>("/alumni", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["alumni"] })
  });
}

export function useDeleteAlumni() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/alumni/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["alumni"] })
  });
}
