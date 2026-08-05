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
import { useCreateLeaveType, useDeleteLeaveType, useLeaveTypes } from "@/hooks/use-leave";
import { ApiError } from "@/lib/api/client";

export function ManageLeaveTypesDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const { data: leaveTypes } = useLeaveTypes();
  const createLeaveType = useCreateLeaveType();
  const deleteLeaveType = useDeleteLeaveType();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleDelete(id: string) {
    setDeletingId(id);
    deleteLeaveType.mutate(id, {
      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong"),
      onSettled: () => setDeletingId(null)
    });
  }

  function handleAdd() {
    if (!name.trim()) return;
    createLeaveType.mutate(
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
          Leave types
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Leave types</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <p className="text-muted-foreground text-sm">
            Leave types are the categories requests can be made under. Set how many days of each type a group
            can take per year on the{" "}
            <a href="/schoolmanagement/settings/leave-groups" className="underline">
              Leave groups
            </a>{" "}
            settings page.
          </p>
          <div className="flex gap-2">
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Sick Leave" />
            <Button onClick={handleAdd} disabled={createLeaveType.isPending}>
              Add
            </Button>
          </div>
          <ul className="max-h-60 space-y-1 overflow-y-auto text-sm">
            {leaveTypes?.map((t) => (
              <li key={t.id} className="flex items-center justify-between rounded-md border px-3 py-1.5">
                <span>{t.name}</span>
                <DataTableRowActions
                  onDelete={() => handleDelete(t.id)}
                  isDeleting={deleteLeaveType.isPending && deletingId === t.id}
                  deleteTitle="Remove this leave type?"
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
