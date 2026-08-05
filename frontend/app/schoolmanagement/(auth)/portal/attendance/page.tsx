"use client";

import { format } from "date-fns";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { AttendanceStatus } from "@/hooks/use-attendance";
import { usePortalAttendance } from "@/hooks/use-portal";
import { StudentSelector, useActivePortalStudent } from "../student-selector";

const STATUS_VARIANT: Record<AttendanceStatus, "default" | "secondary" | "destructive" | "outline"> = {
  PRESENT: "default",
  ABSENT: "destructive",
  LATE: "outline",
  EXCUSED: "secondary",
  HALF_DAY: "outline"
};

export default function PortalAttendancePage() {
  const { activeStudentId } = useActivePortalStudent();
  const { data: records, isPending } = usePortalAttendance(activeStudentId);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Attendance</h1>
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
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Remarks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(records ?? []).map((r) => (
                  <TableRow key={r.id}>
                    <TableCell>{format(new Date(r.date), "PP")}</TableCell>
                    <TableCell>
                      <Badge variant={STATUS_VARIANT[r.status]}>{r.status}</Badge>
                    </TableCell>
                    <TableCell>{r.remarks ?? "-"}</TableCell>
                  </TableRow>
                ))}
                {records?.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={3} className="text-muted-foreground h-20 text-center">
                      No attendance records yet.
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
