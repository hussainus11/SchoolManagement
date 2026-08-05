"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FileTextIcon, PencilLineIcon } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EnterMarksTab } from "./enter-marks-tab";
import { ManageGradeScalesDialog } from "./manage-grade-scales-dialog";
import { ReportCardTab } from "./report-card-tab";

function MarksPageContent() {
  const searchParams = useSearchParams();
  const examScheduleId = searchParams.get("examScheduleId") ?? undefined;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Marks</h1>
          <p className="text-muted-foreground">Enter exam marks and view student report cards.</p>
        </div>
        <ManageGradeScalesDialog />
      </div>
      <Tabs defaultValue="enter">
        <TabsList>
          <TabsTrigger value="enter">
            <PencilLineIcon />
            Enter marks
          </TabsTrigger>
          <TabsTrigger value="report-card">
            <FileTextIcon />
            Report card
          </TabsTrigger>
        </TabsList>
        <TabsContent value="enter">
          <EnterMarksTab initialExamScheduleId={examScheduleId} />
        </TabsContent>
        <TabsContent value="report-card">
          <ReportCardTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function MarksPage() {
  return (
    <Suspense>
      <MarksPageContent />
    </Suspense>
  );
}
