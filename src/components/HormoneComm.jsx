import Card from "./ui/Card";

const STEPS = [
  { title: "1. A glândula produz", text: "Ela fabrica o hormônio e o joga direto na corrente sanguínea." },
  { title: "2. O sangue entrega", text: "O hormônio viaja pelo corpo todo, mas só “conversa” com certas células." },
  { title: "3. A célula-alvo reage", text: "O receptor certo recebe a mensagem e a célula muda o que está fazendo." },
  { title: "Freio automático", text: "Quando há hormônio suficiente, o corpo avisa a glândula para parar. É o feedback negativo, como um termostato." },
];

export default function HormoneComm() {
  return (
    <>
      <svg className="mx-auto mb-5 block w-full max-w-130" viewBox="0 0 320 120" role="img" aria-label="Hormônio encaixando no receptor da célula">
        <rect className="animate-glow" x="240" y="0" width="80" height="120" rx="14" fill="#6d3df5" />
        <circle cx="240" cy="60" r="19" style={{ fill: "var(--card)" }} />
        <g className="animate-dock">
          <circle cx="30" cy="60" r="16" fill="#e11d74" />
          <text x="30" y="65" fontSize="11" fill="#fff" textAnchor="middle" fontWeight="700">H</text>
        </g>
        <text x="8" y="108" fontSize="11" style={{ fill: "var(--mut)" }}>hormônio</text>
        <text x="250" y="108" fontSize="10" fill="#fff">célula-alvo</text>
      </svg>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-3.5">
        {STEPS.map((s) => (
          <Card key={s.title}><b className="mb-1 block font-display text-lg">{s.title}</b>{s.text}</Card>
        ))}
      </div>
    </>
  );
}
