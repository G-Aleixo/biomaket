import { GLAND_STROKE } from "./shared";

// Traqueia, pulmões, coração, timo (amarelo) e tireoide (borboleta verde-azulada).
export default function Chest() {
  return (
    <g>
      <rect x="97.5" y="80" width="5" height="22" rx="2" fill="#94a3b8" opacity=".6" />
      <path d="M96 94C88 92 70 104 68 128C67 142 72 152 84 150C94 148 97 140 97 128Z" fill="#ec6aa6" opacity=".55" />
      <path d="M104 94C112 92 130 104 132 128C133 142 128 152 116 150C106 148 103 140 103 128Z" fill="#ec6aa6" opacity=".55" />
      <path d="M98 124C91 117 88 130 100 146C112 130 109 117 102 124Z" fill="#dc2626" opacity=".6" />
      <path d="M95 96C92 104 94 114 100 119C106 114 108 104 105 96C102 99 98 99 95 96Z" fill="#f6c453" {...GLAND_STROKE} />
      <ellipse cx="93.5" cy="84" rx="6" ry="4.5" fill="#0d9488" {...GLAND_STROKE} />
      <ellipse cx="106.5" cy="84" rx="6" ry="4.5" fill="#0d9488" {...GLAND_STROKE} />
      <rect x="97" y="82.5" width="6" height="3" fill="#0d9488" />
    </g>
  );
}
