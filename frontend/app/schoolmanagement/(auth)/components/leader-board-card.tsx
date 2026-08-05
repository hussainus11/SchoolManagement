import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TopStudent {
  id: string;
  name: string;
  percentage: number;
}

export function LeaderboardCard({ topStudents = [] }: { topStudents?: TopStudent[] }) {
  return (
    <Card className="h-full">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Top Students</CardTitle>
        <CardAction className="-mt-2.5">
          <Button variant="outline" size="icon" asChild>
            <Link href="/schoolmanagement/marks">
              <ChevronRight />
            </Link>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topStudents.map((student, index) => (
            <li key={student.id} className="flex items-center space-x-4">
              <span>{index + 1}.</span>
              <Avatar>
                <AvatarFallback>
                  {student.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="flex-1">{student.name}</span>
              <Badge variant="outline">{student.percentage}%</Badge>
            </li>
          ))}
          {topStudents.length === 0 && (
            <p className="text-muted-foreground text-sm">No graded marks yet.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
