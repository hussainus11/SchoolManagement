"use client";

import { useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { BusIcon, RouteIcon, UserCheckIcon } from "lucide-react";
import { toast } from "sonner";

import { DataTable } from "@/components/data-table";
import { DataTableRowActions } from "@/components/data-table-row-actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  type StudentTransport,
  type TransportRoute,
  type Vehicle,
  useDeleteTransportRoute,
  useDeleteVehicle,
  useRemoveStudentTransport,
  useStudentTransports,
  useTransportRoutes,
  useVehicles
} from "@/hooks/use-transport";
import { ApiError } from "@/lib/api/client";
import { AssignTransportDialog } from "./assign-transport-dialog";
import { CreateRouteDialog } from "./create-route-dialog";
import { CreateVehicleDialog } from "./create-vehicle-dialog";
import { EditRouteDialog } from "./edit-route-dialog";
import { EditVehicleDialog } from "./edit-vehicle-dialog";
import { ManageStopsDialog } from "./manage-stops-dialog";

function handleError(error: unknown) {
  toast.error(error instanceof ApiError ? error.message : "Something went wrong");
}

function VehiclesTab() {
  const { data: vehicles, isPending } = useVehicles();
  const deleteVehicle = useDeleteVehicle();
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleDelete(id: string) {
    setDeletingId(id);
    deleteVehicle.mutate(id, {
      onSuccess: () => toast.success("Vehicle deleted"),
      onError: handleError,
      onSettled: () => setDeletingId(null)
    });
  }

  const columns: ColumnDef<Vehicle>[] = useMemo(
    () => [
      { accessorKey: "registrationNumber", header: "Registration" },
      { id: "driver", header: "Driver", cell: ({ row }) => row.original.driverName ?? "-" },
      { id: "phone", header: "Phone", cell: ({ row }) => row.original.driverPhone ?? "-" },
      { id: "capacity", header: "Capacity", cell: ({ row }) => row.original.capacity ?? "-" },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <div className="flex justify-end">
            <DataTableRowActions
              onEdit={() => setEditingVehicle(row.original)}
              onDelete={() => handleDelete(row.original.id)}
              isDeleting={deleteVehicle.isPending && deletingId === row.original.id}
              deleteTitle="Delete this vehicle?"
              deleteDescription={`This will permanently remove ${row.original.registrationNumber} and cannot be undone.`}
            />
          </div>
        )
      }
    ],
    [deleteVehicle.isPending, deletingId]
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <CreateVehicleDialog />
      </div>
      <DataTable columns={columns} data={vehicles ?? []} isLoading={isPending} emptyMessage="No vehicles yet." />
      <EditVehicleDialog vehicle={editingVehicle} onOpenChange={(open) => !open && setEditingVehicle(null)} />
    </div>
  );
}

function RoutesTab() {
  const { data: routes, isPending } = useTransportRoutes();
  const deleteRoute = useDeleteTransportRoute();
  const [editingRoute, setEditingRoute] = useState<TransportRoute | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleDelete(id: string) {
    setDeletingId(id);
    deleteRoute.mutate(id, {
      onSuccess: () => toast.success("Route deleted"),
      onError: handleError,
      onSettled: () => setDeletingId(null)
    });
  }

  const columns: ColumnDef<TransportRoute>[] = useMemo(
    () => [
      { accessorKey: "name", header: "Route" },
      { id: "vehicle", header: "Vehicle", cell: ({ row }) => row.original.vehicle.registrationNumber },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <div className="flex justify-end gap-2">
            <ManageStopsDialog route={row.original} />
            <DataTableRowActions
              onEdit={() => setEditingRoute(row.original)}
              onDelete={() => handleDelete(row.original.id)}
              isDeleting={deleteRoute.isPending && deletingId === row.original.id}
              deleteTitle="Delete this route?"
              deleteDescription={`This will permanently remove ${row.original.name} and cannot be undone.`}
            />
          </div>
        )
      }
    ],
    [deleteRoute.isPending, deletingId]
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <CreateRouteDialog />
      </div>
      <DataTable columns={columns} data={routes ?? []} isLoading={isPending} emptyMessage="No routes yet." />
      <EditRouteDialog route={editingRoute} onOpenChange={(open) => !open && setEditingRoute(null)} />
    </div>
  );
}

function AssignmentsTab() {
  const { data: assignments, isPending } = useStudentTransports();
  const removeAssignment = useRemoveStudentTransport();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleRemove(studentId: string) {
    setDeletingId(studentId);
    removeAssignment.mutate(studentId, {
      onSuccess: () => toast.success("Assignment removed"),
      onError: handleError,
      onSettled: () => setDeletingId(null)
    });
  }

  const columns: ColumnDef<StudentTransport>[] = useMemo(
    () => [
      {
        id: "student",
        header: "Student",
        cell: ({ row }) => `${row.original.student.firstName} ${row.original.student.lastName}`
      },
      { id: "route", header: "Route", cell: ({ row }) => row.original.route.name },
      { id: "stop", header: "Stop", cell: ({ row }) => row.original.stop.name },
      { id: "fee", header: "Fee", cell: ({ row }) => row.original.stop.fee },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <div className="flex justify-end">
            <DataTableRowActions
              onDelete={() => handleRemove(row.original.studentId)}
              isDeleting={removeAssignment.isPending && deletingId === row.original.studentId}
              deleteTitle="Remove this transport assignment?"
              deleteDescription={`This will unassign ${row.original.student.firstName} ${row.original.student.lastName} from ${row.original.route.name}.`}
              deleteLabel="Remove"
            />
          </div>
        )
      }
    ],
    [removeAssignment.isPending, deletingId]
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <AssignTransportDialog />
      </div>
      <DataTable columns={columns} data={assignments ?? []} isLoading={isPending} emptyMessage="No assignments yet." />
    </div>
  );
}

export default function TransportPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Transport</h1>
        <p className="text-muted-foreground">Manage vehicles, routes and student transport assignments.</p>
      </div>
      <Tabs defaultValue="vehicles">
        <TabsList>
          <TabsTrigger value="vehicles">
            <BusIcon />
            Vehicles
          </TabsTrigger>
          <TabsTrigger value="routes">
            <RouteIcon />
            Routes
          </TabsTrigger>
          <TabsTrigger value="assignments">
            <UserCheckIcon />
            Assignments
          </TabsTrigger>
        </TabsList>
        <TabsContent value="vehicles">
          <VehiclesTab />
        </TabsContent>
        <TabsContent value="routes">
          <RoutesTab />
        </TabsContent>
        <TabsContent value="assignments">
          <AssignmentsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
