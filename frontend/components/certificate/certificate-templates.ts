import {
  Award,
  BadgeCheck,
  CalendarCheck,
  Crown,
  Feather,
  GraduationCap,
  Medal,
  Sparkles,
  Star,
  Trophy,
  type LucideIcon
} from "lucide-react";

export type CertificateFrame = "ornate" | "minimal" | "playful";

export interface CertificateTemplate {
  id: string;
  name: string;
  description: string;
  frame: CertificateFrame;
  background: string;
  borderColor: string;
  innerBorderColor: string;
  accentColor: string;
  titleColor: string;
  textColor: string;
  fontFamily: "font-serif" | "font-sans";
  icon: LucideIcon;
  defaultTitle: string;
}

export const CERTIFICATE_TEMPLATES: CertificateTemplate[] = [
  {
    id: "classic-gold",
    name: "Classic Gold",
    description: "Timeless gold double border, formal serif.",
    frame: "ornate",
    background: "linear-gradient(135deg, #fffdf7 0%, #fff6df 100%)",
    borderColor: "#b8860b",
    innerBorderColor: "#d4af37",
    accentColor: "#b8860b",
    titleColor: "#7a5c00",
    textColor: "#3d3018",
    fontFamily: "font-serif",
    icon: Award,
    defaultTitle: "Certificate of Excellence"
  },
  {
    id: "elegant-navy",
    name: "Elegant Navy",
    description: "Navy and gold, understated and formal.",
    frame: "ornate",
    background: "linear-gradient(135deg, #f7f9ff 0%, #eef2fc 100%)",
    borderColor: "#1e3a8a",
    innerBorderColor: "#c5a253",
    accentColor: "#1e3a8a",
    titleColor: "#1e3a8a",
    textColor: "#1f2937",
    fontFamily: "font-serif",
    icon: GraduationCap,
    defaultTitle: "Certificate of Achievement"
  },
  {
    id: "academic-maroon",
    name: "Academic Maroon",
    description: "University-style maroon and cream with a seal.",
    frame: "ornate",
    background: "linear-gradient(135deg, #fffaf5 0%, #fbeee6 100%)",
    borderColor: "#7f1d1d",
    innerBorderColor: "#b45309",
    accentColor: "#7f1d1d",
    titleColor: "#7f1d1d",
    textColor: "#3f2a1d",
    fontFamily: "font-serif",
    icon: Medal,
    defaultTitle: "Certificate of Academic Excellence"
  },
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    description: "Clean lines, bold accent bar, contemporary sans-serif.",
    frame: "minimal",
    background: "#ffffff",
    borderColor: "#111827",
    innerBorderColor: "#111827",
    accentColor: "#111827",
    titleColor: "#111827",
    textColor: "#374151",
    fontFamily: "font-sans",
    icon: BadgeCheck,
    defaultTitle: "Certificate of Achievement"
  },
  {
    id: "emerald-laurel",
    name: "Emerald Laurel",
    description: "Deep green and gold with a regal crest.",
    frame: "ornate",
    background: "linear-gradient(135deg, #f5fbf7 0%, #e7f5ec 100%)",
    borderColor: "#065f46",
    innerBorderColor: "#c5a253",
    accentColor: "#065f46",
    titleColor: "#065f46",
    textColor: "#1c2e26",
    fontFamily: "font-serif",
    icon: Crown,
    defaultTitle: "Certificate of Honor"
  },
  {
    id: "sunburst-gold",
    name: "Sunburst Gold",
    description: "Warm cream tones with a radiant emblem.",
    frame: "ornate",
    background: "linear-gradient(135deg, #fffdf5 0%, #fff2cf 100%)",
    borderColor: "#c2760c",
    innerBorderColor: "#eab308",
    accentColor: "#c2760c",
    titleColor: "#92450a",
    textColor: "#4a2e0a",
    fontFamily: "font-serif",
    icon: Sparkles,
    defaultTitle: "Certificate of Excellence"
  },
  {
    id: "rising-star",
    name: "Rising Star",
    description: "Bright and playful, perfect for younger students.",
    frame: "playful",
    background: "linear-gradient(135deg, #fdf4ff 0%, #eef2ff 50%, #f0fdfa 100%)",
    borderColor: "#a855f7",
    innerBorderColor: "#06b6d4",
    accentColor: "#a855f7",
    titleColor: "#7e22ce",
    textColor: "#312e4d",
    fontFamily: "font-sans",
    icon: Star,
    defaultTitle: "Star Student Award"
  },
  {
    id: "sports-champion",
    name: "Sports Champion",
    description: "Bold red and black for athletic achievement.",
    frame: "ornate",
    background: "linear-gradient(135deg, #fffafa 0%, #fde8e8 100%)",
    borderColor: "#991b1b",
    innerBorderColor: "#111827",
    accentColor: "#991b1b",
    titleColor: "#991b1b",
    textColor: "#1f1f1f",
    fontFamily: "font-sans",
    icon: Trophy,
    defaultTitle: "Certificate of Sports Excellence"
  },
  {
    id: "perfect-attendance",
    name: "Perfect Attendance",
    description: "Clean blue and white, simple and clear.",
    frame: "minimal",
    background: "linear-gradient(135deg, #f5faff 0%, #e8f2ff 100%)",
    borderColor: "#1d4ed8",
    innerBorderColor: "#1d4ed8",
    accentColor: "#1d4ed8",
    titleColor: "#1d4ed8",
    textColor: "#1f2937",
    fontFamily: "font-sans",
    icon: CalendarCheck,
    defaultTitle: "Certificate of Perfect Attendance"
  },
  {
    id: "vintage-parchment",
    name: "Vintage Parchment",
    description: "Old-world parchment with ornate corners.",
    frame: "ornate",
    background: "linear-gradient(135deg, #f6ecd9 0%, #ecdcb8 100%)",
    borderColor: "#6b4423",
    innerBorderColor: "#8b5e34",
    accentColor: "#6b4423",
    titleColor: "#4a2e14",
    textColor: "#3a2612",
    fontFamily: "font-serif",
    icon: Feather,
    defaultTitle: "Certificate of Merit"
  }
];
