"use client";

import { BellIcon, ClockIcon } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  useMarkAllNotificationsRead,
  useMarkNotificationRead,
  useNotifications,
  useUnreadCount
} from "@/hooks/use-notifications";

const Notifications = () => {
  const isMobile = useIsMobile();
  const { data: notifications } = useNotifications();
  const { data: unreadCount } = useUnreadCount();
  const markRead = useMarkNotificationRead();
  const markAllRead = useMarkAllNotificationsRead();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" className="relative">
          <>
            <BellIcon className={unreadCount ? "animate-tada" : ""} />
            {!!unreadCount && (
              <span className="bg-destructive absolute end-0 top-0 block size-2 shrink-0 rounded-full"></span>
            )}
          </>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align={isMobile ? "center" : "end"} className="ms-4 w-80 p-0">
        <DropdownMenuLabel className="bg-background dark:bg-muted sticky top-0 z-10 p-0">
          <div className="flex justify-between border-b px-6 py-4">
            <div className="font-medium">Notifications</div>
            {!!unreadCount && (
              <Button
                variant="link"
                className="h-auto p-0 text-xs"
                size="sm"
                onClick={() => markAllRead.mutate()}>
                Mark all read
              </Button>
            )}
          </div>
        </DropdownMenuLabel>

        <ScrollArea className="h-[350px]">
          {(notifications ?? []).map((item) => (
            <DropdownMenuItem
              key={item.id}
              className="group flex cursor-pointer items-start gap-9 rounded-none border-b px-4 py-3"
              onSelect={(e) => {
                e.preventDefault();
                if (!item.isRead) markRead.mutate(item.id);
              }}>
              <div className="flex flex-1 items-start gap-2">
                <div className="flex flex-1 flex-col gap-1">
                  <div className="truncate text-sm font-medium">{item.title}</div>
                  <div className="text-muted-foreground line-clamp-2 text-xs">{item.body}</div>
                  <div className="text-muted-foreground flex items-center gap-1 text-xs">
                    <ClockIcon className="size-3!" />
                    {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
                  </div>
                </div>
              </div>
              {!item.isRead && (
                <div className="flex-0">
                  <span className="bg-destructive/80 block size-2 rounded-full border" />
                </div>
              )}
            </DropdownMenuItem>
          ))}
          {notifications?.length === 0 && (
            <div className="text-muted-foreground p-6 text-center text-sm">No notifications yet.</div>
          )}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notifications;
