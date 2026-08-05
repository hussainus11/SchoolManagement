"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { type TransportRoute, useAddRouteStop, useRemoveRouteStop } from "@/hooks/use-transport";
import { ApiError } from "@/lib/api/client";

export function ManageStopsDialog({ route }: { route: TransportRoute }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [fee, setFee] = useState("");
  const addStop = useAddRouteStop();
  const removeStop = useRemoveRouteStop();

  function handleAdd() {
    if (!name.trim() || !fee) return;
    addStop.mutate(
      { routeId: route.id, name: name.trim(), fee: Number(fee), order: route.stops.length },
      {
        onSuccess: () => {
          setName("");
          setFee("");
        },
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Stops ({route.stops.length})
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Stops &middot; {route.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div className="flex gap-2">
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Stop name" />
            <Input
              value={fee}
              onChange={(e) => setFee(e.target.value)}
              placeholder="Fee"
              type="number"
              className="w-28"
            />
            <Button onClick={handleAdd} disabled={addStop.isPending}>
              Add
            </Button>
          </div>
          <ul className="max-h-60 space-y-1 overflow-y-auto text-sm">
            {route.stops.map((s) => (
              <li key={s.id} className="flex items-center justify-between rounded-md border px-3 py-1.5">
                <span>
                  {s.name} <span className="text-muted-foreground">&middot; fee {s.fee}</span>
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() =>
                    removeStop.mutate(
                      { routeId: route.id, stopId: s.id },
                      {
                        onError: (error) =>
                          toast.error(error instanceof ApiError ? error.message : "Something went wrong")
                      }
                    )
                  }>
                  Remove
                </Button>
              </li>
            ))}
            {route.stops.length === 0 && <p className="text-muted-foreground text-sm">No stops yet.</p>}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
