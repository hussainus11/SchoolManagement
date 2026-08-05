"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ColumnDef } from "@tanstack/react-table";
import { PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
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
import { useClasses } from "@/hooks/use-classes";
import { useBranches } from "@/hooks/use-school-settings";
import { useSections } from "@/hooks/use-sections";
import {
  type AcademicStatus,
  type Student,
  useCreateStudent,
  useDeleteStudent,
  useStudents,
  useUpdateStudent
} from "@/hooks/use-students";
import { ApiError } from "@/lib/api/client";
import { useBranchFilterStore } from "@/lib/store/branch-filter-store";

const NO_GENDER = "__unspecified__";

const studentFormSchema = z.object({
  branchId: z.string().min(1, "Branch is required"),
  classId: z.string().optional(),
  sectionId: z.string().optional(),
  admissionNumber: z.string().min(1, "Admission number is required").max(50),
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100)
});
type StudentFormValues = z.infer<typeof studentFormSchema>;

const studentEditFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  classId: z.string().optional(),
  sectionId: z.string().optional(),
  academicStatus: z.string(),
  gender: z.string(),
  dateOfBirth: z.string().optional(),
  bloodGroup: z.string().optional(),
  address: z.string().optional()
});
type StudentEditFormValues = z.infer<typeof studentEditFormSchema>;

export default function StudentsPage() {
  const [search, setSearch] = useState("");
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const selectedBranchId = useBranchFilterStore((s) => s.selectedBranchId);
  const { data: students, isPending } = useStudents({
    search: search || undefined,
    branchId: selectedBranchId ?? undefined
  });
  const { data: branches } = useBranches();
  const deleteStudent = useDeleteStudent();

  function handleDelete(id: string) {
    setDeletingId(id);
    deleteStudent.mutate(id, {
      onSuccess: () => toast.success("Student deleted"),
      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong"),
      onSettled: () => setDeletingId(null)
    });
  }

  const columns: ColumnDef<Student>[] = useMemo(
    () => [
      {
        id: "name",
        header: "Name",
        cell: ({ row }) => (
          <Link href={`/schoolmanagement/students/${row.original.id}`} className="hover:underline">
            {row.original.firstName} {row.original.lastName}
          </Link>
        )
      },
      { accessorKey: "admissionNumber", header: "Admission #" },
      {
        id: "class",
        header: "Class / Section",
        cell: ({ row }) =>
          row.original.section
            ? `${row.original.section.class.name} - ${row.original.section.name}`
            : "—"
      },
      {
        id: "status",
        header: "Status",
        cell: ({ row }) => <Badge variant="secondary">{row.original.academicStatus}</Badge>
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <DataTableRowActions
            onEdit={() => setEditingStudent(row.original)}
            onDelete={() => handleDelete(row.original.id)}
            isDeleting={deleteStudent.isPending && deletingId === row.original.id}
            deleteTitle="Delete this student?"
            deleteDescription={`This will permanently remove ${row.original.firstName} ${row.original.lastName} and cannot be undone.`}
          />
        )
      }
    ],
    [deleteStudent.isPending, deletingId]
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Students</h1>
        <CreateStudentDialog branches={branches ?? []} />
      </div>
      <DataTable
        columns={columns}
        data={students ?? []}
        isLoading={isPending}
        emptyMessage="No students yet."
        toolbar={
          <Input
            placeholder="Search students..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm"
          />
        }
      />
      <EditStudentDialog student={editingStudent} onOpenChange={(open) => !open && setEditingStudent(null)} />
    </div>
  );
}

