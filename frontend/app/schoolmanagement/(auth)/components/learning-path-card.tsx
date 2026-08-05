import { ClipboardListIcon } from "lucide-react";
import Link from "next/link";

import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface RecentAssignment {
  id: string;
  title: string;
  subject: string;
  className: string;
  submissionRate: number;
}

export function LearningPathCard({ assignments = [] }: { assignments?: RecentAssignment[] }) {
  const shown = assignments.slice(0, 2);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Homework</CardTitle>
        <CardAction>
          <ClipboardListIcon className="text-muted-foreground size-4" />
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-4">
        {shown.map((assignment, i) => (
          <Link
            key={assignment.id}
            href={`/schoolmanagement/homework/${assignment.id}`}
            className="hover:bg-muted block rounded-md border p-4 transition-colors">
            <div className="space-y-2">
              <div className="text-xl font-semibold">{assignment.title}</div>
              <Progress
                value={assignment.submissionRate}
                indicatorColor={i === 0 ? "bg-green-600" : "bg-orange-600"}
              />
              <p className="text-muted-foreground text-xs">
                {assignment.subject} &middot; {assignment.className} &middot; {assignment.submissionRate}% submitted
              </p>
            </div>
          </Link>
        ))}
        {shown.length === 0 && <p className="text-muted-foreground text-sm">No homework assigned yet.</p>}
      </CardContent>
    </Card>
  );
}
