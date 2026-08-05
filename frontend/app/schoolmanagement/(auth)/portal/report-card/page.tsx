"use client";

import { useState } from "react";
import { PrinterIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PrintHeader } from "@/components/print-header";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { usePortalExams, usePortalReportCard } from "@/hooks/use-portal";
import { StudentSelector, useActivePortalStudent } from "../student-selector";

export default function PortalReportCardPage() {
  const { activeStudentId } = useActivePortalStudent();
  const [examId, setExamId] = useState("");
  const { data: exams } = usePortalExams(activeStudentId);
  const { data: reportCard, isPending } = usePortalReportCard(activeStudentId, examId || undefined);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between print:hidden">
        <h1 className="text-2xl font-bold tracking-tight">Report card</h1>
        <StudentSelector />
      </div>

      <Card className="print:hidden">
        <CardContent className="flex flex-wrap items-end gap-4 pt-6">
          <div className="space-y-2">
            <p className="text-sm font-medium">Exam</p>
            <Select value={examId} onValueChange={setExamId}>
              <SelectTrigger className="w-56">
                <SelectValue placeholder="Select an exam" />
              </SelectTrigger>
              <SelectContent>
                {(exams ?? []).map((e) => (
                  <SelectItem key={e.id} value={e.id}>
                    {e.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {reportCard && (
            <Button variant="outline" className="ml-auto" onClick={() => window.print()}>
              <PrinterIcon />
              Print
            </Button>
          )}
        </CardContent>
      </Card>

      {isPending && examId && <p className="text-muted-foreground text-sm">Loading...</p>}

      {reportCard && (
        <>
          <PrintHeader title="REPORT CARD" subtitle={reportCard.exam.name} />
          <Card>
            <CardContent className="space-y-6 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    {reportCard.student.firstName} {reportCard.student.lastName}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {reportCard.exam.name} &middot; {reportCard.exam.examType}
                  </p>
                </div>
                {reportCard.grade && (
                  <Badge className="text-base" variant="default">
                    Grade {reportCard.grade}
                  </Badge>
                )}
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Max marks</TableHead>
                    <TableHead>Pass marks</TableHead>
                    <TableHead>Obtained</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reportCard.subjects.map((subject) => (
                    <TableRow key={subject.subjectId}>
                      <TableCell className="font-medium">{subject.subjectName}</TableCell>
                      <TableCell>{subject.maxMarks}</TableCell>
                      <TableCell>{subject.passMarks}</TableCell>
                      <TableCell>{subject.isAbsent ? "Absent" : (subject.marksObtained ?? "-")}</TableCell>
                      <TableCell>
                        <Badge variant={subject.status === "PENDING" ? "secondary" : subject.status === "ABSENT" ? "destructive" : "outline"}>
                          {subject.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-end gap-6 text-sm">
                <span>
                  Total: <span className="font-semibold">{reportCard.totalObtained}</span> / {reportCard.totalMax}
                </span>
                <span>
                  Percentage: <span className="font-semibold">{reportCard.percentage}%</span>
                </span>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
