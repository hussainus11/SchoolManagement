"use client";

import { Area, AreaChart, CartesianGrid } from "recharts";

import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import CalendarDateRangePicker from "@/components/custom-date-range-picker";

const chartConfig = {
  collected: {
    label: "Collected",
    color: "var(--chart-1)"
  }
} satisfies ChartConfig;

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function formatPeriod(period: string) {
  const [, month] = period.split("-");
  return MONTH_NAMES[Number(month) - 1] ?? period;
}

interface FeeMonth {
  period: string;
  collected: number;
}

export function CourseProgressByMonth({ feeCollectionByMonth = [] }: { feeCollectionByMonth?: FeeMonth[] }) {
  const chartData = feeCollectionByMonth.map((m) => ({ month: formatPeriod(m.period), collected: m.collected }));

  const last = feeCollectionByMonth.at(-1)?.collected ?? 0;
  const previous = feeCollectionByMonth.at(-2)?.collected ?? 0;
  const changePercent = previous > 0 ? Number((((last - previous) / previous) * 100).toFixed(1)) : 0;

  return (
    <Card className="pb-0">
      <CardHeader>
        <CardTitle>Fee Collection by Month</CardTitle>
        <CardDescription className="flex items-center gap-2">
          Compared to previous month {previous.toFixed(2)}
          <Badge>
            {changePercent >= 0 ? "+" : ""}
            {changePercent}%
          </Badge>
        </CardDescription>
        <CardAction>
          <CalendarDateRangePicker />
        </CardAction>
      </CardHeader>
      <ChartContainer className="w-full lg:h-[430px]" config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 0,
            right: 0
          }}>
          <CartesianGrid vertical={false} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <defs>
            <linearGradient id="fillCollected" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-collected)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="var(--color-collected)" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <Area
            dataKey="collected"
            type="natural"
            fill="url(#fillCollected)"
            fillOpacity={0.4}
            stroke="var(--color-collected)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </Card>
  );
}
