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
import { Textarea } from "@/components/ui/textarea";
import type { AssignmentSubmission } from "@/hooks/use-homework";
import { useGradeSubmission } from "@/hooks/use-homework";
import { ApiError } from "@/lib/api/client";

export function GradeSubmissionDialog({
  submission,
  studentName
}: {
  submission: AssignmentSubmission;
  studentName: string;
}) {
  const [open, setOpen] = useState(false);
  const [marksObtained, setMarksObtained] = useState(submission.marksObtained ?? "");
  const [feedback, setFeedback] = useState(submission.feedback ?? "");
  const gradeSubmission = useGradeSubmission();

  function handleSave() {
    if (!marksObtained) return;
    gradeSubmission.mutate(
      { id: submission.id, marksObtained: Number(marksObtained), feedback: feedback || undefined },
      {
        onSuccess: () => {
          toast.success("Submission graded");
          setOpen(false);
        },
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">{submission.status === "GRADED" ? "Update grade" : "Grade"}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Grade submission &middot; {studentName}</DialogTitle>
        </DialogHeader>
        {submission.submissionText && (
          <div className="bg-muted rounded-md p-3 text-sm whitespace-pre-wrap">{submission.submissionText}</div>
        )}
        <div className="space-y-3">
          <Input
            type="number"
            step="0.01"
            min="0"
            placeholder="Marks obtained"
            value={marksObtained}
            onChange={(e) => setMarksObtained(e.target.value)}
          />
          <Textarea
            placeholder="Feedback (optional)"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
          />
        </div>
        <DialogFooter>
          <Button onClick={handleSave} disabled={gradeSubmission.isPending}>
            {gradeSubmission.isPending ? "Saving..." : "Save grade"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
