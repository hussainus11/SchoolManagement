"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";
import { PlayIcon } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { DatePicker } from "@/components/date-picker";
import { MonthPicker } from "@/components/month-picker";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { type Invoice, type InvoiceStatus, useGenerateMonthlyInvoices, useInvoices } from "@/hooks/use-invoices";
import { useAcademicYears, useBranches } from "@/hooks/use-school-settings";
import { ApiError } from "@/lib/api/client";

const STATUS_OPTIONS: InvoiceStatus[] = ["PENDING", "PARTIALLY_PAID", "PAID", "OVERDUE", "CANCELLED"];

const STATUS_VARIANT: Record<InvoiceStatus, "default" | "secondary" | "destructive" | "outline"> = {
  PENDING: "secondary",
  PARTIALLY_PAID: "outline",
  PAID: "default",
  OVERDUE: "destructive",
  CANCELLED: "destructive"
};

export default function FeesPage() {
  const [status, setStatus] = useState<InvoiceStatus | "all">("all");
  const [period, setPeriod] = useState("");
  const { data: invoices, isPending } = useInvoices({
    status: status === "all" ? undefined : status,
    period: period || undefined
  });

  const columns: ColumnDef<Invoice>[] = useMemo(
    () => [
      {
        id: "invoiceNumber",
        header: "Invoice #",
        cell: ({ row }) => (
          <Link href={`/schoolmanagement/fees/${row.original.id}`} className="hover:underline">
            {row.original.invoiceNumber}
          </Link>
        )
      },
      {
        id: "student",
        header: "Student",
        cell: ({ row }) => `${row.original.student.firstName} ${row.original.student.lastName}`
      },
      { accessorKey: "period", header: "Period" },
      {
        id: "total",
        header: "Total",
        cell: ({ row }) => Number(row.original.total).toFixed(2)
      },
      {
        id: "amountPaid",
        header: "Paid",
        cell: ({ row }) => Number(row.original.amountPaid).toFixed(2)
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
        <h1 className="text-2xl font-bold tracking-tight">Fees &amp; Invoices</h1>
        <GenerateMonthlyInvoicesDialog />
      </div>
      <DataTable
        columns={columns}
        data={invoices ?? []}
        isLoading={isPending}
        emptyMessage="No invoices yet."
        toolbar={
          <div className="flex gap-2">
            <MonthPicker value={period} onChange={setPeriod} placeholder="All months" className="w-40" clearable />
            <Select value={status} onValueChange={(v) => setStatus(v as InvoiceStatus | "all")}>
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
          </div>
        }
      />
    </div>
  );
}

function GenerateMonthlyInvoicesDialog() {
  const [open, setOpen] = useState(false);
  const { data: years } = useAcademicYears();
  const { data: branches } = useBranches();
  const currentYear = years?.find((y) => y.isCurrent) ?? years?.[0];

  const [academicYearId, setAcademicYearId] = useState<string>("");
  const [branchId, setBranchId] = useState<string>("all");
  const [period, setPeriod] = useState("");
  const [dueDate, setDueDate] = useState<Date | undefined>(undefined);

  const generate = useGenerateMonthlyInvoices();

  function handleOpenChange(next: boolean) {
    if (next) {
      const now = new Date();
      setAcademicYearId(currentYear?.id ?? "");
      setBranchId("all");
      setPeriod(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`);
      setDueDate(undefined);
    }
    setOpen(next);
  }

  function handleSubmit() {
    if (!academicYearId || !period || !dueDate) {
      toast.error("Academic year, period, and due date are required");
      return;
    }
    generate.mutate(
      {
        academicYearId,
        period,
        dueDate: format(dueDate, "yyyy-MM-dd"),
        branchId: branchId === "all" ? undefined : branchId
      },
      {
        onSuccess: (result) => {
          toast.success(`Generated ${result.created} invoice(s), skipped ${result.skipped}`);
          setOpen(false);
        },
        onError: (error) => {
          toast.error(error instanceof ApiError ? error.message : "Something went wrong");
        }
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm">
          <PlayIcon />
          Generate monthly invoices
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate monthly invoices</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Academic year</Label>
            <Select value={academicYearId} onValueChange={setAcademicYearId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select academic year" />
              </SelectTrigger>
              <SelectContent>
                {(years ?? []).map((y) => (
                  <SelectItem key={y.id} value={y.id}>
                    {y.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Branch</Label>
            <Select value={branchId} onValueChange={setBranchId}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All branches</SelectItem>
                {(branches ?? []).map((b) => (
                  <SelectItem key={b.id} value={b.id}>
                    {b.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Period</Label>
              <MonthPicker value={period} onChange={setPeriod} />
            </div>
            <div className="space-y-2">
              <Label>Due date</Label>
              <DatePicker value={dueDate} onChange={setDueDate} />
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            Creates one invoice per active student using their class&apos;s monthly fee structure. Students
            who already have an invoice for this period are skipped.
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
