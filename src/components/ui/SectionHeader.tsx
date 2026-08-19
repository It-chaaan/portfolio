export function SectionHeader({ num, title }: { num: string; title: string }) {
  return <div className="mb-12"><p className="mb-3 font-mono text-[11px] uppercase tracking-[.12em] text-[var(--text-faint)]">{num}</p><h2 className="text-[26px] font-semibold tracking-[-.02em] text-[var(--text)]">{title}</h2></div>;
}
