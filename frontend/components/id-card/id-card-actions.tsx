"use client";

import { useState } from "react";
import { toJpeg, toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import { DownloadIcon, FileImageIcon, FileTextIcon, PrinterIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface IdCardActionsProps {
  targetRef: React.RefObject<HTMLElement | null>;
  fileName: string;
}

export function IdCardActions({ targetRef, fileName }: IdCardActionsProps) {
  const [isExporting, setIsExporting] = useState(false);

  async function capture(format: "png" | "jpeg") {
    const node = targetRef.current;
    if (!node) return null;
    const render = format === "png" ? toPng : toJpeg;
    return render(node, {
      pixelRatio: 3,
      cacheBust: true,
      backgroundColor: format === "jpeg" ? "#ffffff" : undefined
    });
  }

  async function loadImage(dataUrl: string) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = dataUrl;
    });
  }

  async function handleDownload(format: "png" | "jpeg" | "pdf") {
    setIsExporting(true);
    try {
      if (format === "pdf") {
        const dataUrl = await capture("png");
        if (!dataUrl) return;
        const img = await loadImage(dataUrl);
        const pdf = new jsPDF({
          orientation: img.width >= img.height ? "landscape" : "portrait",
          unit: "px",
          format: [img.width, img.height]
        });
        pdf.addImage(dataUrl, "PNG", 0, 0, img.width, img.height);
        pdf.save(`${fileName}.pdf`);
      } else {
        const dataUrl = await capture(format);
        if (!dataUrl) return;
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${fileName}.${format === "jpeg" ? "jpg" : "png"}`;
        link.click();
      }
    } catch {
      toast.error("Failed to generate the file. Please try again.");
    } finally {
      setIsExporting(false);
    }
  }

  return (
    <div className="flex items-center gap-2 print:hidden">
      <Button variant="outline" onClick={() => window.print()}>
        <PrinterIcon />
        Print
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" disabled={isExporting}>
            <DownloadIcon />
            {isExporting ? "Preparing..." : "Download"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handleDownload("png")}>
            <FileImageIcon />
            PNG image
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDownload("jpeg")}>
            <FileImageIcon />
            JPEG image
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDownload("pdf")}>
            <FileTextIcon />
            PDF document
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
