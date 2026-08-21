import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const courses = ["Data Structures & Algorithms", "Software Engineering", "Operating Systems", "Database Systems", "Object Oriented Programming", "Web & Mobile Development"];
const certifications = ["PMI Project Management Ready", "Cisco Introduction to Networks", "IT Specialist – Python (Certiport)", "Android Development with Kotlin (LinkedIn Learning)"];

export function Education() {
  return <section id="education" className="border-t border-[var(--border)] py-20"><Reveal><SectionHeader num="05 — EDUCATION" title="Education & certifications." /></Reveal><Reveal delay={70}><div className="border-b border-[var(--border)] pb-8"><p className="mb-2 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]">2027</p><h3 className="mb-1 text-[17px] font-semibold">BS Computer Science</h3><p className="text-sm text-[var(--text-muted)]">FEU Institute of Technology · Major in Software Engineering</p></div><div className="border-b border-[var(--border)] py-8"><p className="mb-3.5 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]">Relevant Coursework</p><List items={courses} /></div><div className="pt-8"><p className="mb-3.5 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--text-faint)]">Certifications</p><List items={certifications} /></div></Reveal></section>;
}

function List({ items }: { items: string[] }) {
  return <ul className="space-y-2">{items.map((item) => <li key={item} className="flex items-center gap-2.5 text-[13px] text-[var(--text-muted)]"><span className="h-[3px] w-[3px] rounded-full bg-[var(--text-faint)]" />{item}</li>)}</ul>;
}
