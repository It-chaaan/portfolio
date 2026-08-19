"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

export function Lamp({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  const [dragging, setDragging] = useState(false);
  const [pull, setPull] = useState(0);
  const startY = useRef(0);
  const triggered = useRef(false);
  const toSvgUnits = (event: PointerEvent<SVGGElement>) => {
    const svg = event.currentTarget.ownerSVGElement;
    if (!svg) return 0;
    return (event.clientY - startY.current) * (520 / svg.getBoundingClientRect().height);
  };
  const finish = () => { setDragging(false); setPull(0); };
  const onPointerDown = (event: PointerEvent<SVGGElement>) => { event.preventDefault(); event.currentTarget.setPointerCapture(event.pointerId); startY.current = event.clientY; triggered.current = false; setDragging(true); };
  const onPointerMove = (event: PointerEvent<SVGGElement>) => { if (!dragging) return; const next = Math.max(0, Math.min(52, toSvgUnits(event))); setPull(next); if (next >= 34 && !triggered.current) { triggered.current = true; onToggle(); } };
  const onKeyDown = (event: KeyboardEvent<SVGGElement>) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onToggle(); } };
  return <g strokeLinecap="round" strokeLinejoin="round">
    {!dark && <path d="M553 124L333 392H675Z" fill="url(#room-lamp-light)" stroke="none" />}
    <path d="M700 460h-170" fill="none" stroke="var(--text)" strokeWidth="1.4" />
    <path d="M660 459l22 42h-125l22-42" fill="var(--bg-subtle)" stroke="var(--text)" strokeWidth="1.4" />
    <circle cx="635" cy="392" r="12" fill="var(--bg)" stroke="var(--text)" strokeWidth="2" /><circle cx="635" cy="392" r="4" fill="var(--accent)" stroke="none" />
    <path d="M635 380L671 236 560 132" fill="none" stroke="var(--text)" strokeWidth="7" /><path d="M635 380L671 236 560 132" fill="none" stroke="var(--bg)" strokeWidth="3.5" />
    <circle cx="671" cy="236" r="12" fill="var(--bg)" stroke="var(--text)" strokeWidth="2" /><circle cx="671" cy="236" r="4" fill="var(--accent)" stroke="none" />
    <path d="M671 225L580 130" fill="none" stroke="var(--text)" strokeWidth="7" /><path d="M671 225L580 130" fill="none" stroke="var(--bg)" strokeWidth="3.5" />
    <circle cx="560" cy="132" r="12" fill="var(--bg)" stroke="var(--text)" strokeWidth="2" /><circle cx="560" cy="132" r="4" fill="var(--accent)" stroke="none" />
    <path d="M560 120l-27-40" fill="none" stroke="var(--text)" strokeWidth="6" /><path d="M560 120l-27-40" fill="none" stroke="var(--bg)" strokeWidth="3" />
    <path d="M500 72c18-18 53-9 61 18l9 32-92 12z" fill="var(--bg-subtle)" stroke="var(--text)" strokeWidth="1.8" />
    <path d="M464 128c17-39 69-51 105-22l-16 59c-32 10-66-4-89-27z" fill="var(--bg-subtle)" stroke="var(--text)" strokeWidth="1.8" />
    <path d="M468 137c25 27 56 36 85 28" fill="none" stroke="var(--text-faint)" strokeWidth="1" />
    <g role="button" tabIndex={0} aria-label="Drag the lamp cord down to switch color theme" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={finish} onPointerCancel={finish} onKeyDown={onKeyDown} className={dragging ? "cursor-grabbing" : "cursor-grab"}>
      <path d={`M530 160v${115 + pull}`} fill="none" stroke="var(--text-faint)" strokeWidth="1.5" />
      <circle cx="530" cy={275 + pull} r="8" fill="var(--accent)" stroke="var(--text)" strokeWidth="1.5" />
      <circle cx="530" cy={275 + pull} r="20" fill="transparent" stroke="transparent" />
    </g>
  </g>;
}
