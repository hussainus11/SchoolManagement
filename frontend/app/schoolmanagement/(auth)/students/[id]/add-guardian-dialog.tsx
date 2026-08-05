"use client";

import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { type Guardian, useCreateGuardian, useGuardians } from "@/hooks/use-guardians";
import { useLinkGuardian } from "@/hooks/use-students";
import { ApiError } from "@/lib/api/client";
import { cn } from "@/lib/utils";

type Relation = "FATHER" | "MOTHER" | "GUARDIAN" | "OTHER";

export function AddGuardianDialog({ studentId }: { studentId: string }) {
  const [open, setOpen] = useState(false);
  const [creatingNew, setCreatingNew] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedGuardian, setSelectedGuardian] = useState<Guardian | null>(null);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [relation, setRelation] = useState<Relation>("GUARDIAN");
  const [isPrimary, setIsPrimary] = useState(false);

  const { data: guardians } = useGuardians(search || undefined);
  const createGuardian = useCreateGuardian();
  const linkGuardian = useLinkGuardian();

  function reset() {
    setCreatingNew(false);
    setSearch("");
    setSelectedGuardian(null);
    setNewFirstName("");
    setNewLastName("");
    setNewEmail("");
    setNewPhone("");
    setRelation("GUARDIAN");
    setIsPrimary(false);
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) reset();
  }

  function linkAndClose(guardianId: string) {
    linkGuardian.mutate(
      { studentId, guardianId, relation, isPrimary },
      {
        onSuccess: () => {
          toast.success("Guardian linked");
          handleOpenChange(false);
        },
        onError: (error) => {
          toast.error(error instanceof ApiError ? error.message : "Something went wrong");
        }
      }
    );
  }

  function handleSubmit() {
    if (creatingNew) {
      if (!newFirstName || !newLastName) {
        toast.error("First and last name are required");
        return;
      }
      createGuardian.mutate(
        {
          firstName: newFirstName,
          lastName: newLastName,
          email: newEmail || undefined,
          phone: newPhone || undefined
        },
        {
          onSuccess: (guardian) => linkAndClose(guardian.id),
          onError: (error) => {
            toast.error(error instanceof ApiError ? error.message : "Something went wrong");
          }
        }
      );
    } else {
      if (!selectedGuardian) {
        toast.error("Select a guardian or add a new one");
        return;
      }
      linkAndClose(selectedGuardian.id);
    }
  }

  const isSubmitting = createGuardian.isPending || linkGuardian.isPending;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm">
          <PlusIcon />
          Add guardian
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add guardian</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {!creatingNew ? (
            <div className="space-y-2">
              <Label>Find guardian</Label>
              <Input
                placeholder="Search by name, email, or phone"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedGuardian(null);
                }}
              />
              {search && (
                <div className="max-h-40 space-y-1 overflow-y-auto rounded-md border p-1">
                  {(guardians ?? []).map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setSelectedGuardian(g)}
                      className={cn(
                        "hover:bg-muted flex w-full flex-col rounded-sm px-2 py-1.5 text-left text-sm",
                        selectedGuardian?.id === g.id && "bg-muted"
                      )}>
                      <span className="font-medium">
                        {g.firstName} {g.lastName}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {g.email ?? g.phone ?? "—"}
                      </span>
                    </button>
                  ))}
                  {guardians?.length === 0 && (
                    <p className="text-muted-foreground p-2 text-sm">No matches.</p>
                  )}
                </div>
              )}
              <Button
                type="button"
                variant="link"
                className="h-auto p-0"
                onClick={() => setCreatingNew(true)}>
                Can&apos;t find them? Add a new guardian
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First name</Label>
                  <Input value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Last name</Label>
                  <Input value={newLastName} onChange={(e) => setNewLastName(e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Email (optional)</Label>
                  <Input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Phone (optional)</Label>
                  <Input value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
                </div>
              </div>
              <Button
                type="button"
                variant="link"
                className="h-auto p-0"
                onClick={() => setCreatingNew(false)}>
                Search existing guardians instead
              </Button>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Relation</Label>
              <Select value={relation} onValueChange={(v) => setRelation(v as Relation)}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="FATHER">Father</SelectItem>
                  <SelectItem value="MOTHER">Mother</SelectItem>
                  <SelectItem value="GUARDIAN">Guardian</SelectItem>
                  <SelectItem value="OTHER">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2 pt-6">
              <Checkbox
                id="isPrimary"
                checked={isPrimary}
                onCheckedChange={(v) => setIsPrimary(!!v)}
              />
              <Label htmlFor="isPrimary">Primary contact</Label>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Add guardian"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
