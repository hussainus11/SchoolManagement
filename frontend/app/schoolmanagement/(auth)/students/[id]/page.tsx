"use client";

import { useParams } from "next/navigation";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  type AcademicStatus,
  useRemoveStudentPhoto,
  useStudent,
  useUnlinkGuardian,
  useUpdateStudent,
  useUploadStudentPhoto
} from "@/hooks/use-students";
import { ApiError } from "@/lib/api/client";
import { DocumentsCard } from "@/components/documents/documents-card";
import { PhotoUpload } from "@/components/photo-upload";
import { AddGuardianDialog } from "./add-guardian-dialog";
import { ChangeSectionDialog } from "./change-section-dialog";
import { DiscountsCard } from "./discounts-card";

const STATUS_OPTIONS: AcademicStatus[] = ["ACTIVE", "GRADUATED", "TRANSFERRED", "WITHDRAWN"];

export default function StudentDetailPage() {
  const params = useParams<{ id: string }>();
  const { data: student, isPending } = useStudent(params.id);
  const updateStudent = useUpdateStudent();
  const unlinkGuardian = useUnlinkGuardian();
  const uploadPhoto = useUploadStudentPhoto();
  const removePhoto = useRemoveStudentPhoto();

  if (isPending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-40" />
      </div>
    );
  }

  if (!student) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <PhotoUpload
          imageUrl={student.photoUrl}
          fallbackText={`${student.firstName[0] ?? ""}${student.lastName[0] ?? ""}`}
          isUploading={uploadPhoto.isPending}
          onUpload={(file) =>
            uploadPhoto.mutate(
              { id: student.id, file },
              {
                onError: (error) =>
                  toast.error(error instanceof ApiError ? error.message : "Something went wrong")
              }
            )
          }
          onRemove={
            student.photoUrl
              ? () =>
                  removePhoto.mutate(student.id, {
                    onError: (error) =>
                      toast.error(error instanceof ApiError ? error.message : "Something went wrong")
                  })
              : undefined
          }
        />
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {student.firstName} {student.lastName}
          </h1>
          <p className="text-muted-foreground">Admission #{student.admissionNumber}</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-muted-foreground mb-1">Class / Section</div>
            <div className="flex items-center gap-2">
              <span>
                {student.section ? `${student.section.class.name} - ${student.section.name}` : "Unassigned"}
              </span>
              <ChangeSectionDialog
                studentId={student.id}
                currentClassId={student.section?.class.id}
                currentSectionId={student.sectionId}
              />
            </div>
          </div>
          <div>
            <div className="text-muted-foreground mb-1">Status</div>
            <Select
              value={student.academicStatus}
              onValueChange={(value) =>
                updateStudent.mutate(
                  { id: student.id, academicStatus: value as AcademicStatus },
                  {
                    onError: (error) =>
                      toast.error(error instanceof ApiError ? error.message : "Something went wrong")
                  }
                )
              }>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {STATUS_OPTIONS.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <div className="text-muted-foreground">Gender</div>
            <div>{student.gender ?? "—"}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Blood group</div>
            <div>{student.bloodGroup ?? "—"}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Admission date</div>
            <div>{new Date(student.admissionDate).toLocaleDateString()}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Address</div>
            <div>{student.address ?? "—"}</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Guardians</CardTitle>
          <AddGuardianDialog studentId={student.id} />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Relation</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Primary</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {student.guardians?.map((link) => (
                <TableRow key={link.id}>
                  <TableCell className="font-medium">
                    {link.guardian.firstName} {link.guardian.lastName}
                  </TableCell>
                  <TableCell>{link.relation}</TableCell>
                  <TableCell>{link.guardian.email ?? link.guardian.phone ?? "—"}</TableCell>
                  <TableCell>{link.isPrimary && <Badge>Primary</Badge>}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        unlinkGuardian.mutate(
                          { studentId: student.id, guardianId: link.guardianId },
                          {
                            onError: (error) =>
                              toast.error(
                                error instanceof ApiError ? error.message : "Something went wrong"
                              )
                          }
                        )
                      }>
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {(!student.guardians || student.guardians.length === 0) && (
                <TableRow>
                  <TableCell colSpan={5} className="text-muted-foreground h-20 text-center">
                    No guardians linked yet.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <DiscountsCard studentId={student.id} />

      <DocumentsCard ownerType="STUDENT" ownerId={student.id} />
    </div>
  );
}
