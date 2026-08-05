"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { type Hostel, useAddHostelRoom, useRemoveHostelRoom } from "@/hooks/use-hostel";
import { ApiError } from "@/lib/api/client";

export function ManageRoomsDialog({ hostel }: { hostel: Hostel }) {
  const [open, setOpen] = useState(false);
  const [roomNumber, setRoomNumber] = useState("");
  const [capacity, setCapacity] = useState("");
  const addRoom = useAddHostelRoom();
  const removeRoom = useRemoveHostelRoom();

  function handleAdd() {
    if (!roomNumber.trim() || !capacity) return;
    addRoom.mutate(
      { hostelId: hostel.id, roomNumber: roomNumber.trim(), capacity: Number(capacity) },
      {
        onSuccess: () => {
          setRoomNumber("");
          setCapacity("");
        },
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Rooms ({hostel.rooms.length})
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rooms &middot; {hostel.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div className="flex gap-2">
            <Input value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} placeholder="Room number" />
            <Input
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              placeholder="Capacity"
              type="number"
              className="w-24"
            />
            <Button onClick={handleAdd} disabled={addRoom.isPending}>
              Add
            </Button>
          </div>
          <ul className="max-h-60 space-y-1 overflow-y-auto text-sm">
            {hostel.rooms.map((r) => (
              <li key={r.id} className="flex items-center justify-between rounded-md border px-3 py-1.5">
                <span>
                  Room {r.roomNumber}{" "}
                  <span className="text-muted-foreground">
                    &middot; {r.allocations.length}/{r.capacity} occupied
                  </span>
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() =>
                    removeRoom.mutate(
                      { hostelId: hostel.id, roomId: r.id },
                      {
                        onError: (error) =>
                          toast.error(error instanceof ApiError ? error.message : "Something went wrong")
                      }
                    )
                  }>
                  Remove
                </Button>
              </li>
            ))}
            {hostel.rooms.length === 0 && <p className="text-muted-foreground text-sm">No rooms yet.</p>}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
