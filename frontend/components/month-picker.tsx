"use client";

import * as React from "react";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

interface MonthPickerProps {
  /** Selected month as "YYYY-MM", or empty/undefined for none selected. */
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  /** Shows a "Clear" action that resets the value to "". Useful for optional filters. */
  clearable?: boolean;
}

export function MonthPicker({
  value,
  onChange,
  placeholder = "Pick a month",
  className,
  clearable
}: MonthPickerProps) {
  const [open, setOpen] = React.useState(false);
  const [year, selectedMonthIndex] = value
    ? [Number(value.slice(0, 4)), Number(value.slice(5, 7)) - 1]
    : [new Date().getFullYear(), -1];
  const [viewYear, setViewYear] = React.useState(year);

  React.useEffect(() => {
    if (open) setViewYear(year);
  }, [open, year]);

  function handleSelect(monthIndex: number) {
    onChange(`${viewYear}-${String(monthIndex + 1).padStart(2, "0")}`);
    setOpen(false);
  }

  const label = value
    ? new Date(Number(value.slice(0, 4)), Number(value.slice(5, 7)) - 1).toLocaleDateString(undefined, {
        month: "long",
        year: "numeric"
      })
    : placeholder;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className={cn("w-full justify-start text-left font-normal", !value && "text-muted-foreground", className)}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {label}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-3" align="start">
        <div className="mb-2 flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-7"
            onClick={() => setViewYear((y) => y - 1)}>
            <ChevronLeftIcon className="size-4" />
          </Button>
          <span className="text-sm font-medium">{viewYear}</span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-7"
            onClick={() => setViewYear((y) => y + 1)}>
            <ChevronRightIcon className="size-4" />
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {MONTHS.map((m, i) => (
            <Button
              key={m}
              type="button"
              size="sm"
              variant={viewYear === year && i === selectedMonthIndex ? "default" : "ghost"}
              onClick={() => handleSelect(i)}>
              {m}
            </Button>
          ))}
        </div>
        {clearable && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="mt-2 w-full"
            onClick={() => {
              onChange("");
              setOpen(false);
            }}>
            Clear
          </Button>
        )}
      </PopoverContent>
    </Popover>
  );
}
