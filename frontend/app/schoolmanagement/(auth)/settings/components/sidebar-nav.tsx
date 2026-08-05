"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2Icon, CalendarOffIcon, CalendarRangeIcon, ClockIcon, IdCardIcon, SchoolIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const sidebarNavItems = [
  { title: "School profile", href: "/schoolmanagement/settings", icon: SchoolIcon },
  { title: "Branches", href: "/schoolmanagement/settings/branches", icon: Building2Icon },
  {
    title: "Academic years",
    href: "/schoolmanagement/settings/academic-years",
    icon: CalendarRangeIcon
  },
  { title: "ID card design", href: "/schoolmanagement/settings/id-cards", icon: IdCardIcon },
  { title: "Periods", href: "/schoolmanagement/settings/periods", icon: ClockIcon },
  { title: "Leave groups", href: "/schoolmanagement/settings/leave-groups", icon: CalendarOffIcon }
];

export function SettingsSidebarNav() {
  const pathname = usePathname();

  return (
    <Card className="py-0">
      <CardContent className="p-2">
        <nav className="flex flex-col space-y-0.5 space-x-2 lg:space-x-0">
          {sidebarNavItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className={cn(
                "hover:bg-muted justify-start",
                pathname === item.href ? "bg-muted hover:bg-muted" : ""
              )}
              asChild>
              <Link href={item.href}>
                <item.icon />
                {item.title}
              </Link>
            </Button>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
}
