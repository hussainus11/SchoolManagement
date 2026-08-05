"use client";

import * as React from "react";
import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";

const chartConfig = {
  present: {
    label: "Present",
    color: "var(--chart-1)"
  },
  absent: {
    label: "Absent",
    color: "var(--chart-2)"
  },
  late: {
    label: "Late",
    color: "var(--chart-3)"
  }
} satisfies ChartConfig;

type ChartConfigKeys = keyof typeof chartConfig;

interface AttendanceBreakdown {
  present: number;
  absent: number;
  late: number;
}

export function ChartMostActivity({ attendance }: { attendance?: AttendanceBreakdown }) {
  const breakdown = attendance ?? { present: 0, absent: 0, late: 0 };
  const chartData = [
    { source: "present", leads: breakdown.present, fill: "var(--color-present)" },
    { source: "absent", leads: breakdown.absent, fill: "var(--color-absent)" },
    { source: "late", leads: breakdown.late, fill: "var(--color-late)" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today&apos;s Attendance</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="leads"
              nameKey="source"
              innerRadius={60}
              strokeWidth={5}
            />
          </PieChart>
        </ChartContainer>
        <div className="flex justify-around">
          {chartData.map((item) => (
            <div className="flex flex-col" key={item.source}>
              <div className="mb-1 flex items-center gap-2">
                <span
                  className="block size-2 rounded-full"
                  style={{
                    backgroundColor: chartConfig[item.source as ChartConfigKeys]?.color
                  }}></span>
                <div>{chartConfig[item.source as ChartConfigKeys]?.label}</div>
              </div>
              <div className="text-center text-xl font-semibold">{item.leads}%</div>
            </div>
          ))}
          <div></div>
        </div>
      </CardContent>
    </Card>
  );
}
