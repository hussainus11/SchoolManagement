"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRoundIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useResetPassword } from "@/hooks/use-auth";
import { ApiError } from "@/lib/api/client";

const resetPasswordSchema = z
  .object({
    newPassword: z.string().min(8, "New password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your new password")
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  });

type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;

export default function Page() {
  return (
    <Suspense>
      <ResetPasswordForm />
    </Suspense>
  );
}

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const resetPassword = useResetPassword();

  const form = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { newPassword: "", confirmPassword: "" }
  });

  function onSubmit(values: ResetPasswordValues) {
    if (!token) return;
    resetPassword.mutate(
      { token, newPassword: values.newPassword },
      {
        onSuccess: (data) => {
          toast.success("Password updated");
          const isPortalRole = data.user.role === "PARENT" || data.user.role === "STUDENT";
          if (data.user.role === "SUPER_ADMIN") {
            router.push("/schoolmanagement/schools");
          } else {
            router.push(isPortalRole ? "/schoolmanagement/portal" : "/schoolmanagement");
          }
        },
        onError: (error) => {
          toast.error(error instanceof ApiError ? error.message : "Something went wrong");
        }
      }
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="bg-primary/10 text-primary mb-2 flex size-10 items-center justify-center rounded-full">
            <KeyRoundIcon className="size-5" />
          </div>
          <CardTitle>Reset your password</CardTitle>
          <p className="text-muted-foreground text-sm">Choose a new password for your account.</p>
        </CardHeader>
        <CardContent>
          {!token ? (
            <p className="text-destructive-foreground text-sm">
              This reset link is missing its token. Please request a new one from the{" "}
              <a href="/schoolmanagement/forgot-password" className="underline">
                forgot password
              </a>{" "}
              page.
            </p>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New password</FormLabel>
                      <FormControl>
                        <Input type="password" autoComplete="new-password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm new password</FormLabel>
                      <FormControl>
                        <Input type="password" autoComplete="new-password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={resetPassword.isPending}>
                  {resetPassword.isPending ? "Updating..." : "Update password"}
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
