"use client";

import { useMemo, useState } from "react";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { DataTableRowActions } from "@/components/data-table-row-actions";
import { type Assignment, useAssignments, useDeleteAssignment } from "@/hooks/use-homework";
import { ApiError } from "@/lib/api/client";
import { CreateAssignmentDialog } from "./create-assignment-dialog";

export default function HomeworkPage() {
  const router = useRouter();
  const { data: assignments, isPending } = useAssignments();
  const deleteAssignment = useDeleteAssignment();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleError(error: unknown) {
    toast.error(error instanceof ApiError ? error.message : "Something went wrong");
  }

  function handleDelete(id: string) {
    setDeletingId(id);
    deleteAssignment.mutate(id, {
      onSuccess: () => toast.success("Assignment deleted"),
      onError: handleError,
      onSettled: () => setDeletingId(null)
    });
  }

  const columns: ColumnDef<Assignment>[] = useMemo(
    () => [
      { accessorKey: "title", header: "Title" },
      { id: "subject", header: "Subject", cell: ({ row }) => row.original.subject.name },
      {
        id: "section",
        header: "Class",
        cell: ({ row }) => `${row.original.section.class.name} - ${row.original.section.name}`
      },
      {
        id: "teacher",
        header: "Teacher",
        cell: ({ row }) => `${row.original.teacher.user.firstName} ${row.original.teacher.user.lastName}`
      },
      { id: "dueDate", header: "Due", cell: ({ row }) => format(new Date(row.original.dueDate), "PP") },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <div className="flex justify-end gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => router.push(`/schoolmanagement/homework/${row.original.id}`)}>
              Submissions
            </Button>
            <DataTableRowActions
              onDelete={() => handleDelete(row.original.id)}
              isDeleting={deleteAssignment.isPending && deletingId === row.original.id}
              deleteTitle="Delete this assignment?"
              deleteDescription={`This will permanently remove "${row.original.title}" and its submissions, and cannot be undone.`}
            />
          </div>
        )
      }
    ],
    [deleteAssignment.isPending, deletingId, router]
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Homework</h1>
          <p className="text-muted-foreground">Assign and grade homework for a class section.</p>
        </div>
        <CreateAssignmentDialog />
      </div>
      <DataTable columns={columns} data={assignments ?? []} isLoading={isPending} emptyMessage="No assignments yet." />
    </div>
  );
}
