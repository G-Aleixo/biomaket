import Card from "./ui/Card";

export default function GlandInfo({ gland }) {
  if (!gland) {
    return (
      <Card className="min-h-65">
        <div className="text-[2.6rem] leading-none">👆</div>
        <h3 className="mt-1 mb-2.5 text-2xl font-bold">Escolha uma glândula</h3>
        <p>Toque num ponto do corpo ou num dos botões para descobrir quais hormônios ela produz e para que servem.</p>
      </Card>
    );
  }
  // key força o React a recriar o painel e repetir a animação a cada troca
  return (
    <Card key={gland.id} className="min-h-65 animate-pop">
      <div className="text-[2.6rem] leading-none">{gland.emoji}</div>
      <h3 className="mt-1 mb-2.5 text-2xl font-bold">{gland.name}</h3>
      <div className="flex flex-wrap gap-1.5">
        {gland.hormones.map((h) => (
          <span key={h} className="rounded-full px-3 py-0.5 text-[.82rem] font-bold text-white" style={{ background: gland.color }}>{h}</span>
        ))}
      </div>
      <h4 className="mt-3.5 mb-0.5 font-bold">Para que serve</h4>
      <p>{gland.description}</p>
      <div className="mt-3.5 rounded-2xl bg-bg px-3.5 py-2.5">💡 {gland.fact}</div>
    </Card>
  );
}
