"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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
import { useCreateAdmission } from "@/hooks/use-admissions";
import { useBranches } from "@/hooks/use-school-settings";
import { ApiError } from "@/lib/api/client";

const admissionFormSchema = z.object({
  branchId: z.string().min(1, "Branch is required"),
  applicantFirstName: z.string().min(1, "First name is required").max(100),
  applicantLastName: z.string().min(1, "Last name is required").max(100),
  gradeAppliedFor: z.string().min(1, "Grade is required").max(50),
  guardianName: z.string().min(1, "Guardian name is required").max(200),
  guardianPhone: z.string().min(1, "Guardian phone is required").max(30),
  guardianEmail: z.string().email().optional().or(z.literal("")),
  source: z.string().max(100).optional()
});
type AdmissionFormValues = z.infer<typeof admissionFormSchema>;

export function CreateAdmissionDialog() {
  const [open, setOpen] = useState(false);
  const { data: branches } = useBranches();
  const createAdmission = useCreateAdmission();

  const form = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionFormSchema),
    defaultValues: {
      branchId: branches?.[0]?.id ?? "",
      applicantFirstName: "",
      applicantLastName: "",
      gradeAppliedFor: "",
      guardianName: "",
      guardianPhone: "",
      guardianEmail: "",
      source: ""
    }
  });

  function onOpenChange(next: boolean) {
    if (next) {
      form.reset({
        branchId: branches?.[0]?.id ?? "",
        applicantFirstName: "",
        applicantLastName: "",
        gradeAppliedFor: "",
        guardianName: "",
        guardianPhone: "",
        guardianEmail: "",
        source: ""
      });
    }
    setOpen(next);
  }

  function onSubmit(values: AdmissionFormValues) {
    createAdmission.mutate(
      { ...values, guardianEmail: values.guardianEmail || undefined, source: values.source || undefined },
      {
        onSuccess: () => {
          toast.success("Inquiry created");
          setOpen(false);
        },
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm">
          <PlusIcon />
          New inquiry
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New admission inquiry</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="applicantFirstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Applicant first name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="applicantLastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Applicant last name</FormLabel>
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
                name="gradeAppliedFor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grade applied for</FormLabel>
                    <FormControl>
                      <Input placeholder="Grade 6" {...field} />
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
                        {(branches ?? []).map((b) => (
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
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="guardianName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Guardian name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="guardianPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Guardian phone</FormLabel>
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
                name="guardianEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Guardian email (optional)</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="source"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Source (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Website, referral..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit" disabled={createAdmission.isPending}>
                {createAdmission.isPending ? "Creating..." : "Create inquiry"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
