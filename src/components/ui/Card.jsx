export default function Card({ className = "", ...props }) {
  return <div className={`rounded-3xl border border-line bg-card p-5 shadow-card ${className}`} {...props} />;
}
