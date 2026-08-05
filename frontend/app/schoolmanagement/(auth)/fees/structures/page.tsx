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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useClasses } from "@/hooks/use-classes";
import { type FeeFrequency, useCreateFeeStructure, useDeleteFeeStructure, useFeeHeads, useFeeStructures } from "@/hooks/use-fees";
import { useAcademicYears } from "@/hooks/use-school-settings";
import { ApiError } from "@/lib/api/client";

const FREQUENCIES: FeeFrequency[] = ["MONTHLY", "QUARTERLY", "ANNUAL", "ONE_TIME"];

const structureFormSchema = z.object({
  classId: z.string().min(1, "Class is required"),
  feeHeadId: z.string().min(1, "Fee head is required"),
  academicYearId: z.string().min(1, "Academic year is required"),
  amount: z.coerce.number().positive("Amount must be positive"),
  frequency: z.enum(["MONTHLY", "QUARTERLY", "ANNUAL", "ONE_TIME"])
});
type StructureFormValues = z.infer<typeof structureFormSchema>;

export default function FeeStructuresPage() {
  const { data: years } = useAcademicYears();
  const currentYear = years?.find((y) => y.isCurrent) ?? years?.[0];
  const [academicYearId, setAcademicYearId] = useState<string | undefined>(undefined);
  const effectiveYearId = academicYearId ?? currentYear?.id;

  const { data: classes } = useClasses({ academicYearId: effectiveYearId });
  const { data: feeHeads } = useFeeHeads();
  const { data: structures, isPending } = useFeeStructures({ academicYearId: effectiveYearId });
  const deleteStructure = useDeleteFeeStructure();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Fee structures</CardTitle>
        <div className="flex items-center gap-2">
          {years && years.length > 0 && (
            <Select value={effectiveYearId} onValueChange={setAcademicYearId}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Academic year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((y) => (
                  <SelectItem key={y.id} value={y.id}>
                    {y.name}
                    {y.isCurrent ? " (current)" : ""}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          <CreateStructureDialog
            classes={classes ?? []}
            feeHeads={feeHeads ?? []}
            defaultAcademicYearId={effectiveYearId}
          />
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
                <TableHead>Class</TableHead>
                <TableHead>Fee head</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Frequency</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {structures?.map((s) => (
                <TableRow key={s.id}>
                  <TableCell className="font-medium">{s.class.name}</TableCell>
                  <TableCell>{s.feeHead.name}</TableCell>
                  <TableCell>{Number(s.amount).toFixed(2)}</TableCell>
                  <TableCell>{s.frequency}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() =>
                        deleteStructure.mutate(s.id, {
                          onError: (error) =>
                            toast.error(
                              error instanceof ApiError ? error.message : "Something went wrong"
                            )
                        })
                      }
                      aria-label="Delete fee structure">
                      <Trash2Icon className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {structures?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-muted-foreground h-20 text-center">
                    No fee structures yet for this academic year.
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

function CreateStructureDialog({
  classes,
  feeHeads,
  defaultAcademicYearId
}: {
  classes: { id: string; name: string }[];
  feeHeads: { id: string; name: string }[];
  defaultAcademicYearId?: string;
}) {
  const [open, setOpen] = useState(false);
  const createStructure = useCreateFeeStructure();

  const form = useForm<StructureFormValues>({
    resolver: zodResolver(structureFormSchema),
    defaultValues: {
      classId: "",
      feeHeadId: "",
      academicYearId: defaultAcademicYearId ?? "",
      amount: 0,
      frequency: "MONTHLY"
    }
  });

  function onOpenChange(next: boolean) {
    if (next) {
      form.reset({
        classId: "",
        feeHeadId: "",
        academicYearId: defaultAcademicYearId ?? "",
        amount: 0,
        frequency: "MONTHLY"
      });
    }
    setOpen(next);
  }

  function onSubmit(values: StructureFormValues) {
    createStructure.mutate(values, {
      onSuccess: () => {
        toast.success("Fee structure created");
        setOpen(false);
      },
      onError: (error) => {
        toast.error(error instanceof ApiError ? error.message : "Something went wrong");
      }
    });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm" disabled={!defaultAcademicYearId}>
          <PlusIcon />
          Add fee structure
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add fee structure</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="classId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Class</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a class" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {classes.map((c) => (
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
              name="feeHeadId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fee head</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a fee head" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {feeHeads.map((f) => (
                        <SelectItem key={f.id} value={f.id}>
                          {f.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" min="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="frequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Frequency</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {FREQUENCIES.map((f) => (
                          <SelectItem key={f} value={f}>
                            {f}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit" disabled={createStructure.isPending}>
                {createStructure.isPending ? "Creating..." : "Create fee structure"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
