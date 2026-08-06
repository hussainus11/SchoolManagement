"use client";

import { useMemo } from "react";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import {
  type LeaveRequest,
  type LeaveStatus,
  useApproveLeaveRequest,
  useCancelLeaveRequest,
  useLeaveRequests,
  useRejectLeaveRequest
} from "@/hooks/use-leave";
import { useAuthStore } from "@/lib/store/auth-store";
import { ApiError } from "@/lib/api/client";
import { CreateLeaveRequestDialog } from "./create-leave-request-dialog";

const STATUS_VARIANT: Record<LeaveStatus, "default" | "secondary" | "destructive" | "outline"> = {
  PENDING: "secondary",
  APPROVED: "default",
  REJECTED: "destructive",
  CANCELLED: "outline"
};

export default function LeavePage() {
  const role = useAuthStore((s) => s.user?.role);
  const isAdmin = role === "SCHOOL_ADMIN" || role === "BRANCH_ADMIN";
  const { data: requests, isPending } = useLeaveRequests();
  const approve = useApproveLeaveRequest();
  const reject = useRejectLeaveRequest();
  const cancel = useCancelLeaveRequest();

  function handleError(error: unknown) {
    toast.error(error instanceof ApiError ? error.message : "Something went wrong");
  }

  const columns: ColumnDef<LeaveRequest>[] = useMemo(
    () => [
      {
        id: "person",
        header: "Employee",
        cell: ({ row }) => {
          const person = row.original.teacher ?? row.original.staff;
          return person ? `${person.user.firstName} ${person.user.lastName}` : "—";
        }
      },
      { id: "leaveType", header: "Type", cell: ({ row }) => row.original.leaveType.name },
      { id: "startDate", header: "From", cell: ({ row }) => format(new Date(row.original.startDate), "PP") },
      { id: "endDate", header: "To", cell: ({ row }) => format(new Date(row.original.endDate), "PP") },
      {
        id: "days",
        header: "Days",
        cell: ({ row }) => row.original.dayCount
      },
      { id: "reason", header: "Reason", cell: ({ row }) => row.original.reason ?? "-" },
      {
        id: "status",
        header: "Status",
        cell: ({ row }) => <Badge variant={STATUS_VARIANT[row.original.status]}>{row.original.status}</Badge>
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => {
          const request = row.original;
          if (request.status !== "PENDING") return null;
          return (
            <div className="flex justify-end gap-2">
              {isAdmin && (
                <>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => approve.mutate(request.id, { onError: handleError })}>
                    Approve
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => reject.mutate(request.id, { onError: handleError })}>
                    Reject
                  </Button>
                </>
              )}
              {!isAdmin && (
                <Button size="sm" variant="ghost" onClick={() => cancel.mutate(request.id, { onError: handleError })}>
                  Cancel
                </Button>
              )}
            </div>
          );
        }
      }
    ],
    [approve, reject, cancel, isAdmin]
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Leave</h1>
          <p className="text-muted-foreground">
            {isAdmin ? "Review and manage staff leave requests." : "Request and track your leave."}
          </p>
        </div>
        <div className="flex gap-2">
          <CreateLeaveRequestDialog />
        </div>
      </div>
      <DataTable columns={columns} data={requests ?? []} isLoading={isPending} emptyMessage="No leave requests yet." />
    </div>
  );
}
