"use client";

import { Building2Icon } from "lucide-react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useBranches } from "@/hooks/use-school-settings";
import { useBranchFilterStore } from "@/lib/store/branch-filter-store";
import { useAuthStore } from "@/lib/store/auth-store";

const ALL_BRANCHES = "__all__";

/** Lets a SCHOOL_ADMIN scope the whole app (dashboard + list pages) to one branch or all of them. */
export function BranchFilter() {
  const role = useAuthStore((s) => s.user?.role);
  const { data: branches } = useBranches();
  const selectedBranchId = useBranchFilterStore((s) => s.selectedBranchId);
  const setSelectedBranchId = useBranchFilterStore((s) => s.setSelectedBranchId);

  if (role !== "SCHOOL_ADMIN" || !branches || branches.length < 2) return null;

  return (
    <Select
      value={selectedBranchId ?? ALL_BRANCHES}
      onValueChange={(value) => setSelectedBranchId(value === ALL_BRANCHES ? null : value)}>
      <SelectTrigger className="w-44" size="sm">
        <Building2Icon className="text-muted-foreground size-4" />
        <SelectValue placeholder="All branches" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={ALL_BRANCHES}>All branches</SelectItem>
        {branches.map((b) => (
          <SelectItem key={b.id} value={b.id}>
            {b.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
