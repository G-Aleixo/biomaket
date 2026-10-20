// Ponto clicável de uma glândula. Não recebe foco (evita o contorno quadrado ao clicar);
// a navegação por teclado fica a cargo dos botões em GlandChips.
export default function Hotspot({ gland, points, active, onSelect }) {
  return (
    <g className="cursor-pointer" aria-hidden="true" onClick={() => onSelect(gland.id)}>
      {points.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="10" fill="transparent" />
          <circle cx={x} cy={y} r="4.5" stroke={gland.color} className="origin-center animate-ring fill-none [stroke-width:2] [transform-box:fill-box]" />
          <circle
            cx={x} cy={y} r="3.6" fill={gland.color}
            className={`origin-center stroke-white transition-transform duration-200 [transform-box:fill-box] ${active ? "scale-150 [stroke-width:2.5]" : "[stroke-width:1.5]"}`}
          />
        </g>
      ))}
    </g>
  );
}
