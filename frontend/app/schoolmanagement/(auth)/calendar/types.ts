export type CalendarView = "month" | "week" | "day" | "agenda";

export type SchoolEventType = "HOLIDAY" | "EXAM" | "MEETING" | "ACTIVITY" | "OTHER";

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  color?: EventColor;
  location?: string;
  type?: SchoolEventType;
}

export type EventColor = "sky" | "amber" | "violet" | "rose" | "emerald" | "orange";

export const EVENT_TYPE_COLOR: Record<SchoolEventType, EventColor> = {
  HOLIDAY: "emerald",
  EXAM: "rose",
  MEETING: "sky",
  ACTIVITY: "amber",
  OTHER: "violet"
};

export const EVENT_TYPE_LABEL: Record<SchoolEventType, string> = {
  HOLIDAY: "Holiday",
  EXAM: "Exam",
  MEETING: "Meeting",
  ACTIVITY: "Activity",
  OTHER: "Other"
};
