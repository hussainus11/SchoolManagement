"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store/auth-store";

/** Bounces PARENT/STUDENT users off the staff dashboard to their portal home. */
export function PortalRedirect() {
  const router = useRouter();
  const role = useAuthStore((s) => s.user?.role);

  useEffect(() => {
    if (role === "PARENT" || role === "STUDENT") {
      router.replace("/schoolmanagement/portal");
    }
  }, [role, router]);

  return null;
}
