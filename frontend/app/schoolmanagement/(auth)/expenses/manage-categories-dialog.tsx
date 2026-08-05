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
import { useCreateExpenseCategory, useExpenseCategories } from "@/hooks/use-expenses";
import { ApiError } from "@/lib/api/client";

export function ManageCategoriesDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const { data: categories } = useExpenseCategories();
  const createCategory = useCreateExpenseCategory();

  function handleAdd() {
    if (!name.trim()) return;
    createCategory.mutate(
      { name: name.trim() },
      {
        onSuccess: () => setName(""),
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Categories
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Expense categories</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div className="flex gap-2">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="New category name"
              onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            />
            <Button onClick={handleAdd} disabled={createCategory.isPending}>
              Add
            </Button>
          </div>
          <ul className="max-h-60 space-y-1 overflow-y-auto text-sm">
            {categories?.map((c) => (
              <li key={c.id} className="rounded-md border px-3 py-1.5">
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
