"use client";

import { useRef } from "react";
import { CameraIcon, Loader2Icon, XIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { resolveApiUrl } from "@/lib/api/client";
import { cn } from "@/lib/utils";

interface PhotoUploadProps {
  imageUrl?: string | null;
  fallbackText: string;
  onUpload: (file: File) => void;
  onRemove?: () => void;
  isUploading?: boolean;
  shape?: "circle" | "square";
  size?: "sm" | "md" | "lg" | "full";
  className?: string;
}

const SIZE_CLASSES = {
  sm: "size-12",
  md: "size-20",
  lg: "size-28",
  full: "aspect-video w-full"
};

export function PhotoUpload({
  imageUrl,
  fallbackText,
  onUpload,
  onRemove,
  isUploading,
  shape = "circle",
  size = "md",
  className
}: PhotoUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const resolvedUrl = resolveApiUrl(imageUrl);
  const rounded = shape === "circle" ? "rounded-full" : "rounded-lg";

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (file) onUpload(file);
  }

  return (
    <div className={cn("group relative inline-flex", className)}>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={isUploading}
        className={cn(
          "relative flex shrink-0 items-center justify-center overflow-hidden border",
          SIZE_CLASSES[size],
          rounded
        )}
        aria-label="Upload photo">
        {shape === "circle" ? (
          <Avatar className={cn(SIZE_CLASSES[size], "size-full")}>
            {resolvedUrl && <AvatarImage src={resolvedUrl} alt="" />}
            <AvatarFallback className="text-lg font-semibold">{fallbackText}</AvatarFallback>
          </Avatar>
        ) : resolvedUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={resolvedUrl} alt="" className="size-full object-cover" />
        ) : (
          <div className="bg-muted text-muted-foreground flex size-full items-center justify-center text-lg font-semibold">
            {fallbackText}
          </div>
        )}

        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100",
            rounded
          )}>
          {isUploading ? (
            <Loader2Icon className="size-5 animate-spin text-white" />
          ) : (
            <CameraIcon className="size-5 text-white" />
          )}
        </div>
      </button>

      {resolvedUrl && onRemove && !isUploading && (
        <Button
          type="button"
          size="icon"
          variant="destructive"
          className="absolute -top-1.5 -right-1.5 size-5 rounded-full [&_svg]:size-3"
          onClick={onRemove}
          aria-label="Remove photo">
          <XIcon />
        </Button>
      )}
    </div>
  );
}
