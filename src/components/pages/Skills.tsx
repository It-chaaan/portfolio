import { skills } from "@/data/skills";

import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Skills() {
  return (
    <section
      id="skills"
      className="min-h-[100dvh] border-t border-[var(--border)] py-20"
    >
      {/* Section Header */}
      <Reveal>
        <SectionHeader
          num="03 — SKILLS"
          title="Tools I work with."
        />
      </Reveal>

      {/* Skill Categories */}
      {skills.map((category, index) => (
        <Reveal
          key={category.label}
          delay={index * 60}
        >
          <div
            className={`
              grid gap-4
              border-b border-[var(--border)]
              py-5
              sm:grid-cols-[130px_1fr]
              sm:gap-6
              ${index === 0 ? "border-t" : ""}
            `}
          >
            {/* Category */}
            <span className="pt-0.5 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]">
              {category.label}
            </span>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5">
              {category.items.map((item) => (
                <Pill
                  key={item}
                  label={item}
                />
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
