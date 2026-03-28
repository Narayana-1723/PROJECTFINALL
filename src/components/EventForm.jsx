// components/EventForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    addEvent({ title, date, description });

    navigate("/");
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>✨ Create New Event</h2>

      <label>EVENT TITLE *</label>
      <input
        type="text"
        placeholder="Enter event title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>DATE *</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label>DESCRIPTION</label>
      <textarea
        placeholder="Enter event description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="actions">
        <button type="submit">Create Event</button>
      </div>
    </form>
  );
}
