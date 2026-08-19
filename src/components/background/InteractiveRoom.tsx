"use client";

import { Lamp } from "./Lamp";
import { usePortfolioTheme } from "@/components/layout/ThemeContext";

export function InteractiveRoom() {
  const { dark, toggleTheme } = usePortfolioTheme();
  return <div className="relative z-10 mt-8 hidden min-h-[440px] self-stretch lg:block" aria-label="Developer study workspace"><svg viewBox="0 0 760 520" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMax meet" role="img" aria-label="Developer workspace with a laptop and an interactive study lamp">
    <defs><radialGradient id="room-lamp-light" cx="50%" cy="8%" r="78%"><stop stopColor="var(--accent)" stopOpacity=".12" /><stop offset="1" stopColor="var(--accent)" stopOpacity="0" /></radialGradient></defs>
    <path d="M42 413H740" fill="none" stroke="var(--border-strong)" strokeWidth="1" /><path d="M42 413L91 456H740" fill="var(--bg-subtle)" stroke="var(--border)" strokeWidth="1" />
    <g fill="none" stroke="var(--text-faint)" strokeLinecap="round" strokeWidth="1" opacity=".45"><rect x="77" y="81" width="88" height="56" rx="2" /><path d="M89 98h19m-19 9h47m-47 9h31" /><path d="M690 72v161M650 72h68" /><path d="M186 111h78" /></g>
    <g stroke="var(--text)" strokeLinecap="round" strokeLinejoin="round"><path d="M42 413h698l-28 52H71z" fill="var(--bg-subtle)" strokeWidth="1.4" /><path d="M66 438h650" fill="none" stroke="var(--border-strong)" strokeWidth="1" /><path d="M91 465v34m584-34v34" fill="none" strokeWidth="1.4" />
      <path d="M264 401h247l19 12H246z" fill="var(--bg)" strokeWidth="1.5" /><path d="M285 233h202v152H285z" fill="var(--bg-subtle)" strokeWidth="2" /><path d="M296 245h180v126H296z" fill="var(--bg)" strokeWidth="1" /><path d="M323 265h44m-44 14h83m-83 14h56m-56 14h103m-103 14h76" fill="none" stroke="var(--text-faint)" strokeWidth="2" /><path d="M323 265h44m-44 28h56m-56 28h103" fill="none" stroke="var(--accent)" strokeWidth="2" opacity=".75" /><path d="M386 385v16m-36 0h72" fill="none" strokeWidth="1.5" />
      <path d="M267 414h236l-21 53H287z" fill="var(--bg)" strokeWidth="1.7" /><path d="M306 422h157l13 28H294z" fill="var(--bg-subtle)" strokeWidth="1" /><path d="M325 428h7m5 0h7m5 0h7m5 0h7m5 0h7m5 0h7m5 0h7m5 0h7m5 0h7m5 0h7m5 0h7m5 0h7m5 0h7m5 0h7" fill="none" stroke="var(--text-faint)" strokeWidth="2" />
      <path d="M125 362v52m0-52c-6-32 18-49 29-65m-29 65c10-27 34-31 45-58m-45 58c-12-26-30-27-39-48m39 48c17-17 32-10 46-26" fill="none" strokeWidth="1.4" /><path d="M106 391h39v22h-39z" fill="var(--bg)" strokeWidth="1.3" />
      <path d="M190 375h42v38h-42z" fill="var(--bg)" strokeWidth="1.3" /><path d="M232 382c20 0 20 20 0 20" fill="none" strokeWidth="1.3" /><path d="M195 386h31" fill="none" stroke="var(--text-faint)" />
      <path d="M544 382h96l-8 20h-96z" fill="var(--accent-subtle)" strokeWidth="1.3" /><path d="M539 402h96l-8 19h-96z" fill="var(--bg)" strokeWidth="1.3" /><text x="552" y="396" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="9">CLEAN CODE</text><text x="548" y="415" fill="var(--text-faint)" fontFamily="var(--font-mono)" fontSize="8">INTERFACES</text></g>
    <Lamp dark={dark} onToggle={toggleTheme} />
    <text x="480" y="337" fill="var(--text-faint)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1.5">DRAG CORD TO TOGGLE</text>
  </svg></div>;
}
