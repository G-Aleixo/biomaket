import { useEffect, useState } from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";

const MIN = 40, MAX = 200;

function statusMessage(g) {
  if (g > 105) return "Glicose alta! O pâncreas libera insulina e as células guardam o açúcar.";
  if (g < 75) return "Glicose baixa! O pâncreas libera glucagon e o fígado solta açúcar guardado.";
  return "Equilíbrio! O corpo mantém a glicose estável (homeostase).";
}

function HormoneBox({ name, text, on, color }) {
  return (
    <div
      className={`rounded-2xl border-2 border-transparent bg-bg p-3 text-center transition ${on ? "scale-[1.03] opacity-100" : "opacity-40"}`}
      style={on ? { borderColor: color } : undefined}
    >
      <b>{name}</b><br />{text}
    </div>
  );
}

export default function GlucoseSimulator() {
  const [glucose, setGlucose] = useState(90);

  // A cada 80 ms o corpo empurra a glicose de volta para perto de 90 mg/dL.
  useEffect(() => {
    const t = setInterval(() => setGlucose((g) => (g > 92 ? g - 0.7 : g < 88 ? g + 0.5 : g)), 80);
    return () => clearInterval(t);
  }, []);

  const pct = Math.max(0, Math.min(100, ((glucose - MIN) / (MAX - MIN)) * 100));

  return (
    <Card>
      <div className="text-center font-display text-[2.2rem] font-bold">{Math.round(glucose)} mg/dL</div>
      <div className="relative mt-8.5 mb-2 h-6.5 rounded-full [background:linear-gradient(90deg,#3b82f6_0_19%,#22c55e_19%_44%,#f59e0b_44%_70%,#ef4444_70%)]">
        <span className="absolute -top-2 h-10.5 w-3 -translate-x-1/2 rounded-md border-2 border-bg bg-ink transition-[left] duration-100 ease-linear" style={{ left: pct + "%" }} />
        <small className="absolute top-7.5 left-0 text-[.72rem] text-mut">baixa</small>
        <small className="absolute top-7.5 left-[26%] text-[.72rem] text-mut">ideal</small>
        <small className="absolute top-7.5 right-0 text-[.72rem] text-mut">alta</small>
      </div>
      <div className="my-3.5 mt-10 grid grid-cols-2 gap-3">
        <HormoneBox name="Insulina" text="guarda o açúcar" on={glucose > 105} color="#e11d74" />
        <HormoneBox name="Glucagon" text="libera o açúcar" on={glucose < 75} color="#2563eb" />
      </div>
      <div className="flex flex-wrap justify-center gap-2.5">
        <Button onClick={() => setGlucose((g) => Math.min(g + 75, 195))}>🍫 Comer um doce</Button>
        <Button variant="alt" onClick={() => setGlucose((g) => Math.max(g - 38, 45))}>🏃 Ficar horas sem comer</Button>
      </div>
      <p className="mt-3.5 min-h-13 text-center">{statusMessage(glucose)}</p>
    </Card>
  );
}
