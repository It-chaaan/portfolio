import { PhysicsCord } from "./PhysicsCord";

export function StudyLamp({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  const lit = !dark;
  return <g strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="654" cy="458" rx="77" ry="9" fill="var(--workspace-shadow)" opacity=".22" />
    {lit && <><path d="M522 165C482 225 435 325 382 420C453 433 543 431 625 422C591 310 561 219 522 165Z" fill="url(#lamp-cone)" opacity=".58" /><path d="M522 165C497 239 468 328 441 421C485 427 533 427 577 421C561 318 545 230 522 165Z" fill="url(#lamp-cone-core)" opacity=".68" /><ellipse cx="479" cy="423" rx="139" ry="27" fill="url(#desk-warmth)" opacity=".72" /></>}
    <path d="M718 454h-168c-7 0-10 8-5 13l15 12h150l15-12c5-5 2-13-5-13z" fill="var(--workspace-lamp)" stroke="var(--workspace-line)" strokeWidth="1.4" /><ellipse cx="634" cy="454" rx="82" ry="8" fill="var(--workspace-lamp)" stroke="var(--workspace-line-secondary)" strokeWidth="1" />
    <path d="M649 446l32-149-111-104" fill="none" stroke="var(--workspace-lamp)" strokeWidth="9" /><path d="M649 446l32-149-111-104" fill="none" stroke="var(--workspace-line)" strokeWidth="1.55" /><path d="M681 297l-105-101" fill="none" stroke="var(--workspace-lamp)" strokeWidth="9" /><path d="M681 297l-105-101" fill="none" stroke="var(--workspace-line)" strokeWidth="1.55" />
    <circle cx="649" cy="446" r="13" fill="var(--workspace-lamp)" stroke="var(--workspace-line)" strokeWidth="1.5" /><circle cx="649" cy="446" r="4" fill="var(--accent)" /><circle cx="681" cy="297" r="13" fill="var(--workspace-lamp)" stroke="var(--workspace-line)" strokeWidth="1.5" /><circle cx="681" cy="297" r="4" fill="var(--accent)" /><circle cx="570" cy="193" r="12" fill="var(--workspace-lamp)" stroke="var(--workspace-line)" strokeWidth="1.5" /><circle cx="570" cy="193" r="4" fill="var(--accent)" />
    <path d="M570 193L540 133" fill="none" stroke="var(--workspace-lamp)" strokeWidth="7" /><path d="M570 193L540 133" fill="none" stroke="var(--workspace-line)" strokeWidth="1.4" />
    <path d="M503 78c21-17 50-7 58 19l10 32-91 13z" fill="var(--workspace-lamp)" stroke="var(--workspace-line)" strokeWidth="1.5" /><path d="M463 129c17-38 68-48 108-20l-15 59c-31 13-68-1-93-26z" fill="var(--workspace-lamp)" stroke="var(--workspace-line)" strokeWidth="1.7" /><path d="M469 138c25 27 55 36 87 30" fill={lit ? "var(--workspace-lamp-lit)" : "var(--workspace-screen)"} stroke="var(--workspace-line-secondary)" strokeWidth="1" /><ellipse cx="517" cy="155" rx="18" ry="7" fill={lit ? "var(--workspace-lamp-lit)" : "var(--workspace-line-faint)"} opacity={lit ? ".95" : ".25"} />
    <PhysicsCord dark={dark} onToggle={onToggle} />
  </g>;
}
