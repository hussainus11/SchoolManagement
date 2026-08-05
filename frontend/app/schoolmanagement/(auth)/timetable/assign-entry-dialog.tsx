"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Subject } from "@/hooks/use-subjects";
import type { Teacher } from "@/hooks/use-teachers";
import { type DayOfWeek, type TimetableEntry, useAssignTimetableEntry } from "@/hooks/use-timetable";
import { ApiError } from "@/lib/api/client";

interface Props {
  sectionId: string;
  periodId: string;
  periodName: string;
  dayOfWeek: DayOfWeek;
  subjects: Subject[];
  teachers: Teacher[];
  existing?: TimetableEntry;
  children: React.ReactNode;
}

export function AssignEntryDialog({
  sectionId,
  periodId,
  periodName,
  dayOfWeek,
  subjects,
  teachers,
  existing,
  children
}: Props) {
  const [open, setOpen] = useState(false);
  const [subjectId, setSubjectId] = useState(existing?.subjectId ?? "");
  const [teacherId, setTeacherId] = useState(existing?.teacherId ?? "");
  const assign = useAssignTimetableEntry();

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (next) {
      setSubjectId(existing?.subjectId ?? "");
      setTeacherId(existing?.teacherId ?? "");
    }
  }

  function handleSave() {
    if (!subjectId || !teacherId) {
      toast.error("Select a subject and teacher");
      return;
    }
    assign.mutate(
      { sectionId, periodId, dayOfWeek, subjectId, teacherId },
      {
        onSuccess: () => {
          toast.success("Timetable updated");
          setOpen(false);
        },
        onError: (error) => {
          toast.error(error instanceof ApiError ? error.message : "Something went wrong");
        }
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {periodName} &middot; {dayOfWeek}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">Subject</p>
            <Select value={subjectId} onValueChange={setSubjectId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((s) => (
                  <SelectItem key={s.id} value={s.id}>
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Teacher</p>
            <Select value={teacherId} onValueChange={setTeacherId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a teacher" />
              </SelectTrigger>
              <SelectContent>
                {teachers.map((t) => (
                  <SelectItem key={t.id} value={t.id}>
                    {t.user.firstName} {t.user.lastName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave} disabled={assign.isPending}>
            {assign.isPending ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
