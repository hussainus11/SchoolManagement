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
import { Textarea } from "@/components/ui/textarea";
import { useRecordSubmission } from "@/hooks/use-homework";
import { ApiError } from "@/lib/api/client";

export function RecordSubmissionDialog({ submissionId, studentName }: { submissionId: string; studentName: string }) {
  const [open, setOpen] = useState(false);
  const [submissionText, setSubmissionText] = useState("");
  const recordSubmission = useRecordSubmission();

  function handleSave() {
    if (!submissionText.trim()) return;
    recordSubmission.mutate(
      { id: submissionId, submissionText: submissionText.trim() },
      {
        onSuccess: () => {
          toast.success("Submission recorded");
          setOpen(false);
          setSubmissionText("");
        },
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Record submission
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Record submission &middot; {studentName}</DialogTitle>
        </DialogHeader>
        <Textarea
          value={submissionText}
          onChange={(e) => setSubmissionText(e.target.value)}
          placeholder="Paste or type the student's submitted work..."
          rows={6}
        />
        <DialogFooter>
          <Button onClick={handleSave} disabled={recordSubmission.isPending}>
            {recordSubmission.isPending ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
