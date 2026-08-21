import { experience } from "@/data/experience";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Experience() {
  return <section id="experience" className="border-t border-[var(--border)] py-20"><Reveal><SectionHeader num="04 — EXPERIENCE" title="Where I&apos;ve contributed." /></Reveal><div className="relative border-l border-[var(--border)]">{experience.map((item, index) => <Reveal key={`${item.period}-${item.title}`} delay={index * 80}><article className="relative pb-10 pl-6"><span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full border border-[var(--bg)] bg-[var(--border-strong)]" /><p className="mb-2 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--accent)]">{item.period}</p><h3 className="text-[15px] font-semibold">{item.title}</h3><p className="mb-2.5 text-[13px] text-[var(--text-muted)]">{item.company}</p><p className="mb-3 max-w-[460px] text-[13px] leading-[1.65] text-[var(--text-muted)]">{item.desc}</p><div className="flex flex-wrap gap-1.5">{item.stack.map((technology) => <Pill key={technology} label={technology} />)}</div></article></Reveal>)}</div></section>;
}
