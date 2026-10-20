import { GLAND_STROKE } from "./shared";

// Bexiga, útero com tubas, ovários, placenta e testículos.
export default function Pelvis() {
  return (
    <g>
      <ellipse cx="100" cy="266" rx="9" ry="7" fill="#fde68a" opacity=".6" />
      <path d="M93 232C86 232 84 230 84 229M107 232C114 232 116 230 116 229" fill="none" stroke="#f9a8d4" strokeWidth="1.5" />
      <path d="M92 231C92 225 108 225 108 231L111 246C111 254 89 254 89 246Z" fill="#f9a8d4" stroke="#db2777" strokeWidth=".8" />
      <ellipse cx="82" cy="228" rx="4.5" ry="3.5" fill="#db2777" {...GLAND_STROKE} />
      <ellipse cx="118" cy="228" rx="4.5" ry="3.5" fill="#db2777" {...GLAND_STROKE} />
      <ellipse cx="100" cy="245" rx="7" ry="3.5" fill="#0891b2" {...GLAND_STROKE} />
      <ellipse cx="94.5" cy="284" rx="4" ry="5.5" fill="#4d7c0f" {...GLAND_STROKE} />
      <ellipse cx="105.5" cy="284" rx="4" ry="5.5" fill="#4d7c0f" {...GLAND_STROKE} />
    </g>
  );
}
