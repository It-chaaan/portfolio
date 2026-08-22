"use client";

import { useCallback, useEffect, useState } from "react";

export type Theme = "system" | "light" | "dark";

const THEME_STORAGE_KEY = "theme";

function applyTheme(theme: Theme, systemIsDark: boolean) {
  document.documentElement.classList.toggle("dark", theme === "dark" || (theme === "system" && systemIsDark));
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme === "light" || savedTheme === "dark" || savedTheme === "system" ? savedTheme : "system";
  });
  const [systemIsDark, setSystemIsDark] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

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
