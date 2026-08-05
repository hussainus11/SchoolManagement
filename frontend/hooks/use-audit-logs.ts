"use client";

import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export interface AuditLog {
  id: string;
  schoolId: string | null;
  userId: string | null;
  action: string;
  entityType: string;
  entityId: string | null;
  before: unknown;
  after: unknown;
  createdAt: string;
  user: { id: string; firstName: string; lastName: string; email: string } | null;
}

export function useAuditLogs(filters: { entityType?: string; userId?: string; startDate?: string; endDate?: string } = {}) {
  const params = new URLSearchParams();
  if (filters.entityType) params.set("entityType", filters.entityType);
  if (filters.userId) params.set("userId", filters.userId);
  if (filters.startDate) params.set("startDate", filters.startDate);
  if (filters.endDate) params.set("endDate", filters.endDate);
  const qs = params.toString();

  return useQuery({
    queryKey: ["audit-logs", filters],
    queryFn: () => apiFetch<AuditLog[]>(`/audit-logs${qs ? `?${qs}` : ""}`)
  });
}
