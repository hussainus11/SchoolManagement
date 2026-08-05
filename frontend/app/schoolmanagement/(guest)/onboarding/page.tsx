"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/date-picker";
import { useOnboardSchool } from "@/hooks/use-auth";
import { ApiError } from "@/lib/api/client";
import { cn } from "@/lib/utils";

const onboardSchema = z
  .object({
    schoolName: z.string().min(2, "School name is required").max(200),
    schoolEmail: z.union([z.string().email("Enter a valid email"), z.literal("")]).optional(),
    schoolPhone: z.string().optional(),
    academicYearName: z.string().min(1, "Academic year name is required").max(50),
    academicYearStart: z.date({ required_error: "Start date is required" }),
    academicYearEnd: z.date({ required_error: "End date is required" }),
    adminFirstName: z.string().min(1, "First name is required"),
    adminLastName: z.string().min(1, "Last name is required"),
    adminEmail: z.string().min(1, "Email is required").email("Enter a valid email address"),
    adminPassword: z.string().min(8, "Password must be at least 8 characters")
  })
  .refine((data) => data.academicYearEnd > data.academicYearStart, {
    message: "End date must be after the start date",
    path: ["academicYearEnd"]
  });

type OnboardValues = z.infer<typeof onboardSchema>;

const STEPS: { title: string; fields: (keyof OnboardValues)[] }[] = [
  {
    title: "School details",
    fields: [
      "schoolName",
      "schoolEmail",
      "schoolPhone",
      "academicYearName",
      "academicYearStart",
      "academicYearEnd"
    ]
  },
  { title: "Admin account", fields: ["adminFirstName", "adminLastName", "adminEmail", "adminPassword"] },
  { title: "Confirm", fields: [] }
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const onboard = useOnboardSchool();

  const form = useForm<OnboardValues>({
    resolver: zodResolver(onboardSchema),
    defaultValues: {
      schoolName: "",
      schoolEmail: "",
      schoolPhone: "",
      academicYearName: "",
      academicYearStart: undefined,
      academicYearEnd: undefined,
      adminFirstName: "",
      adminLastName: "",
      adminEmail: "",
      adminPassword: ""
    }
  });

  async function handleNext() {
    const valid = await form.trigger(STEPS[step].fields);
    if (valid) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function handleBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function onSubmit(values: OnboardValues) {
    onboard.mutate(
      {
        ...values,
        schoolEmail: values.schoolEmail || undefined,
        academicYearStart: format(values.academicYearStart, "yyyy-MM-dd"),
        academicYearEnd: format(values.academicYearEnd, "yyyy-MM-dd")
      },
      {
        onSuccess: () => {
          toast.success("School created");
          router.push("/schoolmanagement");
        },
        onError: (error) => {
          toast.error(error instanceof ApiError ? error.message : "Something went wrong");
        }
      }
    );
  }

  const values = form.getValues();

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Set up your school</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Create your school workspace in a few steps
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
          {STEPS.map((s, i) => (
            <div key={s.title} className="flex items-center gap-2">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
                  i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}>
                {i + 1}
              </div>
              {i < STEPS.length - 1 && <div className="bg-border h-px w-8" />}
            </div>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{STEPS[step].title}</CardTitle>
            <CardDescription>
              Step {step + 1} of {STEPS.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {step === 0 && (
                  <>
                    <FormField
                      control={form.control}
                      name="schoolName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>School name</FormLabel>
                          <FormControl>
                            <Input placeholder="Greenwood High School" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="schoolEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>School email (optional)</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="info@school.edu" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="schoolPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>School phone (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 555 000 0000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="academicYearName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current academic year</FormLabel>
                          <FormControl>
                            <Input placeholder="2026-2027" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="academicYearStart"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Start date</FormLabel>
                            <FormControl>
                              <DatePicker
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="Pick a start date"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="academicYearEnd"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>End date</FormLabel>
                            <FormControl>
                              <DatePicker
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="Pick an end date"
                                disabled={(date) =>
                                  form.getValues("academicYearStart")
                                    ? date < form.getValues("academicYearStart")
                                    : false
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="adminFirstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                              <Input placeholder="Alice" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="adminLastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last name</FormLabel>
                            <FormControl>
                              <Input placeholder="Admin" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="adminEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="alice@school.edu" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="adminPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" autoComplete="new-password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {step === 2 && (
                  <dl className="divide-border divide-y text-sm">
                    <SummaryRow label="School" value={values.schoolName} />
                    <SummaryRow
                      label="Academic year"
                      value={`${values.academicYearName} (${
                        values.academicYearStart ? format(values.academicYearStart, "PPP") : "—"
                      } – ${values.academicYearEnd ? format(values.academicYearEnd, "PPP") : "—"})`}
                    />
                    <SummaryRow
                      label="Admin"
                      value={`${values.adminFirstName} ${values.adminLastName} · ${values.adminEmail}`}
                    />
                  </dl>
                )}

                <div className="flex justify-between pt-4">
                  {step > 0 ? (
                    <Button type="button" variant="outline" onClick={handleBack}>
                      Back
                    </Button>
                  ) : (
                    <span />
                  )}

                  {step < STEPS.length - 1 ? (
                    <Button type="button" onClick={handleNext}>
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" disabled={onboard.isPending}>
                      {onboard.isPending ? "Creating school..." : "Create school"}
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/schoolmanagement/login/v1" className="underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
