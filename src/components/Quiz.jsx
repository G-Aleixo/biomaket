import { useState } from "react";
import { QUESTIONS } from "../data/quiz";
import Card from "./ui/Card";
import Button from "./ui/Button";

const OPTION_STATE = {
  idle: "border-line bg-card text-ink",
  ok: "border-green-600 bg-green-600/15 text-ink",
  no: "border-red-600 bg-red-600/15 text-ink",
};

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState(null);
  const total = QUESTIONS.length;

  const restart = () => { setIndex(0); setScore(0); setPicked(null); };

  if (index >= total) {
    const msg = score === total ? "🏆 Mestre" : score >= 3 ? "👏 Mandou bem!" : "💪 Explore a maquete e tente de novo!";
    return (
      <Card>
        <h3 className="mb-4 text-2xl font-bold">Você acertou {score} de {total}! {msg}</h3>
        <Button onClick={restart}>Jogar de novo</Button>
      </Card>
    );
  }

  const q = QUESTIONS[index];
  const answered = picked !== null;
  const choose = (i) => {
    if (answered) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
  };
  const next = () => { setIndex((n) => n + 1); setPicked(null); };

  return (
    <Card>
      <small className="text-mut">Pergunta {index + 1} de {total}</small>
      <h3 className="text-2xl font-bold">{q.question}</h3>
      {q.options.map((o, i) => {
        const state = !answered ? "idle" : i === q.answer ? "ok" : i === picked ? "no" : "idle";
        return (
          <button
            key={o}
            disabled={answered}
            onClick={() => choose(i)}
            className={`mt-2.5 block w-full cursor-pointer rounded-2xl border-2 px-4 py-3 text-left font-bold ${OPTION_STATE[state]}`}
          >
            {o}
          </button>
        );
      })}
      {answered && (
        <div className="mt-3">
          <p>{picked === q.answer ? "✅ Certo! " : "❌ Quase! "}{q.explanation}</p>
          <Button variant="alt" className="mt-4" onClick={next}>{index === total - 1 ? "Ver resultado" : "Próxima"}</Button>
        </div>
      )}
    </Card>
  );
}
