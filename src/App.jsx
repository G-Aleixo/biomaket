import Hero from "./components/Hero";
import Section from "./components/Section";
import GlandExplorer from "./components/GlandExplorer";
import HormoneComm from "./components/HormoneComm";
import GlucoseSimulator from "./components/GlucoseSimulator";
import Comparison from "./components/Comparison";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Hero />
      <Section id="corpo" title="Toque nas glândulas" subtitle="Os pontos brilhantes marcam as glândulas endócrinas. Os órgãos mais apagados (pulmões, coração, fígado, rins, intestino) servem só de referência. Toque numa glândula para ver o que ela faz.">
        <GlandExplorer />
      </Section>
      <Section id="como" title="Como o recado chega?" subtitle="Hormônios são mensagens químicas. Só a célula com o receptor certo consegue “abrir a fechadura” e obedecer.">
        <HormoneComm />
      </Section>
      <Section id="demo" title="Simulador: açúcar no sangue" subtitle="O pâncreas mantém a glicose estável. Faça o teste e veja o corpo reagir.">
        <GlucoseSimulator />
      </Section>
      <Section id="vs" title="Endócrino × Nervoso" subtitle="Os dois sistemas mandam mensagens, cada um do seu jeito.">
        <Comparison />
      </Section>
      <Section id="quiz" title="Teste o que você aprendeu" subtitle="Cinco perguntas rápidas.">
        <Quiz />
      </Section>
      <Footer />
    </>
  );
}
