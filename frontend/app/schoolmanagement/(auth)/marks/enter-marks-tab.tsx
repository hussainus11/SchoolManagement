"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useExams, useExamSchedule, useExamSchedules } from "@/hooks/use-exams";
import { useSections } from "@/hooks/use-sections";
import { useStudents } from "@/hooks/use-students";
import { useBulkEnterMarks, useMarksForExamSchedule } from "@/hooks/use-marks";
import { ApiError } from "@/lib/api/client";

interface EntryState {
  marksObtained: string;
  isAbsent: boolean;
  remarks: string;
}

export function EnterMarksTab({ initialExamScheduleId }: { initialExamScheduleId?: string }) {
  const [examId, setExamId] = useState("");
  const [examScheduleId, setExamScheduleId] = useState(initialExamScheduleId ?? "");
  const [sectionId, setSectionId] = useState("");
  const [entries, setEntries] = useState<Record<string, EntryState>>({});

  const { data: exams } = useExams();
  const { data: preselected } = useExamSchedule(initialExamScheduleId);

  useEffect(() => {
    if (preselected && !examId) {
      setExamId(preselected.examId);
      setExamScheduleId(preselected.id);
    }
  }, [preselected, examId]);

  const { data: schedules } = useExamSchedules({ examId: examId || undefined });
  const schedule = useMemo(() => schedules?.find((s) => s.id === examScheduleId), [schedules, examScheduleId]);

  const { data: sections } = useSections(schedule?.classId);
  const { data: students, isPending: studentsPending } = useStudents({ sectionId: sectionId || undefined });
  const { data: existingMarks, isPending: marksPending } = useMarksForExamSchedule(examScheduleId || undefined);
  const bulkEnter = useBulkEnterMarks();

  useEffect(() => {
    if (!students) return;
    const byStudent = new Map((existingMarks ?? []).map((m) => [m.studentId, m]));
    const next: Record<string, EntryState> = {};
    for (const student of students) {
      const existing = byStudent.get(student.id);
      next[student.id] = {
        marksObtained: existing?.marksObtained ?? "",
        isAbsent: existing?.isAbsent ?? false,
        remarks: existing?.remarks ?? ""
      };
    }
    setEntries(next);
  }, [students, existingMarks]);

  const isReady = !!sectionId && !!examScheduleId && !studentsPending && !marksPending;

  function handleSave() {
    if (!students || students.length === 0 || !schedule) return;
    bulkEnter.mutate(
      {
        examScheduleId,
        entries: students.map((s) => ({
          studentId: s.id,
          isAbsent: entries[s.id]?.isAbsent ?? false,
          marksObtained:
            entries[s.id]?.isAbsent || !entries[s.id]?.marksObtained
              ? undefined
              : Number(entries[s.id].marksObtained),
          remarks: entries[s.id]?.remarks || undefined
        }))
      },
      {
        onSuccess: () => toast.success("Marks saved"),
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="flex flex-wrap items-end gap-4 pt-6">
          <div className="space-y-2">
            <p className="text-sm font-medium">Exam</p>
            <Select
              value={examId}
              onValueChange={(v) => {
                setExamId(v);
                setExamScheduleId("");
                setSectionId("");
              }}>
              <SelectTrigger className="w-56">
                <SelectValue placeholder="Select an exam" />
              </SelectTrigger>
              <SelectContent>
                {(exams ?? []).map((e) => (
                  <SelectItem key={e.id} value={e.id}>
                    {e.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Paper</p>
            <Select
              value={examScheduleId}
              onValueChange={(v) => {
                setExamScheduleId(v);
                setSectionId("");
              }}
              disabled={!examId}>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Select class & subject" />
              </SelectTrigger>
              <SelectContent>
                {(schedules ?? []).map((s) => (
                  <SelectItem key={s.id} value={s.id}>
                    {s.class.name} - {s.subject.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Section</p>
            <Select value={sectionId} onValueChange={setSectionId} disabled={!schedule}>
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
        </CardContent>
      </Card>

      {sectionId && schedule && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>
              Roster &middot; Max {Number(schedule.maxMarks).toFixed(0)} / Pass {Number(schedule.passMarks).toFixed(0)}
            </CardTitle>
            <Button onClick={handleSave} disabled={!isReady || bulkEnter.isPending}>
              {bulkEnter.isPending ? "Saving..." : "Save marks"}
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
                    <TableHead className="w-32">Marks</TableHead>
                    <TableHead className="w-24">Absent</TableHead>
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
                        <Input
                          type="number"
                          step="0.01"
                          min="0"
                          disabled={entries[student.id]?.isAbsent}
                          value={entries[student.id]?.marksObtained ?? ""}
                          onChange={(e) =>
                            setEntries((prev) => ({
                              ...prev,
                              [student.id]: {
                                isAbsent: prev[student.id]?.isAbsent ?? false,
                                remarks: prev[student.id]?.remarks ?? "",
                                marksObtained: e.target.value
                              }
                            }))
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <Checkbox
                          checked={entries[student.id]?.isAbsent ?? false}
                          onCheckedChange={(checked) =>
                            setEntries((prev) => ({
                              ...prev,
                              [student.id]: {
                                marksObtained: prev[student.id]?.marksObtained ?? "",
                                remarks: prev[student.id]?.remarks ?? "",
                                isAbsent: !!checked
                              }
                            }))
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          value={entries[student.id]?.remarks ?? ""}
                          onChange={(e) =>
                            setEntries((prev) => ({
                              ...prev,
                              [student.id]: {
                                marksObtained: prev[student.id]?.marksObtained ?? "",
                                isAbsent: prev[student.id]?.isAbsent ?? false,
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
                      <TableCell colSpan={5} className="text-muted-foreground h-20 text-center">
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
