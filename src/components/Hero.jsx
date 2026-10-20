import Button from "./ui/Button";

const DOTS = [
  { width: 90, height: 90, left: "6%", top: "12%" },
  { width: 50, height: 50, right: "10%", top: "20%", animationDelay: "-3s" },
  { width: 70, height: 70, left: "75%", bottom: "8%", animationDelay: "-5s" },
];

export default function Hero() {
  return (
    <header className="relative overflow-hidden px-4.5 pt-16 pb-17.5 text-center text-white [background:radial-gradient(circle_at_20%_10%,#7c3aed_0,transparent_55%),radial-gradient(circle_at_90%_90%,#e11d74_0,transparent_50%),#1b0f33]">
      {DOTS.map((style, i) => (
        <span key={i} className="absolute animate-float rounded-full bg-white/15" style={style} />
      ))}
      <h1 className="text-[clamp(2.6rem,13vw,5.6rem)] leading-[.95] font-bold tracking-[.01em] text-foam [-webkit-text-stroke:3px_#fff] [paint-order:stroke_fill] [text-shadow:4px_5px_0_#e11d74]">
        SISTEMA<br />ENDÓCRINO
      </h1>
      <p className="mx-auto mt-5 mb-6 max-w-[34ch] text-[1.1rem] text-[#efe6ff]">
        Os mensageiros químicos que mandam no seu humor, sono, crescimento e energia.
      </p>
      <Button as="a" href="#corpo">Explorar o corpo</Button>
    </header>
  );
}