function EditStudentDialog({
  student,
  onOpenChange
}: {
  student: Student | null;
  onOpenChange: (open: boolean) => void;
}) {
  const updateStudent = useUpdateStudent();
  const { data: classes } = useClasses({});

  const form = useForm<StudentEditFormValues>({
    resolver: zodResolver(studentEditFormSchema),
    values: student
      ? {
          firstName: student.firstName,
          lastName: student.lastName,
          classId: student.section?.class.id ?? "",
          sectionId: student.sectionId ?? "",
          academicStatus: student.academicStatus,
          gender: student.gender ?? NO_GENDER,
          dateOfBirth: student.dateOfBirth ? student.dateOfBirth.slice(0, 10) : "",
          bloodGroup: student.bloodGroup ?? "",
          address: student.address ?? ""
        }
      : undefined
  });

  const classId = form.watch("classId");
  const { data: sections } = useSections(classId || undefined);

  function onSubmit(values: StudentEditFormValues) {
    if (!student) return;
    updateStudent.mutate(
      {
        id: student.id,
        firstName: values.firstName,
        lastName: values.lastName,
        sectionId: values.sectionId || null,
        academicStatus: values.academicStatus as AcademicStatus,
        gender: values.gender === NO_GENDER ? undefined : (values.gender as Student["gender"] & string),
        dateOfBirth: values.dateOfBirth || undefined,
        bloodGroup: values.bloodGroup || undefined,
        address: values.address || undefined
      },
      {
        onSuccess: () => {
          toast.success("Student updated");
          onOpenChange(false);
        },
        onError: (error) => {
          toast.error(error instanceof ApiError ? error.message : "Something went wrong");
        }
      }
    );
  }

  return (
    <Dialog open={!!student} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit student</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="classId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Class (optional)</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        form.setValue("sectionId", "");
                      }}
                      value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Unassigned" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {(classes ?? []).map((c) => (
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
                name="sectionId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Section (optional)</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value} disabled={!classId}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Unassigned" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {(sections ?? []).map((s) => (
                          <SelectItem key={s.id} value={s.id}>
                            {s.name}
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
                name="academicStatus"
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
                        <SelectItem value="ACTIVE">Active</SelectItem>
                        <SelectItem value="GRADUATED">Graduated</SelectItem>
                        <SelectItem value="TRANSFERRED">Transferred</SelectItem>
                        <SelectItem value="WITHDRAWN">Withdrawn</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender (optional)</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Unspecified" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={NO_GENDER}>Unspecified</SelectItem>
                        <SelectItem value="MALE">Male</SelectItem>
                        <SelectItem value="FEMALE">Female</SelectItem>
                        <SelectItem value="OTHER">Other</SelectItem>
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
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of birth (optional)</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bloodGroup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Blood group (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="O+" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address (optional)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={updateStudent.isPending}>
                {updateStudent.isPending ? "Saving..." : "Save changes"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

function CreateStudentDialog({ branches }: { branches: { id: string; name: string }[] }) {
  const [open, setOpen] = useState(false);
  const createStudent = useCreateStudent();

  const form = useForm<StudentFormValues>({
    resolver: zodResolver(studentFormSchema),
    defaultValues: {
      branchId: branches[0]?.id ?? "",
      classId: "",
      sectionId: "",
      admissionNumber: "",
      firstName: "",
      lastName: ""
    }
  });

  const classId = form.watch("classId");
  const { data: classes } = useClasses({});
  const { data: sections } = useSections(classId || undefined);

  function onOpenChange(next: boolean) {
    if (next) {
      form.reset({
        branchId: branches[0]?.id ?? "",
        classId: "",
        sectionId: "",
        admissionNumber: "",
        firstName: "",
        lastName: ""
      });
    }
    setOpen(next);
  }

  function onSubmit(values: StudentFormValues) {
    createStudent.mutate(
      {
        branchId: values.branchId,
        sectionId: values.sectionId || undefined,
        admissionNumber: values.admissionNumber,
        firstName: values.firstName,
        lastName: values.lastName
      },
      {
        onSuccess: () => {
          toast.success("Student created");
          setOpen(false);
        },
        onError: (error) => {
          toast.error(error instanceof ApiError ? error.message : "Something went wrong");
        }
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm">
          <PlusIcon />
          Add student
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add student</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="admissionNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Admission number</FormLabel>
                  <FormControl>
                    <Input placeholder="ADM001" {...field} />
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
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="classId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Class (optional)</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        form.setValue("sectionId", "");
                      }}
                      value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Unassigned" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {(classes ?? []).map((c) => (
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
                name="sectionId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Section (optional)</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value} disabled={!classId}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Unassigned" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {(sections ?? []).map((s) => (
                          <SelectItem key={s.id} value={s.id}>
                            {s.name}
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
              <Button type="submit" disabled={createStudent.isPending}>
                {createStudent.isPending ? "Creating..." : "Create student"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
