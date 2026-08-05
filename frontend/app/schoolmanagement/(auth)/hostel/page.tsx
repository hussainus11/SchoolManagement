"use client";

import { useMemo, useState } from "react";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";
import { BedDoubleIcon, ClipboardListIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { DataTableRowActions } from "@/components/data-table-row-actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  type Hostel,
  type HostelAllocation,
  useDeleteHostel,
  useHostelAllocations,
  useHostels,
  useVacateHostel
} from "@/hooks/use-hostel";
import { ApiError } from "@/lib/api/client";
import { AllocateDialog } from "./allocate-dialog";
import { CreateHostelDialog } from "./create-hostel-dialog";
import { ManageRoomsDialog } from "./manage-rooms-dialog";

function handleError(error: unknown) {
  toast.error(error instanceof ApiError ? error.message : "Something went wrong");
}

function HostelsTab() {
  const { data: hostels, isPending } = useHostels();
  const deleteHostel = useDeleteHostel();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleDelete(id: string) {
    setDeletingId(id);
    deleteHostel.mutate(id, {
      onSuccess: () => toast.success("Hostel deleted"),
      onError: handleError,
      onSettled: () => setDeletingId(null)
    });
  }

  const columns: ColumnDef<Hostel>[] = useMemo(
    () => [
      { accessorKey: "name", header: "Name" },
      { id: "warden", header: "Warden", cell: ({ row }) => row.original.wardenName ?? "-" },
      {
        id: "occupancy",
        header: "Occupancy",
        cell: ({ row }) => {
          const capacity = row.original.rooms.reduce((sum, r) => sum + r.capacity, 0);
          const occupied = row.original.rooms.reduce((sum, r) => sum + r.allocations.length, 0);
          return `${occupied} / ${capacity}`;
        }
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <div className="flex justify-end gap-2">
            <ManageRoomsDialog hostel={row.original} />
            <DataTableRowActions
              onDelete={() => handleDelete(row.original.id)}
              isDeleting={deleteHostel.isPending && deletingId === row.original.id}
              deleteTitle="Delete this hostel?"
              deleteDescription={`This will permanently remove ${row.original.name} and its rooms, and cannot be undone.`}
            />
          </div>
        )
      }
    ],
    [deleteHostel.isPending, deletingId]
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <CreateHostelDialog />
      </div>
      <DataTable columns={columns} data={hostels ?? []} isLoading={isPending} emptyMessage="No hostels yet." />
    </div>
  );
}

function AllocationsTab() {
  const { data: allocations, isPending } = useHostelAllocations({ active: true });
  const vacate = useVacateHostel();

  const columns: ColumnDef<HostelAllocation>[] = useMemo(
    () => [
      {
        id: "student",
        header: "Student",
        cell: ({ row }) => `${row.original.student.firstName} ${row.original.student.lastName}`
      },
      { id: "hostel", header: "Hostel", cell: ({ row }) => row.original.room?.hostel.name ?? "-" },
      { id: "room", header: "Room", cell: ({ row }) => row.original.room?.roomNumber ?? "-" },
      {
        id: "allocatedDate",
        header: "Allocated",
        cell: ({ row }) => format(new Date(row.original.allocatedDate), "PP")
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <div className="flex justify-end">
            <Button
              size="sm"
              variant="outline"
              onClick={() => vacate.mutate(row.original.id, { onError: handleError })}>
              Vacate
            </Button>
          </div>
        )
      }
    ],
    [vacate]
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <AllocateDialog />
      </div>
      <DataTable
        columns={columns}
        data={allocations ?? []}
        isLoading={isPending}
        emptyMessage="No active allocations."
      />
    </div>
  );
}

export default function HostelPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Hostel</h1>
        <p className="text-muted-foreground">Manage hostels, rooms and student allocations.</p>
      </div>
      <Tabs defaultValue="hostels">
        <TabsList>
          <TabsTrigger value="hostels">
            <BedDoubleIcon />
            Hostels
          </TabsTrigger>
          <TabsTrigger value="allocations">
            <ClipboardListIcon />
            Allocations
          </TabsTrigger>
        </TabsList>
        <TabsContent value="hostels">
          <HostelsTab />
        </TabsContent>
        <TabsContent value="allocations">
          <AllocationsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
