"use client";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/lib/store/auth-store";

export function WelcomeCard() {
  const user = useAuthStore((s) => s.user);

  return (
    <Card className="overflow-hidden">
      <CardContent className="relative">
        <div className="grid items-center pt-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <div className="font-display text-3xl">
              Hi, {user?.firstName ?? "there"} <span className="text-4xl">👋</span>
            </div>
            <div className="text-2xl">Here&apos;s what&apos;s happening at your school today.</div>
            <div className="text-muted-foreground">
              Track attendance, exams, fees, and homework progress all in one place.
            </div>
            <div className="pt-2">
              <Button asChild>
                <a href="/schoolmanagement/reports">View reports</a>
              </Button>
            </div>
          </div>
          <figure className="hidden lg:col-span-1 lg:block">
            <Image
              width={100}
              height={50}
              src={`/academy-dashboard-light.svg`}
              className="block w-full dark:hidden"
              unoptimized
              alt="shadcn/ui"
            />
            <Image
              width={100}
              height={50}
              src={`/academy-dashboard-dark.svg`}
              className="hidden w-full dark:block"
              unoptimized
              alt="shadcn/ui"
            />
          </figure>
          <Image
            width={800}
            height={300}
            src={`/star-shape.png`}
            className="pointer-events-none absolute inset-0 aspect-auto"
            unoptimized
            alt="shadcn/ui"
          />
        </div>
      </CardContent>
    </Card>
  );
}
