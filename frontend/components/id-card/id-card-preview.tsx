import { QRCodeSVG } from "qrcode.react";
import { resolveApiUrl } from "@/lib/api/client";

export interface IdCardField {
  label: string;
  value: string;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

interface IdCardFrontProps {
  schoolName: string;
  schoolLogoUrl?: string | null;
  backgroundColor: string;
  foregroundColor: string;
  backgroundImageUrl?: string | null;
  photoUrl?: string | null;
  role: string;
  name: string;
  idLabel: string;
  idNumber: string;
  fields: IdCardField[];
  validity?: string;
  qrValue: string;
  className?: string;
}

/** Front face of a standard CR80-proportioned (85.6mm x 54mm) identity card. */
export function IdCardFront({
  schoolName,
  schoolLogoUrl,
  backgroundColor,
  foregroundColor,
  backgroundImageUrl,
  photoUrl,
  role,
  name,
  idLabel,
  idNumber,
  fields,
  validity,
  qrValue,
  className
}: IdCardFrontProps) {
  const resolvedBackgroundImage = resolveApiUrl(backgroundImageUrl);
  const resolvedLogo = resolveApiUrl(schoolLogoUrl);
  const resolvedPhoto = resolveApiUrl(photoUrl);

  return (
    <div
      className={`relative flex aspect-[85.6/54] w-80 shrink-0 flex-col overflow-hidden rounded-xl border shadow-md ${className ?? ""}`}
      style={{ backgroundColor }}>
      {resolvedBackgroundImage && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resolvedBackgroundImage}
            alt=""
            crossOrigin="anonymous"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />
        </>
      )}

      <div className="relative flex h-full flex-col" style={{ color: foregroundColor }}>
        <div className="flex items-center gap-2 px-3 pt-2.5 pb-1.5">
          {resolvedLogo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={resolvedLogo}
              alt=""
              crossOrigin="anonymous"
              className="size-7 shrink-0 rounded bg-white/90 object-contain p-0.5"
            />
          ) : (
            <div
              className="flex size-7 shrink-0 items-center justify-center rounded text-[10px] font-bold"
              style={{ backgroundColor: `${foregroundColor}26` }}>
              {getInitials(schoolName)}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] font-bold tracking-wide uppercase">{schoolName}</p>
            <p className="text-[7.5px] tracking-widest opacity-75 uppercase">{role} Identity Card</p>
          </div>
        </div>

        <div className="mx-3 h-px opacity-20" style={{ backgroundColor: foregroundColor }} />

        <div className="flex flex-1 items-center gap-3 px-3 py-2">
          <div
            className="size-[4.2rem] shrink-0 overflow-hidden rounded-md border-2"
            style={{ borderColor: `${foregroundColor}55`, backgroundColor: `${foregroundColor}1A` }}>
            {resolvedPhoto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={resolvedPhoto} alt="" crossOrigin="anonymous" className="size-full object-cover" />
            ) : (
              <div className="flex size-full items-center justify-center text-lg font-semibold">
                {getInitials(name)}
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1 space-y-0.5">
            <p className="truncate text-[13px] leading-tight font-bold">{name}</p>
            {fields.map((field) => (
              <p key={field.label} className="truncate text-[9px] leading-tight opacity-90">
                <span className="opacity-70">{field.label}:</span> {field.value}
              </p>
            ))}
          </div>
        </div>

        <div
          className="mt-auto flex items-end justify-between gap-2 px-3 py-1.5"
          style={{ backgroundColor: `${foregroundColor}17` }}>
          <div className="min-w-0">
            <p className="text-[6.5px] tracking-wide opacity-70 uppercase">{idLabel}</p>
            <p className="truncate text-[10px] font-semibold">{idNumber}</p>
          </div>
          {validity && (
            <div className="min-w-0 text-right">
              <p className="text-[6.5px] opacity-70 uppercase">Valid</p>
              <p className="truncate text-[9px] font-medium">{validity}</p>
            </div>
          )}
          <div className="shrink-0 rounded bg-white p-[3px]">
            <QRCodeSVG value={qrValue} size={30} level="M" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface IdCardBackProps {
  schoolName: string;
  schoolAddress?: string | null;
  schoolPhone?: string | null;
  backgroundColor: string;
  foregroundColor: string;
  fields: IdCardField[];
  className?: string;
}

/** Back face — holder details, return-if-found notice, and signature lines. */
export function IdCardBack({
  schoolName,
  schoolAddress,
  schoolPhone,
  backgroundColor,
  foregroundColor,
  fields,
  className
}: IdCardBackProps) {
  return (
    <div
      className={`relative flex aspect-[85.6/54] w-80 shrink-0 flex-col overflow-hidden rounded-xl border shadow-md ${className ?? ""}`}
      style={{ backgroundColor }}>
      <div className="flex h-full flex-col p-3" style={{ color: foregroundColor }}>
        <p className="mb-1 text-[9px] font-semibold tracking-wide opacity-80 uppercase">{schoolName}</p>
        <div className="mb-2 h-px opacity-20" style={{ backgroundColor: foregroundColor }} />

        <div className="space-y-1">
          {fields.map((field) => (
            <div key={field.label} className="flex items-start justify-between gap-3 text-[9px]">
              <span className="shrink-0 opacity-70">{field.label}</span>
              <span className="min-w-0 truncate text-right font-medium">{field.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto space-y-2">
          <p className="text-[7px] leading-snug opacity-80">
            This card is the property of {schoolName}. If found, please return to{" "}
            {schoolAddress ?? "the school office"}
            {schoolPhone ? ` (${schoolPhone})` : ""}.
          </p>
          <div className="flex items-end justify-between gap-6 pt-1">
            <div
              className="flex-1 border-t pt-0.5 text-center text-[7px] opacity-70"
              style={{ borderColor: `${foregroundColor}66` }}>
              Holder&apos;s Signature
            </div>
            <div
              className="flex-1 border-t pt-0.5 text-center text-[7px] opacity-70"
              style={{ borderColor: `${foregroundColor}66` }}>
              Authorized Signatory
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
