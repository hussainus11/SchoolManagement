"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { AcademicYear } from "./use-school-settings";
import type { SchoolClass } from "./use-classes";
import type { Subject } from "./use-subjects";

export interface Room {
  id: string;
  schoolId: string;
  branchId: string;
  name: string;
  capacity: number | null;
}

export interface ExamType {
  id: string;
  schoolId: string;
  name: string;
}

export interface Exam {
  id: string;
  schoolId: string;
  academicYearId: string;
  examTypeId: string;
  name: string;
  startDate: string;
  endDate: string;
  examType: ExamType;
  academicYear: Pick<AcademicYear, "id" | "name">;
}

export interface ExamSchedule {
  id: string;
  schoolId: string;
  branchId: string;
  examId: string;
  classId: string;
  subjectId: string;
  roomId: string;
  examDate: string;
  startTime: string;
  endTime: string;
  maxMarks: string;
  passMarks: string;
  exam: Exam;
  class: Pick<SchoolClass, "id" | "name">;
  subject: Subject;
  room: Room;
}

export function useRooms(branchId?: string) {
  const qs = branchId ? `?branchId=${branchId}` : "";
  return useQuery({
    queryKey: ["rooms", { branchId }],
    queryFn: () => apiFetch<Room[]>(`/rooms${qs}`)
  });
}

export function useCreateRoom() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { branchId: string; name: string; capacity?: number }) =>
      apiFetch<Room>("/rooms", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["rooms"] })
  });
}

export function useDeleteRoom() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/rooms/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["rooms"] })
  });
}

export function useExamTypes() {
  return useQuery({
    queryKey: ["exam-types"],
    queryFn: () => apiFetch<ExamType[]>("/exam-types")
  });
}

export function useCreateExamType() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { name: string }) =>
      apiFetch<ExamType>("/exam-types", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["exam-types"] })
  });
}

export function useDeleteExamType() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/exam-types/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["exam-types"] })
  });
}

export function useExams(academicYearId?: string) {
  const qs = academicYearId ? `?academicYearId=${academicYearId}` : "";
  return useQuery({
    queryKey: ["exams", { academicYearId }],
    queryFn: () => apiFetch<Exam[]>(`/exams${qs}`)
  });
}

export function useExam(id: string | undefined) {
  return useQuery({
    queryKey: ["exams", id],
    queryFn: () => apiFetch<Exam>(`/exams/${id}`),
    enabled: !!id
  });
}

export function useCreateExam() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { academicYearId: string; examTypeId: string; name: string; startDate: string; endDate: string }) =>
      apiFetch<Exam>("/exams", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["exams"] })
  });
}

export function useDeleteExam() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/exams/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["exams"] })
  });
}

export function useExamSchedules(filters: { examId?: string; classId?: string; subjectId?: string } = {}) {
  const params = new URLSearchParams();
  if (filters.examId) params.set("examId", filters.examId);
  if (filters.classId) params.set("classId", filters.classId);
  if (filters.subjectId) params.set("subjectId", filters.subjectId);
  const qs = params.toString();

  return useQuery({
    queryKey: ["exam-schedules", filters],
    queryFn: () => apiFetch<ExamSchedule[]>(`/exam-schedules${qs ? `?${qs}` : ""}`),
    enabled: !!filters.examId
  });
}

export function useExamSchedule(id: string | undefined) {
  return useQuery({
    queryKey: ["exam-schedules", id],
    queryFn: () => apiFetch<ExamSchedule>(`/exam-schedules/${id}`),
    enabled: !!id
  });
}

export function useCreateExamSchedule() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: {
      branchId: string;
      examId: string;
      classId: string;
      subjectId: string;
      roomId: string;
      examDate: string;
      startTime: string;
      endTime: string;
      maxMarks: number;
      passMarks: number;
    }) => apiFetch<ExamSchedule>("/exam-schedules", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["exam-schedules"] })
  });
}

export function useDeleteExamSchedule() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/exam-schedules/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["exam-schedules"] })
  });
}
