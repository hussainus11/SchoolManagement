"use client";

import { useMemo, useState } from "react";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/data-table";
import { DataTableRowActions } from "@/components/data-table-row-actions";
import {
  type DisciplineIncident,
  type DisciplineSeverity,
  useDeleteDisciplineIncident,
  useDisciplineIncidents
} from "@/hooks/use-discipline";
import { ApiError } from "@/lib/api/client";
import { CreateIncidentDialog } from "./create-incident-dialog";

const SEVERITY_VARIANT: Record<DisciplineSeverity, "default" | "secondary" | "destructive" | "outline"> = {
  MINOR: "secondary",
  MODERATE: "outline",
  MAJOR: "destructive"
};

export default function DisciplinePage() {
  const { data: incidents, isPending } = useDisciplineIncidents();
  const deleteIncident = useDeleteDisciplineIncident();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleError(error: unknown) {
    toast.error(error instanceof ApiError ? error.message : "Something went wrong");
  }

  function handleDelete(id: string) {
    setDeletingId(id);
    deleteIncident.mutate(id, {
      onSuccess: () => toast.success("Incident deleted"),
      onError: handleError,
      onSettled: () => setDeletingId(null)
    });
  }

  const columns: ColumnDef<DisciplineIncident>[] = useMemo(
    () => [
      {
        id: "student",
        header: "Student",
        cell: ({ row }) => `${row.original.student.firstName} ${row.original.student.lastName}`
      },
      { id: "date", header: "Date", cell: ({ row }) => format(new Date(row.original.incidentDate), "PP") },
      { accessorKey: "category", header: "Category" },
      {
        id: "severity",
        header: "Severity",
        cell: ({ row }) => <Badge variant={SEVERITY_VARIANT[row.original.severity]}>{row.original.severity}</Badge>
      },
      { accessorKey: "description", header: "Description" },
      {
        id: "reportedBy",
        header: "Reported by",
        cell: ({ row }) => `${row.original.reportedBy.firstName} ${row.original.reportedBy.lastName}`
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <div className="flex justify-end">
            <DataTableRowActions
              onDelete={() => handleDelete(row.original.id)}
              isDeleting={deleteIncident.isPending && deletingId === row.original.id}
              deleteTitle="Delete this incident?"
              deleteDescription="This will permanently remove this incident record and cannot be undone."
            />
          </div>
        )
      }
    ],
    [deleteIncident.isPending, deletingId]
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Discipline</h1>
          <p className="text-muted-foreground">Track student behavior incidents.</p>
        </div>
        <CreateIncidentDialog />
      </div>
      <DataTable columns={columns} data={incidents ?? []} isLoading={isPending} emptyMessage="No incidents logged." />
    </div>
  );
}
