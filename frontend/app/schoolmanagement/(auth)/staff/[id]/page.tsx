"use client";

import { useParams } from "next/navigation";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { DocumentsCard } from "@/components/documents/documents-card";
import { LeaveBalanceCard } from "@/components/leave/leave-balance-card";
import { PhotoUpload } from "@/components/photo-upload";
import { ResetPasswordButton } from "@/components/reset-password-button";
import { SalaryCard } from "@/components/payroll/salary-card";
import {
  useRemoveStaffPhoto,
  useResetStaffPassword,
  useStaffMember,
  useUploadStaffPhoto
} from "@/hooks/use-staff";
import { ApiError } from "@/lib/api/client";

export default function StaffDetailPage() {
  const params = useParams<{ id: string }>();
  const { data: staff, isPending } = useStaffMember(params.id);
  const uploadPhoto = useUploadStaffPhoto();
  const removePhoto = useRemoveStaffPhoto();
  const resetPassword = useResetStaffPassword();

  if (isPending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-40" />
      </div>
    );
  }

  if (!staff) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <PhotoUpload
          imageUrl={staff.photoUrl}
          fallbackText={`${staff.user.firstName[0] ?? ""}${staff.user.lastName[0] ?? ""}`}
          isUploading={uploadPhoto.isPending}
          onUpload={(file) =>
            uploadPhoto.mutate(
              { id: staff.id, file },
              {
                onError: (error) =>
                  toast.error(error instanceof ApiError ? error.message : "Something went wrong")
              }
            )
          }
          onRemove={
            staff.photoUrl
              ? () =>
                  removePhoto.mutate(staff.id, {
                    onError: (error) =>
                      toast.error(error instanceof ApiError ? error.message : "Something went wrong")
                  })
              : undefined
          }
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold tracking-tight">
            {staff.user.firstName} {staff.user.lastName}
          </h1>
          <p className="text-muted-foreground">
            {staff.designation} &middot; {staff.user.email}
          </p>
        </div>
        <ResetPasswordButton
          personName={`${staff.user.firstName} ${staff.user.lastName}`}
          onReset={() => resetPassword.mutateAsync(staff.id)}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-muted-foreground">Designation</div>
            <div>{staff.designation}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Employee code</div>
            <div>{staff.employeeCode}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Status</div>
            <Badge variant={staff.isActive ? "default" : "secondary"}>
              {staff.isActive ? "Active" : "Inactive"}
            </Badge>
          </div>
          <div>
            <div className="text-muted-foreground">Gender</div>
            <div>{staff.gender ?? "—"}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Phone</div>
            <div>{staff.user.phone ?? "—"}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Joining date</div>
            <div>{new Date(staff.joiningDate).toLocaleDateString()}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Emergency phone</div>
            <div>{staff.emergencyPhone ?? "—"}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Address</div>
            <div>{staff.address ?? "—"}</div>
          </div>
        </CardContent>
      </Card>

      <LeaveBalanceCard staffId={staff.id} />

      <SalaryCard userId={staff.userId} />

      <DocumentsCard ownerType="STAFF" ownerId={staff.id} />
    </div>
  );
}
