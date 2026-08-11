"use client";

import { useState } from "react";
import { CheckCircle2Icon, MessageCircleIcon, XCircleIcon } from "lucide-react";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { EmbeddedSignupButton } from "@/components/whatsapp/embedded-signup-button";
import { useConnectWhatsApp, useDisconnectWhatsApp, useWhatsAppStatus, type WhatsAppStatusView } from "@/hooks/use-whatsapp";
import { ApiError } from "@/lib/api/client";

const STATUS_LABEL: Record<WhatsAppStatusView, string> = {
  NOT_CONNECTED: "Not connected",
  CONNECTING: "Connecting...",
  CONNECTED: "Connected",
  DISCONNECTED: "Disconnected",
  ERROR: "Connection error"
};

const STATUS_VARIANT: Record<WhatsAppStatusView, "default" | "secondary" | "destructive" | "outline"> = {
  NOT_CONNECTED: "secondary",
  CONNECTING: "outline",
  CONNECTED: "default",
  DISCONNECTED: "secondary",
  ERROR: "destructive"
};

const BENEFITS = [
  "Fee reminders and receipts sent straight to parents' WhatsApp",
  "Attendance and absence alerts delivered instantly",
  "Exam results and school announcements reach every parent, not just those with the parent portal app",
  "Uses your school's own WhatsApp number, verified and secured by Meta"
];

export default function WhatsAppSettingsPage() {
  const { data: status, isPending } = useWhatsAppStatus();
  const connectWhatsApp = useConnectWhatsApp();
  const disconnectWhatsApp = useDisconnectWhatsApp();
  const [confirmDisconnectOpen, setConfirmDisconnectOpen] = useState(false);

  if (isPending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-32" />
      </div>
    );
  }

  const isConnected = status?.status === "CONNECTED";
  const isConnecting = status?.status === "CONNECTING" || connectWhatsApp.isPending;

  function handleDisconnect() {
    disconnectWhatsApp.mutate(undefined, {
      onSuccess: () => {
        toast.success("WhatsApp disconnected");
        setConfirmDisconnectOpen(false);
      },
      onError: (error) => {
        toast.error(error instanceof ApiError ? error.message : "Something went wrong");
        setConfirmDisconnectOpen(false);
      }
    });
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">WhatsApp</h1>
        <p className="text-muted-foreground">Send fee reminders, attendance alerts, and announcements to parents on WhatsApp.</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Connection</CardTitle>
          {status && <Badge variant={STATUS_VARIANT[status.status]}>{STATUS_LABEL[status.status]}</Badge>}
        </CardHeader>
        <CardContent className="space-y-4">
          {isConnected ? (
            <>
              <dl className="grid gap-3 sm:grid-cols-2">
                <div>
                  <dt className="text-muted-foreground text-sm">Business name</dt>
                  <dd className="font-medium">{status?.verifiedName ?? "—"}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground text-sm">WhatsApp number</dt>
                  <dd className="font-medium">{status?.displayPhoneNumber ?? "—"}</dd>
                </div>
              </dl>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setConfirmDisconnectOpen(true)}>
                  Disconnect
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-start gap-3">
                <MessageCircleIcon className="text-muted-foreground mt-0.5 size-5 shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Connect your school&apos;s WhatsApp number through Meta&apos;s official signup process. You&apos;ll be
                  guided by Meta through choosing or creating your business account — nothing to copy, paste, or
                  configure manually.
                </p>
              </div>
              {status?.status === "ERROR" && status.lastError && (
                <div className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
                  <XCircleIcon className="mt-0.5 size-4 shrink-0" />
                  <span>{status.lastError}</span>
                </div>
              )}
              <ul className="space-y-2">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm">
                    <CheckCircle2Icon className="text-primary mt-0.5 size-4 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <EmbeddedSignupButton
                disabled={isConnecting}
                onComplete={(result) =>
                  connectWhatsApp.mutate(result, {
                    onSuccess: () => toast.success("WhatsApp connected"),
                    onError: (error) => toast.error(error instanceof ApiError ? error.message : "Couldn't finish connecting WhatsApp")
                  })
                }
                onCancel={() => toast.info("WhatsApp setup was cancelled")}
                onError={(message) => toast.error(message)}
              />
            </>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={confirmDisconnectOpen} onOpenChange={setConfirmDisconnectOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Disconnect WhatsApp?</AlertDialogTitle>
            <AlertDialogDescription>
              Parents will stop receiving WhatsApp notifications until you reconnect. Past message history is kept.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={disconnectWhatsApp.isPending}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              disabled={disconnectWhatsApp.isPending}
              onClick={handleDisconnect}>
              {disconnectWhatsApp.isPending ? "Disconnecting..." : "Disconnect"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
