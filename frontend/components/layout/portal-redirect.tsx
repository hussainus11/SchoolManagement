"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store/auth-store";

/** Bounces PARENT/STUDENT users off the staff dashboard to their portal home, and SUPER_ADMIN
 *  (who has no schoolId, so none of this dashboard's data would load) to the Schools admin area. */
export function PortalRedirect() {
  const router = useRouter();
  const role = useAuthStore((s) => s.user?.role);

  useEffect(() => {
    if (role === "PARENT" || role === "STUDENT") {
      router.replace("/schoolmanagement/portal");
    } else if (role === "SUPER_ADMIN") {
      router.replace("/schoolmanagement/schools");
    }
  }, [role, router]);

  return null;
}
