import { siteConfig } from "@/config/site";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const facts = [
  {
    label: "Location",
    value: siteConfig.location,
  },
  {
    label: "Program",
    value: "BS Computer Science",
  },
  {
    label: "Currently",
    value: "Learning Mobile App Development",
  },
  {
    label: "Focus",
    value: "Full-stack Dev",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="min-h-[100dvh] border-t border-[var(--border)] py-20"
    >
      {/* Section Header */}
      <Reveal>
        <SectionHeader
          num="02 — ABOUT"
          title="A little about me."
        />
      </Reveal>

      {/* About Content */}
      <div className="grid gap-10 sm:grid-cols-[1fr_160px] sm:gap-12">
        {/* Biography */}
        <Reveal delay={70}>
          <div className="max-w-[520px] space-y-4 text-[15px] leading-[1.75] text-[var(--text-muted)]">
            <p>
                I&apos;m Christian P. Guillermo, a Computer Science student at FEU Institute of Technology 
                majoring in Software Engineering. I'm a curious and adaptable learner who enjoys taking on 
                challenges, exploring new ideas, and continuously improving my skills.
            </p>

            <p>
                I value collaboration, clear communication, and attention to detail when working with others. 
                I approach problems with patience and a solution-oriented mindset, and I'm always eager to 
                learn from new experiences while creating meaningful, technology-driven solutions.
            </p>
          </div>
        </Reveal>

        {/* Quick Facts */}
        <Reveal delay={140}>
          <dl>
            {facts.map(({ label, value }) => (
              <div
                key={label}
                className="mb-4 border-b border-[var(--border)] pb-4"
              >
                <dt className="mb-1 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]">
                  {label}
                </dt>

                <dd className="text-[13px] font-medium">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}