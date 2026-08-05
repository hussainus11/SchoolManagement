"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useCreateGradeScale, useDeleteGradeScale, useGradeScales } from "@/hooks/use-marks";
import { ApiError } from "@/lib/api/client";

export function ManageGradeScalesDialog() {
  const [open, setOpen] = useState(false);
  const [grade, setGrade] = useState("");
  const [minPercentage, setMinPercentage] = useState("");
  const [maxPercentage, setMaxPercentage] = useState("");
  const { data: gradeScales } = useGradeScales();
  const createGradeScale = useCreateGradeScale();
  const deleteGradeScale = useDeleteGradeScale();

  function handleAdd() {
    if (!grade.trim() || !minPercentage || !maxPercentage) return;
    createGradeScale.mutate(
      { grade: grade.trim(), minPercentage: Number(minPercentage), maxPercentage: Number(maxPercentage) },
      {
        onSuccess: () => {
          setGrade("");
          setMinPercentage("");
          setMaxPercentage("");
        },
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Grade scale
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Grade scale</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div className="flex gap-2">
            <Input value={grade} onChange={(e) => setGrade(e.target.value)} placeholder="Grade (A+)" className="w-24" />
            <Input
              value={minPercentage}
              onChange={(e) => setMinPercentage(e.target.value)}
              placeholder="Min %"
              type="number"
              className="w-24"
            />
            <Input
              value={maxPercentage}
              onChange={(e) => setMaxPercentage(e.target.value)}
              placeholder="Max %"
              type="number"
              className="w-24"
            />
            <Button onClick={handleAdd} disabled={createGradeScale.isPending}>
              Add
            </Button>
          </div>
          <ul className="max-h-60 space-y-1 overflow-y-auto text-sm">
            {gradeScales?.map((g) => (
              <li key={g.id} className="flex items-center justify-between rounded-md border px-3 py-1.5">
                <span>
                  {g.grade} <span className="text-muted-foreground">({g.minPercentage}% - {g.maxPercentage}%)</span>
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() =>
                    deleteGradeScale.mutate(g.id, {
                      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
                    })
                  }>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
