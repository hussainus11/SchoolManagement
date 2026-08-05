"use client";

import { useMemo } from "react";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";
import { useParams } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/data-table";
import { type AssignmentSubmission, type SubmissionStatus, useAssignment, useSubmissionsForAssignment } from "@/hooks/use-homework";
import { GradeSubmissionDialog } from "./grade-submission-dialog";
import { RecordSubmissionDialog } from "./record-submission-dialog";

const STATUS_VARIANT: Record<SubmissionStatus, "default" | "secondary" | "destructive" | "outline"> = {
  PENDING: "secondary",
  SUBMITTED: "outline",
  LATE: "destructive",
  GRADED: "default"
};

export default function AssignmentDetailPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const { data: assignment } = useAssignment(id);
  const { data: submissions, isPending } = useSubmissionsForAssignment(id);

  const columns: ColumnDef<AssignmentSubmission>[] = useMemo(
    () => [
      {
        id: "student",
        header: "Student",
        cell: ({ row }) => `${row.original.student?.firstName} ${row.original.student?.lastName}`
      },
      {
        id: "status",
        header: "Status",
        cell: ({ row }) => <Badge variant={STATUS_VARIANT[row.original.status]}>{row.original.status}</Badge>
      },
      {
        id: "submittedAt",
        header: "Submitted",
        cell: ({ row }) => (row.original.submittedAt ? format(new Date(row.original.submittedAt), "PPp") : "-")
      },
      {
        id: "marksObtained",
        header: "Marks",
        cell: ({ row }) => row.original.marksObtained ?? "-"
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => {
          const submission = row.original;
          const studentName = `${submission.student?.firstName} ${submission.student?.lastName}`;
          return (
            <div className="flex justify-end gap-2">
              {submission.status === "PENDING" && (
                <RecordSubmissionDialog submissionId={submission.id} studentName={studentName} />
              )}
              {submission.status !== "PENDING" && (
                <GradeSubmissionDialog submission={submission} studentName={studentName} />
              )}
            </div>
          );
        }
      }
    ],
    []
  );

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{assignment?.title ?? "Assignment"}</h1>
        <p className="text-muted-foreground">
          {assignment?.subject.name} &middot; {assignment?.section.class.name} - {assignment?.section.name} &middot;
          Due {assignment ? format(new Date(assignment.dueDate), "PP") : ""}
        </p>
        {assignment?.description && <p className="mt-2 text-sm">{assignment.description}</p>}
      </div>
      <DataTable
        columns={columns}
        data={submissions ?? []}
        isLoading={isPending}
        emptyMessage="No submissions yet."
      />
    </div>
  );
}
