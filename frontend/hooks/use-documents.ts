"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type DocumentOwnerType = "TEACHER" | "STUDENT" | "STAFF";

export interface ProfileDocument {
  id: string;
  schoolId: string;
  ownerType: DocumentOwnerType;
  ownerId: string;
  title: string;
  fileUrl: string;
  fileName: string;
  mimeType: string;
  fileSize: number;
  uploadedById: string;
  createdAt: string;
  uploadedBy: { id: string; firstName: string; lastName: string };
}

export function useDocuments(ownerType: DocumentOwnerType, ownerId: string | undefined) {
  return useQuery({
    queryKey: ["documents", { ownerType, ownerId }],
    queryFn: () => apiFetch<ProfileDocument[]>(`/documents?ownerType=${ownerType}&ownerId=${ownerId}`),
    enabled: !!ownerId
  });
}

export function useUploadDocument() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      ownerType,
      ownerId,
      title,
      file
    }: {
      ownerType: DocumentOwnerType;
      ownerId: string;
      title: string;
      file: File;
    }) => {
      const formData = new FormData();
      formData.append("ownerType", ownerType);
      formData.append("ownerId", ownerId);
      formData.append("title", title);
      formData.append("file", file);
      return apiFetch<ProfileDocument>("/documents", { method: "POST", body: formData });
    },
    onSuccess: (_data, variables) =>
      queryClient.invalidateQueries({
        queryKey: ["documents", { ownerType: variables.ownerType, ownerId: variables.ownerId }]
      })
  });
}

export function useDeleteDocument() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/documents/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["documents"] })
  });
}
