import { useState } from "react";
import { GLANDS } from "../data/glands";
import Card from "./ui/Card";
import BodyModel from "./body/BodyModel";
import GlandChips from "./GlandChips";
import GlandInfo from "./GlandInfo";

// Guarda qual glândula está selecionada e liga o modelo, os botões e o painel de informações.
export default function GlandExplorer() {
  const [selectedId, setSelectedId] = useState(null);
  const selected = GLANDS.find((g) => g.id === selectedId) ?? null;

  return (
    <div className="grid gap-5 md:grid-cols-[minmax(260px,360px)_1fr] md:items-start">
      <Card>
        <BodyModel glands={GLANDS} selectedId={selectedId} onSelect={setSelectedId} />
        <GlandChips glands={GLANDS} selectedId={selectedId} onSelect={setSelectedId} />
      </Card>
      <GlandInfo gland={selected} />
    </div>
  );
}
