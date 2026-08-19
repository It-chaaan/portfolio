"use client";

import { useState } from "react";

import { usePortfolioTheme } from "@/components/layout/ThemeContext";

import { Laptop } from "./Laptop";
import { StudyLamp } from "./StudyLamp";
import { WorkspaceDecor } from "./WorkspaceDecor";

export function InteractiveWorkspace() {
  const { dark, toggleTheme } = usePortfolioTheme();
  const [hasToggled, setHasToggled] = useState(false);

  const lit = !dark;

  const handleToggle = () => {
    setHasToggled(true);
    toggleTheme();
  };

  return (
    <div
      className="
        relative z-10
        hidden
        h-[520px]
        w-full
        self-center
        lg:block
      "
      aria-label="Developer study workspace"
    >
      <svg
        viewBox="0 0 760 520"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMax meet"
        role="img"
        aria-label="Developer workspace with an interactive study lamp"
      >
        {/* SVG Definitions */}
        <defs>
          {/* Laptop Screen Glow */}
          <radialGradient
            id="screen-glow"
            cx="50%"
            cy="50%"
            r="65%"
          >
            <stop stopColor="var(--workspace-screen-glow)" />
            <stop
              offset="1"
              stopColor="var(--workspace-screen)"
            />
          </radialGradient>

          {/* Lamp Light Cone */}
          <linearGradient
            id="lamp-cone"
            x1="0"
            x2=".8"
            y1="0"
            y2="1"
          >
            <stop
              stopColor="var(--workspace-warm)"
              stopOpacity=".7"
            />
            <stop
              offset="1"
              stopColor="var(--workspace-warm)"
              stopOpacity="0"
            />
          </linearGradient>

          {/* Lamp Light Core */}
          <linearGradient
            id="lamp-cone-core"
            x1="0"
            x2=".8"
            y1="0"
            y2="1"
          >
            <stop
              stopColor="var(--workspace-lamp-lit)"
              stopOpacity=".22"
            />
            <stop
              offset="1"
              stopColor="var(--workspace-warm)"
              stopOpacity="0"
            />
          </linearGradient>

          {/* Desk Warm Glow */}
          <radialGradient id="desk-warmth">
            <stop
              stopColor="var(--workspace-warm)"
              stopOpacity=".8"
            />
            <stop
              offset="1"
              stopColor="var(--workspace-warm)"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>

        {/* Desk Back Line */}
        <path
          d="M46 422H739"
          fill="none"
          stroke="var(--workspace-line-faint)"
          strokeWidth="1"
          opacity=".65"
        />

        {/* Desk Surface */}
        <path
          d="M46 422L84 456H739"
          fill="var(--workspace-desk)"
          stroke="var(--workspace-desk-edge)"
          strokeWidth="1"
        />

        {/* Desk Front Edge */}
        <path
          d="M84 456h655v22H84z"
          fill="var(--workspace-desk-edge)"
          opacity=".72"
        />

        {/* Desk Legs */}
        <path
          d="M109 478v30m566-30v30"
          stroke="var(--workspace-line-secondary)"
          strokeWidth="1.2"
          opacity=".55"
        />

        {/* Workspace Elements */}
        <WorkspaceDecor lit={lit} />

        <Laptop lit={lit} />

        <StudyLamp
          dark={dark}
          onToggle={handleToggle}
        />

        {/* Lamp Interaction Hint */}
        {!hasToggled && (
          <text
            x="468"
            y="352"
            fill="var(--workspace-line-secondary)"
            fontFamily="var(--font-mono)"
            fontSize="9"
            letterSpacing="1.35"
            opacity=".7"
          >
            PULL TO TOGGLE
          </text>
        )}
      </svg>
    </div>
  );
}