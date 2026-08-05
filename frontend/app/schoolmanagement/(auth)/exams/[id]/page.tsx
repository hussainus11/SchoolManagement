"use client";

import { useMemo, useState } from "react";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { DataTableRowActions } from "@/components/data-table-row-actions";
import { type ExamSchedule, useDeleteExamSchedule, useExam, useExamSchedules } from "@/hooks/use-exams";
import { ApiError } from "@/lib/api/client";
import { CreateScheduleDialog } from "./create-schedule-dialog";

export default function ExamDetailPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const router = useRouter();
  const { data: exam } = useExam(id);
  const { data: schedules, isPending } = useExamSchedules({ examId: id });
  const deleteSchedule = useDeleteExamSchedule();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleError(error: unknown) {
    toast.error(error instanceof ApiError ? error.message : "Something went wrong");
  }

  function handleDelete(scheduleId: string) {
    setDeletingId(scheduleId);
    deleteSchedule.mutate(scheduleId, {
      onSuccess: () => toast.success("Schedule entry deleted"),
      onError: handleError,
      onSettled: () => setDeletingId(null)
    });
  }

  const columns: ColumnDef<ExamSchedule>[] = useMemo(
    () => [
      { id: "class", header: "Class", cell: ({ row }) => row.original.class.name },
      { id: "subject", header: "Subject", cell: ({ row }) => row.original.subject.name },
      { id: "room", header: "Room", cell: ({ row }) => row.original.room.name },
      { id: "date", header: "Date", cell: ({ row }) => format(new Date(row.original.examDate), "PP") },
      {
        id: "time",
        header: "Time",
        cell: ({ row }) => `${row.original.startTime} - ${row.original.endTime}`
      },
      {
        id: "marks",
        header: "Max / Pass",
        cell: ({ row }) => `${Number(row.original.maxMarks).toFixed(0)} / ${Number(row.original.passMarks).toFixed(0)}`
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <div className="flex justify-end gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => router.push(`/schoolmanagement/marks?examScheduleId=${row.original.id}`)}>
              Enter marks
            </Button>
            <DataTableRowActions
              onDelete={() => handleDelete(row.original.id)}
              isDeleting={deleteSchedule.isPending && deletingId === row.original.id}
              deleteTitle="Delete this schedule entry?"
              deleteDescription="This will permanently remove this exam schedule entry and cannot be undone."
            />
          </div>
        )
      }
    ],
    [deleteSchedule.isPending, deletingId, router]
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{exam?.name ?? "Exam"}</h1>
          <p className="text-muted-foreground">
            {exam?.examType.name} &middot; {exam?.academicYear.name}
          </p>
        </div>
        <CreateScheduleDialog examId={id} />
      </div>
      <DataTable
        columns={columns}
        data={schedules ?? []}
        isLoading={isPending}
        emptyMessage="No papers scheduled yet."
      />
    </div>
  );
}
