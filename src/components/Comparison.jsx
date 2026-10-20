import Card from "./ui/Card";

const SYSTEMS = [
  { title: "⚡ Sistema nervoso", items: ["Usa impulsos elétricos nos nervos", "Resposta em milissegundos", "Efeito curto", "Ex.: tirar a mão de algo quente"] },
  { title: "🧪 Sistema endócrino", items: ["Usa hormônios no sangue", "Resposta em segundos, horas ou anos", "Efeito longo", "Ex.: crescer e passar pela puberdade"] },
];

export default function Comparison() {
  return (
    <div className="grid gap-3.5 sm:grid-cols-2">
      {SYSTEMS.map((s) => (
        <Card key={s.title}>
          <h3 className="text-2xl font-bold">{s.title}</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
        </Card>
      ))}
    </div>
  );
}
