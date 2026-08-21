"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    { label: "GitHub", value: "https://github.com/It-chaaan", href: site.github },
    { label: "LinkedIn", value: "https://www.linkedin.com/in/christian-guillermo-3821a838b", href: site.linkedin },
  ];

  return (
    <section id="contact" className="border-t border-[var(--border)] py-20">
      <Reveal>
        <SectionHeader num="06 — CONTACT" title="Let&apos;s build something." />
      </Reveal>

      <Reveal delay={70}>
        <p className="mb-10 max-w-[440px] text-[15px] leading-[1.7] text-[var(--text-muted)]">
          I&apos;m always open to discussing software projects, internships, collaborations, or interesting ideas.
        </p>
      </Reveal>

      <Reveal delay={140}>
        <a
          href={`mailto:${site.email}`}
          className="mb-12 inline-block border-b border-[var(--border-strong)] pb-0.5 text-xl font-semibold tracking-[-.01em] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          Get in Touch ↗
        </a>
      </Reveal>

      <Reveal delay={210}>
        <div>
          <div className="flex items-center justify-between border-y border-[var(--border)] py-4">
            <div>
              <p className="mb-1 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]">
                Email
              </p>
              <p className="text-sm">{site.email}</p>
            </div>
            <button
              onClick={copyEmail}
              className={`rounded-md border border-[var(--border)] px-3 py-1 font-mono text-[9px] uppercase tracking-[.1em] ${
                copied ? "bg-[var(--accent-subtle)] text-[var(--accent)]" : "text-[var(--text-faint)]"
              }`}
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>

          {links.map((link) => (
            <div key={link.label} className="border-b border-[var(--border)] py-4">
              <p className="mb-1 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]">
                {link.label}
              </p>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors hover:text-[var(--accent)]"
              >
                {link.value} ↗
              </a>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
