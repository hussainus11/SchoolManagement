"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { type DiscountType, useCreateDiscount, useDeactivateDiscount, useStudentDiscounts } from "@/hooks/use-fees";
import { ApiError } from "@/lib/api/client";

const discountFormSchema = z.object({
  type: z.enum(["PERCENTAGE", "FIXED"]),
  value: z.coerce.number().positive("Value must be positive"),
  reason: z.string().max(300).optional()
});
type DiscountFormValues = z.infer<typeof discountFormSchema>;

export function DiscountsCard({ studentId }: { studentId: string }) {
  const { data: discounts, isPending } = useStudentDiscounts(studentId);
  const deactivateDiscount = useDeactivateDiscount();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Fee discounts</CardTitle>
        <CreateDiscountDialog studentId={studentId} />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Scope</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Status</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {!isPending &&
              discounts?.map((d) => (
                <TableRow key={d.id}>
                  <TableCell>{d.feeHead?.name ?? "All fee heads"}</TableCell>
                  <TableCell>{d.type}</TableCell>
                  <TableCell>{Number(d.value).toFixed(2)}{d.type === "PERCENTAGE" ? "%" : ""}</TableCell>
                  <TableCell>{d.reason ?? "—"}</TableCell>
                  <TableCell>
                    <Badge variant={d.isActive ? "default" : "secondary"}>
                      {d.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {d.isActive && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() =>
                          deactivateDiscount.mutate(d.id, {
                            onError: (error) =>
                              toast.error(
                                error instanceof ApiError ? error.message : "Something went wrong"
                              )
                          })
                        }>
                        Deactivate
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            {!isPending && (!discounts || discounts.length === 0) && (
              <TableRow>
                <TableCell colSpan={6} className="text-muted-foreground h-20 text-center">
                  No discounts.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function CreateDiscountDialog({ studentId }: { studentId: string }) {
  const [open, setOpen] = useState(false);
  const createDiscount = useCreateDiscount();

  const form = useForm<DiscountFormValues>({
    resolver: zodResolver(discountFormSchema),
    defaultValues: { type: "PERCENTAGE", value: 0, reason: "" }
  });

  function onSubmit(values: DiscountFormValues) {
    createDiscount.mutate(
      { studentId, type: values.type as DiscountType, value: values.value, reason: values.reason || undefined },
      {
        onSuccess: () => {
          toast.success("Discount added");
          form.reset();
          setOpen(false);
        },
        onError: (error) => {
          toast.error(error instanceof ApiError ? error.message : "Something went wrong");
        }
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <PlusIcon />
          Add discount
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add discount</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="PERCENTAGE">Percentage</SelectItem>
                        <SelectItem value="FIXED">Fixed amount</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="value"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Value</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" min="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Sibling discount" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={createDiscount.isPending}>
                {createDiscount.isPending ? "Adding..." : "Add discount"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
