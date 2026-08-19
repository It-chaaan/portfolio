"use client";

import {
  Github,
  Linkedin,
  FileText,
  ArrowUpRight,
} from "lucide-react";

const navigation = [
  { number: "01", label: "Home", href: "#home" },
  { number: "02", label: "About", href: "#about" },
  { number: "03", label: "Projects", href: "#projects" },
  { number: "04", label: "Skills", href: "#skills" },
  { number: "05", label: "Experience", href: "#experience" },
  { number: "06", label: "Education", href: "#education" },
  { number: "07", label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/YOUR_USERNAME",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/YOUR_USERNAME",
    icon: Linkedin,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: FileText,
  },
];

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-56 border-r border-[var(--border)] bg-[var(--background)] lg:flex lg:flex-col">
      {/* Identity */}
      <div className="border-b border-[var(--border)] px-6 py-6">
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight text-[var(--foreground)]"
        >
          YOUR NAME
        </a>

        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
          CS Student / Developer
        </p>
      </div>

      {/* Navigation */}
      <nav
        aria-label="Portfolio navigation"
        className="flex-1 px-6 py-8"
      >
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = item.href === "#home";

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={[
                    "group flex items-center gap-3 py-2",
                    "font-mono text-[11px] uppercase tracking-[0.1em]",
                    "transition-colors duration-200",
                    isActive
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "w-3 text-[var(--accent)]",
                      isActive ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    →
                  </span>

                  <span className="text-[var(--faint)]">
                    {item.number}
                  </span>

                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom content */}
      <div className="border-t border-[var(--border)] px-6 py-6">
        {/* Availability */}
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
              aria-hidden="true"
            />

            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--muted)]">
              Available for opportunities
            </span>
          </div>
        </div>

        {/* Social links */}
        <div className="space-y-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "Resume" ? "_blank" : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
            >
              <span className="flex items-center gap-2">
                <Icon size={12} strokeWidth={1.5} />
                {label}
              </span>

              <ArrowUpRight
                size={11}
                strokeWidth={1.5}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          ))}
        </div>

        {/* Theme control placeholder */}
        <div className="mt-6 border-t border-[var(--border)] pt-5">
          <button
            type="button"
            className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Theme bulb goes here
          </button>
        </div>
      </div>
    </aside>
  );
}