import type { Project, ProjectImage } from "@/types/portfolio";
import { Pill } from "./Pill";
import { ProjectCarousel } from "./ProjectCarousel";

export function ProjectCard({ project }: { project: Project }) {
  const isAlalayProject = project.num === "01";
  const isFeaturedProject = project.num === "02" || project.num === "03";

  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-6 shadow-[0_1px_4px_rgba(0,0,0,.04)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(37,99,235,.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,.08)] sm:p-8">
      {isAlalayProject ? (
        <AlalayProjectLayout project={project} />
      ) : isFeaturedProject ? (
        <FeaturedProjectLayout project={project} />
      ) : (
        <StandardProjectLayout project={project} />
      )}
    </article>
  );
}

function AlalayProjectLayout({ project }: { project: Project }) {
  const galleryImages = project.images?.filter((image): image is ProjectImage => typeof image !== "string") ?? [];

  return (
    <>
      <div className="grid gap-7 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-x-8">
        <div>
          <p className="mb-1.5 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]">Project / {project.num}</p>
          <h3 className="text-xl font-semibold tracking-[-.02em]">{project.name}</h3>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-[.1em] text-[var(--accent)]">{project.context}</p>
          <p className="mt-5 text-sm leading-[1.7] text-[var(--text-muted)]">{project.summary}</p>
        </div>

        <div className="min-w-0 md:col-start-2 md:row-span-2 md:row-start-1">
          <ProjectCarousel images={galleryImages} projectName={project.name} autoAdvance />
        </div>

        <div className="space-y-5 md:col-start-1 md:row-start-2">
          <DetailPills label="Technology" items={project.stack} />
          <DetailPills label="Key Features" items={project.features} />
        </div>
      </div>

      <div className="mt-7">
        <Contribution contribution={project.contribution} />
      </div>
    </>
  );
}

function FeaturedProjectLayout({ project }: { project: Project }) {
  const galleryImages = project.images?.filter((image): image is ProjectImage => typeof image !== "string") ?? [];

  return (
    <>
      <div className="grid gap-7 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-x-8">
        <div>
          <p className="mb-1.5 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]">Project / {project.num}</p>
          <h3 className="text-xl font-semibold tracking-[-.02em]">{project.name}</h3>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-[.1em] text-[var(--accent)]">{project.context}</p>
          <p className="mt-5 text-sm leading-[1.7] text-[var(--text-muted)]">{project.summary}</p>

          <div className="mt-6 space-y-5">
            <DetailPills label="Technology" items={project.stack} />
            <DetailPills label="System Features" items={project.features} />
            <ProjectLinks links={project.links} />
          </div>
        </div>

        <div className="min-w-0 md:col-start-2 md:row-span-2 md:row-start-1">
          <ProjectCarousel images={galleryImages} projectName={project.name} />
        </div>
      </div>

      <div className="mt-7">
        <Contribution contribution={project.contribution} />
      </div>
    </>
  );
}

function StandardProjectLayout({ project }: { project: Project }) {
  return (
    <>
      <div className="mb-5"><p className="mb-1.5 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]">Project / {project.num}</p><h3 className="text-xl font-semibold tracking-[-.02em]">{project.name}</h3><p className="mt-2 font-mono text-[9px] uppercase tracking-[.1em] text-[var(--accent)]">{project.context}</p></div>
      <p className="mb-5 max-w-[520px] text-sm leading-[1.7] text-[var(--text-muted)]">{project.summary}</p>
      <div className="mb-5 grid gap-5 sm:grid-cols-2"><DetailPills label="Technology" items={project.stack} /><DetailPills label="System Features" items={project.features} /></div>
      <Contribution contribution={project.contribution} />
    </>
  );
}

function Contribution({ contribution }: { contribution: string }) {
  return <div className="border-t border-[var(--border)] py-4"><p className="mb-1.5 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]">Christian&apos;s Contribution</p><p className="text-[13px] leading-[1.65] text-[var(--text-muted)]">{contribution}</p></div>;
}

function ProjectLinks({ links }: { links: Project["links"] }) {
  const availableLinks = [
    links?.web ? { href: links.web, label: "Live Website ↗" } : null,
    links?.github ? { href: links.github, label: "Source Code ↗" } : null,
    links?.apk ? { href: links.apk, label: "Download APK ↓", download: true } : null,
  ].filter((link): link is { href: string; label: string; download?: boolean } => link !== null);

  if (availableLinks.length === 0) return null;

  return (
    <div>
      <p className="mb-2 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]">Project Links</p>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {availableLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            download={link.download}
            target={link.download ? undefined : "_blank"}
            rel={link.download ? undefined : "noreferrer"}
            className="font-mono text-[10px] uppercase tracking-[.08em] text-[var(--accent)] transition-opacity hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function DetailPills({ label, items }: { label: string; items: string[] }) { return <div><p className="mb-2 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]">{label}</p><div className="flex flex-wrap gap-1.5">{items.map((item) => <Pill key={item} label={item} />)}</div></div>; }
