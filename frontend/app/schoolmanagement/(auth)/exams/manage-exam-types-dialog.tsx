"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { DataTableRowActions } from "@/components/data-table-row-actions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useCreateExamType, useDeleteExamType, useExamTypes } from "@/hooks/use-exams";
import { ApiError } from "@/lib/api/client";

export function ManageExamTypesDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const { data: examTypes } = useExamTypes();
  const createExamType = useCreateExamType();
  const deleteExamType = useDeleteExamType();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleDelete(id: string) {
    setDeletingId(id);
    deleteExamType.mutate(id, {
      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong"),
      onSettled: () => setDeletingId(null)
    });
  }

  function handleAdd() {
    if (!name.trim()) return;
    createExamType.mutate(
      { name: name.trim() },
      {
        onSuccess: () => setName(""),
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Exam types
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Exam types</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div className="flex gap-2">
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Midterm, Final" />
            <Button onClick={handleAdd} disabled={createExamType.isPending}>
              Add
            </Button>
          </div>
          <ul className="max-h-60 space-y-1 overflow-y-auto text-sm">
            {examTypes?.map((t) => (
              <li key={t.id} className="flex items-center justify-between rounded-md border px-3 py-1.5">
                {t.name}
                <DataTableRowActions
                  onDelete={() => handleDelete(t.id)}
                  isDeleting={deleteExamType.isPending && deletingId === t.id}
                  deleteTitle="Remove this exam type?"
                  deleteDescription={`This will permanently remove ${t.name} and cannot be undone.`}
                  deleteLabel="Remove"
                />
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
