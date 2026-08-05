"use client";

import { useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";

import { DataTable } from "@/components/data-table";
import { DataTableRowActions } from "@/components/data-table-row-actions";
import { type Alumni, useAlumni, useDeleteAlumni } from "@/hooks/use-alumni";
import { ApiError } from "@/lib/api/client";
import { CreateAlumniDialog } from "./create-alumni-dialog";

export default function AlumniPage() {
  const { data: alumni, isPending } = useAlumni();
  const deleteAlumni = useDeleteAlumni();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleError(error: unknown) {
    toast.error(error instanceof ApiError ? error.message : "Something went wrong");
  }

  function handleDelete(id: string) {
    setDeletingId(id);
    deleteAlumni.mutate(id, {
      onSuccess: () => toast.success("Alumni record deleted"),
      onError: handleError,
      onSettled: () => setDeletingId(null)
    });
  }

  const columns: ColumnDef<Alumni>[] = useMemo(
    () => [
      { id: "name", header: "Name", cell: ({ row }) => `${row.original.firstName} ${row.original.lastName}` },
      { accessorKey: "graduationYear", header: "Class of" },
      { id: "occupation", header: "Occupation", cell: ({ row }) => row.original.currentOccupation ?? "-" },
      { id: "email", header: "Email", cell: ({ row }) => row.original.contactEmail ?? "-" },
      { id: "phone", header: "Phone", cell: ({ row }) => row.original.contactPhone ?? "-" },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <div className="flex justify-end">
            <DataTableRowActions
              onDelete={() => handleDelete(row.original.id)}
              isDeleting={deleteAlumni.isPending && deletingId === row.original.id}
              deleteTitle="Delete this alumni record?"
              deleteDescription={`This will permanently remove ${row.original.firstName} ${row.original.lastName} and cannot be undone.`}
            />
          </div>
        )
      }
    ],
    [deleteAlumni.isPending, deletingId]
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Alumni</h1>
          <p className="text-muted-foreground">Directory of graduated students.</p>
        </div>
        <CreateAlumniDialog />
      </div>
      <DataTable columns={columns} data={alumni ?? []} isLoading={isPending} emptyMessage="No alumni records yet." />
    </div>
  );
}
