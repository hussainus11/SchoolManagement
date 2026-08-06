"use client";

import { useEffect } from "react";
import { resolveApiUrl } from "@/lib/api/client";
import { useSchool } from "@/hooks/use-school-settings";
import { useAuthStore } from "@/lib/store/auth-store";

const DEFAULT_FAVICON = "/favicon.ico";

/** Once the signed-in user's school loads, swap the tab title to just the school's name and the
 *  favicon to its uploaded logo (falling back to the defaults for SUPER_ADMIN, who has no school,
 *  or a school that hasn't uploaded a logo yet). */
export function DynamicBranding() {
  const schoolId = useAuthStore((s) => s.user?.schoolId);
  const { data: school } = useSchool(!!schoolId);

  useEffect(() => {
    if (school?.name) document.title = school.name;
  }, [school?.name]);

  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = (school?.logoUrl && resolveApiUrl(school.logoUrl)) || DEFAULT_FAVICON;
  }, [school?.logoUrl]);

  return null;
}
