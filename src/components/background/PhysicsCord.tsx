"use client";
import { type KeyboardEvent } from "react";
import { useRopePhysics } from "@/hooks/useRopePhysics";

export function PhysicsCord({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  const { pathRef, shadowRef, hitPathRef, knobRef, knobVisualRef, dragging, down, move, release, keyboardToggle } = useRopePhysics(onToggle);
  const onKeyDown = (event: KeyboardEvent<SVGCircleElement>) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); keyboardToggle(); } };
  const cursor = dragging ? "cursor-grabbing" : "cursor-grab";
  return <g style={{ touchAction: "none" }}><path ref={shadowRef} fill="none" stroke="var(--workspace-shadow)" strokeWidth="4" opacity=".35" transform="translate(2 3)" /><path ref={pathRef} fill="none" stroke="var(--workspace-line)" strokeWidth="1.7" /><path ref={hitPathRef} fill="none" stroke="transparent" strokeWidth="24" pointerEvents="stroke" onPointerDown={down} onPointerMove={move} onPointerUp={release} onPointerCancel={(event) => release(event, true)} className={cursor} /><circle ref={knobRef} cx="530" cy="274" r="14" fill="transparent" stroke="transparent" pointerEvents="all" tabIndex={0} role="switch" aria-checked={!dark} aria-label={dark ? "Pull cord to switch to light theme" : "Pull cord to switch to dark theme"} onKeyDown={onKeyDown} onPointerDown={down} onPointerMove={move} onPointerUp={release} onPointerCancel={(event) => release(event, true)} className={`outline-none ${cursor}`} /><circle ref={knobVisualRef} cx="530" cy="274" r="7" fill="var(--accent)" stroke="var(--workspace-line)" strokeWidth="1.5" pointerEvents="none" /></g>;
}
