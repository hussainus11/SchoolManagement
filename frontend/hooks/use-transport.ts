"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { Student } from "./use-students";

export interface Vehicle {
  id: string;
  schoolId: string;
  branchId: string;
  registrationNumber: string;
  capacity: number | null;
  driverName: string | null;
  driverPhone: string | null;
}

export interface RouteStop {
  id: string;
  routeId: string;
  name: string;
  order: number;
  fee: string;
}

export interface TransportRoute {
  id: string;
  schoolId: string;
  vehicleId: string;
  name: string;
  vehicle: Vehicle;
  stops: RouteStop[];
}

export interface StudentTransport {
  id: string;
  schoolId: string;
  studentId: string;
  routeId: string;
  stopId: string;
  student: Student;
  route: TransportRoute;
  stop: RouteStop;
}

export function useVehicles(branchId?: string) {
  return useQuery({
    queryKey: ["vehicles", { branchId }],
    queryFn: () => apiFetch<Vehicle[]>(`/transport/vehicles${branchId ? `?branchId=${branchId}` : ""}`)
  });
}

export function useCreateVehicle() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { branchId: string; registrationNumber: string; capacity?: number; driverName?: string; driverPhone?: string }) =>
      apiFetch<Vehicle>("/transport/vehicles", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["vehicles"] })
  });
}

export function useUpdateVehicle() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      ...input
    }: {
      id: string;
      branchId: string;
      registrationNumber: string;
      capacity?: number;
      driverName?: string;
      driverPhone?: string;
    }) => apiFetch<Vehicle>(`/transport/vehicles/${id}`, { method: "PATCH", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["vehicles"] })
  });
}

export function useDeleteVehicle() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/transport/vehicles/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["vehicles"] })
  });
}

export function useTransportRoutes() {
  return useQuery({
    queryKey: ["transport-routes"],
    queryFn: () => apiFetch<TransportRoute[]>("/transport/routes")
  });
}

export function useCreateTransportRoute() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { vehicleId: string; name: string }) =>
      apiFetch<TransportRoute>("/transport/routes", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["transport-routes"] })
  });
}

export function useUpdateTransportRoute() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...input }: { id: string; vehicleId?: string; name?: string }) =>
      apiFetch<TransportRoute>(`/transport/routes/${id}`, { method: "PATCH", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["transport-routes"] })
  });
}

export function useDeleteTransportRoute() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/transport/routes/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["transport-routes"] })
  });
}

export function useAddRouteStop() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ routeId, ...input }: { routeId: string; name: string; order?: number; fee: number }) =>
      apiFetch<RouteStop>(`/transport/routes/${routeId}/stops`, { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["transport-routes"] })
  });
}

export function useRemoveRouteStop() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ routeId, stopId }: { routeId: string; stopId: string }) =>
      apiFetch(`/transport/routes/${routeId}/stops/${stopId}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["transport-routes"] })
  });
}

export function useStudentTransports(routeId?: string) {
  return useQuery({
    queryKey: ["student-transports", { routeId }],
    queryFn: () => apiFetch<StudentTransport[]>(`/transport/assignments${routeId ? `?routeId=${routeId}` : ""}`)
  });
}

export function useAssignStudentTransport() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { studentId: string; routeId: string; stopId: string }) =>
      apiFetch<StudentTransport>("/transport/assignments", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["student-transports"] })
  });
}

export function useRemoveStudentTransport() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (studentId: string) => apiFetch(`/transport/assignments/${studentId}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["student-transports"] })
  });
}
