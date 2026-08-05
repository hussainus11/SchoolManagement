"use client";

import { useState } from "react";
import { PlusIcon, UserRoundIcon, UsersIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/date-picker";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useBooks, useIssueBook } from "@/hooks/use-library";
import { useStudents } from "@/hooks/use-students";
import { useTeachers } from "@/hooks/use-teachers";
import { ApiError } from "@/lib/api/client";

export function IssueBookDialog() {
  const [open, setOpen] = useState(false);
  const [borrowerType, setBorrowerType] = useState<"student" | "teacher">("student");
  const [bookId, setBookId] = useState("");
  const [studentId, setStudentId] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [dueDate, setDueDate] = useState<Date | undefined>();

  const { data: books } = useBooks();
  const { data: students } = useStudents();
  const { data: teachers } = useTeachers();
  const issueBook = useIssueBook();

  const availableBooks = (books ?? []).filter((b) => b.availableCopies > 0);

  function handleOpenChange(next: boolean) {
    if (next) {
      setBookId("");
      setStudentId("");
      setTeacherId("");
      setDueDate(undefined);
      setBorrowerType("student");
    }
    setOpen(next);
  }

  function handleIssue() {
    if (!bookId || !dueDate) return;
    if (borrowerType === "student" && !studentId) return;
    if (borrowerType === "teacher" && !teacherId) return;

    issueBook.mutate(
      {
        bookId,
        studentId: borrowerType === "student" ? studentId : undefined,
        teacherId: borrowerType === "teacher" ? teacherId : undefined,
        dueDate: dueDate.toISOString().slice(0, 10)
      },
      {
        onSuccess: () => {
          toast.success("Book issued");
          setOpen(false);
        },
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <PlusIcon />
          Issue book
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Issue book</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">Book</p>
            <Select value={bookId} onValueChange={setBookId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a book" />
              </SelectTrigger>
              <SelectContent>
                {availableBooks.map((b) => (
                  <SelectItem key={b.id} value={b.id}>
                    {b.title} ({b.availableCopies} available)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Tabs value={borrowerType} onValueChange={(v) => setBorrowerType(v as "student" | "teacher")}>
            <TabsList>
              <TabsTrigger value="student">
                <UsersIcon />
                Student
              </TabsTrigger>
              <TabsTrigger value="teacher">
                <UserRoundIcon />
                Teacher
              </TabsTrigger>
            </TabsList>
            <TabsContent value="student" className="space-y-2 pt-2">
              <p className="text-sm font-medium">Student</p>
              <Select value={studentId} onValueChange={setStudentId}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a student" />
                </SelectTrigger>
                <SelectContent>
                  {(students ?? []).map((s) => (
                    <SelectItem key={s.id} value={s.id}>
                      {s.firstName} {s.lastName} ({s.admissionNumber})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </TabsContent>
            <TabsContent value="teacher" className="space-y-2 pt-2">
              <p className="text-sm font-medium">Teacher</p>
              <Select value={teacherId} onValueChange={setTeacherId}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a teacher" />
                </SelectTrigger>
                <SelectContent>
                  {(teachers ?? []).map((t) => (
                    <SelectItem key={t.id} value={t.id}>
                      {t.user.firstName} {t.user.lastName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </TabsContent>
          </Tabs>

          <div className="space-y-2">
            <p className="text-sm font-medium">Due date</p>
            <DatePicker value={dueDate} onChange={setDueDate} />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleIssue} disabled={issueBook.isPending}>
            {issueBook.isPending ? "Issuing..." : "Issue book"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
