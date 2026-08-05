"use client";

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhotoUpload } from "@/components/photo-upload";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useRemoveSchoolLogo,
  useSchool,
  useUpdateSchool,
  useUploadSchoolLogo
} from "@/hooks/use-school-settings";
import { ApiError } from "@/lib/api/client";

const schoolFormSchema = z.object({
  name: z.string().min(2, "School name is required").max(200),
  email: z.union([z.string().email("Enter a valid email"), z.literal("")]).optional(),
  phone: z.string().optional(),
  address: z.string().optional()
});

type SchoolFormValues = z.infer<typeof schoolFormSchema>;

export default function SchoolProfilePage() {
  const { data: school, isPending } = useSchool();
  const updateSchool = useUpdateSchool();
  const uploadLogo = useUploadSchoolLogo();
  const removeLogo = useRemoveSchoolLogo();

  const form = useForm<SchoolFormValues>({
    resolver: zodResolver(schoolFormSchema),
    defaultValues: { name: "", email: "", phone: "", address: "" }
  });

  useEffect(() => {
    if (school) {
      form.reset({
        name: school.name,
        email: school.email ?? "",
        phone: school.phone ?? "",
        address: school.address ?? ""
      });
    }
  }, [school, form]);

  function onSubmit(values: SchoolFormValues) {
    updateSchool.mutate(
      { ...values, email: values.email || undefined },
      {
        onSuccess: () => toast.success("School profile updated"),
        onError: (error) => {
          toast.error(error instanceof ApiError ? error.message : "Something went wrong");
        }
      }
    );
  }

  if (isPending) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>School profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>School profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6 space-y-2">
          <Label className="text-muted-foreground">Logo</Label>
          <div className="flex items-center gap-4">
            <PhotoUpload
              imageUrl={school?.logoUrl}
              fallbackText={school?.name?.slice(0, 2).toUpperCase() ?? "SC"}
              shape="square"
              size="lg"
              isUploading={uploadLogo.isPending}
              onUpload={(file) =>
                uploadLogo.mutate(file, {
                  onSuccess: () => toast.success("Logo uploaded"),
                  onError: (error) =>
                    toast.error(error instanceof ApiError ? error.message : "Something went wrong")
                })
              }
              onRemove={
                school?.logoUrl
                  ? () =>
                      removeLogo.mutate(undefined, {
                        onSuccess: () => toast.success("Logo removed"),
                        onError: (error) =>
                          toast.error(error instanceof ApiError ? error.message : "Something went wrong")
                      })
                  : undefined
              }
            />
            <p className="text-muted-foreground text-sm">
              Shown on ID cards and printed on invoices, payslips, and report cards. JPEG, PNG, or WEBP, up to
              5MB.
            </p>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid gap-4 sm:grid-cols-2">
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
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
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
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={updateSchool.isPending}>
              {updateSchool.isPending ? "Saving..." : "Save changes"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
