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
import { useCreateHostel } from "@/hooks/use-hostel";
import { useBranches } from "@/hooks/use-school-settings";
import { ApiError } from "@/lib/api/client";

export function CreateHostelDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [wardenName, setWardenName] = useState("");
  const [branchId, setBranchId] = useState("");
  const { data: branches } = useBranches();
  const createHostel = useCreateHostel();

  function handleOpenChange(next: boolean) {
    if (next) {
      setName("");
      setWardenName("");
      setBranchId((prev) => prev || branches?.[0]?.id || "");
    }
    setOpen(next);
  }

  function handleCreate() {
    if (!name.trim() || !branchId) return;
    createHostel.mutate(
      { branchId, name: name.trim(), wardenName: wardenName.trim() || undefined },
      {
        onSuccess: () => {
          toast.success("Hostel created");
          setOpen(false);
        },
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm">
          <PlusIcon />
          New hostel
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New hostel</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">Name</p>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Boys Hostel A" />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Warden name (optional)</p>
            <Input value={wardenName} onChange={(e) => setWardenName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Branch</p>
            <Select value={branchId} onValueChange={setBranchId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a branch" />
              </SelectTrigger>
              <SelectContent>
                {(branches ?? []).map((b) => (
                  <SelectItem key={b.id} value={b.id}>
                    {b.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleCreate} disabled={createHostel.isPending}>
            {createHostel.isPending ? "Creating..." : "Create hostel"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
