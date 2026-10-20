import { GLAND_STROKE } from "./shared";

// Vasos, fígado, estômago, rins, pâncreas (amarelo), suprarrenais (azuis) e intestino.
export default function Abdomen() {
  return (
    <g>
      <path d="M98 146V230" stroke="#3b82f6" strokeWidth="2" fill="none" opacity=".7" />
      <path d="M102 146V230" stroke="#ef4444" strokeWidth="2" fill="none" opacity=".7" />
      <path d="M72 154C80 148 98 150 108 156C108 166 100 172 88 172C78 172 72 166 72 154Z" fill="#8b4a2b" opacity=".55" />
      <path d="M108 154C120 152 128 160 124 168C120 174 108 172 106 166C105 160 106 157 108 154Z" fill="#fb923c" opacity=".55" />
      <ellipse cx="80" cy="186" rx="7" ry="12" fill="#b91c4c" opacity=".6" />
      <ellipse cx="120" cy="186" rx="7" ry="12" fill="#b91c4c" opacity=".6" />
      <path d="M84 182C92 177 104 179 112 177C120 176 126 179 124 184C120 188 108 187 98 188C90 189 82 187 84 182Z" fill="#f4c542" {...GLAND_STROKE} />
      <ellipse cx="81" cy="172" rx="6.5" ry="3.5" fill="#2563eb" {...GLAND_STROKE} />
      <ellipse cx="119" cy="172" rx="6.5" ry="3.5" fill="#2563eb" {...GLAND_STROKE} />
      <path d="M78 201H122V209H78V217H122" fill="none" stroke="#f59e7a" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" opacity=".6" />
    </g>
  );
}
