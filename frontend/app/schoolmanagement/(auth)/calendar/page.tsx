"use client";

import { useMemo } from "react";
import { addMonths, format, subMonths } from "date-fns";
import { toast } from "sonner";

import { useCreateEvent, useDeleteEvent, useEvents, useUpdateEvent } from "@/hooks/use-events";
import type { EventInput, EventType, SchoolEvent } from "@/hooks/use-events";
import { ApiError } from "@/lib/api/client";
import { EventCalendar } from "./components/event-calendar";
import type { CalendarEvent, SchoolEventType } from "./types";
import { EVENT_TYPE_COLOR } from "./types";

const COLOR_TO_TYPE: Record<string, EventType> = {
  emerald: "HOLIDAY",
  rose: "EXAM",
  sky: "MEETING",
  amber: "ACTIVITY",
  violet: "OTHER",
  orange: "OTHER"
};

function toCalendarEvent(event: SchoolEvent): CalendarEvent {
  return {
    id: event.id,
    title: event.title,
    description: event.description ?? undefined,
    location: event.location ?? undefined,
    start: new Date(event.startDate),
    end: new Date(event.endDate),
    allDay: event.isAllDay,
    type: event.type as SchoolEventType,
    color: EVENT_TYPE_COLOR[event.type as SchoolEventType]
  };
}

function toEventInput(event: CalendarEvent): EventInput {
  const type: EventType = event.type ?? COLOR_TO_TYPE[event.color ?? "violet"] ?? "OTHER";
  return {
    title: event.title,
    description: event.description || undefined,
    location: event.location || undefined,
    type,
    startDate: event.start.toISOString(),
    endDate: event.end.toISOString(),
    isAllDay: event.allDay
  };
}

export default function CalendarPage() {
  const today = useMemo(() => new Date(), []);
  const startDate = format(subMonths(today, 6), "yyyy-MM-dd");
  const endDate = format(addMonths(today, 12), "yyyy-MM-dd");

  const { data: events } = useEvents(startDate, endDate);
  const createEvent = useCreateEvent();
  const updateEvent = useUpdateEvent();
  const deleteEvent = useDeleteEvent();

  const calendarEvents = useMemo(() => (events ?? []).map(toCalendarEvent), [events]);

  function handleEventAdd(event: CalendarEvent) {
    createEvent.mutate(toEventInput(event), {
      onSuccess: () => toast.success("Event created"),
      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
    });
  }

  function handleEventUpdate(event: CalendarEvent) {
    updateEvent.mutate(
      { id: event.id, ...toEventInput(event) },
      {
        onSuccess: () => toast.success("Event updated"),
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  function handleEventDelete(eventId: string) {
    deleteEvent.mutate(eventId, {
      onSuccess: () => toast.success("Event deleted"),
      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
    });
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Calendar</h1>
        <p className="text-muted-foreground">Holidays, exams, meetings, and school events.</p>
      </div>
      <EventCalendar
        events={calendarEvents}
        onEventAdd={handleEventAdd}
        onEventUpdate={handleEventUpdate}
        onEventDelete={handleEventDelete}
      />
    </div>
  );
}
