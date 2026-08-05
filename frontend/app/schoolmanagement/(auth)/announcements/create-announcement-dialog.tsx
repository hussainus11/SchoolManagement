"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Textarea } from "@/components/ui/textarea";
import { useCreateAnnouncement } from "@/hooks/use-notifications";
import { useBranches } from "@/hooks/use-school-settings";
import type { Role } from "@/lib/store/auth-store";
import { ApiError } from "@/lib/api/client";

const ROLE_OPTIONS: Role[] = ["SCHOOL_ADMIN", "BRANCH_ADMIN", "TEACHER", "ACCOUNTANT", "PARENT", "STUDENT"];

const announcementFormSchema = z.object({
  branchId: z.string().optional(),
  title: z.string().min(1, "Title is required").max(200),
  body: z.string().min(1, "Body is required").max(2000),
  targetRoles: z.array(z.string()).min(1, "Select at least one audience")
});
type AnnouncementFormValues = z.infer<typeof announcementFormSchema>;

export function CreateAnnouncementDialog() {
  const [open, setOpen] = useState(false);
  const { data: branches } = useBranches();
  const createAnnouncement = useCreateAnnouncement();

  const form = useForm<AnnouncementFormValues>({
    resolver: zodResolver(announcementFormSchema),
    defaultValues: { branchId: "all", title: "", body: "", targetRoles: [] }
  });

  function onOpenChange(next: boolean) {
    if (next) form.reset({ branchId: "all", title: "", body: "", targetRoles: [] });
    setOpen(next);
  }

  function onSubmit(values: AnnouncementFormValues) {
    createAnnouncement.mutate(
      {
        branchId: values.branchId === "all" ? undefined : values.branchId,
        title: values.title,
        body: values.body,
        targetRoles: values.targetRoles as Role[]
      },
      {
        onSuccess: () => {
          toast.success("Announcement sent");
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
          New announcement
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New announcement</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="School reopens Monday" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Classes resume after the break on Monday 9am." {...field} />
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
                        <SelectValue placeholder="All branches" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="all">All branches</SelectItem>
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
            <FormField
              control={form.control}
              name="targetRoles"
              render={() => (
                <FormItem>
                  <FormLabel>Audience</FormLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {ROLE_OPTIONS.map((role) => (
                      <FormField
                        key={role}
                        control={form.control}
                        name="targetRoles"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center gap-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(role)}
                                onCheckedChange={(checked) =>
                                  field.onChange(
                                    checked
                                      ? [...field.value, role]
                                      : field.value.filter((r) => r !== role)
                                  )
                                }
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">{role}</FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={createAnnouncement.isPending}>
                {createAnnouncement.isPending ? "Sending..." : "Send announcement"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
