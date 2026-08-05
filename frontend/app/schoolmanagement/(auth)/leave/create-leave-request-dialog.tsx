"use client";

import { useEffect, useState } from "react";
import { PlusIcon } from "lucide-react";
import { toast } from "sonner";

import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/date-picker";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectLabel, SelectGroup, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateLeaveRequest, useLeaveTypes } from "@/hooks/use-leave";
import { useStaffList } from "@/hooks/use-staff";
import { useTeachers } from "@/hooks/use-teachers";
import { useAuthStore } from "@/lib/store/auth-store";
import { ApiError } from "@/lib/api/client";

type PersonSelection = { kind: "teacher" | "staff"; id: string } | null;

export function CreateLeaveRequestDialog() {
  const [open, setOpen] = useState(false);
  const [person, setPerson] = useState<PersonSelection>(null);
  const [leaveTypeId, setLeaveTypeId] = useState("");
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [isHalfDay, setIsHalfDay] = useState(false);
  const [reason, setReason] = useState("");

  const role = useAuthStore((s) => s.user?.role);
  const isAdmin = role === "SCHOOL_ADMIN" || role === "BRANCH_ADMIN";
  const { data: leaveTypes } = useLeaveTypes();
  const { data: teachers } = useTeachers();
  const { data: staffList } = useStaffList();
  const createRequest = useCreateLeaveRequest();

  const isSingleDay = !!startDate && !!endDate && startDate.getTime() === endDate.getTime();

  useEffect(() => {
    if (isHalfDay && startDate && !isSingleDay) {
      setEndDate(startDate);
    }
  }, [isHalfDay, startDate, isSingleDay]);

  function handleOpenChange(next: boolean) {
    if (next) {
      setPerson(null);
      setLeaveTypeId("");
      setStartDate(undefined);
      setEndDate(undefined);
      setIsHalfDay(false);
      setReason("");
    }
    setOpen(next);
  }

  function handleSubmit() {
    if (!leaveTypeId || !startDate || !endDate) return;
    if (isAdmin && !person) return;

    createRequest.mutate(
      {
        teacherId: isAdmin && person?.kind === "teacher" ? person.id : undefined,
        staffId: isAdmin && person?.kind === "staff" ? person.id : undefined,
        leaveTypeId,
        startDate: startDate.toISOString().slice(0, 10),
        endDate: endDate.toISOString().slice(0, 10),
        isHalfDay,
        reason: reason || undefined
      },
      {
        onSuccess: () => {
          toast.success("Leave request submitted");
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
          New leave request
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New leave request</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {isAdmin && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Person</p>
              <Select
                value={person ? `${person.kind}:${person.id}` : ""}
                onValueChange={(value) => {
                  const [kind, id] = value.split(":") as ["teacher" | "staff", string];
                  setPerson({ kind, id });
                }}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a teacher or staff member" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Teachers</SelectLabel>
                    {(teachers ?? []).map((t) => (
                      <SelectItem key={t.id} value={`teacher:${t.id}`}>
                        {t.user.firstName} {t.user.lastName}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Staff</SelectLabel>
                    {(staffList ?? []).map((s) => (
                      <SelectItem key={s.id} value={`staff:${s.id}`}>
                        {s.user.firstName} {s.user.lastName} ({s.designation})
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
          <div className="space-y-2">
            <p className="text-sm font-medium">Leave type</p>
            <Select value={leaveTypeId} onValueChange={setLeaveTypeId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a leave type" />
              </SelectTrigger>
              <SelectContent>
                {(leaveTypes ?? []).map((t) => (
                  <SelectItem key={t.id} value={t.id}>
                    {t.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Start date</p>
              <DatePicker value={startDate} onChange={setStartDate} />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">End date</p>
              {isHalfDay ? (
                <div className="text-muted-foreground border-input flex h-9 items-center rounded-md border px-3 text-sm">
                  {startDate ? format(startDate, "PPP") : "Same as start date"}
                </div>
              ) : (
                <DatePicker value={endDate} onChange={setEndDate} />
              )}
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox
              checked={isHalfDay}
              onCheckedChange={(checked) => setIsHalfDay(checked === true)}
              disabled={!startDate}
            />
            Half day (counts as 0.5 day, same start and end date)
          </label>
          <div className="space-y-2">
            <p className="text-sm font-medium">Reason (optional)</p>
            <Textarea value={reason} onChange={(e) => setReason(e.target.value)} rows={3} />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} disabled={createRequest.isPending}>
            {createRequest.isPending ? "Submitting..." : "Submit request"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
