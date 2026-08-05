"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { Role } from "@/lib/store/auth-store";

export type NotificationType = "ANNOUNCEMENT" | "FEE_DUE" | "ASSIGNMENT" | "GENERAL";

export interface AppNotification {
  id: string;
  schoolId: string;
  userId: string;
  announcementId: string | null;
  type: NotificationType;
  title: string;
  body: string;
  link: string | null;
  isRead: boolean;
  createdAt: string;
}

export interface Announcement {
  id: string;
  schoolId: string;
  branchId: string | null;
  title: string;
  body: string;
  targetRoles: Role[];
  createdBy: { id: string; firstName: string; lastName: string };
  createdAt: string;
}

export function useNotifications(unreadOnly?: boolean) {
  return useQuery({
    queryKey: ["notifications", { unreadOnly }],
    queryFn: () => apiFetch<AppNotification[]>(`/notifications${unreadOnly ? "?unreadOnly=true" : ""}`)
  });
}

export function useUnreadCount() {
  return useQuery({
    queryKey: ["notifications", "unread-count"],
    queryFn: () => apiFetch<number>("/notifications/unread-count"),
    refetchInterval: 60_000
  });
}

export function useMarkNotificationRead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch<AppNotification>(`/notifications/${id}/read`, { method: "PATCH" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["notifications"] })
  });
}

export function useMarkAllNotificationsRead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => apiFetch("/notifications/read-all", { method: "PATCH" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["notifications"] })
  });
}

export function useAnnouncements(branchId?: string) {
  return useQuery({
    queryKey: ["announcements", { branchId }],
    queryFn: () => apiFetch<Announcement[]>(`/announcements${branchId ? `?branchId=${branchId}` : ""}`)
  });
}

export function useCreateAnnouncement() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { branchId?: string; title: string; body: string; targetRoles: Role[] }) =>
      apiFetch<Announcement>("/announcements", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["announcements"] });
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    }
  });
}
