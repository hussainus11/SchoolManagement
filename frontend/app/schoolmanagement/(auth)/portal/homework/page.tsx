"use client";

import { format } from "date-fns";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { SubmissionStatus } from "@/hooks/use-homework";
import { usePortalSubmissions } from "@/hooks/use-portal";
import { StudentSelector, useActivePortalStudent } from "../student-selector";

const STATUS_VARIANT: Record<SubmissionStatus, "default" | "secondary" | "destructive" | "outline"> = {
  PENDING: "secondary",
  SUBMITTED: "outline",
  LATE: "destructive",
  GRADED: "default"
};

export default function PortalHomeworkPage() {
  const { activeStudentId } = useActivePortalStudent();
  const { data: submissions, isPending } = usePortalSubmissions(activeStudentId);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Homework</h1>
        <StudentSelector />
      </div>
      <Card>
        <CardContent className="pt-6">
          {isPending ? (
            <p className="text-muted-foreground text-sm">Loading...</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Due</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Marks</TableHead>
                  <TableHead>Feedback</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(submissions ?? []).map((s) => (
                  <TableRow key={s.id}>
                    <TableCell className="font-medium">{s.assignment?.title}</TableCell>
                    <TableCell>{s.assignment?.subject.name}</TableCell>
                    <TableCell>{s.assignment ? format(new Date(s.assignment.dueDate), "PP") : "-"}</TableCell>
                    <TableCell>
                      <Badge variant={STATUS_VARIANT[s.status]}>{s.status}</Badge>
                    </TableCell>
                    <TableCell>{s.marksObtained ?? "-"}</TableCell>
                    <TableCell>{s.feedback ?? "-"}</TableCell>
                  </TableRow>
                ))}
                {submissions?.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-muted-foreground h-20 text-center">
                      No homework yet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
