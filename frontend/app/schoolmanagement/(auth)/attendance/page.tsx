"use client";

import { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DatePicker } from "@/components/date-picker";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { type AttendanceStatus, useBulkMarkStudentAttendance, useStudentAttendance } from "@/hooks/use-attendance";
import { useClasses } from "@/hooks/use-classes";
import { useSections } from "@/hooks/use-sections";
import { useStudents } from "@/hooks/use-students";
import { ApiError } from "@/lib/api/client";

const STATUS_OPTIONS: AttendanceStatus[] = ["PRESENT", "ABSENT", "LATE", "EXCUSED", "HALF_DAY"];

interface EntryState {
  status: AttendanceStatus;
  remarks: string;
}

export default function AttendancePage() {
  const [classId, setClassId] = useState<string>("");
  const [sectionId, setSectionId] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [entries, setEntries] = useState<Record<string, EntryState>>({});

  const { data: classes } = useClasses({});
  const { data: sections } = useSections(classId || undefined);
  const dateStr = format(date, "yyyy-MM-dd");

  const { data: students, isPending: studentsPending } = useStudents({ sectionId: sectionId || undefined });
  const { data: existingAttendance, isPending: attendancePending } = useStudentAttendance(
    sectionId || undefined,
    sectionId ? dateStr : undefined
  );
  const bulkMark = useBulkMarkStudentAttendance();

  useEffect(() => {
    if (!students) return;
    const existingByStudent = new Map((existingAttendance ?? []).map((a) => [a.studentId, a]));
    const next: Record<string, EntryState> = {};
    for (const student of students) {
      const existing = existingByStudent.get(student.id);
      next[student.id] = {
        status: existing?.status ?? "PRESENT",
        remarks: existing?.remarks ?? ""
      };
    }
    setEntries(next);
  }, [students, existingAttendance]);

  const isReady = !!sectionId && !studentsPending && !attendancePending;

  function handleSave() {
    if (!students || students.length === 0) return;
    bulkMark.mutate(
      {
        sectionId,
        date: dateStr,
        entries: students.map((s) => ({
          studentId: s.id,
          status: entries[s.id]?.status ?? "PRESENT",
          remarks: entries[s.id]?.remarks || undefined
        }))
      },
      {
        onSuccess: () => toast.success("Attendance saved"),
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  const summary = useMemo(() => {
    const values = Object.values(entries);
    const present = values.filter((e) => e.status === "PRESENT").length;
    return { total: values.length, present };
  }, [entries]);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Attendance</h1>
        <p className="text-muted-foreground">Mark daily attendance for a class section.</p>
      </div>

      <Card>
        <CardContent className="flex flex-wrap items-end gap-4 pt-6">
          <div className="space-y-2">
            <p className="text-sm font-medium">Class</p>
            <Select
              value={classId}
              onValueChange={(value) => {
                setClassId(value);
                setSectionId("");
              }}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select a class" />
              </SelectTrigger>
              <SelectContent>
                {(classes ?? []).map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Section</p>
            <Select value={sectionId} onValueChange={setSectionId} disabled={!classId}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select a section" />
              </SelectTrigger>
              <SelectContent>
                {(sections ?? []).map((s) => (
                  <SelectItem key={s.id} value={s.id}>
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Date</p>
            <DatePicker value={date} onChange={(d) => d && setDate(d)} />
          </div>
          {isReady && (
            <div className="text-muted-foreground ml-auto text-sm">
              {summary.present} / {summary.total} present
            </div>
          )}
        </CardContent>
      </Card>

      {sectionId && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Roster</CardTitle>
            <Button onClick={handleSave} disabled={!isReady || bulkMark.isPending}>
              {bulkMark.isPending ? "Saving..." : "Save attendance"}
            </Button>
          </CardHeader>
          <CardContent>
            {!isReady ? (
              <div className="space-y-2">
                <Skeleton className="h-9 w-full" />
                <Skeleton className="h-9 w-full" />
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Admission #</TableHead>
                    <TableHead className="w-40">Status</TableHead>
                    <TableHead>Remarks</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students?.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">
                        {student.firstName} {student.lastName}
                      </TableCell>
                      <TableCell>{student.admissionNumber}</TableCell>
                      <TableCell>
                        <Select
                          value={entries[student.id]?.status ?? "PRESENT"}
                          onValueChange={(value) =>
                            setEntries((prev) => ({
                              ...prev,
                              [student.id]: {
                                ...prev[student.id],
                                status: value as AttendanceStatus,
                                remarks: prev[student.id]?.remarks ?? ""
                              }
                            }))
                          }>
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {STATUS_OPTIONS.map((status) => (
                              <SelectItem key={status} value={status}>
                                {status}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Input
                          value={entries[student.id]?.remarks ?? ""}
                          onChange={(e) =>
                            setEntries((prev) => ({
                              ...prev,
                              [student.id]: {
                                status: prev[student.id]?.status ?? "PRESENT",
                                remarks: e.target.value
                              }
                            }))
                          }
                          placeholder="Optional"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                  {students?.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-muted-foreground h-20 text-center">
                        No students in this section.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
