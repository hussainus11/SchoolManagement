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
import { useClasses } from "@/hooks/use-classes";
import { useSections } from "@/hooks/use-sections";
import { useUpdateStudent } from "@/hooks/use-students";
import { ApiError } from "@/lib/api/client";

interface Props {
  studentId: string;
  currentClassId?: string;
  currentSectionId?: string | null;
}

export function ChangeSectionDialog({ studentId, currentClassId, currentSectionId }: Props) {
  const [open, setOpen] = useState(false);
  const [classId, setClassId] = useState(currentClassId ?? "");
  const [sectionId, setSectionId] = useState(currentSectionId ?? "");

  const { data: classes } = useClasses({});
  const { data: sections } = useSections(classId || undefined);
  const updateStudent = useUpdateStudent();

  function handleOpenChange(next: boolean) {
    if (next) {
      setClassId(currentClassId ?? "");
      setSectionId(currentSectionId ?? "");
    }
    setOpen(next);
  }

  function handleSave() {
    updateStudent.mutate(
      { id: studentId, sectionId: sectionId || null },
      {
        onSuccess: () => {
          toast.success("Enrollment updated");
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
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Change section
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change class / section</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          <Select
            value={classId}
            onValueChange={(value) => {
              setClassId(value);
              setSectionId("");
            }}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              {(classes ?? []).map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sectionId} onValueChange={setSectionId} disabled={!classId}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Section" />
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
        <DialogFooter>
          <Button onClick={handleSave} disabled={updateStudent.isPending || !sectionId}>
            {updateStudent.isPending ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
