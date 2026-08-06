"use client";

import { useMemo } from "react";
import Link from "next/link";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/data-table";
import { type AdminSchool, useAdminSchools } from "@/hooks/use-admin-schools";
import { BILLING_STATUS_LABEL, BILLING_STATUS_VARIANT, billingStatus } from "@/lib/billing-status";

export default function SchoolsPage() {
  const { data: schools, isPending } = useAdminSchools();

  const columns: ColumnDef<AdminSchool>[] = useMemo(
    () => [
      {
        id: "name",
        header: "School",
        cell: ({ row }) => (
          <Link href={`/schoolmanagement/schools/${row.original.id}`} className="hover:underline">
            {row.original.name}
          </Link>
        )
      },
      { accessorKey: "slug", header: "Slug" },
      { id: "branches", header: "Branches", cell: ({ row }) => row.original._count.branches },
      { id: "users", header: "Users", cell: ({ row }) => row.original._count.users },
      {
        id: "status",
        header: "Status",
        cell: ({ row }) => {
          const status = billingStatus({
            nextBillingDate: row.original.nextBillingDate,
            billingRecordsCount: row.original._count.billingRecords
          });
          return <Badge variant={BILLING_STATUS_VARIANT[status]}>{BILLING_STATUS_LABEL[status]}</Badge>;
        }
      },
      {
        id: "nextBillingDate",
        header: "Next billing",
        cell: ({ row }) =>
          row.original.nextBillingDate ? format(new Date(row.original.nextBillingDate), "PP") : "—"
      },
      {
        id: "createdAt",
        header: "Registered",
        cell: ({ row }) => format(new Date(row.original.createdAt), "PP")
      }
    ],
    []
  );

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Schools</h1>
        <p className="text-muted-foreground">
          Every school registered on the platform. New schools get a 10-day trial automatically.
        </p>
      </div>
      <DataTable columns={columns} data={schools ?? []} isLoading={isPending} emptyMessage="No schools yet." />
    </div>
  );
}
