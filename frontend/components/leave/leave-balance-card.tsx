"use client";

import { CalendarOffIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { useLeaveBalance } from "@/hooks/use-leave-groups";

export function LeaveBalanceCard({ teacherId, staffId }: { teacherId?: string; staffId?: string }) {
  const { data, isPending } = useLeaveBalance({ teacherId, staffId });

  if (isPending) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Leave balance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
        </CardContent>
      </Card>
    );
  }

  if (!data?.leaveGroup) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Leave balance</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground flex items-center gap-2 text-sm">
          <CalendarOffIcon className="size-4" />
          No leave group assigned yet.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leave balance</CardTitle>
        <p className="text-muted-foreground text-sm">{data.leaveGroup.name}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {data.balances.map((balance) => {
          const percentUsed = balance.daysPerYear > 0 ? Math.min(100, (balance.used / balance.daysPerYear) * 100) : 0;
          return (
            <div key={balance.leaveTypeId} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{balance.leaveTypeName}</span>
                <span className="text-muted-foreground">
                  {balance.used} / {balance.daysPerYear} used &middot;{" "}
                  <span className={balance.remaining <= 0 ? "text-destructive font-medium" : ""}>
                    {balance.remaining} left
                  </span>
                </span>
              </div>
              <Progress value={percentUsed} indicatorColor={percentUsed >= 100 ? "bg-destructive" : undefined} />
            </div>
          );
        })}
        {data.balances.length === 0 && (
          <p className="text-muted-foreground text-sm">This leave group has no allocations configured.</p>
        )}
      </CardContent>
    </Card>
  );
}
