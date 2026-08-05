import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CalendarCheck2Icon, CalendarClockIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProgressStatisticsCardProps {
  activityRate: number;
  attendanceRateBar: number;
  feeCollectionRateBar: number;
  inProgressCount: number;
  completedCount: number;
}

export function ProgressStatisticsCard({
  activityRate = 0,
  attendanceRateBar = 0,
  feeCollectionRateBar = 0,
  inProgressCount = 0,
  completedCount = 0
}: ProgressStatisticsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Statistics</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-6">
        <div className="space-y-4 text-center">
          <div>Homework Grading Activity</div>
          <div className="font-display text-3xl lg:text-4xl">{activityRate}%</div>
        </div>
        <div className="grid w-full gap-8 lg:grid-cols-2">
          <div className="flex items-center gap-2">
            <Progress value={attendanceRateBar} indicatorColor="bg-orange-500" />
            <div className="text-muted-foreground text-sm">{attendanceRateBar}%</div>
          </div>
          <div className="flex items-center gap-2">
            <Progress value={feeCollectionRateBar} indicatorColor="bg-green-500" />
            <div className="text-muted-foreground text-sm">{feeCollectionRateBar}%</div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-md border p-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary flex size-10 items-center justify-center rounded-lg">
                <CalendarClockIcon className="text-primary-foreground size-4" />
              </div>
              <span className="text-2xl font-semibold">{inProgressCount}</span>
            </div>
            <Badge className="h-auto bg-orange-500 px-4 py-2 text-sm">In Progress</Badge>
          </div>
          <div className="flex items-center justify-between rounded-md border p-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary flex size-10 items-center justify-center rounded-lg">
                <CalendarCheck2Icon className="text-primary-foreground size-4" />
              </div>
              <span className="text-2xl font-semibold">{completedCount}</span>
            </div>
            <Badge className="h-auto bg-green-500 px-4 py-2 text-sm">Completed</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
