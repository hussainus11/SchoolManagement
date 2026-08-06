"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Loader2Icon, MailCheckIcon, MailIcon } from "lucide-react";
import { useForgotPassword } from "@/hooks/use-auth";
import { ApiError } from "@/lib/api/client";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address")
});

type FormValues = z.infer<typeof formSchema>;

export default function Page() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const forgotPassword = useForgotPassword();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  });

  function onSubmit(data: FormValues) {
    forgotPassword.mutate(data, {
      onSuccess: () => setIsSubmitted(true),
      onError: (error) => {
        toast.error(error instanceof ApiError ? error.message : "Something went wrong");
      }
    });
  }

  return (
    <div className="flex items-center justify-center py-4 lg:h-screen">
      <Card className="mx-auto w-96">
        <CardHeader>
          <CardTitle className="text-2xl">Forgot Password</CardTitle>
          <CardDescription>
            Enter your email address and we&#39;ll send you instructions to reset your password.
          </CardDescription>
        </CardHeader>
        {isSubmitted ? (
          <CardContent>
            <div className="flex flex-col items-center gap-3 py-4 text-center">
              <MailCheckIcon className="text-primary size-10" />
              <p className="text-sm">
                If an account exists for <span className="font-medium">{form.getValues("email")}</span>, we&#39;ve
                sent instructions to reset your password. The link expires in 60 minutes.
              </p>
            </div>
          </CardContent>
        ) : (
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="email" className="sr-only">
                        Email address
                      </Label>
                      <FormControl>
                        <div className="relative">
                          <MailIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform opacity-30" />
                          <Input
                            {...field}
                            id="email"
                            type="email"
                            autoComplete="email"
                            className="w-full pl-10"
                            placeholder="Enter your email addresss"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={forgotPassword.isPending}>
                  {forgotPassword.isPending ? (
                    <>
                      <Loader2Icon className="animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Send Reset Instructions"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        )}
        <CardFooter className="flex justify-center">
          <p className="text-sm">
            Already have an account?{" "}
            <a href="/schoolmanagement/login/v1" className="underline">
              Log in
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
