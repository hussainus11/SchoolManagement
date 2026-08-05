"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { ColumnDef } from "@tanstack/react-table";
import { PlayIcon } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { MonthPicker } from "@/components/month-picker";
import { type Payslip, type PayslipStatus, useGenerateMonthlyPayslips, usePayslips } from "@/hooks/use-payroll";
import { ApiError } from "@/lib/api/client";

const STATUS_VARIANT: Record<PayslipStatus, "default" | "secondary" | "outline"> = {
  DRAFT: "secondary",
  FINALIZED: "outline",
  PAID: "default"
};

function currentMonth() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

export default function PayrollPage() {
  const [month, setMonth] = useState(currentMonth());
  const { data: payslips, isPending } = usePayslips({ month });

  const columns: ColumnDef<Payslip>[] = useMemo(
    () => [
      {
        id: "name",
        header: "Employee",
        cell: ({ row }) => (
          <Link href={`/schoolmanagement/payroll/${row.original.id}`} className="hover:underline">
            {row.original.user.firstName} {row.original.user.lastName}
          </Link>
        )
      },
      { accessorKey: "month", header: "Month" },
      {
        id: "netSalary",
        header: "Net salary",
        cell: ({ row }) => Number(row.original.netSalary).toFixed(2)
      },
      {
        id: "status",
        header: "Status",
        cell: ({ row }) => (
          <Badge variant={STATUS_VARIANT[row.original.status]}>{row.original.status}</Badge>
        )
      }
    ],
    []
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Payroll</h1>
        <GenerateMonthlyPayslipsDialog />
      </div>
      <DataTable
        columns={columns}
        data={payslips ?? []}
        isLoading={isPending}
        emptyMessage="No payslips for this month."
        toolbar={<MonthPicker value={month} onChange={setMonth} className="w-40" />}
      />
    </div>
  );
}

function GenerateMonthlyPayslipsDialog() {
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState(currentMonth());
  const generate = useGenerateMonthlyPayslips();

  function handleSubmit() {
    generate.mutate(
      { month },
      {
        onSuccess: (result) => {
          toast.success(`Generated ${result.created} payslip(s), skipped ${result.skipped}`);
          setOpen(false);
        },
        onError: (error) => {
          toast.error(error instanceof ApiError ? error.message : "Something went wrong");
        }
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <PlayIcon />
          Generate monthly payslips
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate monthly payslips</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Month</Label>
            <MonthPicker value={month} onChange={setMonth} />
          </div>
          <p className="text-muted-foreground text-sm">
            Creates one payslip for every staff member with an active salary structure. Existing
            payslips for this month are skipped.
          </p>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} disabled={generate.isPending}>
            {generate.isPending ? "Generating..." : "Generate"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
