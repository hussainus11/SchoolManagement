import { useSchool } from "@/hooks/use-school-settings";
import { resolveApiUrl } from "@/lib/api/client";

/** Print-only school letterhead (logo, name, address, phone) — hidden on screen, shown when printed. */
export function PrintHeader({ title, subtitle }: { title?: string; subtitle?: string }) {
  const { data: school } = useSchool();
  const resolvedLogo = resolveApiUrl(school?.logoUrl);

  if (!school) return null;

  return (
    <div className="hidden items-start justify-between border-b pb-4 print:flex">
      <div className="flex items-center gap-3">
        {resolvedLogo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={resolvedLogo} alt="" className="size-12 object-contain" />
        )}
        <div>
          <p className="text-lg font-bold">{school.name}</p>
          {school.address && <p className="text-muted-foreground text-sm">{school.address}</p>}
          {school.phone && <p className="text-muted-foreground text-sm">{school.phone}</p>}
        </div>
      </div>
      {title && (
        <div className="text-right">
          <p className="text-xl font-bold tracking-wide">{title}</p>
          {subtitle && <p className="text-muted-foreground text-sm">{subtitle}</p>}
        </div>
      )}
    </div>
  );
}
