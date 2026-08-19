"use client";
import { createContext, useContext, type ReactNode } from "react";
import { useTheme } from "@/hooks/useTheme";
type ThemeContextValue = ReturnType<typeof useTheme>;
const ThemeContext = createContext<ThemeContextValue | null>(null);
export function ThemeProvider({ children }: { children: ReactNode }) { const theme = useTheme(); return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>; }
export function usePortfolioTheme() { const theme = useContext(ThemeContext); if (!theme) throw new Error("usePortfolioTheme must be used within ThemeProvider"); return theme; }
