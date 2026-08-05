"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon, Trash2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

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
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCreateFeeHead, useDeleteFeeHead, useFeeHeads } from "@/hooks/use-fees";
import { ApiError } from "@/lib/api/client";

const feeHeadFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100)
});
type FeeHeadFormValues = z.infer<typeof feeHeadFormSchema>;

export default function FeeHeadsPage() {
  const { data: feeHeads, isPending } = useFeeHeads();
  const deleteFeeHead = useDeleteFeeHead();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Fee heads</CardTitle>
        <CreateFeeHeadDialog />
      </CardHeader>
      <CardContent>
        {isPending ? (
          <div className="space-y-2">
            <Skeleton className="h-9 w-full" />
            <Skeleton className="h-9 w-full" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {feeHeads?.map((feeHead) => (
                <TableRow key={feeHead.id}>
                  <TableCell className="font-medium">{feeHead.name}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() =>
                        deleteFeeHead.mutate(feeHead.id, {
                          onError: (error) =>
                            toast.error(
                              error instanceof ApiError ? error.message : "Something went wrong"
                            )
                        })
                      }
                      aria-label={`Delete ${feeHead.name}`}>
                      <Trash2Icon className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {feeHeads?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={2} className="text-muted-foreground h-20 text-center">
                    No fee heads yet.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}

function CreateFeeHeadDialog() {
  const [open, setOpen] = useState(false);
  const createFeeHead = useCreateFeeHead();

  const form = useForm<FeeHeadFormValues>({
    resolver: zodResolver(feeHeadFormSchema),
    defaultValues: { name: "" }
  });

  function onSubmit(values: FeeHeadFormValues) {
    createFeeHead.mutate(values, {
      onSuccess: () => {
        toast.success("Fee head created");
        form.reset();
        setOpen(false);
      },
      onError: (error) => {
        toast.error(error instanceof ApiError ? error.message : "Something went wrong");
      }
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <PlusIcon />
          Add fee head
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add fee head</DialogTitle>
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
                    <Input placeholder="Tuition Fee" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={createFeeHead.isPending}>
                {createFeeHead.isPending ? "Creating..." : "Create fee head"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
