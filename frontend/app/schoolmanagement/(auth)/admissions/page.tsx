"use client";

import { useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/data-table";
import { DataTableRowActions } from "@/components/data-table-row-actions";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { type Admission, type AdmissionStatus, useAdmissions, useDeleteAdmission } from "@/hooks/use-admissions";
import { ApiError } from "@/lib/api/client";
import { CreateAdmissionDialog } from "./create-admission-dialog";
import { EnrollDialog } from "./enroll-dialog";
import { UpdateStatusDialog } from "./update-status-dialog";

const STATUS_OPTIONS: AdmissionStatus[] = [
  "INQUIRY",
  "APPLIED",
  "TEST_SCHEDULED",
  "TEST_COMPLETED",
  "OFFERED",
  "ENROLLED",
  "REJECTED",
  "WITHDRAWN"
];

const STATUS_VARIANT: Record<AdmissionStatus, "default" | "secondary" | "destructive" | "outline"> = {
  INQUIRY: "secondary",
  APPLIED: "secondary",
  TEST_SCHEDULED: "outline",
  TEST_COMPLETED: "outline",
  OFFERED: "outline",
  ENROLLED: "default",
  REJECTED: "destructive",
  WITHDRAWN: "destructive"
};

export default function AdmissionsPage() {
  const [status, setStatus] = useState<AdmissionStatus | "all">("all");
  const { data: admissions, isPending } = useAdmissions(status === "all" ? {} : { status });
  const deleteAdmission = useDeleteAdmission();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleError(error: unknown) {
    toast.error(error instanceof ApiError ? error.message : "Something went wrong");
  }

  function handleDelete(id: string) {
    setDeletingId(id);
    deleteAdmission.mutate(id, {
      onSuccess: () => toast.success("Admission deleted"),
      onError: handleError,
      onSettled: () => setDeletingId(null)
    });
  }

  const columns: ColumnDef<Admission>[] = useMemo(
    () => [
      {
        id: "applicant",
        header: "Applicant",
        cell: ({ row }) => `${row.original.applicantFirstName} ${row.original.applicantLastName}`
      },
      { accessorKey: "gradeAppliedFor", header: "Grade" },
      { accessorKey: "guardianName", header: "Guardian" },
      { accessorKey: "guardianPhone", header: "Phone" },
      {
        id: "status",
        header: "Status",
        cell: ({ row }) => (
          <Badge variant={STATUS_VARIANT[row.original.status]}>{row.original.status.replace("_", " ")}</Badge>
        )
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => {
          const admission = row.original;
          return (
            <div className="flex justify-end gap-2">
              {admission.status === "OFFERED" && <EnrollDialog admission={admission} />}
              {admission.status !== "ENROLLED" && <UpdateStatusDialog admission={admission} />}
              {admission.status !== "ENROLLED" && (
                <DataTableRowActions
                  onDelete={() => handleDelete(admission.id)}
                  isDeleting={deleteAdmission.isPending && deletingId === admission.id}
                  deleteTitle="Delete this admission?"
                  deleteDescription={`This will permanently remove ${admission.applicantFirstName} ${admission.applicantLastName}'s application and cannot be undone.`}
                />
              )}
            </div>
          );
        }
      }
    ],
    [deleteAdmission.isPending, deletingId]
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Admissions</h1>
          <p className="text-muted-foreground">Track applicants from inquiry through enrollment.</p>
        </div>
        <CreateAdmissionDialog />
      </div>
      <DataTable
        columns={columns}
        data={admissions ?? []}
        isLoading={isPending}
        emptyMessage="No admissions yet."
        toolbar={
          <Select value={status} onValueChange={(v) => setStatus(v as AdmissionStatus | "all")}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              {STATUS_OPTIONS.map((s) => (
                <SelectItem key={s} value={s}>
                  {s.replace("_", " ")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        }
      />
    </div>
  );
}
