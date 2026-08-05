"use client";

import { useState } from "react";
import { CalendarCheckIcon, DownloadIcon, TrendingUpIcon, WalletIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useClasses } from "@/hooks/use-classes";
import { useExams } from "@/hooks/use-exams";
import {
  type AttendanceSummarySectionRow,
  type AttendanceSummaryStudentRow,
  useAttendanceSummary,
  useExamPerformance,
  useFeeCollectionSummary
} from "@/hooks/use-reports";
import { useSections } from "@/hooks/use-sections";
import { downloadCsv } from "@/lib/csv-export";

function isStudentRow(
  row: AttendanceSummaryStudentRow | AttendanceSummarySectionRow
): row is AttendanceSummaryStudentRow {
  return "studentId" in row;
}

function AttendanceReportTab() {
  const [classId, setClassId] = useState("");
  const [sectionId, setSectionId] = useState("");
  const { data: classes } = useClasses();
  const { data: sections } = useSections(classId || undefined);
  const { data: rows, isPending } = useAttendanceSummary({ sectionId: sectionId || undefined });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-4">
        <div className="space-y-2">
          <p className="text-sm font-medium">Class</p>
          <Select
            value={classId}
            onValueChange={(v) => {
              setClassId(v);
              setSectionId("");
            }}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All classes" />
            </SelectTrigger>
            <SelectContent>
              {(classes ?? []).map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Section</p>
          <Select value={sectionId} onValueChange={setSectionId} disabled={!classId}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All sections" />
            </SelectTrigger>
            <SelectContent>
              {(sections ?? []).map((s) => (
                <SelectItem key={s.id} value={s.id}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          variant="outline"
          className="ml-auto"
          disabled={!rows?.length}
          onClick={() => downloadCsv("attendance-summary.csv", rows ?? [])}>
          <DownloadIcon />
          Export CSV
        </Button>
      </div>
      <Card>
        <CardContent className="pt-6">
          {isPending ? (
            <p className="text-muted-foreground text-sm">Loading...</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{sectionId ? "Student" : "Class / Section"}</TableHead>
                  <TableHead>Present</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Percentage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(rows ?? []).map((row, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">
                      {isStudentRow(row) ? `${row.firstName} ${row.lastName}` : `${row.className} - ${row.sectionName}`}
                    </TableCell>
                    <TableCell>{row.present}</TableCell>
                    <TableCell>{row.total}</TableCell>
                    <TableCell>{row.percentage}%</TableCell>
                  </TableRow>
                ))}
                {rows?.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-muted-foreground h-20 text-center">
                      No attendance data for this filter.
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

function FeeCollectionTab() {
  const { data: rows, isPending } = useFeeCollectionSummary();

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button
          variant="outline"
          disabled={!rows?.length}
          onClick={() => downloadCsv("fee-collection.csv", rows ?? [])}>
          <DownloadIcon />
          Export CSV
        </Button>
      </div>
      <Card>
        <CardContent className="pt-6">
          {isPending ? (
            <p className="text-muted-foreground text-sm">Loading...</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Period</TableHead>
                  <TableHead>Invoiced</TableHead>
                  <TableHead>Collected</TableHead>
                  <TableHead>Outstanding</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(rows ?? []).map((row) => (
                  <TableRow key={row.period}>
                    <TableCell className="font-medium">{row.period}</TableCell>
                    <TableCell>{row.invoiced.toFixed(2)}</TableCell>
                    <TableCell>{row.collected.toFixed(2)}</TableCell>
                    <TableCell>{row.outstanding.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
                {rows?.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-muted-foreground h-20 text-center">
                      No invoices yet.
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

function ExamPerformanceTab() {
  const [examId, setExamId] = useState("");
  const { data: exams } = useExams();
  const { data: rows, isPending } = useExamPerformance(examId || undefined);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-4">
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
        <Button
          variant="outline"
          className="ml-auto"
          disabled={!rows?.length}
          onClick={() => downloadCsv("exam-performance.csv", rows ?? [])}>
          <DownloadIcon />
          Export CSV
        </Button>
      </div>
      <Card>
        <CardContent className="pt-6">
          {isPending && examId ? (
            <p className="text-muted-foreground text-sm">Loading...</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Entered</TableHead>
                  <TableHead>Absent</TableHead>
                  <TableHead>Passed</TableHead>
                  <TableHead>Pass rate</TableHead>
                  <TableHead>Average %</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(rows ?? []).map((row) => (
                  <TableRow key={row.subjectId}>
                    <TableCell className="font-medium">{row.subjectName}</TableCell>
                    <TableCell>{row.totalEntered}</TableCell>
                    <TableCell>{row.totalAbsent}</TableCell>
                    <TableCell>{row.passed}</TableCell>
                    <TableCell>{row.passRate}%</TableCell>
                    <TableCell>{row.averagePercentage}%</TableCell>
                  </TableRow>
                ))}
                {!examId && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-muted-foreground h-20 text-center">
                      Select an exam to view performance.
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

export default function ReportsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Reports & Analytics</h1>
        <p className="text-muted-foreground">Cross-module summaries, exportable as CSV.</p>
      </div>
      <Tabs defaultValue="attendance">
        <TabsList>
          <TabsTrigger value="attendance">
            <CalendarCheckIcon />
            Attendance
          </TabsTrigger>
          <TabsTrigger value="fees">
            <WalletIcon />
            Fee collection
          </TabsTrigger>
          <TabsTrigger value="exams">
            <TrendingUpIcon />
            Exam performance
          </TabsTrigger>
        </TabsList>
        <TabsContent value="attendance">
          <AttendanceReportTab />
        </TabsContent>
        <TabsContent value="fees">
          <FeeCollectionTab />
        </TabsContent>
        <TabsContent value="exams">
          <ExamPerformanceTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
