import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="fixed bottom-5 sm:bottom-8 right-4 sm:right-6 md:right-8 z-50 p-2.5 sm:p-3 rounded-full bg-card/90 backdrop-blur-md border border-border shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 text-foreground cursor-pointer"
    >
      {theme === "light" ? (
        <Moon className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-foreground transition-transform duration-300" />
      ) : (
        <Sun className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-foreground transition-transform duration-300" />
      )}
    </button>
  );
}
