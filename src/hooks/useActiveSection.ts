"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import type { SectionId } from "@/types/portfolio";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  useEffect(() => {
    const sections = navigation.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveSection(entry.target.id as SectionId);
    }), { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return activeSection;
}
