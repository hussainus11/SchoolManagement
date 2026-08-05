"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { DataTableRowActions } from "@/components/data-table-row-actions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useAssetCategories, useCreateAssetCategory, useDeleteAssetCategory } from "@/hooks/use-inventory";
import { ApiError } from "@/lib/api/client";

export function ManageCategoriesDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const { data: categories } = useAssetCategories();
  const createCategory = useCreateAssetCategory();
  const deleteCategory = useDeleteAssetCategory();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleDelete(id: string) {
    setDeletingId(id);
    deleteCategory.mutate(id, {
      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong"),
      onSettled: () => setDeletingId(null)
    });
  }

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
          <DialogTitle>Asset categories</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div className="flex gap-2">
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Furniture, Electronics" />
            <Button onClick={handleAdd} disabled={createCategory.isPending}>
              Add
            </Button>
          </div>
          <ul className="max-h-60 space-y-1 overflow-y-auto text-sm">
            {categories?.map((c) => (
              <li key={c.id} className="flex items-center justify-between rounded-md border px-3 py-1.5">
                {c.name}
                <DataTableRowActions
                  onDelete={() => handleDelete(c.id)}
                  isDeleting={deleteCategory.isPending && deletingId === c.id}
                  deleteTitle="Remove this category?"
                  deleteDescription={`This will permanently remove ${c.name} and cannot be undone.`}
                  deleteLabel="Remove"
                />
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
