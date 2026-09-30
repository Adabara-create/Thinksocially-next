"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("ts-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme = prefersDark ? "dark" : "light";

    setTheme(initialTheme);
    document.documentElement.setAttribute(
      "data-theme",
      initialTheme
    );
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    localStorage.setItem("ts-theme", nextTheme);
    document.documentElement.setAttribute(
      "data-theme",
      nextTheme
    );
  };

  return (
    <button
      type="button"
      className="ts-theme-toggle"
      onClick={toggleTheme}
      aria-label={
        theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      aria-pressed={theme === "dark"}
    >
      <span
        className="ts-theme-toggle-icon"
        aria-hidden="true"
      >
        {theme === "dark" ? "☾" : "☀"}
      </span>

      <span className="ts-theme-toggle-text">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}