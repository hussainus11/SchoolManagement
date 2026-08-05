"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon, XIcon } from "lucide-react";
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
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAddClassSubject, useClass, useRemoveClassSubject } from "@/hooks/use-classes";
import { useAssignClassTeacher, useCreateSection, useSections } from "@/hooks/use-sections";
import { useSubjects } from "@/hooks/use-subjects";
import { useTeachers } from "@/hooks/use-teachers";
import { ApiError } from "@/lib/api/client";
import { SectionSubjectsDialog } from "./section-subjects-dialog";

const sectionFormSchema = z.object({
  name: z.string().min(1, "Section name is required").max(50),
  capacity: z.coerce.number().int().min(1).max(500).optional()
});
type SectionFormValues = z.infer<typeof sectionFormSchema>;

export default function ClassDetailPage() {
  const params = useParams<{ id: string }>();
  const classId = params.id;

  const { data: cls, isPending } = useClass(classId);
  const { data: sections, isPending: sectionsPending } = useSections(classId);
  const { data: subjects } = useSubjects();
  const { data: teachers } = useTeachers({ branchId: cls?.branchId });

  const assignClassTeacher = useAssignClassTeacher();
  const addSubject = useAddClassSubject();
  const removeSubject = useRemoveClassSubject();

  const classSubjects = cls?.classSubjects ?? [];
  const assignedSubjectIds = new Set(classSubjects.map((cs) => cs.subjectId));
  const availableSubjects = (subjects ?? []).filter((s) => !assignedSubjectIds.has(s.id));

  if (isPending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-40" />
      </div>
    );
  }

  if (!cls) return null;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">{cls.name}</h1>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Sections</CardTitle>
          <CreateSectionDialog classId={classId} />
        </CardHeader>
        <CardContent>
          {sectionsPending ? (
            <Skeleton className="h-24" />
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Class teacher</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                {sections?.map((section) => (
                  <TableRow key={section.id}>
                    <TableCell className="font-medium">{section.name}</TableCell>
                    <TableCell>{section.capacity ?? "—"}</TableCell>
                    <TableCell>
                      <Select
                        value={section.classTeacherId ?? ""}
                        onValueChange={(teacherId) =>
                          assignClassTeacher.mutate(
                            { sectionId: section.id, teacherId },
                            {
                              onError: (error) =>
                                toast.error(
                                  error instanceof ApiError ? error.message : "Something went wrong"
                                )
                            }
                          )
                        }>
                        <SelectTrigger className="w-56">
                          <SelectValue placeholder="Unassigned" />
                        </SelectTrigger>
                        <SelectContent>
                          {(teachers ?? []).map((t) => (
                            <SelectItem key={t.id} value={t.id}>
                              {t.user.firstName} {t.user.lastName}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-right">
                      <SectionSubjectsDialog
                        sectionId={section.id}
                        sectionName={section.name}
                        classSubjects={classSubjects}
                        teachers={teachers ?? []}
                      />
                    </TableCell>
                  </TableRow>
                ))}
                {sections?.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-muted-foreground h-20 text-center">
                      No sections yet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Curriculum</CardTitle>
          {availableSubjects.length > 0 && (
            <Select
              onValueChange={(subjectId) =>
                addSubject.mutate(
                  { classId, subjectId },
                  {
                    onError: (error) =>
                      toast.error(error instanceof ApiError ? error.message : "Something went wrong")
                  }
                )
              }>
              <SelectTrigger className="w-56">
                <SelectValue placeholder="Add a subject" />
              </SelectTrigger>
              <SelectContent>
                {availableSubjects.map((s) => (
                  <SelectItem key={s.id} value={s.id}>
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </CardHeader>
        <CardContent>
          {classSubjects.length === 0 ? (
            <p className="text-muted-foreground text-sm">No subjects mapped to this class yet.</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {classSubjects.map((cs) => (
                <Badge key={cs.id} variant="secondary" className="gap-1 pr-1">
                  {cs.subject.name}
                  <button
                    type="button"
                    onClick={() =>
                      removeSubject.mutate(
                        { classId, subjectId: cs.subjectId },
                        {
                          onError: (error) =>
                            toast.error(
                              error instanceof ApiError ? error.message : "Something went wrong"
                            )
                        }
                      )
                    }
                    aria-label={`Remove ${cs.subject.name}`}>
                    <XIcon className="size-3" />
                  </button>
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function CreateSectionDialog({ classId }: { classId: string }) {
  const [open, setOpen] = useState(false);
  const createSection = useCreateSection();

  const form = useForm<SectionFormValues>({
    resolver: zodResolver(sectionFormSchema),
    defaultValues: { name: "", capacity: undefined }
  });

  function onSubmit(values: SectionFormValues) {
    createSection.mutate(
      { classId, ...values },
      {
        onSuccess: () => {
          toast.success("Section created");
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
          Add section
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add section</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Section name</FormLabel>
                  <FormControl>
                    <Input placeholder="A" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="capacity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Capacity (optional)</FormLabel>
                  <FormControl>
                    <Input type="number" min={1} {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={createSection.isPending}>
                {createSection.isPending ? "Creating..." : "Create section"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
