export type SectionId = "home" | "about" | "projects" | "skills" | "experience" | "education" | "contact";

export type NavigationItem = { id: SectionId; label: string; num: string };
export type Project = { num: string; name: string; context: string; summary: string; stack: string[]; contribution: string; features: string[] };
export type Experience = { period: string; title: string; company: string; desc: string; stack: string[] };
export type SkillCategory = { label: string; items: string[] };
