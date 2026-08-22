"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { usePortfolioTheme } from "@/components/layout/ThemeContext";
import type { Theme } from "@/hooks/useTheme";

const options: { theme: Theme; label: string; icon: typeof Monitor }[] = [
  { theme: "system", label: "Use system theme", icon: Monitor },
  { theme: "light", label: "Use light theme", icon: Sun },
  { theme: "dark", label: "Use dark theme", icon: Moon },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = usePortfolioTheme();

  return (
    <div className="flex h-9 w-full rounded-full border border-[var(--border)] bg-[var(--bg)] p-0.5" aria-label="Theme preference">
      {options.map(({ theme: optionTheme, label, icon: Icon }) => {
        const selected = theme === optionTheme;
        return (
          <button
            key={optionTheme}
            type="button"
            title={label.replace("Use ", "").replace(" theme", "")}
            aria-label={label}
            aria-pressed={selected}
            onClick={() => setTheme(optionTheme)}
            className={`flex flex-1 items-center justify-center rounded-full transition-colors ${selected ? "bg-[var(--bg-secondary)] text-[var(--text)]" : "text-[var(--text-faint)] hover:text-[var(--text-muted)]"}`}
          >
            <Icon size={15} strokeWidth={1.75} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
