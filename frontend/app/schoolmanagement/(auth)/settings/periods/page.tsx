"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTableRowActions } from "@/components/data-table-row-actions";
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
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCreatePeriod, useDeletePeriod, usePeriods } from "@/hooks/use-periods";
import { useBranches } from "@/hooks/use-school-settings";
import { ApiError } from "@/lib/api/client";

const TIME_PATTERN = /^([01]\d|2[0-3]):([0-5]\d)$/;

function toMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

const periodFormSchema = z
  .object({
    name: z.string().min(1, "Name is required").max(50),
    startTime: z.string().regex(TIME_PATTERN, "Use HH:mm 24-hour format"),
    endTime: z.string().regex(TIME_PATTERN, "Use HH:mm 24-hour format"),
    order: z.coerce.number().int().optional()
  })
  // Compared as minutes-since-midnight, not as strings — "10:00" > "9:00" is false lexically
  // even though 10:00 is later, since "1" sorts before "9".
  .refine((data) => toMinutes(data.endTime) > toMinutes(data.startTime), {
    message: "End time must be after start time",
    path: ["endTime"]
  });
type PeriodFormValues = z.infer<typeof periodFormSchema>;

export default function PeriodsPage() {
  const { data: branches } = useBranches();
  const [branchId, setBranchId] = useState<string | undefined>(undefined);
  const effectiveBranchId = branchId ?? branches?.[0]?.id;

  const { data: periods, isPending } = usePeriods(effectiveBranchId);
  const deletePeriod = useDeletePeriod();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleDelete(id: string) {
    setDeletingId(id);
    deletePeriod.mutate(id, {
      onSuccess: () => toast.success("Period deleted"),
      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong"),
      onSettled: () => setDeletingId(null)
    });
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Periods</CardTitle>
        <div className="flex items-center gap-2">
          {branches && branches.length > 1 && (
            <Select value={effectiveBranchId} onValueChange={setBranchId}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Branch" />
              </SelectTrigger>
              <SelectContent>
                {branches.map((b) => (
                  <SelectItem key={b.id} value={b.id}>
                    {b.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          <CreatePeriodDialog branchId={effectiveBranchId} />
        </div>
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
                <TableHead>Start</TableHead>
                <TableHead>End</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {periods?.map((period) => (
                <TableRow key={period.id}>
                  <TableCell className="font-medium">{period.name}</TableCell>
                  <TableCell>{period.startTime}</TableCell>
                  <TableCell>{period.endTime}</TableCell>
                  <TableCell className="text-right">
                    <DataTableRowActions
                      onDelete={() => handleDelete(period.id)}
                      isDeleting={deletePeriod.isPending && deletingId === period.id}
                      deleteTitle="Delete this period?"
                      deleteDescription={`This will permanently remove ${period.name} and cannot be undone.`}
                    />
                  </TableCell>
                </TableRow>
              ))}
              {periods?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-muted-foreground h-20 text-center">
                    No periods yet.
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

function CreatePeriodDialog({ branchId }: { branchId?: string }) {
  const [open, setOpen] = useState(false);
  const createPeriod = useCreatePeriod();

  const form = useForm<PeriodFormValues>({
    resolver: zodResolver(periodFormSchema),
    defaultValues: { name: "", startTime: "", endTime: "", order: undefined }
  });

  function onSubmit(values: PeriodFormValues) {
    if (!branchId) return;
    createPeriod.mutate(
      { branchId, ...values },
      {
        onSuccess: () => {
          toast.success("Period created");
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
        <Button size="sm" disabled={!branchId}>
          <PlusIcon />
          Add period
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add period</DialogTitle>
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
                    <Input placeholder="Period 1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="startTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit" disabled={createPeriod.isPending}>
                {createPeriod.isPending ? "Creating..." : "Create period"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
