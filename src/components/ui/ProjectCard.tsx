import type { Project } from "@/types/portfolio";
import { Pill } from "./Pill";

export function ProjectCard({ project }: { project: Project }) {
  return <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-6 shadow-[0_1px_4px_rgba(0,0,0,.04)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(37,99,235,.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,.08)] sm:p-8">
    <div className="mb-5"><p className="mb-1.5 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]">Project / {project.num}</p><h3 className="text-xl font-semibold tracking-[-.02em]">{project.name}</h3><p className="mt-2 font-mono text-[9px] uppercase tracking-[.1em] text-[var(--accent)]">{project.context}</p></div>
    <p className="mb-5 max-w-[520px] text-sm leading-[1.7] text-[var(--text-muted)]">{project.summary}</p>
    <div className="mb-5 grid gap-5 sm:grid-cols-2"><DetailPills label="Technology" items={project.stack} /><DetailPills label="System Features" items={project.features} /></div>
    <div className="border-t border-[var(--border)] py-4"><p className="mb-1.5 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]">Christian&apos;s Contribution</p><p className="text-[13px] leading-[1.65] text-[var(--text-muted)]">{project.contribution}</p></div>
  </article>;
}
function DetailPills({ label, items }: { label: string; items: string[] }) { return <div><p className="mb-2 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]">{label}</p><div className="flex flex-wrap gap-1.5">{items.map((item) => <Pill key={item} label={item} />)}</div></div>; }
