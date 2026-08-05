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
import { useCustomRoles } from "@/hooks/use-custom-roles";
import { useLeaveGroups } from "@/hooks/use-leave-groups";
import { useBranches } from "@/hooks/use-school-settings";
import {
  type Teacher,
  useCreateTeacher,
  useDeleteTeacher,
  useTeachers,
  useUpdateTeacher
} from "@/hooks/use-teachers";
import { ApiError } from "@/lib/api/client";
import { useBranchFilterStore } from "@/lib/store/branch-filter-store";

const NO_LEAVE_GROUP = "__none__";
const NO_GENDER = "__unspecified__";

const teacherFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  branchId: z.string().min(1, "Branch is required"),
  employeeCode: z.string().min(1, "Employee code is required").max(50),
  customRoleId: z.string().min(1, "Role is required"),
  leaveGroupId: z.string()
});
type TeacherFormValues = z.infer<typeof teacherFormSchema>;

const teacherEditFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  phone: z.string().optional(),
  gender: z.string(),
  dateOfBirth: z.string().optional(),
  address: z.string().optional(),
  emergencyPhone: z.string().optional()
});
type TeacherEditFormValues = z.infer<typeof teacherEditFormSchema>;

export default function TeachersPage() {
  const [search, setSearch] = useState("");
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const selectedBranchId = useBranchFilterStore((s) => s.selectedBranchId);
  const { data: teachers, isPending } = useTeachers({
    search: search || undefined,
    branchId: selectedBranchId ?? undefined
  });
  const { data: branches } = useBranches();
  const branchNameById = useMemo(
    () => new Map((branches ?? []).map((b) => [b.id, b.name])),
    [branches]
  );
  const deleteTeacher = useDeleteTeacher();

  function handleDelete(id: string) {
    setDeletingId(id);
    deleteTeacher.mutate(id, {
      onSuccess: () => toast.success("Teacher deleted"),
      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong"),
      onSettled: () => setDeletingId(null)
    });
  }

  const columns: ColumnDef<Teacher>[] = useMemo(
    () => [
      {
        id: "name",
        header: "Name",
        cell: ({ row }) => (
          <Link href={`/schoolmanagement/teachers/${row.original.id}`} className="hover:underline">
            {row.original.user.firstName} {row.original.user.lastName}
          </Link>
        )
      },
      { accessorKey: "employeeCode", header: "Employee code" },
      { id: "email", header: "Email", cell: ({ row }) => row.original.user.email },
      {
        id: "branch",
        header: "Branch",
        cell: ({ row }) => branchNameById.get(row.original.branchId) ?? "—"
      },
      {
        id: "status",
        header: "Status",
        cell: ({ row }) => (
          <Badge variant={row.original.isActive ? "default" : "secondary"}>
            {row.original.isActive ? "Active" : "Inactive"}
          </Badge>
        )
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <DataTableRowActions
            onEdit={() => setEditingTeacher(row.original)}
            onDelete={() => handleDelete(row.original.id)}
            isDeleting={deleteTeacher.isPending && deletingId === row.original.id}
            deleteTitle="Delete this teacher?"
            deleteDescription={`This will permanently remove ${row.original.user.firstName} ${row.original.user.lastName} and cannot be undone.`}
          />
        )
      }
    ],
    [branchNameById, deleteTeacher.isPending, deletingId]
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Teachers</h1>
        <CreateTeacherDialog branches={branches ?? []} />
      </div>
      <DataTable
        columns={columns}
        data={teachers ?? []}
        isLoading={isPending}
        emptyMessage="No teachers yet."
        toolbar={
          <Input
            placeholder="Search teachers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm"
          />
        }
      />
      <EditTeacherDialog teacher={editingTeacher} onOpenChange={(open) => !open && setEditingTeacher(null)} />
    </div>
  );
}

