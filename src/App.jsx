// App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header.jsx";

import Footer from "./components/Footer.jsx";
import CalendarView from "./components/CalendarView.jsx";
import EventForm from "./components/EventForm.jsx";
import EventDetails from "./components/EventDetails.jsx";


export default function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultEvents = [
    {
      id: 1,
      title: "Test- drive",
      date: "2026-03-20",
      description: "Submit final React project"
    }
  ];

  useEffect(() => {
    const saved = localStorage.getItem("events");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setEvents(parsed);
          setLoading(false);
          return;
        }
      } catch (error) {
        localStorage.removeItem("events");
      }
    }

    setTimeout(() => {
      setEvents(defaultEvents);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("events", JSON.stringify(events));
    }
  }, [events, loading]);

  const addEvent = (newEvent) => {
    setEvents((prev) => [...prev, { ...newEvent, id: Date.now() }]);
  };

  return (
    <Router>
      <Header />
      <main className="main-container">
        {loading ? (
          <p className="loading">Loading events...</p>
        ) : (
          <Routes>
            <Route path="/" element={<CalendarView events={events} />} />
            <Route path="/create" element={<EventForm addEvent={addEvent} />} />
            <Route path="/event/:id" element={<EventDetails events={events} />} />
          </Routes>
        )}
      </main>
      <Footer />
    </Router>
  );
}
