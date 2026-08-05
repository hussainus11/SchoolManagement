"use client";

import { useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/data-table";
import { DataTableRowActions } from "@/components/data-table-row-actions";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { type Asset, type AssetStatus, useAssets, useDeleteAsset } from "@/hooks/use-inventory";
import { ApiError } from "@/lib/api/client";
import { CreateAssetDialog } from "./create-asset-dialog";
import { EditAssetDialog } from "./edit-asset-dialog";
import { ManageCategoriesDialog } from "./manage-categories-dialog";

const STATUS_OPTIONS: AssetStatus[] = ["IN_USE", "IN_STORAGE", "UNDER_REPAIR", "DISPOSED"];

const STATUS_VARIANT: Record<AssetStatus, "default" | "secondary" | "destructive" | "outline"> = {
  IN_USE: "default",
  IN_STORAGE: "secondary",
  UNDER_REPAIR: "outline",
  DISPOSED: "destructive"
};

export default function InventoryPage() {
  const [status, setStatus] = useState<AssetStatus | "all">("all");
  const { data: assets, isPending } = useAssets(status === "all" ? {} : { status });
  const deleteAsset = useDeleteAsset();
  const [editingAsset, setEditingAsset] = useState<Asset | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleError(error: unknown) {
    toast.error(error instanceof ApiError ? error.message : "Something went wrong");
  }

  function handleDelete(id: string) {
    setDeletingId(id);
    deleteAsset.mutate(id, {
      onSuccess: () => toast.success("Asset deleted"),
      onError: handleError,
      onSettled: () => setDeletingId(null)
    });
  }

  const columns: ColumnDef<Asset>[] = useMemo(
    () => [
      { accessorKey: "name", header: "Name" },
      { id: "category", header: "Category", cell: ({ row }) => row.original.category.name },
      { id: "serial", header: "Serial #", cell: ({ row }) => row.original.serialNumber ?? "-" },
      { id: "location", header: "Location", cell: ({ row }) => row.original.location ?? "-" },
      {
        id: "assignedTo",
        header: "Assigned to",
        cell: ({ row }) =>
          row.original.assignedToTeacher
            ? `${row.original.assignedToTeacher.user.firstName} ${row.original.assignedToTeacher.user.lastName}`
            : "-"
      },
      {
        id: "status",
        header: "Status",
        cell: ({ row }) => <Badge variant={STATUS_VARIANT[row.original.status]}>{row.original.status}</Badge>
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <div className="flex justify-end">
            <DataTableRowActions
              onEdit={() => setEditingAsset(row.original)}
              onDelete={() => handleDelete(row.original.id)}
              isDeleting={deleteAsset.isPending && deletingId === row.original.id}
              deleteTitle="Delete this asset?"
              deleteDescription={`This will permanently remove ${row.original.name} and cannot be undone.`}
            />
          </div>
        )
      }
    ],
    [deleteAsset.isPending, deletingId]
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Inventory</h1>
          <p className="text-muted-foreground">Track school assets and equipment.</p>
        </div>
        <div className="flex gap-2">
          <ManageCategoriesDialog />
          <CreateAssetDialog />
        </div>
      </div>
      <DataTable
        columns={columns}
        data={assets ?? []}
        isLoading={isPending}
        emptyMessage="No assets yet."
        toolbar={
          <Select value={status} onValueChange={(v) => setStatus(v as AssetStatus | "all")}>
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
