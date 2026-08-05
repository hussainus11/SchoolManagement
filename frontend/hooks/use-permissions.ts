"use client";

import { useMemo } from "react";
import { decodeJwtPayload } from "@/lib/jwt";
import { useAuthStore } from "@/lib/store/auth-store";

interface DecodedTokenPayload {
  customRoleId?: string | null;
  permissions?: string[];
}

/**
 * Fixed-role users (no CustomRole assigned) are unrestricted by this check — `can()` always
 * returns true for them, since their access is already governed by the backend's @Roles() lists.
 * Custom-role users are additive: `can()` only returns true for resources their role was granted.
 */
export function usePermissions() {
  const accessToken = useAuthStore((s) => s.accessToken);

  return useMemo(() => {
    const payload = accessToken ? decodeJwtPayload<DecodedTokenPayload>(accessToken) : null;
    const customRoleId = payload?.customRoleId ?? null;
    const permissions = payload?.permissions ?? [];

    return {
      customRoleId,
      permissions,
      hasCustomRole: !!customRoleId,
      can: (resource: string) => !customRoleId || permissions.includes(resource)
    };
  }, [accessToken]);
}
