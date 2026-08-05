"use client";

import { useState } from "react";
import { PlusIcon } from "lucide-react";
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
import { useAllocateHostel, useHostels } from "@/hooks/use-hostel";
import { useStudents } from "@/hooks/use-students";
import { ApiError } from "@/lib/api/client";

export function AllocateDialog() {
  const [open, setOpen] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [hostelId, setHostelId] = useState("");
  const [roomId, setRoomId] = useState("");

  const { data: students } = useStudents();
  const { data: hostels } = useHostels();
  const allocate = useAllocateHostel();

  const selectedHostel = hostels?.find((h) => h.id === hostelId);

  function handleOpenChange(next: boolean) {
    if (next) {
      setStudentId("");
      setHostelId("");
      setRoomId("");
    }
    setOpen(next);
  }

  function handleAllocate() {
    if (!studentId || !roomId) return;
    allocate.mutate(
      { studentId, roomId },
      {
        onSuccess: () => {
          toast.success("Student allocated");
          setOpen(false);
        },
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm">
          <PlusIcon />
          Allocate student
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Allocate student to hostel room</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">Student</p>
            <Select value={studentId} onValueChange={setStudentId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a student" />
              </SelectTrigger>
              <SelectContent>
                {(students ?? []).map((s) => (
                  <SelectItem key={s.id} value={s.id}>
                    {s.firstName} {s.lastName} ({s.admissionNumber})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Hostel</p>
            <Select
              value={hostelId}
              onValueChange={(v) => {
                setHostelId(v);
                setRoomId("");
              }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a hostel" />
              </SelectTrigger>
              <SelectContent>
                {(hostels ?? []).map((h) => (
                  <SelectItem key={h.id} value={h.id}>
                    {h.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Room</p>
            <Select value={roomId} onValueChange={setRoomId} disabled={!hostelId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a room" />
              </SelectTrigger>
              <SelectContent>
                {(selectedHostel?.rooms ?? []).map((r) => (
                  <SelectItem key={r.id} value={r.id} disabled={r.allocations.length >= r.capacity}>
                    Room {r.roomNumber} ({r.allocations.length}/{r.capacity})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleAllocate} disabled={allocate.isPending}>
            {allocate.isPending ? "Allocating..." : "Allocate"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
