import Image from "next/image";
import { Halftone } from "@/components/ui/Halftone";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100svh-52px)] overflow-hidden border-b border-[var(--border)] py-12 lg:min-h-dvh lg:py-10"
    >
      <Halftone className="absolute inset-0 opacity-70" />

      <div className="relative z-10 flex min-h-[calc(100svh-148px)] max-w-[650px] flex-col justify-center lg:pl-4">
        <div className="mb-8 h-[72px] w-[72px] animate-[fadeUp_.7s_ease_both] overflow-hidden rounded-full border border-[var(--border)] bg-[var(--bg)]">
          <Image
            src="/profile.png"
            alt={siteConfig.name}
            width={72}
            height={72}
            priority
            className="h-full w-full object-cover object-top"
          />
        </div>

        <p className="mb-4 animate-[fadeUp_.7s_70ms_ease_both] font-mono text-[10px] uppercase tracking-[.14em] text-[var(--text-faint)]">
          Hello / Welcome
        </p>
        <h1 className="mb-5 animate-[fadeUp_.7s_140ms_ease_both] text-[clamp(2.25rem,4vw,3.35rem)] font-bold leading-[1.08] tracking-[-.045em] text-[var(--text)]">
          Hi, I&apos;m {siteConfig.shortName}.
        </h1>
        <p className="mb-5 animate-[fadeUp_.7s_210ms_ease_both] text-[18px] text-[var(--text-muted)]">
          Computer Science Student &amp; Aspiring Software Developer
        </p>
        <p className="mb-8 max-w-[520px] animate-[fadeUp_.7s_280ms_ease_both] text-[15px] leading-[1.7] text-[var(--text-muted)]">
          Interested in software engineering, web and mobile development, and system design. I enjoy building practical applications, exploring new technologies, and solving real-world problems through software.
        </p>

        <p className="mb-8 flex items-center gap-2 animate-[fadeUp_.7s_320ms_ease_both] font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-muted)]">
          <span className="pulse-dot size-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
          Available for internships / opportunities
        </p>

        <div className="mb-8 flex flex-wrap gap-3 animate-[fadeUp_.7s_350ms_ease_both]">
          <a href="#projects" style={{ color: "var(--bg)" }} className="rounded-[7px] bg-[var(--text)] px-5 py-3 font-mono text-xs font-medium uppercase tracking-[.08em] transition-opacity hover:opacity-80">
            View Projects &darr;
          </a>
          <a href="#contact" className="rounded-[7px] border border-[var(--border-strong)] bg-[var(--bg)] px-5 py-3 font-mono text-xs uppercase tracking-[.08em] transition-colors hover:border-[var(--text)]">
            Contact Me &nearr;
          </a>
        </div>

        <div className="flex flex-wrap gap-5 animate-[fadeUp_.7s_420ms_ease_both] font-mono text-[10px] uppercase tracking-[.1em] text-[var(--text-faint)]">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--accent)]">GitHub &nearr;</a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--accent)]">LinkedIn &nearr;</a>
          <a href={siteConfig.resumeUrl} download className="transition-colors hover:text-[var(--accent)]">Resume &nearr;</a>
        </div>

        <a href="#about" className="mt-14 inline-block animate-[fadeUp_.7s_490ms_ease_both] font-mono text-[9px] uppercase tracking-[.14em] text-[var(--text-faint)] transition-colors hover:text-[var(--text)]">
          Scroll to Explore &darr;
        </a>
      </div>
    </section>
  );
}
