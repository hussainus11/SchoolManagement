"use client";

import { useMemo } from "react";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import { Skeleton } from "@/components/ui/skeleton";
import { useMyBilling } from "@/hooks/use-school-settings";
import { BILLING_STATUS_LABEL, BILLING_STATUS_VARIANT, billingStatus, type BillingRecord } from "@/lib/billing-status";

export default function BillingPage() {
  const { data: billing, isPending } = useMyBilling();

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
      { id: "note", header: "Note", cell: ({ row }) => row.original.note ?? "—" }
    ],
    []
  );

  if (isPending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-24" />
        <Skeleton className="h-40" />
      </div>
    );
  }

  if (!billing) {
    return <p className="text-muted-foreground">Unable to load billing information.</p>;
  }

  const status = billingStatus({
    nextBillingDate: billing.nextBillingDate,
    billingRecordsCount: billing.billingRecords.length
  });

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Billing</h1>
        <p className="text-muted-foreground">Your subscription status and payment history.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
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
            <CardTitle className="text-muted-foreground text-sm font-medium">Next billing date</CardTitle>
          </CardHeader>
          <CardContent className="text-lg font-semibold">
            {billing.nextBillingDate ? format(new Date(billing.nextBillingDate), "PP") : "—"}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Payment history</h2>
        <DataTable
          columns={columns}
          data={billing.billingRecords}
          isLoading={false}
          emptyMessage="No payments recorded yet."
        />
      </div>
    </div>
  );
}
