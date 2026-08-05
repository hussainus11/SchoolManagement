"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type EventType = "HOLIDAY" | "EXAM" | "MEETING" | "ACTIVITY" | "OTHER";

export interface SchoolEvent {
  id: string;
  schoolId: string;
  branchId: string | null;
  title: string;
  description: string | null;
  location: string | null;
  type: EventType;
  startDate: string;
  endDate: string;
  isAllDay: boolean;
}

export interface EventInput {
  branchId?: string;
  title: string;
  description?: string;
  location?: string;
  type: EventType;
  startDate: string;
  endDate: string;
  isAllDay?: boolean;
}

export function useEvents(startDate: string | undefined, endDate: string | undefined) {
  return useQuery({
    queryKey: ["events", { startDate, endDate }],
    queryFn: () => apiFetch<SchoolEvent[]>(`/events?startDate=${startDate}&endDate=${endDate}`),
    enabled: !!startDate && !!endDate
  });
}

export function useCreateEvent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: EventInput) =>
      apiFetch<SchoolEvent>("/events", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["events"] })
  });
}

export function useUpdateEvent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...input }: EventInput & { id: string }) =>
      apiFetch<SchoolEvent>(`/events/${id}`, { method: "PATCH", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["events"] })
  });
}

export function useDeleteEvent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/events/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["events"] })
  });
}
