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
import { Input } from "@/components/ui/input";
import { type Admission, useEnrollAdmission } from "@/hooks/use-admissions";
import { ApiError } from "@/lib/api/client";

export function EnrollDialog({ admission }: { admission: Admission }) {
  const [open, setOpen] = useState(false);
  const [admissionNumber, setAdmissionNumber] = useState("");
  const enroll = useEnrollAdmission();

  function handleEnroll() {
    if (!admission.offeredSectionId || !admissionNumber.trim()) return;
    enroll.mutate(
      { id: admission.id, sectionId: admission.offeredSectionId, admissionNumber: admissionNumber.trim() },
      {
        onSuccess: () => {
          toast.success("Applicant enrolled as a student");
          setOpen(false);
        },
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Enroll</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Enroll &middot; {admission.applicantFirstName} {admission.applicantLastName}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          <p className="text-sm font-medium">Admission number</p>
          <Input value={admissionNumber} onChange={(e) => setAdmissionNumber(e.target.value)} placeholder="0003" />
          <p className="text-muted-foreground text-xs">
            Section: {admission.offeredSection?.class.name} - {admission.offeredSection?.name}
          </p>
        </div>
        <DialogFooter>
          <Button onClick={handleEnroll} disabled={enroll.isPending}>
            {enroll.isPending ? "Enrolling..." : "Confirm enrollment"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
