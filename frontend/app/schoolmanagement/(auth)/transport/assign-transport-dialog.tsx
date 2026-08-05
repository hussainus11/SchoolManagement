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
import { useAssignStudentTransport, useTransportRoutes } from "@/hooks/use-transport";
import { useStudents } from "@/hooks/use-students";
import { ApiError } from "@/lib/api/client";

export function AssignTransportDialog() {
  const [open, setOpen] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [routeId, setRouteId] = useState("");
  const [stopId, setStopId] = useState("");

  const { data: students } = useStudents();
  const { data: routes } = useTransportRoutes();
  const assign = useAssignStudentTransport();

  const selectedRoute = routes?.find((r) => r.id === routeId);

  function handleOpenChange(next: boolean) {
    if (next) {
      setStudentId("");
      setRouteId("");
      setStopId("");
    }
    setOpen(next);
  }

  function handleAssign() {
    if (!studentId || !routeId || !stopId) return;
    assign.mutate(
      { studentId, routeId, stopId },
      {
        onSuccess: () => {
          toast.success("Student assigned to route");
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
          Assign student
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Assign student to route</DialogTitle>
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
            <p className="text-sm font-medium">Route</p>
            <Select
              value={routeId}
              onValueChange={(v) => {
                setRouteId(v);
                setStopId("");
              }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a route" />
              </SelectTrigger>
              <SelectContent>
                {(routes ?? []).map((r) => (
                  <SelectItem key={r.id} value={r.id}>
                    {r.name} ({r.vehicle.registrationNumber})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Stop</p>
            <Select value={stopId} onValueChange={setStopId} disabled={!routeId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a stop" />
              </SelectTrigger>
              <SelectContent>
                {(selectedRoute?.stops ?? []).map((s) => (
                  <SelectItem key={s.id} value={s.id}>
                    {s.name} (fee {s.fee})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleAssign} disabled={assign.isPending}>
            {assign.isPending ? "Assigning..." : "Assign"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
