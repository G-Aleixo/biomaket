import { GLAND_STROKE } from "./shared";

// Cabeça, cérebro, pituitária (vermelha) e pineal (roxa).
export default function Head() {
  return (
    <g>
      <ellipse cx="100" cy="38" rx="27" ry="31" fill="var(--foam)" />
      <path d="M78 36C76 22 86 12 100 12C114 12 124 22 122 36C121 44 114 50 106 50L94 50C86 50 79 44 78 36Z" fill="#f4a6c6" opacity=".7" stroke="#c2417c" strokeWidth=".8" />
      <path d="M86 28C90 22 96 24 98 30M104 22C110 20 116 26 114 32M84 40C90 36 96 40 100 36M104 40C110 36 116 38 118 34" fill="none" stroke="#c2417c" strokeWidth="1" opacity=".6" />
      <ellipse cx="112" cy="49" rx="9" ry="4.5" fill="#e58fb4" opacity=".8" />
      <rect x="97" y="48" width="7" height="15" rx="3" fill="#e58fb4" opacity=".8" />
      <ellipse cx="100" cy="52" rx="3.8" ry="3" fill="#e11d48" {...GLAND_STROKE} />
      <ellipse cx="107" cy="35" rx="3.2" ry="2.6" fill="#7c3aed" {...GLAND_STROKE} />
    </g>
  );
}
