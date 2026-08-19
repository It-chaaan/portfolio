export function Pill({ label }: { label: string }) {
  return <span className="whitespace-nowrap rounded-full border border-[var(--border-strong)] px-2 py-[3px] font-mono text-[10px] uppercase tracking-[.08em] text-[var(--text-muted)]">{label}</span>;
}
