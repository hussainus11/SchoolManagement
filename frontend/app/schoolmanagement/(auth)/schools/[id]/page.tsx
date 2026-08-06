"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";
import { PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { BackButton } from "@/components/back-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import { DatePicker } from "@/components/date-picker";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { type BillingRecord, useAdminSchool, useRecordBilling } from "@/hooks/use-admin-schools";
import { ApiError } from "@/lib/api/client";
import { BILLING_STATUS_LABEL, BILLING_STATUS_VARIANT, billingStatus } from "@/lib/billing-status";

export default function SchoolProfilePage() {
  const params = useParams<{ id: string }>();
  const { data: school, isPending } = useAdminSchool(params.id);

  const columns: ColumnDef<BillingRecord>[] = useMemo(
    () => [
      {
        id: "recordedAt",
        header: "Recorded",
        cell: ({ row }) => format(new Date(row.original.createdAt), "PP")
      },
      {
        id: "period",
        header: "Period",
        cell: ({ row }) =>
          `${format(new Date(row.original.periodStart), "PP")} → ${format(new Date(row.original.periodEnd), "PP")}`
      },
      {
        id: "amount",
        header: "Amount",
        cell: ({ row }) => (row.original.amount ? Number(row.original.amount).toFixed(2) : "—")
      },
      { id: "note", header: "Note", cell: ({ row }) => row.original.note ?? "—" },
      {
        id: "recordedBy",
        header: "Recorded by",
        cell: ({ row }) => `${row.original.recordedBy.firstName} ${row.original.recordedBy.lastName}`
      }
    ],
    []
  );

  if (isPending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-40" />
      </div>
    );
  }

  if (!school) {
    return <p className="text-muted-foreground">School not found.</p>;
  }

  const status = billingStatus({
    nextBillingDate: school.nextBillingDate,
    billingRecordsCount: school._count.billingRecords
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <BackButton href="/schoolmanagement/schools" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{school.name}</h1>
            <p className="text-muted-foreground">{school.slug}</p>
          </div>
        </div>
        <RecordBillingDialog schoolId={school.id} currentNextBillingDate={school.nextBillingDate} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant={BILLING_STATUS_VARIANT[status]}>{BILLING_STATUS_LABEL[status]}</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">Next billing</CardTitle>
          </CardHeader>
          <CardContent className="text-lg font-semibold">
            {school.nextBillingDate ? format(new Date(school.nextBillingDate), "PP") : "—"}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">Branches</CardTitle>
          </CardHeader>
          <CardContent className="text-lg font-semibold">{school._count.branches}</CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">Users</CardTitle>
          </CardHeader>
          <CardContent className="text-lg font-semibold">{school._count.users}</CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>School details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2">
          <div>
            <p className="text-muted-foreground text-sm">Email</p>
            <p>{school.email ?? "—"}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Phone</p>
            <p>{school.phone ?? "—"}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Address</p>
            <p>{school.address ?? "—"}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Registered</p>
            <p>{format(new Date(school.createdAt), "PP")}</p>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Billing history</h2>
        <DataTable
          columns={columns}
          data={school.billingRecords}
          isLoading={false}
          emptyMessage="No payments recorded yet."
        />
      </div>
    </div>
  );
}

const billingFormSchema = z.object({
  nextBillingDate: z.date({ required_error: "Next billing date is required" }),
  amount: z.coerce.number().min(0).optional(),
  note: z.string().max(500).optional()
});
type BillingFormValues = z.infer<typeof billingFormSchema>;

function RecordBillingDialog({
  schoolId,
  currentNextBillingDate
}: {
  schoolId: string;
  currentNextBillingDate: string | null;
}) {
  const [open, setOpen] = useState(false);
  const recordBilling = useRecordBilling();

  const form = useForm<BillingFormValues>({
    resolver: zodResolver(billingFormSchema),
    defaultValues: {
      nextBillingDate: currentNextBillingDate ? new Date(currentNextBillingDate) : undefined,
      note: ""
    }
  });

  function onOpenChange(next: boolean) {
    if (next) {
      form.reset({
        nextBillingDate: currentNextBillingDate ? new Date(currentNextBillingDate) : undefined,
        note: ""
      });
    }
    setOpen(next);
  }

  function onSubmit(values: BillingFormValues) {
    recordBilling.mutate(
      {
        id: schoolId,
        nextBillingDate: values.nextBillingDate.toISOString().slice(0, 10),
        amount: values.amount,
        note: values.note || undefined
      },
      {
        onSuccess: () => {
          toast.success("Billing recorded");
          setOpen(false);
        },
        onError: (error) => {
          toast.error(error instanceof ApiError ? error.message : "Something went wrong");
        }
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm">
          <PlusIcon />
          Record payment / extend
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Record payment</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="nextBillingDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New next billing date</FormLabel>
                  <FormControl>
                    <DatePicker value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount paid (optional)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" min="0" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Note (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Bank transfer ref #1234" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={recordBilling.isPending}>
                {recordBilling.isPending ? "Saving..." : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