function EditTeacherDialog({
  teacher,
  onOpenChange
}: {
  teacher: Teacher | null;
  onOpenChange: (open: boolean) => void;
}) {
  const updateTeacher = useUpdateTeacher();

  const form = useForm<TeacherEditFormValues>({
    resolver: zodResolver(teacherEditFormSchema),
    values: teacher
      ? {
          firstName: teacher.user.firstName,
          lastName: teacher.user.lastName,
          phone: teacher.user.phone ?? "",
          gender: teacher.gender ?? NO_GENDER,
          dateOfBirth: teacher.dateOfBirth ? teacher.dateOfBirth.slice(0, 10) : "",
          address: teacher.address ?? "",
          emergencyPhone: teacher.emergencyPhone ?? ""
        }
      : undefined
  });

  function onSubmit(values: TeacherEditFormValues) {
    if (!teacher) return;
    updateTeacher.mutate(
      {
        id: teacher.id,
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone || undefined,
        gender: values.gender === NO_GENDER ? undefined : (values.gender as Teacher["gender"] & string),
        dateOfBirth: values.dateOfBirth || undefined,
        address: values.address || undefined,
        emergencyPhone: values.emergencyPhone || undefined
      },
      {
        onSuccess: () => {
          toast.success("Teacher updated");
          onOpenChange(false);
        },
        onError: (error) => {
          toast.error(error instanceof ApiError ? error.message : "Something went wrong");
        }
      }
    );
  }

  return (
    <Dialog open={!!teacher} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit teacher</DialogTitle>
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
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone (optional)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
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
                name="emergencyPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Emergency phone (optional)</FormLabel>
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
              <Button type="submit" disabled={updateTeacher.isPending}>
                {updateTeacher.isPending ? "Saving..." : "Save changes"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

function CreateTeacherDialog({ branches }: { branches: { id: string; name: string }[] }) {
  const [open, setOpen] = useState(false);
  const [tempPassword, setTempPassword] = useState<{ email: string; password: string } | null>(null);
  const createTeacher = useCreateTeacher();
  const { data: roles } = useCustomRoles();
  const { data: leaveGroups } = useLeaveGroups();

  const form = useForm<TeacherFormValues>({
    resolver: zodResolver(teacherFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      branchId: branches[0]?.id ?? "",
      employeeCode: "",
      customRoleId: "",
      leaveGroupId: NO_LEAVE_GROUP
    }
  });

  function onSubmit(values: TeacherFormValues) {
    const { leaveGroupId, ...rest } = values;
    createTeacher.mutate(
      {
        ...rest,
        leaveGroupId: leaveGroupId === NO_LEAVE_GROUP ? undefined : leaveGroupId
      },
      {
        onSuccess: (data) => {
          toast.success("Teacher created");
          form.reset({
            firstName: "",
            lastName: "",
            email: "",
            branchId: branches[0]?.id ?? "",
            employeeCode: "",
            customRoleId: "",
            leaveGroupId: NO_LEAVE_GROUP
          });
          setTempPassword({ email: values.email, password: data.tempPassword });
        },
        onError: (error) => {
          toast.error(error instanceof ApiError ? error.message : "Something went wrong");
        }
      }
    );
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) setTempPassword(null);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm">
          <PlusIcon />
          Add teacher
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add teacher</DialogTitle>
        </DialogHeader>
        {tempPassword ? (
          <div className="space-y-4">
            <p className="text-sm">
              Account created for <span className="font-medium">{tempPassword.email}</span>. Share this
              temporary password with them &mdash; it won&apos;t be shown again.
            </p>
            <div className="bg-muted rounded-md border p-3 font-mono text-sm">
              {tempPassword.password}
            </div>
            <DialogFooter>
              <Button onClick={() => handleOpenChange(false)}>Done</Button>
            </DialogFooter>
          </div>
        ) : (
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="employeeCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Employee code</FormLabel>
                    <FormControl>
                      <Input placeholder="EMP001" {...field} />
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
              <FormField
                control={form.control}
                name="customRoleId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {roles?.map((r) => (
                          <SelectItem key={r.id} value={r.id}>
                            {r.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {roles?.length === 0 && (
                      <p className="text-muted-foreground text-sm">
                        No roles yet.{" "}
                        <Link href="/schoolmanagement/permissions" className="underline">
                          Create one first
                        </Link>
                        .
                      </p>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="leaveGroupId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Leave group (optional)</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="No leave group" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={NO_LEAVE_GROUP}>No leave group</SelectItem>
                        {leaveGroups?.map((g) => (
                          <SelectItem key={g.id} value={g.id}>
                            {g.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit" disabled={createTeacher.isPending}>
                  {createTeacher.isPending ? "Creating..." : "Create teacher"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
