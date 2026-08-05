"use client";

import { useMemo, useState } from "react";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/data-table";
import { Input } from "@/components/ui/input";
import { type AuditLog, useAuditLogs } from "@/hooks/use-audit-logs";

export default function AuditLogsPage() {
  const [entityType, setEntityType] = useState("");
  const { data: logs, isPending } = useAuditLogs({ entityType: entityType || undefined });

  const columns: ColumnDef<AuditLog>[] = useMemo(
    () => [
      { id: "createdAt", header: "When", cell: ({ row }) => format(new Date(row.original.createdAt), "PPp") },
      {
        id: "user",
        header: "User",
        cell: ({ row }) => (row.original.user ? `${row.original.user.firstName} ${row.original.user.lastName}` : "System")
      },
      { id: "action", header: "Action", cell: ({ row }) => <Badge variant="outline">{row.original.action}</Badge> },
      { accessorKey: "entityType", header: "Entity" },
      { id: "entityId", header: "Entity ID", cell: ({ row }) => row.original.entityId ?? "-" }
    ],
    []
  );

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Audit Log</h1>
        <p className="text-muted-foreground">Read-only history of who changed what, when (most recent 200).</p>
      </div>
      <DataTable
        columns={columns}
        data={logs ?? []}
        isLoading={isPending}
        emptyMessage="No audit log entries."
        toolbar={
          <Input
            value={entityType}
            onChange={(e) => setEntityType(e.target.value)}
            placeholder="Filter by entity type (e.g. Invoice)"
            className="w-72"
          />
        }
      />
    </div>
  );
}
