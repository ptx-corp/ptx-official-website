"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import "./theme-toggle.css";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme to get the actual theme being displayed (handles "system")
  const isDark = mounted && resolvedTheme === "dark";

  const handleToggle = () => {
    // Toggle between light and dark explicitly
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={handleToggle}
      className="theme-toggle-container"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      type="button"
    >
      <div className={`theme-toggle ${isDark ? "dark" : "light"}`}>
        {/* Background Sky */}
        <div className="toggle-background">
          {/* Day mode clouds */}
          <img
            src="/images/clouds-back.png"
            alt=""
            className={`cloud cloud-back ${isDark ? "hidden" : ""}`}
          />
          <img
            src="/images/clouds-front.png"
            alt=""
            className={`cloud cloud-front ${isDark ? "hidden" : ""}`}
          />

          {/* Night mode stars */}
          <div className={`stars ${!isDark ? "hidden" : ""}`}>
            <div className="star star-1" />
            <div className="star star-2" />
            <div className="star star-3" />
            <div className="star star-4" />
            <div className="star star-5" />
            <div className="star star-6" />
            <div className="star star-7" />
            <div className="star star-8" />
          </div>

          {/* Moon rays */}
          <img
            src="/images/moon-ray.png"
            alt=""
            className={`moon-ray ${!isDark ? "hidden" : ""}`}
          />
        </div>

        {/* Sun/Moon Toggle Circle */}
        <div className="toggle-circle">
          <div className={`sun ${isDark ? "hidden" : ""}`} />
          <div className={`moon ${isDark ? "" : "hidden"}`}>
            <div className="moon-crater moon-crater-1" />
            <div className="moon-crater moon-crater-2" />
          </div>
        </div>
      </div>
    </button>
  );
}
