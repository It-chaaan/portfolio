"use client";

import Image from "next/image";
import { Halftone } from "@/components/ui/Halftone";
import { siteConfig } from "@/config/site";

const facts = [
  { label: "School", value: siteConfig.school },
  { label: "Major", value: siteConfig.major },
  { label: "Focus", value: "Full-stack Development" },
  { label: "Currently", value: "Open to Internships" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate grid min-h-[calc(100svh-52px)] overflow-hidden border-b border-[var(--border)] py-12 lg:min-h-dvh lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-8 lg:py-10"
    >
      <Halftone className="absolute inset-0 opacity-70" />

      <div className="relative z-10 max-w-[560px] lg:pl-4">
        <p className="mb-4 animate-[fadeUp_.7s_70ms_ease_both] font-mono text-[10px] uppercase tracking-[.14em] text-[var(--text-faint)]">
          Hello / Welcome
        </p>
        <h1 className="mb-5 animate-[fadeUp_.7s_140ms_ease_both] text-[clamp(2.25rem,4vw,3.35rem)] font-bold leading-[1.08] tracking-[-.045em] text-[var(--text)]">
          Hi, I&apos;m {siteConfig.shortName}.
        </h1>
        <p className="mb-5 animate-[fadeUp_.7s_210ms_ease_both] text-[18px] text-[var(--text-muted)]">
          {siteConfig.role}
        </p>
        <p className="mb-6 max-w-[460px] animate-[fadeUp_.7s_280ms_ease_both] text-[15px] leading-[1.7] text-[var(--text-muted)]">
          I enjoy building practical software, exploring new technologies, and turning ideas into thoughtful web and mobile experiences.
        </p>

        <div className="mb-7 flex flex-wrap gap-3 animate-[fadeUp_.7s_350ms_ease_both]">
          <a href="#projects" style={{ color: "var(--bg)" }} className="rounded-[7px] bg-[var(--text)] px-5 py-3 font-mono text-xs font-medium uppercase tracking-[.08em] transition-opacity hover:opacity-80">
            View Projects &darr;
          </a>
          <a href="#contact" className="rounded-[7px] border border-[var(--border-strong)] bg-[var(--bg)] px-5 py-3 font-mono text-xs uppercase tracking-[.08em] transition-colors hover:border-[var(--text)]">
            Contact Me ↗
          </a>
        </div>

        <div className="flex flex-wrap gap-5 animate-[fadeUp_.7s_420ms_ease_both] font-mono text-[10px] uppercase tracking-[.1em] text-[var(--text-faint)]">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--accent)]">GitHub ↗</a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--accent)]">LinkedIn ↗</a>
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--accent)]">Instagram ↗</a>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 w-full animate-[fadeUp_.85s_180ms_ease_both] lg:mt-0">
        <div
          className="
            group
            mx-auto
            w-[320px]
            cursor-pointer
            overflow-hidden
            rounded-[1.5rem]
            border border-[var(--border)]
            bg-[var(--bg-secondary)]
            shadow-[0_8px_24px_rgba(0,0,0,.06)]

            transition-all
            duration-500
            ease-out

            hover:-translate-y-2
            hover:scale-[1.025]
            hover:border-[var(--border-strong)]
            hover:shadow-[0_20px_50px_rgba(0,0,0,.18)]

            sm:w-[360px]
            lg:w-[420px]
          "
        >
          <Image
            src="/profile.png"
            alt={siteConfig.name}
            width={800}
            height={1000}
            priority
            unoptimized
            className="
              block
              h-auto
              w-full
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.03]
            "
          />
        </div>
      </div>

      <div className="relative z-10 mt-10 grid gap-3 border-t border-[var(--border)] pt-5 sm:grid-cols-4 lg:col-span-2 lg:mt-8 lg:grid-cols-4 lg:pt-6">
        {facts.map((fact) => (
          <div key={fact.label}>
            <p className="mb-1 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]">{fact.label}</p>
            <p className="text-[13px] font-medium text-[var(--text-muted)]">{fact.value}</p>
          </div>
        ))}
      </div>

      <a href="#projects" className="relative z-10 mt-8 inline-block animate-[fadeUp_.7s_490ms_ease_both] font-mono text-[9px] uppercase tracking-[.14em] text-[var(--text-faint)] transition-colors hover:text-[var(--text)] lg:col-span-2">
        Scroll to Explore &darr;
      </a>
    </section>
  );
}
