import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const headerRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const headerEl = headerRef.current;
    const iconEl = iconRef.current;
    if (!headerEl || !iconEl) return;

    const handleMove = (e) => {
      const rect = headerEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      // smaller translation range
      const max = 8;
      const tx = Math.max(-max, Math.min(max, dx / 20));
      const ty = Math.max(-max, Math.min(max, dy / 20));
      iconEl.style.transform = `translate(${tx}px, ${ty}px)`;
    };
    headerEl.addEventListener("pointermove", handleMove);
    headerEl.addEventListener("pointerleave", () => {
      iconEl.style.transform = "translate(0,0)";
    });
    return () => {
      headerEl.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="logo-container">
        <div className="calendar-icon" ref={iconRef}>
          📅
        </div>
      </div>

      <h1>Event Calendar</h1>

      <nav>
        <Link to="/">Calendar View</Link>
        <Link to="/create">Add Event</Link>
      </nav>
    </header>
  );
}
