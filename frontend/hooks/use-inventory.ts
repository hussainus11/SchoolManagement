"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { Teacher } from "./use-teachers";

export type AssetStatus = "IN_USE" | "IN_STORAGE" | "UNDER_REPAIR" | "DISPOSED";

export interface AssetCategory {
  id: string;
  schoolId: string;
  name: string;
}

export interface Asset {
  id: string;
  schoolId: string;
  branchId: string;
  categoryId: string;
  name: string;
  serialNumber: string | null;
  purchaseDate: string | null;
  purchaseCost: string | null;
  status: AssetStatus;
  assignedToTeacherId: string | null;
  location: string | null;
  notes: string | null;
  category: AssetCategory;
  assignedToTeacher: Teacher | null;
}

export function useAssetCategories() {
  return useQuery({
    queryKey: ["asset-categories"],
    queryFn: () => apiFetch<AssetCategory[]>("/inventory/categories")
  });
}

export function useCreateAssetCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { name: string }) =>
      apiFetch<AssetCategory>("/inventory/categories", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["asset-categories"] })
  });
}

export function useDeleteAssetCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/inventory/categories/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["asset-categories"] })
  });
}

export interface CreateAssetInput {
  branchId: string;
  categoryId: string;
  name: string;
  serialNumber?: string;
  purchaseDate?: string;
  purchaseCost?: number;
  status?: AssetStatus;
  assignedToTeacherId?: string;
  location?: string;
  notes?: string;
}

export function useAssets(filters: { branchId?: string; categoryId?: string; status?: AssetStatus } = {}) {
  const params = new URLSearchParams();
  if (filters.branchId) params.set("branchId", filters.branchId);
  if (filters.categoryId) params.set("categoryId", filters.categoryId);
  if (filters.status) params.set("status", filters.status);
  const qs = params.toString();

  return useQuery({
    queryKey: ["assets", filters],
    queryFn: () => apiFetch<Asset[]>(`/inventory/assets${qs ? `?${qs}` : ""}`)
  });
}

export function useCreateAsset() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateAssetInput) =>
      apiFetch<Asset>("/inventory/assets", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["assets"] })
  });
}

export function useUpdateAsset() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...input }: CreateAssetInput & { id: string }) =>
      apiFetch<Asset>(`/inventory/assets/${id}`, { method: "PATCH", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["assets"] })
  });
}

export function useDeleteAsset() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/inventory/assets/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["assets"] })
  });
}
