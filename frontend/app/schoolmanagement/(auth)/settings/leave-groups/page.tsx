"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { PencilIcon, PlusIcon, Trash2Icon } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
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
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useLeaveTypes } from "@/hooks/use-leave";
import {
  type LeaveGroup,
  useCreateLeaveGroup,
  useDeleteLeaveGroup,
  useLeaveGroups,
  useUpdateLeaveGroup
} from "@/hooks/use-leave-groups";
import { ApiError } from "@/lib/api/client";

const allocationSchema = z.object({
  leaveTypeId: z.string().min(1, "Select a leave type"),
  daysPerYear: z.coerce.number().min(0, "Must be 0 or more")
});

const leaveGroupFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  allocations: z.array(allocationSchema).min(1, "Add at least one leave type")
});

type LeaveGroupFormValues = z.infer<typeof leaveGroupFormSchema>;

export default function LeaveGroupsPage() {
  const { data: groups, isPending } = useLeaveGroups();
  const deleteGroup = useDeleteLeaveGroup();

  function handleDelete(group: LeaveGroup) {
    deleteGroup.mutate(group.id, {
      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
    });
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Leave groups</CardTitle>
          <p className="text-muted-foreground text-sm">
            Define how many days of each leave type a group of teachers or staff can take per year. Assign a
            group when creating or editing a teacher or staff member.
          </p>
        </div>
        <LeaveGroupDialog />
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
                <TableHead>Allocations</TableHead>
                <TableHead>Assigned</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {groups?.map((group) => (
                <TableRow key={group.id}>
                  <TableCell className="font-medium">{group.name}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1.5">
                      {group.allocations.map((a) => (
                        <Badge key={a.id} variant="secondary" className="font-normal">
                          {a.leaveType.name}: {a.daysPerYear}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {(group._count?.teachers ?? 0) + (group._count?.staff ?? 0)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <LeaveGroupDialog group={group} />
                      <Button size="icon" variant="ghost" onClick={() => handleDelete(group)}>
                        <Trash2Icon className="size-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {groups?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-muted-foreground h-20 text-center">
                    No leave groups yet.
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

function LeaveGroupDialog({ group }: { group?: LeaveGroup }) {
  const [open, setOpen] = useState(false);
  const { data: leaveTypes } = useLeaveTypes();
  const createGroup = useCreateLeaveGroup();
  const updateGroup = useUpdateLeaveGroup();
  const isEdit = !!group;

  const form = useForm<LeaveGroupFormValues>({
    resolver: zodResolver(leaveGroupFormSchema),
    defaultValues: {
      name: group?.name ?? "",
      allocations: group?.allocations.map((a) => ({ leaveTypeId: a.leaveTypeId, daysPerYear: a.daysPerYear })) ?? [
        { leaveTypeId: "", daysPerYear: 0 }
      ]
    }
  });

  const { fields, append, remove } = useFieldArray({ name: "allocations", control: form.control });

  function handleOpenChange(next: boolean) {
    if (next) {
      form.reset({
        name: group?.name ?? "",
        allocations: group?.allocations.map((a) => ({ leaveTypeId: a.leaveTypeId, daysPerYear: a.daysPerYear })) ?? [
          { leaveTypeId: "", daysPerYear: 0 }
        ]
      });
    }
    setOpen(next);
  }

  function onSubmit(values: LeaveGroupFormValues) {
    const mutation = isEdit ? updateGroup : createGroup;
    const input = isEdit ? { id: group.id, ...values } : values;
    mutation.mutate(input as never, {
      onSuccess: () => {
        toast.success(isEdit ? "Leave group updated" : "Leave group created");
        setOpen(false);
      },
      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
    });
  }

  const isPending = createGroup.isPending || updateGroup.isPending;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {isEdit ? (
          <Button size="icon" variant="ghost" aria-label={`Edit ${group.name}`}>
            <PencilIcon className="size-4" />
          </Button>
        ) : (
          <Button size="sm">
            <PlusIcon />
            Add leave group
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit leave group" : "Add leave group"}</DialogTitle>
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
                    <Input placeholder="Standard Staff Policy" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <p className="text-sm font-medium">Leave allocations</p>
              <div className="space-y-2">
                {fields.map((field, index) => (
                  <div key={field.id} className="flex items-start gap-2">
                    <FormField
                      control={form.control}
                      name={`allocations.${index}.leaveTypeId`}
                      render={({ field: selectField }) => (
                        <FormItem className="flex-1">
                          <Select onValueChange={selectField.onChange} value={selectField.value}>
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Leave type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {(leaveTypes ?? []).map((t) => (
                                <SelectItem key={t.id} value={t.id}>
                                  {t.name}
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
                      name={`allocations.${index}.daysPerYear`}
                      render={({ field: daysField }) => (
                        <FormItem className="w-28">
                          <FormControl>
                            <Input type="number" min={0} step="0.5" placeholder="Days" {...daysField} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={() => remove(index)}
                      disabled={fields.length === 1}>
                      <Trash2Icon className="size-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => append({ leaveTypeId: "", daysPerYear: 0 })}>
                <PlusIcon />
                Add leave type
              </Button>
            </div>

            <DialogFooter>
              <Button type="submit" disabled={isPending}>
                {isPending ? "Saving..." : isEdit ? "Save changes" : "Create leave group"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
