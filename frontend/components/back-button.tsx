"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackButton({ href }: { href: string }) {
  return (
    <Button variant="ghost" size="icon" asChild aria-label="Go back">
      <Link href={href}>
        <ArrowLeftIcon />
      </Link>
    </Button>
  );
}
