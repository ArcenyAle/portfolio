"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./ui/icons";

const STORAGE_KEY = "arceny-theme";

export function ThemeToggle() {
  // Mirrors whatever the blocking inline script in layout.tsx already
  // set on <html> before hydration, so there's no visual mismatch.
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // localStorage unavailable (private browsing, etc.) — theme just
      // won't persist across visits, which is a harmless fallback.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-md border border-line text-ink-secondary transition-colors duration-150 hover:border-line-strong"
    >
      {isDark ? (
        <MoonIcon className="h-4 w-4" />
      ) : (
        <SunIcon className="h-4 w-4" />
      )}
    </button>
  );
}
