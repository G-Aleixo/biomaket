export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto max-w-245 px-4.5 py-12">
      <h2 className="mb-2 text-[clamp(1.7rem,6vw,2.4rem)] leading-tight font-bold">{title}</h2>
      {subtitle && <p className="mb-6 max-w-[60ch] text-mut">{subtitle}</p>}
      {children}
    </section>
  );
}
