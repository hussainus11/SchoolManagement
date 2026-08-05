"use client";

import { useMemo, useState } from "react";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  type Expense,
  type ExpenseStatus,
  useApproveExpense,
  useExpenses,
  useMarkExpensePaid,
  useRejectExpense
} from "@/hooks/use-expenses";
import { ApiError } from "@/lib/api/client";
import { CreateExpenseDialog } from "./create-expense-dialog";
import { ManageCategoriesDialog } from "./manage-categories-dialog";
import { ManageVendorsDialog } from "./manage-vendors-dialog";

const STATUS_OPTIONS: ExpenseStatus[] = ["PENDING", "APPROVED", "REJECTED", "PAID"];

const STATUS_VARIANT: Record<ExpenseStatus, "default" | "secondary" | "destructive" | "outline"> = {
  PENDING: "secondary",
  APPROVED: "outline",
  REJECTED: "destructive",
  PAID: "default"
};

export default function ExpensesPage() {
  const [status, setStatus] = useState<ExpenseStatus | "all">("all");
  const { data: expenses, isPending } = useExpenses(status === "all" ? {} : { status });
  const approve = useApproveExpense();
  const reject = useRejectExpense();
  const markPaid = useMarkExpensePaid();

  function handleError(error: unknown) {
    toast.error(error instanceof ApiError ? error.message : "Something went wrong");
  }

  const columns: ColumnDef<Expense>[] = useMemo(
    () => [
      { accessorKey: "description", header: "Description" },
      { id: "category", header: "Category", cell: ({ row }) => row.original.category.name },
      { id: "vendor", header: "Vendor", cell: ({ row }) => row.original.vendor?.name ?? "—" },
      {
        id: "amount",
        header: "Amount",
        cell: ({ row }) => Number(row.original.amount).toFixed(2)
      },
      {
        id: "expenseDate",
        header: "Date",
        cell: ({ row }) => format(new Date(row.original.expenseDate), "PP")
      },
      {
        id: "requestedBy",
        header: "Requested by",
        cell: ({ row }) => `${row.original.requestedBy.firstName} ${row.original.requestedBy.lastName}`
      },
      {
        id: "status",
        header: "Status",
        cell: ({ row }) => <Badge variant={STATUS_VARIANT[row.original.status]}>{row.original.status}</Badge>
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => {
          const expense = row.original;
          if (expense.status === "PENDING") {
            return (
              <div className="flex justify-end gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => approve.mutate(expense.id, { onError: handleError })}>
                  Approve
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => reject.mutate(expense.id, { onError: handleError })}>
                  Reject
                </Button>
              </div>
            );
          }
          if (expense.status === "APPROVED") {
            return (
              <div className="flex justify-end">
                <Button size="sm" onClick={() => markPaid.mutate(expense.id, { onError: handleError })}>
                  Mark paid
                </Button>
              </div>
            );
          }
          return null;
        }
      }
    ],
    [approve, reject, markPaid]
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Expenses</h1>
        <div className="flex gap-2">
          <ManageCategoriesDialog />
          <ManageVendorsDialog />
          <CreateExpenseDialog />
        </div>
      </div>
      <DataTable
        columns={columns}
        data={expenses ?? []}
        isLoading={isPending}
        emptyMessage="No expenses yet."
        toolbar={
          <Select value={status} onValueChange={(v) => setStatus(v as ExpenseStatus | "all")}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              {STATUS_OPTIONS.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        }
      />
    </div>
  );
}
