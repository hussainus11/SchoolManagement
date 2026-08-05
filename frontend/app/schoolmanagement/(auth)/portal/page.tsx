"use client";

import Link from "next/link";
import { BanknoteIcon, BookOpenCheckIcon, CalendarCheckIcon, GraduationCapIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useActivePortalStudent, StudentSelector } from "./student-selector";

const LINKS = [
  { title: "Attendance", href: "/schoolmanagement/portal/attendance", icon: CalendarCheckIcon },
  { title: "Fees", href: "/schoolmanagement/portal/fees", icon: BanknoteIcon },
  { title: "Homework", href: "/schoolmanagement/portal/homework", icon: BookOpenCheckIcon },
  { title: "Report card", href: "/schoolmanagement/portal/report-card", icon: GraduationCapIcon }
];

export default function PortalDashboardPage() {
  const { students, activeStudentId, isPending } = useActivePortalStudent();
  const activeStudent = students.find((s) => s.id === activeStudentId);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Portal</h1>
          <p className="text-muted-foreground">
            {isPending
              ? "Loading..."
              : activeStudent
                ? `${activeStudent.firstName} ${activeStudent.lastName} — ${activeStudent.section?.class.name ?? ""} ${activeStudent.section?.name ?? ""}`
                : "No linked student found."}
          </p>
        </div>
        <StudentSelector />
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            <Card className="hover:bg-muted/50 transition-colors">
              <CardHeader className="flex flex-row items-center gap-3">
                <link.icon className="text-muted-foreground size-5" />
                <CardTitle className="text-base">{link.title}</CardTitle>
              </CardHeader>
              <CardContent />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
