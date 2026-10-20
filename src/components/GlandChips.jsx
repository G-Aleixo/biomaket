// Botões de cada glândula. Também servem para quem navega pelo teclado.
export default function GlandChips({ glands, selectedId, onSelect }) {
  return (
    <div className="mt-3.5 flex flex-wrap justify-center gap-2">
      {glands.map((g) => {
        const on = g.id === selectedId;
        return (
          <button
            key={g.id}
            onClick={() => onSelect(g.id)}
            className="cursor-pointer rounded-full border-2 px-3.5 py-1.5 font-display text-[.85rem] font-medium transition-colors"
            style={{ borderColor: g.color, background: on ? g.color : "transparent", color: on ? "#fff" : "var(--ink)" }}
          >
            {g.emoji} {g.name.split(" (")[0]}
          </button>
        );
      })}
    </div>
  );
}
