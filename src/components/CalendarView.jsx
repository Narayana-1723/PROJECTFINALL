// components/CalendarView.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Calendar.css";

export default function CalendarView({ events }) {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const marchEvents = events.filter(ev => ev.date.startsWith("2026-03-"));

  return (
    <div className="calendar">
      {days.map(day => {
        const dateString = `2026-03-${String(day).padStart(2, "0")}`;
        const dayEvents = marchEvents.filter(ev => ev.date === dateString);

        return (
          <div key={dateString} className="calendar-day" tabIndex="0">
            <strong>{day}</strong>
            {dayEvents.map(event => (
              <Link key={event.id} to={`/event/${event.id}`} className="event-item">
                {event.title}
              </Link>
            ))}
          </div>
        );
      })}
    </div>
  );
}
