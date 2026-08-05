"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { Student } from "./use-students";
import type { Teacher } from "./use-teachers";

export type AttendanceStatus = "PRESENT" | "ABSENT" | "LATE" | "EXCUSED" | "HALF_DAY";

export interface StudentAttendanceRecord {
  id: string;
  studentId: string;
  sectionId: string;
  date: string;
  status: AttendanceStatus;
  remarks: string | null;
  student: Student;
}

export interface TeacherAttendanceRecord {
  id: string;
  teacherId: string;
  date: string;
  status: AttendanceStatus;
  remarks: string | null;
  teacher: Teacher;
}

interface AttendanceEntry {
  status: AttendanceStatus;
  remarks?: string;
}

export function useStudentAttendance(sectionId: string | undefined, date: string | undefined) {
  return useQuery({
    queryKey: ["attendance", "students", { sectionId, date }],
    queryFn: () =>
      apiFetch<StudentAttendanceRecord[]>(`/attendance/students?sectionId=${sectionId}&date=${date}`),
    enabled: !!sectionId && !!date
  });
}

export function useBulkMarkStudentAttendance() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { sectionId: string; date: string; entries: (AttendanceEntry & { studentId: string })[] }) =>
      apiFetch<StudentAttendanceRecord[]>("/attendance/students/bulk-mark", {
        method: "POST",
        body: JSON.stringify(input)
      }),
    onSuccess: (_data, variables) =>
      queryClient.invalidateQueries({
        queryKey: ["attendance", "students", { sectionId: variables.sectionId, date: variables.date }]
      })
  });
}

export function useTeacherAttendance(branchId: string | undefined, date: string | undefined) {
  return useQuery({
    queryKey: ["attendance", "teachers", { branchId, date }],
    queryFn: () =>
      apiFetch<TeacherAttendanceRecord[]>(`/attendance/teachers?branchId=${branchId}&date=${date}`),
    enabled: !!branchId && !!date
  });
}

export function useBulkMarkTeacherAttendance() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { branchId: string; date: string; entries: (AttendanceEntry & { teacherId: string })[] }) =>
      apiFetch<TeacherAttendanceRecord[]>("/attendance/teachers/bulk-mark", {
        method: "POST",
        body: JSON.stringify(input)
      }),
    onSuccess: (_data, variables) =>
      queryClient.invalidateQueries({
        queryKey: ["attendance", "teachers", { branchId: variables.branchId, date: variables.date }]
      })
  });
}
