"use client";

import { useMemo, useState } from "react";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { Switch } from "@/components/ui/switch";
import { type Visitor, useCheckOutVisitor, useVisitors } from "@/hooks/use-visitors";
import { ApiError } from "@/lib/api/client";
import { CheckInDialog } from "./check-in-dialog";

export default function VisitorsPage() {
  const [activeOnly, setActiveOnly] = useState(false);
  const { data: visitors, isPending } = useVisitors({ active: activeOnly || undefined });
  const checkOut = useCheckOutVisitor();

  function handleError(error: unknown) {
    toast.error(error instanceof ApiError ? error.message : "Something went wrong");
  }

  const columns: ColumnDef<Visitor>[] = useMemo(
    () => [
      { accessorKey: "name", header: "Name" },
      { id: "phone", header: "Phone", cell: ({ row }) => row.original.phone ?? "-" },
      { accessorKey: "purpose", header: "Purpose" },
      { id: "personToMeet", header: "Meeting", cell: ({ row }) => row.original.personToMeet ?? "-" },
      { id: "checkInAt", header: "Check-in", cell: ({ row }) => format(new Date(row.original.checkInAt), "PPp") },
      {
        id: "status",
        header: "Status",
        cell: ({ row }) =>
          row.original.checkOutAt ? (
            <Badge variant="outline">Checked out {format(new Date(row.original.checkOutAt), "p")}</Badge>
          ) : (
            <Badge variant="default">On premises</Badge>
          )
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => {
          if (row.original.checkOutAt) return null;
          return (
            <div className="flex justify-end">
              <Button
                size="sm"
                variant="outline"
                onClick={() => checkOut.mutate(row.original.id, { onError: handleError })}>
                Check out
              </Button>
            </div>
          );
        }
      }
    ],
    [checkOut]
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Visitors</h1>
          <p className="text-muted-foreground">Front-desk check-in and check-out log.</p>
        </div>
        <CheckInDialog />
      </div>
      <DataTable
        columns={columns}
        data={visitors ?? []}
        isLoading={isPending}
        emptyMessage="No visitors logged."
        toolbar={
          <div className="flex items-center gap-2">
            <Switch checked={activeOnly} onCheckedChange={setActiveOnly} id="active-only" />
            <label htmlFor="active-only" className="text-sm">
              On premises only
            </label>
          </div>
        }
      />
    </div>
  );
}
