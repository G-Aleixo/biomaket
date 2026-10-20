import Head from "./Head";
import Silhouette from "./Silhouette";
import Chest from "./Chest";
import Abdomen from "./Abdomen";
import Pelvis from "./Pelvis";
import Hotspot from "./Hotspot";
import { TORSO_TRANSFORM, squashY } from "./shared";

// Camadas de baixo para cima: cabeça, tronco (comprimido), e por último os pontos clicáveis.
export default function BodyModel({ glands, selectedId, onSelect }) {
  return (
    <svg
      className="mx-auto block w-full max-w-[360px] select-none [-webkit-tap-highlight-color:transparent]"
      viewBox="0 0 200 246" role="img" aria-label="Corpo humano com as glândulas do sistema endócrino"
    >
      <Head />
      <g transform={TORSO_TRANSFORM}>
        <Silhouette />
        <Chest />
        <Abdomen />
        <Pelvis />
      </g>
      <g>
        {glands.map((g) => (
          <Hotspot
            key={g.id}
            gland={g}
            points={g.head ? g.points : g.points.map(([x, y]) => [x, squashY(y)])}
            active={g.id === selectedId}
            onSelect={onSelect}
          />
        ))}
      </g>
    </svg>
  );
}
