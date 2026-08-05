"use client";

import { useEffect } from "react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePortalStudents } from "@/hooks/use-portal";
import { usePortalStore } from "@/lib/store/portal-store";

export function useActivePortalStudent() {
  const { data: students, isPending } = usePortalStudents();
  const selectedStudentId = usePortalStore((s) => s.selectedStudentId);
  const setSelectedStudentId = usePortalStore((s) => s.setSelectedStudentId);

  useEffect(() => {
    if (students && students.length > 0 && !selectedStudentId) {
      setSelectedStudentId(students[0].id);
    }
  }, [students, selectedStudentId, setSelectedStudentId]);

  const activeStudentId = selectedStudentId && students?.some((s) => s.id === selectedStudentId)
    ? selectedStudentId
    : students?.[0]?.id;

  return { students: students ?? [], activeStudentId, isPending };
}

export function StudentSelector() {
  const { students, activeStudentId, isPending } = useActivePortalStudent();
  const setSelectedStudentId = usePortalStore((s) => s.setSelectedStudentId);

  if (isPending || students.length <= 1) return null;

  return (
    <Select value={activeStudentId} onValueChange={setSelectedStudentId}>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Select a child" />
      </SelectTrigger>
      <SelectContent>
        {students.map((s) => (
          <SelectItem key={s.id} value={s.id}>
            {s.firstName} {s.lastName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
