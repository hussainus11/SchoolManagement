"use client";

import { useMemo, useState } from "react";
import { XIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useClass, useClasses } from "@/hooks/use-classes";
import { usePeriods } from "@/hooks/use-periods";
import { useSections } from "@/hooks/use-sections";
import { useTeachers } from "@/hooks/use-teachers";
import {
  type DayOfWeek,
  type TimetableEntry,
  useRemoveTimetableEntry,
  useTimetableForSection
} from "@/hooks/use-timetable";
import { ApiError } from "@/lib/api/client";
import { AssignEntryDialog } from "./assign-entry-dialog";

const DAYS: DayOfWeek[] = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

export default function TimetablePage() {
  const [classId, setClassId] = useState("");
  const [sectionId, setSectionId] = useState("");

  const { data: classes } = useClasses({});
  const { data: cls } = useClass(classId || undefined);
  const { data: sections } = useSections(classId || undefined);
  const { data: periods, isPending: periodsPending } = usePeriods(cls?.branchId);
  const { data: teachers } = useTeachers({ branchId: cls?.branchId });
  const { data: entries, isPending: entriesPending } = useTimetableForSection(sectionId || undefined);
  const removeEntry = useRemoveTimetableEntry();

  const subjects = useMemo(() => (cls?.classSubjects ?? []).map((cs) => cs.subject), [cls]);

  const entryByCell = useMemo(() => {
    const map = new Map<string, TimetableEntry>();
    for (const entry of entries ?? []) {
      map.set(`${entry.periodId}:${entry.dayOfWeek}`, entry);
    }
    return map;
  }, [entries]);

  const isReady = !!sectionId && !periodsPending && !entriesPending;

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Timetable</h1>
        <p className="text-muted-foreground">Assign subjects and teachers to each period.</p>
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
        </CardContent>
      </Card>

      {sectionId && (
        <Card>
          <CardContent className="overflow-x-auto pt-6">
            {!isReady ? (
              <Skeleton className="h-64 w-full" />
            ) : !periods || periods.length === 0 ? (
              <p className="text-muted-foreground py-10 text-center text-sm">
                No periods defined for this branch yet. Set them up in Settings first.
              </p>
            ) : subjects.length === 0 ? (
              <p className="text-muted-foreground py-10 text-center text-sm">
                This class has no subjects in its curriculum yet.
              </p>
            ) : (
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="text-muted-foreground border-b p-2 text-left font-medium">Period</th>
                    {DAYS.map((day) => (
                      <th key={day} className="text-muted-foreground border-b p-2 text-left font-medium">
                        {day.slice(0, 3)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {periods.map((period) => (
                    <tr key={period.id}>
                      <td className="border-b p-2 align-top">
                        <div className="font-medium">{period.name}</div>
                        <div className="text-muted-foreground text-xs">
                          {period.startTime}&ndash;{period.endTime}
                        </div>
                      </td>
                      {DAYS.map((day) => {
                        const entry = entryByCell.get(`${period.id}:${day}`);
                        return (
                          <td key={day} className="border-b p-2 align-top">
                            <AssignEntryDialog
                              sectionId={sectionId}
                              periodId={period.id}
                              periodName={period.name}
                              dayOfWeek={day}
                              subjects={subjects}
                              teachers={teachers ?? []}
                              existing={entry}>
                              {entry ? (
                                <button
                                  type="button"
                                  className="hover:border-primary w-full rounded-md border border-dashed p-2 text-left">
                                  <div className="font-medium">{entry.subject.name}</div>
                                  <div className="text-muted-foreground text-xs">
                                    {entry.teacher.user.firstName} {entry.teacher.user.lastName}
                                  </div>
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  className="text-muted-foreground hover:border-primary hover:text-foreground flex h-14 w-full items-center justify-center rounded-md border border-dashed">
                                  +
                                </button>
                              )}
                            </AssignEntryDialog>
                            {entry && (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="mt-1 h-6 w-6"
                                onClick={() =>
                                  removeEntry.mutate(
                                    { id: entry.id, sectionId },
                                    {
                                      onError: (error) =>
                                        toast.error(
                                          error instanceof ApiError ? error.message : "Something went wrong"
                                        )
                                    }
                                  )
                                }
                                aria-label="Remove">
                                <XIcon className="size-3" />
                              </Button>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
