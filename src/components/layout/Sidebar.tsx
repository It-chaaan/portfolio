"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import type { SectionId } from "@/types/portfolio";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

export function Sidebar({ activeSection }: { activeSection: SectionId }) {
  const activeIndex = Math.max(0, navigation.findIndex((item) => item.id === activeSection));
  const activeItem = navigation[activeIndex];
  const progress = `${String(activeIndex + 1).padStart(2, "0")} / ${String(navigation.length).padStart(2, "0")}`;

  return (
    <aside className="fixed inset-y-0 left-0 hidden h-dvh w-56 flex-col overflow-y-auto border-r border-[var(--border)] bg-[var(--bg)] px-6 py-7 lg:flex lg:py-10">
      <div className="mb-7 shrink-0 lg:mb-10">
        <Link href="/" className="text-sm font-semibold tracking-[-.01em]">
          {siteConfig.shortName}
        </Link>
        <p className="mt-1 font-mono text-[9px] uppercase tracking-[.1em] text-[var(--text-faint)]">
          {siteConfig.role}
        </p>
      </div>

      <nav className="min-h-0 flex-1" aria-label="Portfolio navigation">
        <ul>
          {navigation.map((item) => {
            const active = item.id === activeSection;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-2 py-[7px] font-mono text-[10px] uppercase tracking-[.1em] transition-colors ${
                    active ? "text-[var(--text)]" : "text-[var(--text-faint)] hover:text-[var(--text)]"
                  }`}
                >
                  <span
                    className={`flex h-3 w-3 items-center justify-center text-[var(--accent)] ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  >
                    ›
                  </span>
                  <span className="mr-0.5 text-[var(--text-faint)]">{item.num}</span>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-5 shrink-0 border-t border-[var(--border)] pt-4 font-mono uppercase">
        <div className="mb-4">
          <p className="mt-2 text-[8px] tracking-[.1em] text-[var(--text-faint)]">
            Expected graduation · {siteConfig.expectedGraduation}
          </p>
        </div>

        <div className="flex flex-col gap-2 text-[10px] tracking-[.08em]">
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email Christian Guillermo"
            className="w-fit text-[var(--text-muted)] transition-colors hover:text-[var(--accent)] focus-visible:text-[var(--accent)]"
          >
            Email me ↗
          </a>
          <a
            href={siteConfig.resumeUrl}
            download
            aria-label="Download Christian Guillermo CV"
            className="w-fit text-[var(--text-faint)] transition-colors hover:text-[var(--text)] focus-visible:text-[var(--accent)]"
          >
            Download RESUME ↓
          </a>
        </div>

        <div className="mt-4">
          <ThemeSwitcher />
        </div>

        <div className="mt-4 border-t border-[var(--border)] pt-3 text-[9px] tracking-[.1em] text-[var(--text-faint)]">
          <p aria-label={`Section ${progress}, ${activeItem.label}`}>{progress}</p>
          <p className="mt-1 text-[var(--text-muted)]">{activeItem.label}</p>
        </div>
      </div>
    </aside>
  );
}
