"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LayoutGridIcon, ListIcon, PlusIcon } from "lucide-react";
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
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhotoUpload } from "@/components/photo-upload";
import {
  type Subject,
  useCreateSubject,
  useDeleteSubject,
  useRemoveSubjectImage,
  useSubjects,
  useUpdateSubject,
  useUploadSubjectImage
} from "@/hooks/use-subjects";
import { ApiError } from "@/lib/api/client";

const subjectFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  code: z.string().min(1, "Code is required").max(20)
});
type SubjectFormValues = z.infer<typeof subjectFormSchema>;

export default function SubjectsPage() {
  const { data: subjects, isPending } = useSubjects();
  const deleteSubject = useDeleteSubject();
  const uploadImage = useUploadSubjectImage();
  const removeImage = useRemoveSubjectImage();
  const [view, setView] = useState<"grid" | "table">("grid");
  const [uploadingId, setUploadingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [editingSubject, setEditingSubject] = useState<Subject | null>(null);

  function handleUpload(id: string, file: File) {
    setUploadingId(id);
    uploadImage.mutate(
      { id, file },
      {
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong"),
        onSettled: () => setUploadingId(null)
      }
    );
  }

  function handleRemoveImage(id: string) {
    removeImage.mutate(id, {
      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
    });
  }

  function handleDelete(subject: Subject) {
    setDeletingId(subject.id);
    deleteSubject.mutate(subject.id, {
      onSuccess: () => toast.success("Subject deleted"),
      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong"),
      onSettled: () => setDeletingId(null)
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Subjects</h1>
          <p className="text-muted-foreground">Manage the subjects taught across your school.</p>
        </div>
        <div className="flex items-center gap-2">
          <Tabs value={view} onValueChange={(v) => setView(v as "grid" | "table")}>
            <TabsList>
              <TabsTrigger value="grid" aria-label="Grid view">
                <LayoutGridIcon />
              </TabsTrigger>
              <TabsTrigger value="table" aria-label="Table view">
                <ListIcon />
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <CreateSubjectDialog />
        </div>
      </div>

      {isPending ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
        </div>
      ) : !subjects || subjects.length === 0 ? (
        <Card>
          <CardContent className="text-muted-foreground py-10 text-center">No subjects yet.</CardContent>
        </Card>
      ) : view === "grid" ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {subjects.map((subject) => (
            <Card key={subject.id} className="overflow-hidden py-0">
              <PhotoUpload
                imageUrl={subject.imageUrl}
                fallbackText={subject.code.slice(0, 2).toUpperCase()}
                shape="square"
                size="full"
                className="block w-full"
                isUploading={uploadingId === subject.id}
                onUpload={(file) => handleUpload(subject.id, file)}
                onRemove={subject.imageUrl ? () => handleRemoveImage(subject.id) : undefined}
              />
              <CardContent className="flex items-start justify-between gap-2 px-4 pb-4">
                <div className="min-w-0">
                  <p className="truncate font-medium">{subject.name}</p>
                  <p className="text-muted-foreground text-sm">{subject.code}</p>
                </div>
                <DataTableRowActions
                  onEdit={() => setEditingSubject(subject)}
                  onDelete={() => handleDelete(subject)}
                  isDeleting={deleteSubject.isPending && deletingId === subject.id}
                  deleteTitle="Delete this subject?"
                  deleteDescription={`This will permanently remove ${subject.name} and cannot be undone.`}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16" />
                  <TableHead>Name</TableHead>
                  <TableHead>Code</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                {subjects.map((subject) => (
                  <TableRow key={subject.id}>
                    <TableCell>
                      <PhotoUpload
                        imageUrl={subject.imageUrl}
                        fallbackText={subject.code.slice(0, 2).toUpperCase()}
                        shape="square"
                        size="sm"
                        isUploading={uploadingId === subject.id}
                        onUpload={(file) => handleUpload(subject.id, file)}
                        onRemove={subject.imageUrl ? () => handleRemoveImage(subject.id) : undefined}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{subject.name}</TableCell>
                    <TableCell>{subject.code}</TableCell>
                    <TableCell className="text-right">
                      <DataTableRowActions
                        onEdit={() => setEditingSubject(subject)}
                        onDelete={() => handleDelete(subject)}
                        isDeleting={deleteSubject.isPending && deletingId === subject.id}
                        deleteTitle="Delete this subject?"
                        deleteDescription={`This will permanently remove ${subject.name} and cannot be undone.`}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
      <EditSubjectDialog subject={editingSubject} onOpenChange={(open) => !open && setEditingSubject(null)} />
    </div>
  );
}

function EditSubjectDialog({
  subject,
  onOpenChange
}: {
  subject: Subject | null;
  onOpenChange: (open: boolean) => void;
}) {
  const updateSubject = useUpdateSubject();

  const form = useForm<SubjectFormValues>({
    resolver: zodResolver(subjectFormSchema),
    values: subject ? { name: subject.name, code: subject.code } : undefined
  });

  function onSubmit(values: SubjectFormValues) {
    if (!subject) return;
    updateSubject.mutate(
      { id: subject.id, ...values },
      {
        onSuccess: () => {
          toast.success("Subject updated");
          onOpenChange(false);
        },
        onError: (error) => {
          toast.error(error instanceof ApiError ? error.message : "Something went wrong");
        }
      }
    );
  }

  return (
    <Dialog open={!!subject} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit subject</DialogTitle>
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
                    <Input placeholder="Mathematics" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code</FormLabel>
                  <FormControl>
                    <Input placeholder="MATH" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={updateSubject.isPending}>
                {updateSubject.isPending ? "Saving..." : "Save changes"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

function CreateSubjectDialog() {
  const [open, setOpen] = useState(false);
  const createSubject = useCreateSubject();

  const form = useForm<SubjectFormValues>({
    resolver: zodResolver(subjectFormSchema),
    defaultValues: { name: "", code: "" }
  });

  function onSubmit(values: SubjectFormValues) {
    createSubject.mutate(values, {
      onSuccess: () => {
        toast.success("Subject created");
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
          Add subject
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add subject</DialogTitle>
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
                    <Input placeholder="Mathematics" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code</FormLabel>
                  <FormControl>
                    <Input placeholder="MATH" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={createSubject.isPending}>
                {createSubject.isPending ? "Creating..." : "Create subject"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
