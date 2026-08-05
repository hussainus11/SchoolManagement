"use client";

import { format } from "date-fns";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useAnnouncements } from "@/hooks/use-notifications";
import { CreateAnnouncementDialog } from "./create-announcement-dialog";

export default function AnnouncementsPage() {
  const { data: announcements, isPending } = useAnnouncements();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Announcements</h1>
          <p className="text-muted-foreground">Broadcast messages to roles across the school.</p>
        </div>
        <CreateAnnouncementDialog />
      </div>

      {isPending && <p className="text-muted-foreground text-sm">Loading...</p>}

      <div className="space-y-3">
        {(announcements ?? []).map((a) => (
          <Card key={a.id}>
            <CardContent className="space-y-2 pt-6">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold">{a.title}</h3>
                <span className="text-muted-foreground text-xs">{format(new Date(a.createdAt), "PPp")}</span>
              </div>
              <p className="text-sm">{a.body}</p>
              <div className="flex flex-wrap gap-1.5">
                {a.targetRoles.map((role) => (
                  <Badge key={role} variant="secondary">
                    {role}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground text-xs">
                By {a.createdBy.firstName} {a.createdBy.lastName}
              </p>
            </CardContent>
          </Card>
        ))}
        {announcements?.length === 0 && (
          <p className="text-muted-foreground text-sm">No announcements sent yet.</p>
        )}
      </div>
    </div>
  );
}
