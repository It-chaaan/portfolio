"use client";

import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { MobileHeader } from "./MobileHeader";
import { ThemeProvider } from "./ThemeContext";
import { useActiveSection } from "@/hooks/useActiveSection";

function PortfolioShell({ children }: { children: ReactNode }) {
  const activeSection = useActiveSection();
  return <div className="min-h-screen bg-[var(--bg)]"><Sidebar activeSection={activeSection} /><div className="lg:ml-56"><MobileHeader /><main className="mx-auto w-full max-w-[1320px] px-6 lg:px-12">{children}</main></div></div>;
}

export function PortfolioLayout({ children }: { children: ReactNode }) {
  return <ThemeProvider><PortfolioShell>{children}</PortfolioShell></ThemeProvider>;
}
