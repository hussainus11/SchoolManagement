"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { type TransportRoute, useUpdateTransportRoute, useVehicles } from "@/hooks/use-transport";
import { ApiError } from "@/lib/api/client";

export function EditRouteDialog({
  route,
  onOpenChange
}: {
  route: TransportRoute | null;
  onOpenChange: (open: boolean) => void;
}) {
  const [name, setName] = useState("");
  const [vehicleId, setVehicleId] = useState("");
  const { data: vehicles } = useVehicles();
  const updateRoute = useUpdateTransportRoute();

  useEffect(() => {
    if (route) {
      setName(route.name);
      setVehicleId(route.vehicleId);
    }
  }, [route]);

  function handleSave() {
    if (!route || !name.trim() || !vehicleId) return;
    updateRoute.mutate(
      { id: route.id, name: name.trim(), vehicleId },
      {
        onSuccess: () => {
          toast.success("Route updated");
          onOpenChange(false);
        },
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Dialog open={!!route} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit route</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">Name</p>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Route A" />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Vehicle</p>
            <Select value={vehicleId} onValueChange={setVehicleId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a vehicle" />
              </SelectTrigger>
              <SelectContent>
                {(vehicles ?? []).map((v) => (
                  <SelectItem key={v.id} value={v.id}>
                    {v.registrationNumber}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave} disabled={updateRoute.isPending}>
            {updateRoute.isPending ? "Saving..." : "Save changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
