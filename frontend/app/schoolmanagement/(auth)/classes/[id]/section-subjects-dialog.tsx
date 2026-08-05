"use client";

import { useState } from "react";
import { XIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { SchoolClass } from "@/hooks/use-classes";
import { useAssignSubjectTeacher, useRemoveSubjectTeacher, useSection } from "@/hooks/use-sections";
import type { Teacher } from "@/hooks/use-teachers";
import { ApiError } from "@/lib/api/client";

interface Props {
  sectionId: string;
  sectionName: string;
  classSubjects: NonNullable<SchoolClass["classSubjects"]>;
  teachers: Teacher[];
}

export function SectionSubjectsDialog({ sectionId, sectionName, classSubjects, teachers }: Props) {
  const [open, setOpen] = useState(false);
  const { data: section } = useSection(open ? sectionId : undefined);
  const assign = useAssignSubjectTeacher();
  const remove = useRemoveSubjectTeacher();

  const assignedBySubject = new Map(section?.subjectTeachers?.map((st) => [st.subjectId, st]) ?? []);

  function handleAssign(subjectId: string, teacherId: string) {
    assign.mutate(
      { sectionId, subjectId, teacherId },
      { onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong") }
    );
  }

  function handleRemove(subjectId: string) {
    remove.mutate(
      { sectionId, subjectId },
      { onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong") }
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Subjects
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Subject teachers &ndash; Section {sectionName}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          {classSubjects.length === 0 && (
            <p className="text-muted-foreground text-sm">
              Add subjects to this class&apos;s curriculum first.
            </p>
          )}
          {classSubjects.map((cs) => {
            const assigned = assignedBySubject.get(cs.subjectId);
            return (
              <div key={cs.id} className="flex items-center justify-between gap-2">
                <span className="w-32 shrink-0 text-sm font-medium">{cs.subject.name}</span>
                <div className="flex flex-1 items-center gap-2">
                  <Select
                    value={assigned?.teacherId ?? ""}
                    onValueChange={(teacherId) => handleAssign(cs.subjectId, teacherId)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Assign a teacher" />
                    </SelectTrigger>
                    <SelectContent>
                      {teachers.map((t) => (
                        <SelectItem key={t.id} value={t.id}>
                          {t.user.firstName} {t.user.lastName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {assigned && (
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleRemove(cs.subjectId)}
                      aria-label="Unassign teacher">
                      <XIcon className="size-4" />
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
