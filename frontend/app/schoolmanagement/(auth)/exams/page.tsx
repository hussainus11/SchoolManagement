"use client";

import { useMemo, useState } from "react";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { DataTableRowActions } from "@/components/data-table-row-actions";
import { type Exam, useDeleteExam, useExams } from "@/hooks/use-exams";
import { ApiError } from "@/lib/api/client";
import { CreateExamDialog } from "./create-exam-dialog";
import { ManageExamTypesDialog } from "./manage-exam-types-dialog";
import { ManageRoomsDialog } from "./manage-rooms-dialog";

export default function ExamsPage() {
  const router = useRouter();
  const { data: exams, isPending } = useExams();
  const deleteExam = useDeleteExam();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleError(error: unknown) {
    toast.error(error instanceof ApiError ? error.message : "Something went wrong");
  }

  function handleDelete(id: string) {
    setDeletingId(id);
    deleteExam.mutate(id, {
      onSuccess: () => toast.success("Exam deleted"),
      onError: handleError,
      onSettled: () => setDeletingId(null)
    });
  }

  const columns: ColumnDef<Exam>[] = useMemo(
    () => [
      { accessorKey: "name", header: "Name" },
      { id: "examType", header: "Type", cell: ({ row }) => row.original.examType.name },
      { id: "academicYear", header: "Academic year", cell: ({ row }) => row.original.academicYear.name },
      {
        id: "startDate",
        header: "Start",
        cell: ({ row }) => format(new Date(row.original.startDate), "PP")
      },
      {
        id: "endDate",
        header: "End",
        cell: ({ row }) => format(new Date(row.original.endDate), "PP")
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <div className="flex justify-end gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => router.push(`/schoolmanagement/exams/${row.original.id}`)}>
              Schedule
            </Button>
            <DataTableRowActions
              onDelete={() => handleDelete(row.original.id)}
              isDeleting={deleteExam.isPending && deletingId === row.original.id}
              deleteTitle="Delete this exam?"
              deleteDescription={`This will permanently remove ${row.original.name} and its schedule, and cannot be undone.`}
            />
          </div>
        )
      }
    ],
    [deleteExam.isPending, deletingId, router]
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Exams</h1>
          <p className="text-muted-foreground">Schedule exams, manage exam types and rooms.</p>
        </div>
        <div className="flex gap-2">
          <ManageRoomsDialog />
          <ManageExamTypesDialog />
          <CreateExamDialog />
        </div>
      </div>
      <DataTable columns={columns} data={exams ?? []} isLoading={isPending} emptyMessage="No exams yet." />
    </div>
  );
}
