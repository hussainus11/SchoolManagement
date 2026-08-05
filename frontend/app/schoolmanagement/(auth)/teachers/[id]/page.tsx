"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon, Trash2Icon } from "lucide-react";
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
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  useAddQualification,
  useRemoveQualification,
  useRemoveTeacherPhoto,
  useResetTeacherPassword,
  useTeacher,
  useUploadTeacherPhoto
} from "@/hooks/use-teachers";
import { ApiError } from "@/lib/api/client";
import { DocumentsCard } from "@/components/documents/documents-card";
import { LeaveBalanceCard } from "@/components/leave/leave-balance-card";
import { PhotoUpload } from "@/components/photo-upload";
import { ResetPasswordButton } from "@/components/reset-password-button";
import { SalaryCard } from "@/components/payroll/salary-card";

const qualificationFormSchema = z.object({
  degree: z.string().min(1, "Degree is required").max(200),
  institution: z.string().max(200).optional(),
  yearCompleted: z.coerce.number().int().min(1950).max(2100).optional()
});
type QualificationFormValues = z.infer<typeof qualificationFormSchema>;

export default function TeacherDetailPage() {
  const params = useParams<{ id: string }>();
  const { data: teacher, isPending } = useTeacher(params.id);
  const removeQualification = useRemoveQualification();
  const uploadPhoto = useUploadTeacherPhoto();
  const removePhoto = useRemoveTeacherPhoto();
  const resetPassword = useResetTeacherPassword();

  if (isPending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-40" />
      </div>
    );
  }

  if (!teacher) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <PhotoUpload
          imageUrl={teacher.photoUrl}
          fallbackText={`${teacher.user.firstName[0] ?? ""}${teacher.user.lastName[0] ?? ""}`}
          isUploading={uploadPhoto.isPending}
          onUpload={(file) =>
            uploadPhoto.mutate(
              { id: teacher.id, file },
              {
                onError: (error) =>
                  toast.error(error instanceof ApiError ? error.message : "Something went wrong")
              }
            )
          }
          onRemove={
            teacher.photoUrl
              ? () =>
                  removePhoto.mutate(teacher.id, {
                    onError: (error) =>
                      toast.error(error instanceof ApiError ? error.message : "Something went wrong")
                  })
              : undefined
          }
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold tracking-tight">
            {teacher.user.firstName} {teacher.user.lastName}
          </h1>
          <p className="text-muted-foreground">{teacher.user.email}</p>
        </div>
        <ResetPasswordButton
          personName={`${teacher.user.firstName} ${teacher.user.lastName}`}
          onReset={() => resetPassword.mutateAsync(teacher.id)}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-muted-foreground">Employee code</div>
            <div>{teacher.employeeCode}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Status</div>
            <Badge variant={teacher.isActive ? "default" : "secondary"}>
              {teacher.isActive ? "Active" : "Inactive"}
            </Badge>
          </div>
          <div>
            <div className="text-muted-foreground">Gender</div>
            <div>{teacher.gender ?? "—"}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Phone</div>
            <div>{teacher.user.phone ?? "—"}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Joining date</div>
            <div>{new Date(teacher.joiningDate).toLocaleDateString()}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Emergency phone</div>
            <div>{teacher.emergencyPhone ?? "—"}</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Qualifications</CardTitle>
          <AddQualificationDialog teacherId={teacher.id} />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Degree</TableHead>
                <TableHead>Institution</TableHead>
                <TableHead>Year</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {teacher.qualifications.map((q) => (
                <TableRow key={q.id}>
                  <TableCell className="font-medium">{q.degree}</TableCell>
                  <TableCell>{q.institution ?? "—"}</TableCell>
                  <TableCell>{q.yearCompleted ?? "—"}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() =>
                        removeQualification.mutate(
                          { teacherId: teacher.id, qualificationId: q.id },
                          {
                            onError: (error) =>
                              toast.error(
                                error instanceof ApiError ? error.message : "Something went wrong"
                              )
                          }
                        )
                      }
                      aria-label={`Remove ${q.degree}`}>
                      <Trash2Icon className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {teacher.qualifications.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-muted-foreground h-20 text-center">
                    No qualifications recorded.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <LeaveBalanceCard teacherId={teacher.id} />

      <SalaryCard userId={teacher.userId} />

      <DocumentsCard ownerType="TEACHER" ownerId={teacher.id} />
    </div>
  );
}

function AddQualificationDialog({ teacherId }: { teacherId: string }) {
  const [open, setOpen] = useState(false);
  const addQualification = useAddQualification();

  const form = useForm<QualificationFormValues>({
    resolver: zodResolver(qualificationFormSchema),
    defaultValues: { degree: "", institution: "", yearCompleted: undefined }
  });

  function onSubmit(values: QualificationFormValues) {
    addQualification.mutate(
      { teacherId, ...values },
      {
        onSuccess: () => {
          toast.success("Qualification added");
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
          Add qualification
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add qualification</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="degree"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Degree</FormLabel>
                  <FormControl>
                    <Input placeholder="M.Sc Mathematics" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="institution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institution (optional)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="yearCompleted"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Year completed (optional)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={addQualification.isPending}>
                {addQualification.isPending ? "Adding..." : "Add qualification"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
