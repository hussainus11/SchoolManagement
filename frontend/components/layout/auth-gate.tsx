"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";
import { useHydrateSession } from "@/hooks/use-auth";
import { useAuthStore } from "@/lib/store/auth-store";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  // Only used for its loading signal + the one-time silent-refresh side effect on cold load.
  // The actual user comes from the store, which login/refresh/change-password all keep live —
  // this query's own `data` is cached with staleTime: Infinity and goes stale the moment any of
  // those mutate the session, which previously caused a redirect loop back to change-password.
  const { isPending, isFetched } = useHydrateSession();
  const user = useAuthStore((s) => s.user);

  useEffect(() => {
    if (!isFetched) return;
    if (!user) {
      router.replace("/schoolmanagement/login/v1");
    } else if (user.mustChangePassword) {
      router.replace("/schoolmanagement/change-password");
    }
  }, [isFetched, user, router]);

  if (isPending) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner className="size-6" />
      </div>
    );
  }

  if (!user || user.mustChangePassword) return null;

  return <>{children}</>;
}
