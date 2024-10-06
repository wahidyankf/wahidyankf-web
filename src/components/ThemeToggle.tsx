"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDark(theme !== "light");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light-theme");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-colors duration-200"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default ThemeToggle;
