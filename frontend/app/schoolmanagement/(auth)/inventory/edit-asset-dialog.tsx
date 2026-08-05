"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { type Asset, type AssetStatus, useAssetCategories, useUpdateAsset } from "@/hooks/use-inventory";
import { useBranches } from "@/hooks/use-school-settings";
import { useTeachers } from "@/hooks/use-teachers";
import { ApiError } from "@/lib/api/client";

const assetEditFormSchema = z.object({
  branchId: z.string().min(1, "Branch is required"),
  categoryId: z.string().min(1, "Category is required"),
  name: z.string().min(1, "Name is required").max(200),
  serialNumber: z.string().max(100).optional(),
  purchaseCost: z.coerce.number().min(0).optional(),
  status: z.string(),
  location: z.string().max(200).optional(),
  assignedToTeacherId: z.string().optional()
});
type AssetEditFormValues = z.infer<typeof assetEditFormSchema>;

const STATUS_OPTIONS: AssetStatus[] = ["IN_USE", "IN_STORAGE", "UNDER_REPAIR", "DISPOSED"];

export function EditAssetDialog({
  asset,
  onOpenChange
}: {
  asset: Asset | null;
  onOpenChange: (open: boolean) => void;
}) {
  const { data: branches } = useBranches();
  const { data: categories } = useAssetCategories();
  const { data: teachers } = useTeachers();
  const updateAsset = useUpdateAsset();

  const form = useForm<AssetEditFormValues>({
    resolver: zodResolver(assetEditFormSchema),
    values: asset
      ? {
          branchId: asset.branchId,
          categoryId: asset.categoryId,
          name: asset.name,
          serialNumber: asset.serialNumber ?? "",
          purchaseCost: asset.purchaseCost ? Number(asset.purchaseCost) : undefined,
          status: asset.status,
          location: asset.location ?? "",
          assignedToTeacherId: asset.assignedToTeacherId ?? ""
        }
      : undefined
  });

  function onSubmit(values: AssetEditFormValues) {
    if (!asset) return;
    updateAsset.mutate(
      {
        id: asset.id,
        branchId: values.branchId,
        categoryId: values.categoryId,
        name: values.name,
        serialNumber: values.serialNumber || undefined,
        purchaseCost: values.purchaseCost,
        status: values.status as AssetStatus,
        location: values.location || undefined,
        assignedToTeacherId: values.assignedToTeacherId || undefined
      },
      {
        onSuccess: () => {
          toast.success("Asset updated");
          onOpenChange(false);
        },
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Dialog open={!!asset} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit asset</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Projector" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {(categories ?? []).map((c) => (
                          <SelectItem key={c.id} value={c.id}>
                            {c.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="branchId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Branch</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a branch" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {(branches ?? []).map((b) => (
                          <SelectItem key={b.id} value={b.id}>
                            {b.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="serialNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Serial number (optional)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="purchaseCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Purchase cost (optional)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" min="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {STATUS_OPTIONS.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Room 101" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="assignedToTeacherId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assigned to (optional)</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="No one" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {(teachers ?? []).map((t) => (
                        <SelectItem key={t.id} value={t.id}>
                          {t.user.firstName} {t.user.lastName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={updateAsset.isPending}>
                {updateAsset.isPending ? "Saving..." : "Save changes"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
