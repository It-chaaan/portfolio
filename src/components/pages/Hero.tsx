import Image from "next/image";

import { InteractiveWorkspace } from "@/components/background/InteractiveWorkspace";
import { Halftone } from "@/components/ui/Halftone";
import { siteConfig } from "@/config/site";

export function Hero() {
  const socialLinks = [
    {
      label: "GitHub",
      href: siteConfig.github,
    },
    {
      label: "LinkedIn",
      href: siteConfig.linkedin,
    },
  ];

  return (
    <section
      id="home"
      className="
        relative isolate grid
        min-h-[calc(100svh-52px)]
        overflow-hidden
        border-b border-[var(--border)]
        py-12
        lg:min-h-dvh
        lg:grid-cols-[minmax(390px,.88fr)_minmax(500px,1.12fr)]
        lg:items-center
        lg:gap-8
        lg:py-10
      "
    >
      {/* Background */}
      <Halftone className="absolute inset-0 opacity-70" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-[560px] lg:pl-4">
        {/* Profile Image */}
        <div
          className="
            mb-8
            h-[72px] w-[72px]
            animate-[fadeUp_.7s_ease_both]
            overflow-hidden
            rounded-full
            border border-[var(--border)]
            bg-[var(--bg)]
          "
        >
          <Image
            src="/profile.png"
            alt={siteConfig.name}
            width={72}
            height={72}
            priority
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Greeting */}
        <p
          className="
            mb-4
            animate-[fadeUp_.7s_70ms_ease_both]
            font-mono
            text-[10px]
            uppercase
            tracking-[.14em]
            text-[var(--text-faint)]
          "
        >
          Hello / Welcome
        </p>

        {/* Name */}
        <h1
          className="
            mb-5
            animate-[fadeUp_.7s_140ms_ease_both]
            text-[clamp(2.25rem,4vw,3.35rem)]
            font-bold
            leading-[1.08]
            tracking-[-.045em]
            text-[var(--text)]
          "
        >
          Hi, I&apos;m {siteConfig.shortName}.
        </h1>

        {/* Role */}
        <p
          className="
            mb-5
            animate-[fadeUp_.7s_210ms_ease_both]
            text-[18px]
            text-[var(--text-muted)]
          "
        >
          {siteConfig.role}
        </p>

        {/* Description */}
        <p
          className="
            mb-8
            max-w-[460px]
            animate-[fadeUp_.7s_280ms_ease_both]
            text-[15px]
            leading-[1.7]
            text-[var(--text-muted)]
          "
        >
          I enjoy building applications, exploring new technologies, 
          and creating practical solutions to real-world problems.
        </p>

        {/* Primary Actions */}
        <div
          className="
            mb-8
            flex flex-wrap gap-3
            animate-[fadeUp_.7s_350ms_ease_both]
          "
        >
          <a
            href="#projects"
            style={{ color: "var(--bg)" }}
            className="
              rounded-[7px]
              bg-[var(--text)]
              px-5 py-3
              font-mono
              text-xs
              font-medium
              uppercase
              tracking-[.08em]
              transition-opacity
              hover:opacity-80
            "
          >
            View Projects ↓
          </a>

          <a
            href="#contact"
            className="
              rounded-[7px]
              border border-[var(--border-strong)]
              bg-[var(--bg)]
              px-5 py-3
              font-mono
              text-xs
              uppercase
              tracking-[.08em]
              transition-colors
              hover:border-[var(--text)]
            "
          >
            Contact Me ↗
          </a>
        </div>

        {/* Social Links */}
        <div
          className="
            flex flex-wrap gap-5
            animate-[fadeUp_.7s_420ms_ease_both]
            font-mono
            text-[10px]
            uppercase
            tracking-[.1em]
            text-[var(--text-faint)]
          "
        >
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                transition-colors
                hover:text-[var(--accent)]
              "
            >
              {label} ↗
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="
            mt-14
            inline-block
            animate-[fadeUp_.7s_490ms_ease_both]
            font-mono
            text-[9px]
            uppercase
            tracking-[.14em]
            text-[var(--text-faint)]
            transition-colors
            hover:text-[var(--text)]
          "
        >
          Scroll to Explore ↓
        </a>
      </div>

      {/* Interactive Hero Visual */}
      <InteractiveWorkspace />
    </section>
  );
}