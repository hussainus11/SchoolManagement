"use client";

import { useState } from "react";
import { KeyRoundIcon } from "lucide-react";
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
import { ApiError } from "@/lib/api/client";

interface ResetPasswordButtonProps {
  personName: string;
  onReset: () => Promise<{ tempPassword: string }>;
}

export function ResetPasswordButton({ personName, onReset }: ResetPasswordButtonProps) {
  const [open, setOpen] = useState(false);
  const [tempPassword, setTempPassword] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleConfirm() {
    setIsPending(true);
    try {
      const result = await onReset();
      setTempPassword(result.tempPassword);
    } catch (error) {
      toast.error(error instanceof ApiError ? error.message : "Something went wrong");
      setOpen(false);
    } finally {
      setIsPending(false);
    }
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) setTempPassword(null);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <KeyRoundIcon />
          Reset password
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reset password</DialogTitle>
        </DialogHeader>
        {tempPassword ? (
          <div className="space-y-4">
            <p className="text-sm">
              A new temporary password has been set for <span className="font-medium">{personName}</span>. Share
              it with them &mdash; it won&apos;t be shown again. They&apos;ll be asked to set a new password the
              next time they sign in.
            </p>
            <div className="bg-muted rounded-md border p-3 font-mono text-sm">{tempPassword}</div>
            <DialogFooter>
              <Button onClick={() => handleOpenChange(false)}>Done</Button>
            </DialogFooter>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm">
              This generates a new temporary password for {personName} and signs them out of every device.
              Continue?
            </p>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)} disabled={isPending}>
                Cancel
              </Button>
              <Button onClick={handleConfirm} disabled={isPending}>
                {isPending ? "Resetting..." : "Reset password"}
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
