"use client";

import { useCallback, useEffect, useState } from "react";

export type Theme = "system" | "light" | "dark";

const THEME_STORAGE_KEY = "theme";

function applyTheme(theme: Theme, systemIsDark: boolean) {
  document.documentElement.classList.toggle("dark", theme === "dark" || (theme === "system" && systemIsDark));
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("system");
  const [systemIsDark, setSystemIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const initialTheme: Theme = savedTheme === "light" || savedTheme === "dark" || savedTheme === "system" ? savedTheme : "system";
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Browser preferences are read after hydration so the server and first client render match.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(initialTheme);
    setSystemIsDark(mediaQuery.matches);
    applyTheme(initialTheme, mediaQuery.matches);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    applyTheme(theme, mediaQuery.matches);

    function handleSystemThemeChange(event: MediaQueryListEvent) {
      setSystemIsDark(event.matches);
    }

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [theme]);

  useEffect(() => {
    applyTheme(theme, systemIsDark);
  }, [systemIsDark, theme]);

  const setTheme = useCallback((nextTheme: Theme) => {
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setThemeState(nextTheme);
  }, []);

  return { theme, setTheme, dark: theme === "dark" || (theme === "system" && systemIsDark) };
}
