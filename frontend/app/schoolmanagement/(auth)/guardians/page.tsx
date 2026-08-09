"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { ColumnDef } from "@tanstack/react-table";

import { DataTable } from "@/components/data-table";
import { Input } from "@/components/ui/input";
import { type Guardian, useGuardians } from "@/hooks/use-guardians";

export default function GuardiansPage() {
  const [search, setSearch] = useState("");
  const { data: guardians, isPending } = useGuardians(search || undefined);

  const columns: ColumnDef<Guardian>[] = useMemo(
    () => [
      {
        id: "name",
        header: "Name",
        cell: ({ row }) => (
          <Link href={`/schoolmanagement/guardians/${row.original.id}`} className="hover:underline">
            {row.original.firstName} {row.original.lastName}
          </Link>
        )
      },
      { id: "email", header: "Email", cell: ({ row }) => row.original.email ?? "—" },
      { id: "phone", header: "Phone", cell: ({ row }) => row.original.phone ?? "—" },
      {
        id: "children",
        header: "Children",
        cell: ({ row }) => row.original._count?.students ?? 0
      }
    ],
    []
  );

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Guardians</h1>
        <p className="text-muted-foreground">
          Parents and guardians, and their combined fee ledger across all their children.
        </p>
      </div>
      <DataTable
        columns={columns}
        data={guardians ?? []}
        isLoading={isPending}
        emptyMessage="No guardians yet."
        toolbar={
          <Input
            placeholder="Search guardians..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm"
          />
        }
      />
    </div>
  );
}
