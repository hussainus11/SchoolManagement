import { resolveApiUrl } from "@/lib/api/client";
import { cn } from "@/lib/utils";
import type { CertificateTemplate } from "./certificate-templates";

export interface CertificateData {
  schoolName: string;
  schoolLogoUrl?: string | null;
  studentName: string;
  title: string;
  description: string;
  date: string;
  signatoryLeftName: string;
  signatoryLeftTitle: string;
  signatoryRightName: string;
  signatoryRightTitle: string;
}

interface CertificatePreviewProps {
  template: CertificateTemplate;
  data: CertificateData;
  className?: string;
}

const CONFETTI_COLORS = ["#a855f7", "#06b6d4", "#f59e0b", "#ec4899", "#22c55e"];

export function CertificatePreview({ template, data, className }: CertificatePreviewProps) {
  const Icon = template.icon;
  const resolvedLogo = resolveApiUrl(data.schoolLogoUrl);

  return (
    <div
      className={cn(
        "relative aspect-[1.414/1] w-full shrink-0 overflow-hidden shadow-lg",
        template.frame === "playful" ? "rounded-[2rem]" : "rounded-md",
        template.fontFamily,
        className
      )}
      style={{ background: template.background, color: template.textColor }}>
      {/* Border treatment */}
      {template.frame === "ornate" && (
        <>
          <div className="absolute inset-3 border-[6px] sm:inset-4" style={{ borderColor: template.borderColor }} />
          <div
            className="absolute inset-6 border sm:inset-7"
            style={{ borderColor: template.innerBorderColor }}
          />
          {(["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"] as const).map((pos, i) => (
            <div
              key={pos}
              className={cn("absolute size-6 sm:size-8", pos)}
              style={{
                borderColor: template.accentColor,
                borderTopWidth: i < 2 ? 3 : 0,
                borderBottomWidth: i >= 2 ? 3 : 0,
                borderLeftWidth: i % 2 === 0 ? 3 : 0,
                borderRightWidth: i % 2 === 1 ? 3 : 0,
                borderStyle: "solid"
              }}
            />
          ))}
        </>
      )}
      {template.frame === "minimal" && (
        <>
          <div className="absolute inset-3 border-2 sm:inset-4" style={{ borderColor: template.borderColor }} />
          <div className="absolute inset-3 h-1.5 sm:inset-4" style={{ backgroundColor: template.accentColor }} />
        </>
      )}
      {template.frame === "playful" && (
        <>
          <div
            className="absolute inset-3 rounded-[1.5rem] border-[5px] border-dashed sm:inset-4"
            style={{ borderColor: template.borderColor }}
          />
          {[
            "top-4 left-8",
            "top-6 right-14",
            "bottom-8 left-14",
            "bottom-4 right-8",
            "top-1/3 left-4",
            "bottom-1/3 right-4"
          ].map((pos, i) => (
            <div
              key={pos}
              className={cn("absolute size-2.5 rounded-full sm:size-3", pos)}
              style={{ backgroundColor: CONFETTI_COLORS[i % CONFETTI_COLORS.length] }}
            />
          ))}
        </>
      )}

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-8 py-6 text-center sm:px-14 sm:py-10">
        <div className="flex flex-col items-center gap-1.5 sm:gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            {resolvedLogo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={resolvedLogo} alt="" className="size-8 rounded object-contain sm:size-10" />
            )}
            <span className="text-sm font-semibold tracking-wide sm:text-lg">{data.schoolName}</span>
          </div>

          <div
            className="mt-1 flex size-10 items-center justify-center rounded-full sm:mt-2 sm:size-14"
            style={{ backgroundColor: template.accentColor }}>
            <Icon className="size-5 text-white sm:size-7" />
          </div>

          <h1
            className={cn(
              "mt-1 text-xl font-bold tracking-wide uppercase sm:mt-2 sm:text-3xl",
              template.fontFamily === "font-serif" ? "" : "tracking-wider"
            )}
            style={{ color: template.titleColor }}>
            {data.title}
          </h1>
          <p className="text-muted-foreground text-[10px] tracking-[0.2em] uppercase sm:text-xs">
            is proudly presented to
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-1.5 sm:gap-3">
          <p
            className={cn(
              "px-4 text-2xl font-bold sm:text-4xl",
              template.fontFamily === "font-serif" ? "italic" : ""
            )}
            style={{ color: template.accentColor, borderBottom: `2px solid ${template.borderColor}` }}>
            {data.studentName || "Student Name"}
          </p>
          {data.description && (
            <p className="mt-1 max-w-md text-[11px] leading-relaxed sm:mt-2 sm:max-w-xl sm:text-sm">
              {data.description}
            </p>
          )}
        </div>

        <div className="flex w-full items-end justify-between gap-4 pt-2">
          <div className="text-left">
            <p className="text-[10px] font-medium sm:text-xs">{data.date}</p>
            <div className="mt-1 w-20 border-t sm:w-28" style={{ borderColor: template.textColor }} />
            <p className="text-muted-foreground mt-0.5 text-[9px] sm:text-[10px]">Date</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-medium sm:text-xs">{data.signatoryLeftName || " "}</p>
            <div className="mt-1 w-20 border-t sm:w-28" style={{ borderColor: template.textColor }} />
            <p className="text-muted-foreground mt-0.5 text-[9px] sm:text-[10px]">{data.signatoryLeftTitle}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-medium sm:text-xs">{data.signatoryRightName || " "}</p>
            <div className="mt-1 w-20 border-t sm:w-28" style={{ borderColor: template.textColor }} />
            <p className="text-muted-foreground mt-0.5 text-[9px] sm:text-[10px]">{data.signatoryRightTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
