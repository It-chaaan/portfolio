import { projects } from "@/data/projects";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-[var(--border)] py-20"
    >
      {/* Section Header */}
      <Reveal>
        <SectionHeader
          num="03 — FEATURED PROJECTS"
          title="Things I&apos;ve built."
        />

        <p className="-mt-8 mb-12 max-w-[480px] text-sm text-[var(--text-muted)]">
          A selection of projects where I explored software engineering,
          interface design, and problem solving.
        </p>
      </Reveal>

      {/* Project List */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <Reveal
            key={project.num}
            delay={index * 80}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}