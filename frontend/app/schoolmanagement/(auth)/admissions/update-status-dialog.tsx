"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/date-picker";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { type Admission, type AdmissionStatus, useUpdateAdmissionStatus } from "@/hooks/use-admissions";
import { useClasses } from "@/hooks/use-classes";
import { useSections } from "@/hooks/use-sections";
import { ApiError } from "@/lib/api/client";

const STATUS_OPTIONS: AdmissionStatus[] = [
  "INQUIRY",
  "APPLIED",
  "TEST_SCHEDULED",
  "TEST_COMPLETED",
  "OFFERED",
  "REJECTED",
  "WITHDRAWN"
];

export function UpdateStatusDialog({ admission }: { admission: Admission }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<AdmissionStatus>(admission.status);
  const [testScore, setTestScore] = useState(admission.testScore ?? "");
  const [testDate, setTestDate] = useState<Date | undefined>(
    admission.testDate ? new Date(admission.testDate) : undefined
  );
  const [classId, setClassId] = useState("");
  const [sectionId, setSectionId] = useState(admission.offeredSectionId ?? "");
  const [notes, setNotes] = useState(admission.notes ?? "");

  const { data: classes } = useClasses({ branchId: admission.branchId });
  const { data: sections } = useSections(classId || undefined);
  const updateStatus = useUpdateAdmissionStatus();

  function handleOpenChange(next: boolean) {
    if (next) {
      setStatus(admission.status);
      setTestScore(admission.testScore ?? "");
      setTestDate(admission.testDate ? new Date(admission.testDate) : undefined);
      setSectionId(admission.offeredSectionId ?? "");
      setNotes(admission.notes ?? "");
    }
    setOpen(next);
  }

  function handleSave() {
    updateStatus.mutate(
      {
        id: admission.id,
        status,
        testScore: testScore ? Number(testScore) : undefined,
        testDate: testDate ? testDate.toISOString().slice(0, 10) : undefined,
        offeredSectionId: status === "OFFERED" ? sectionId || undefined : undefined,
        notes: notes || undefined
      },
      {
        onSuccess: () => {
          toast.success("Admission updated");
          setOpen(false);
        },
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Update
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Update &middot; {admission.applicantFirstName} {admission.applicantLastName}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">Status</p>
            <Select value={status} onValueChange={(v) => setStatus(v as AdmissionStatus)}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {STATUS_OPTIONS.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s.replace("_", " ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {(status === "TEST_SCHEDULED" || status === "TEST_COMPLETED") && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Test date</p>
                <DatePicker value={testDate} onChange={setTestDate} />
              </div>
              {status === "TEST_COMPLETED" && (
                <div className="space-y-2">
                  <p className="text-sm font-medium">Test score</p>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    value={testScore}
                    onChange={(e) => setTestScore(e.target.value)}
                  />
                </div>
              )}
            </div>
          )}

          {status === "OFFERED" && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Class</p>
                <Select
                  value={classId}
                  onValueChange={(v) => {
                    setClassId(v);
                    setSectionId("");
                  }}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a class" />
                  </SelectTrigger>
                  <SelectContent>
                    {(classes ?? []).map((c) => (
                      <SelectItem key={c.id} value={c.id}>
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Section</p>
                <Select value={sectionId} onValueChange={setSectionId} disabled={!classId}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a section" />
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
            </div>
          )}

          <div className="space-y-2">
            <p className="text-sm font-medium">Notes (optional)</p>
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave} disabled={updateStatus.isPending}>
            {updateStatus.isPending ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
