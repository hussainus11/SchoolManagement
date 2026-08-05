"use client";

import { PortalRedirect } from "@/components/layout/portal-redirect";
import { useDashboardSummary } from "@/hooks/use-dashboard";

import {
  WelcomeCard,
  LeaderboardCard,
  LearningPathCard,
  ChartMostActivity,
  ProgressStatisticsCard,
  StudentSuccessCard,
  CourseProgressByMonth,
  CoursesListTable
} from "@/app/schoolmanagement/(auth)/components";

export function DashboardContent() {
  const { data: summary } = useDashboardSummary();

  return (
    <div className="space-y-4">
      <PortalRedirect />
      <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      </div>
      <div className="grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-12 xl:col-span-6">
          <WelcomeCard />
        </div>
        <div className="lg:col-span-6 xl:col-span-3">
          <LearningPathCard assignments={summary?.recentAssignments} />
        </div>
        <div className="lg:col-span-6 xl:col-span-3">
          <LeaderboardCard topStudents={summary?.topStudents} />
        </div>
      </div>
      <div className="grid gap-4 xl:grid-cols-3">
        <StudentSuccessCard
          currentSuccessRate={summary?.currentSuccessRate ?? 0}
          previousSuccessRate={summary?.previousSuccessRate ?? 0}
          totalStudents={summary?.totalStudents ?? 0}
          passingStudents={summary?.passingStudents ?? 0}
        />
        <ProgressStatisticsCard
          activityRate={summary?.activityRate ?? 0}
          attendanceRateBar={summary?.attendanceRateBar ?? 0}
          feeCollectionRateBar={summary?.feeCollectionRateBar ?? 0}
          inProgressCount={summary?.inProgressCount ?? 0}
          completedCount={summary?.completedCount ?? 0}
        />
        <ChartMostActivity attendance={summary?.attendanceBreakdown} />
      </div>
      <div className="mt-4 gap-4 space-y-4 xl:grid xl:grid-cols-2 xl:space-y-0">
        <CourseProgressByMonth feeCollectionByMonth={summary?.feeCollectionByMonth} />
        <CoursesListTable assignments={summary?.recentAssignments} />
      </div>
    </div>
  );
}
