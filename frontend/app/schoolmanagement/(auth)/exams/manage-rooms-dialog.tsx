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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDeleteRoom, useCreateRoom, useRooms } from "@/hooks/use-exams";
import { useBranches } from "@/hooks/use-school-settings";
import { ApiError } from "@/lib/api/client";

export function ManageRoomsDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const { data: branches } = useBranches();
  const [branchId, setBranchId] = useState("");
  const { data: rooms } = useRooms();
  const createRoom = useCreateRoom();
  const deleteRoom = useDeleteRoom();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleDelete(id: string) {
    setDeletingId(id);
    deleteRoom.mutate(id, {
      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong"),
      onSettled: () => setDeletingId(null)
    });
  }

  function handleOpenChange(next: boolean) {
    if (next) setBranchId((prev) => prev || branches?.[0]?.id || "");
    setOpen(next);
  }

  function handleAdd() {
    if (!name.trim() || !branchId) return;
    createRoom.mutate(
      { branchId, name: name.trim(), capacity: capacity ? Number(capacity) : undefined },
      {
        onSuccess: () => {
          setName("");
          setCapacity("");
        },
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Rooms
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rooms</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div className="flex gap-2">
            <Select value={branchId} onValueChange={setBranchId}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Branch" />
              </SelectTrigger>
              <SelectContent>
                {(branches ?? []).map((b) => (
                  <SelectItem key={b.id} value={b.id}>
                    {b.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Room name" />
            <Input
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              placeholder="Capacity"
              type="number"
              className="w-24"
            />
            <Button onClick={handleAdd} disabled={createRoom.isPending}>
              Add
            </Button>
          </div>
          <ul className="max-h-60 space-y-1 overflow-y-auto text-sm">
            {rooms?.map((r) => (
              <li key={r.id} className="flex items-center justify-between rounded-md border px-3 py-1.5">
                <span>
                  {r.name}
                  {r.capacity != null && <span className="text-muted-foreground"> &middot; cap {r.capacity}</span>}
                </span>
                <DataTableRowActions
                  onDelete={() => handleDelete(r.id)}
                  isDeleting={deleteRoom.isPending && deletingId === r.id}
                  deleteTitle="Remove this room?"
                  deleteDescription={`This will permanently remove ${r.name} and cannot be undone.`}
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
