// components/EventDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function EventDetails({ events }) {
  const { id } = useParams();

  const event = events.find(ev => ev.id === parseInt(id));

  if (!event) return <p>Event not found</p>;

  return (
    <div>
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p>{event.description}</p>
    </div>
  );
}
