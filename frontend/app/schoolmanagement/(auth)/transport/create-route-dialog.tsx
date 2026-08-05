"use client";

import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCreateTransportRoute } from "@/hooks/use-transport";
import { useVehicles } from "@/hooks/use-transport";
import { ApiError } from "@/lib/api/client";

export function CreateRouteDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [vehicleId, setVehicleId] = useState("");
  const { data: vehicles } = useVehicles();
  const createRoute = useCreateTransportRoute();

  function handleCreate() {
    if (!name.trim() || !vehicleId) return;
    createRoute.mutate(
      { vehicleId, name: name.trim() },
      {
        onSuccess: () => {
          toast.success("Route created");
          setOpen(false);
          setName("");
          setVehicleId("");
        },
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <PlusIcon />
          New route
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New route</DialogTitle>
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
          <Button onClick={handleCreate} disabled={createRoute.isPending}>
            {createRoute.isPending ? "Creating..." : "Create route"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
