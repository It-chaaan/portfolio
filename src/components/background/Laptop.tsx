export function Laptop({ lit }: { lit: boolean }) {
  const keyRows = [
    { y: 430, x: 312, width: 166 }, { y: 438, x: 308, width: 174 }, { y: 446, x: 304, width: 182 }, { y: 454, x: 300, width: 190 }, { y: 462, x: 297, width: 196 },
  ];
  return <g strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="396" cy="482" rx="138" ry="10" fill="var(--workspace-shadow)" opacity=".22" />
    <path d="M281 245h218v155H281z" fill="var(--workspace-laptop)" stroke="var(--workspace-line)" strokeWidth="1.5" />
    <path d="M293 257h194v129H293z" fill="var(--workspace-screen)" stroke="var(--workspace-line-secondary)" strokeWidth="1" />
    <rect x="301" y="265" width="178" height="113" fill="url(#screen-glow)" opacity={lit ? ".42" : ".86"} />
    <g fill="none" strokeWidth="2"><path d="M324 282h48m-48 13h85m-85 13h55m-55 13h108m-108 13h77" stroke="var(--workspace-line-secondary)" /><path d="M324 282h48m-48 26h55m-55 26h108" stroke="var(--accent)" opacity=".8" /></g>
    <path d="M286 401h208" stroke="var(--workspace-line)" strokeWidth="3" /><path d="M298 404h184" stroke="var(--workspace-line-faint)" strokeWidth="1" />
    <path d="M262 416h267l-25 66H287z" fill="var(--workspace-laptop)" stroke="var(--workspace-line)" strokeWidth="1.5" />
    <path d="M287 423h217l-18 45H305z" fill={lit ? "var(--workspace-warm)" : "var(--bg-subtle)"} opacity={lit ? ".84" : ".9"} stroke="var(--workspace-line-secondary)" strokeWidth="1" />
    <path d="M287 423h217" stroke="var(--workspace-line-faint)" strokeWidth="1" />
    <g fill="var(--workspace-line-secondary)" opacity=".55">{keyRows.map((row, index) => <g key={row.y}>{Array.from({ length: 12 - index }, (_, key) => <rect key={key} x={row.x + key * (row.width / (12 - index))} y={row.y} width={Math.max(5, row.width / (12 - index) - 3)} height="4" rx="1" />)}</g>)}</g>
    <path d="M356 472h80l-7 16h-66z" fill="var(--bg-subtle)" stroke="var(--workspace-line-secondary)" strokeWidth="1" />
    <path d="M287 489h217l-7 7H294z" fill="var(--workspace-desk-edge)" stroke="var(--workspace-line-secondary)" strokeWidth="1" />
    <path d="M376 496h40l-5 5h-30z" fill="var(--bg)" stroke="var(--workspace-line-secondary)" strokeWidth=".8" />
  </g>;
}
