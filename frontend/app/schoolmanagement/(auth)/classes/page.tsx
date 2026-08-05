"use client";

import { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { GraduationCapIcon, LayersIcon, PlusIcon, UsersRoundIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { type SchoolClass, useClasses, useCreateClass, useDeleteClass, useUpdateClass } from "@/hooks/use-classes";
import { useAcademicYears, useBranches } from "@/hooks/use-school-settings";
import { ApiError } from "@/lib/api/client";
import { useBranchFilterStore } from "@/lib/store/branch-filter-store";
import { cn } from "@/lib/utils";

const CARD_ACCENTS = [
  "from-blue-500/15 to-blue-500/0 text-blue-600 dark:text-blue-400",
  "from-violet-500/15 to-violet-500/0 text-violet-600 dark:text-violet-400",
  "from-emerald-500/15 to-emerald-500/0 text-emerald-600 dark:text-emerald-400",
  "from-amber-500/15 to-amber-500/0 text-amber-600 dark:text-amber-400",
  "from-rose-500/15 to-rose-500/0 text-rose-600 dark:text-rose-400",
  "from-cyan-500/15 to-cyan-500/0 text-cyan-600 dark:text-cyan-400"
];

const classFormSchema = z.object({
  branchId: z.string().min(1, "Branch is required"),
  academicYearId: z.string().min(1, "Academic year is required"),
  name: z.string().min(1, "Class name is required").max(100)
});
type ClassFormValues = z.infer<typeof classFormSchema>;

const classEditFormSchema = z.object({
  name: z.string().min(1, "Class name is required").max(100)
});
type ClassEditFormValues = z.infer<typeof classEditFormSchema>;

export default function ClassesPage() {
  const { data: branches } = useBranches();
  const { data: years } = useAcademicYears();
  const currentYear = years?.find((y) => y.isCurrent) ?? years?.[0];
  const [academicYearId, setAcademicYearId] = useState<string | undefined>(undefined);
  const effectiveYearId = academicYearId ?? currentYear?.id;
  const selectedBranchId = useBranchFilterStore((s) => s.selectedBranchId);
  const [editingClass, setEditingClass] = useState<SchoolClass | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const deleteClass = useDeleteClass();

  const { data: classes, isPending } = useClasses({
    academicYearId: effectiveYearId,
    branchId: selectedBranchId ?? undefined
  });

  function handleDelete(cls: SchoolClass) {
    setDeletingId(cls.id);
    deleteClass.mutate(cls.id, {
      onSuccess: () => toast.success("Class deleted"),
      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong"),
      onSettled: () => setDeletingId(null)
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Classes</h1>
          <p className="text-muted-foreground">Manage classes and their sections.</p>
        </div>
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
          <CreateClassDialog branches={branches ?? []} defaultAcademicYearId={effectiveYearId} />
        </div>
      </div>

      {isPending ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-28" />
          <Skeleton className="h-28" />
          <Skeleton className="h-28" />
        </div>
      ) : classes && classes.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {classes.map((cls, index) => {
            const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];
            const sections = cls.sections ?? [];
            const totalCapacity = sections.reduce((sum, s) => sum + (s.capacity ?? 0), 0);
            const visibleSections = sections.slice(0, 4);
            const extraSections = sections.length - visibleSections.length;

            return (
              <Link key={cls.id} href={`/schoolmanagement/classes/${cls.id}`}>
                <Card className="group relative h-full overflow-hidden py-0 transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <div
                    className="absolute top-2 right-2 z-10"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}>
                    <DataTableRowActions
                      onEdit={() => setEditingClass(cls)}
                      onDelete={() => handleDelete(cls)}
                      isDeleting={deleteClass.isPending && deletingId === cls.id}
                      deleteTitle="Delete this class?"
                      deleteDescription={`This will permanently remove ${cls.name} and cannot be undone.`}
                    />
                  </div>
                  <div className={cn("relative flex items-center justify-between bg-gradient-to-br p-4", accent)}>
                    <div className="bg-background/70 flex size-11 items-center justify-center rounded-xl shadow-sm backdrop-blur-sm">
                      <GraduationCapIcon className="size-5" />
                    </div>
                    <LayersIcon className="size-16 shrink-0 opacity-10" />
                  </div>
                  <CardContent className="space-y-3 px-4 pt-1 pb-4">
                    <div>
                      <p className="truncate text-base font-semibold">{cls.name}</p>
                      <div className="text-muted-foreground mt-0.5 flex items-center gap-3 text-xs">
                        <span className="flex items-center gap-1">
                          <LayersIcon className="size-3.5" />
                          {sections.length} section{sections.length === 1 ? "" : "s"}
                        </span>
                        {totalCapacity > 0 && (
                          <span className="flex items-center gap-1">
                            <UsersRoundIcon className="size-3.5" />
                            {totalCapacity} seats
                          </span>
                        )}
                      </div>
                    </div>
                    {sections.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {visibleSections.map((s) => (
                          <Badge key={s.id} variant="secondary" className="font-normal">
                            {s.name}
                          </Badge>
                        ))}
                        {extraSections > 0 && (
                          <Badge variant="outline" className="font-normal">
                            +{extraSections} more
                          </Badge>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      ) : (
        <Card>
          <CardContent className="text-muted-foreground py-10 text-center">
            No classes yet for this academic year.
          </CardContent>
        </Card>
      )}
      <EditClassDialog schoolClass={editingClass} onOpenChange={(open) => !open && setEditingClass(null)} />
    </div>
  );
}

function EditClassDialog({
  schoolClass,
  onOpenChange
}: {
  schoolClass: SchoolClass | null;
  onOpenChange: (open: boolean) => void;
}) {
  const updateClass = useUpdateClass();

  const form = useForm<ClassEditFormValues>({
    resolver: zodResolver(classEditFormSchema),
    values: schoolClass ? { name: schoolClass.name } : undefined
  });

  function onSubmit(values: ClassEditFormValues) {
    if (!schoolClass) return;
    updateClass.mutate(
      { id: schoolClass.id, name: values.name },
      {
        onSuccess: () => {
          toast.success("Class updated");
          onOpenChange(false);
        },
        onError: (error) => {
          toast.error(error instanceof ApiError ? error.message : "Something went wrong");
        }
      }
    );
  }

  return (
    <Dialog open={!!schoolClass} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit class</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Class name</FormLabel>
                  <FormControl>
                    <Input placeholder="Grade 5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={updateClass.isPending}>
                {updateClass.isPending ? "Saving..." : "Save changes"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

function CreateClassDialog({
  branches,
  defaultAcademicYearId
}: {
  branches: { id: string; name: string }[];
  defaultAcademicYearId?: string;
}) {
  const [open, setOpen] = useState(false);
  const createClass = useCreateClass();

  const form = useForm<ClassFormValues>({
    resolver: zodResolver(classFormSchema),
    defaultValues: {
      branchId: branches[0]?.id ?? "",
      academicYearId: defaultAcademicYearId ?? "",
      name: ""
    }
  });

  function onOpenChange(next: boolean) {
    if (next) {
      form.reset({
        branchId: branches[0]?.id ?? "",
        academicYearId: defaultAcademicYearId ?? "",
        name: ""
      });
    }
    setOpen(next);
  }

  function onSubmit(values: ClassFormValues) {
    createClass.mutate(values, {
      onSuccess: () => {
        toast.success("Class created");
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
          Add class
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add class</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Class name</FormLabel>
                  <FormControl>
                    <Input placeholder="Grade 5" {...field} />
                  </FormControl>
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
                      {branches.map((b) => (
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
            <DialogFooter>
              <Button type="submit" disabled={createClass.isPending}>
                {createClass.isPending ? "Creating..." : "Create class"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
