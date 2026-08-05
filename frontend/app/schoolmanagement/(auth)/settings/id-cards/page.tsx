"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { UploadIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ColorPicker } from "@/components/color-picker";
import { IdCardFront } from "@/components/id-card/id-card-preview";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useRemoveIdCardBackground,
  useSchool,
  useUpdateSchool,
  useUploadIdCardBackground
} from "@/hooks/use-school-settings";
import { ApiError } from "@/lib/api/client";

const DEFAULT_BACKGROUND = "#1E3A8A";
const DEFAULT_FOREGROUND = "#FFFFFF";

export default function IdCardDesignPage() {
  const { data: school, isPending } = useSchool();
  const updateSchool = useUpdateSchool();
  const uploadBackground = useUploadIdCardBackground();
  const removeBackground = useRemoveIdCardBackground();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND);
  const [foregroundColor, setForegroundColor] = useState(DEFAULT_FOREGROUND);

  useEffect(() => {
    if (school) {
      setBackgroundColor(school.idCardBackgroundColor || DEFAULT_BACKGROUND);
      setForegroundColor(school.idCardForegroundColor || DEFAULT_FOREGROUND);
    }
  }, [school]);

  const isDirty =
    !!school && (backgroundColor !== school.idCardBackgroundColor || foregroundColor !== school.idCardForegroundColor);

  function handleSaveColors() {
    updateSchool.mutate(
      { idCardBackgroundColor: backgroundColor, idCardForegroundColor: foregroundColor },
      {
        onSuccess: () => toast.success("ID card colors saved"),
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  function handleFileSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be smaller than 5MB");
      return;
    }
    uploadBackground.mutate(file, {
      onSuccess: () => toast.success("Background image uploaded"),
      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
    });
  }

  function handleRemoveImage() {
    removeBackground.mutate(undefined, {
      onSuccess: () => toast.success("Background image removed"),
      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
    });
  }

  if (isPending || !school) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>ID card design</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-48 w-80" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>ID card design</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground text-sm">
          Set the colors and optional background image used for every student and staff ID card. This is set
          once here and reused automatically wherever ID cards are printed.
        </p>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Background color</Label>
                <ColorPicker value={backgroundColor} onChange={setBackgroundColor} />
              </div>
              <div className="space-y-2">
                <Label>Text color</Label>
                <ColorPicker value={foregroundColor} onChange={setForegroundColor} />
              </div>
            </div>
            <Button onClick={handleSaveColors} disabled={!isDirty || updateSchool.isPending}>
              {updateSchool.isPending ? "Saving..." : "Save colors"}
            </Button>

            <div className="space-y-2 border-t pt-4">
              <Label>Background image (optional)</Label>
              <p className="text-muted-foreground text-sm">
                Uploading an image overlays it behind the card text instead of the flat background color. JPEG,
                PNG, or WEBP, up to 5MB.
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={handleFileSelected}
              />
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploadBackground.isPending}>
                  <UploadIcon />
                  {uploadBackground.isPending ? "Uploading..." : "Upload image"}
                </Button>
                {school.idCardBackgroundImageUrl && (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleRemoveImage}
                    disabled={removeBackground.isPending}>
                    <XIcon />
                    Remove image
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-muted-foreground">Live preview</Label>
            <IdCardFront
              schoolName={school.name}
              schoolLogoUrl={school.logoUrl}
              backgroundColor={backgroundColor}
              foregroundColor={foregroundColor}
              backgroundImageUrl={school.idCardBackgroundImageUrl}
              role="Student"
              name="Jordan Sample"
              idLabel="Admission No."
              idNumber="0001"
              fields={[{ label: "Class", value: "Grade 6 - A" }]}
              validity="2025 - 26"
              qrValue={`${school.name} | Student | Admission No.: 0001 | Jordan Sample`}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
