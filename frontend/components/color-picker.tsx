"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const HEX_PATTERN = /^#([0-9A-Fa-f]{6})$/;

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function ColorPicker({ value, onChange, className }: ColorPickerProps) {
  const [draft, setDraft] = React.useState(value);

  React.useEffect(() => {
    setDraft(value);
  }, [value]);

  function commitIfValid(next: string) {
    if (HEX_PATTERN.test(next)) onChange(next);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className={cn("w-full justify-start gap-2 text-left font-normal", className)}>
          <span
            className="border-border size-4 shrink-0 rounded-full border"
            style={{ backgroundColor: HEX_PATTERN.test(value) ? value : undefined }}
          />
          <span className="font-mono text-sm">{value.toUpperCase()}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 space-y-3 p-3" align="start">
        <input
          type="color"
          value={HEX_PATTERN.test(draft) ? draft : "#000000"}
          onChange={(e) => {
            setDraft(e.target.value);
            onChange(e.target.value);
          }}
          className="h-24 w-full cursor-pointer rounded-md border-0 p-0"
        />
        <Input
          value={draft}
          onChange={(e) => {
            setDraft(e.target.value);
            commitIfValid(e.target.value);
          }}
          placeholder="#1E3A8A"
          className="font-mono"
          maxLength={7}
        />
      </PopoverContent>
    </Popover>
  );
}
