"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export interface ResourceCatalogItem {
  key: string;
  label: string;
  group: string;
}

export interface RolePermission {
  id: string;
  customRoleId: string;
  resource: string;
}

export interface CustomRole {
  id: string;
  schoolId: string;
  name: string;
  allowLogin: boolean;
  createdAt: string;
  updatedAt: string;
  permissions: RolePermission[];
  _count?: { teachers: number; staff: number };
}

export interface CreateCustomRoleInput {
  name: string;
  allowLogin?: boolean;
  permissions?: string[];
}

export interface UpdateCustomRoleInput {
  id: string;
  name?: string;
  allowLogin?: boolean;
  permissions?: string[];
}

export function useResourceCatalog() {
  return useQuery({
    queryKey: ["custom-roles", "catalog"],
    queryFn: () => apiFetch<ResourceCatalogItem[]>("/custom-roles/catalog"),
    staleTime: Infinity
  });
}

export function useCustomRoles() {
  return useQuery({
    queryKey: ["custom-roles"],
    queryFn: () => apiFetch<CustomRole[]>("/custom-roles")
  });
}

export function useCreateCustomRole() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateCustomRoleInput) =>
      apiFetch<CustomRole>("/custom-roles", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["custom-roles"] })
  });
}

export function useUpdateCustomRole() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...input }: UpdateCustomRoleInput) =>
      apiFetch<CustomRole>(`/custom-roles/${id}`, { method: "PATCH", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["custom-roles"] })
  });
}

export function useDeleteCustomRole() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/custom-roles/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["custom-roles"] })
  });
}
