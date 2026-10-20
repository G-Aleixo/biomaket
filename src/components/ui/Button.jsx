// variant: "primary" (rosa) ou "alt" (roxo). Use as="a" para virar link.
export default function Button({ as: Tag = "button", variant = "primary", className = "", ...props }) {
  const color = variant === "alt" ? "bg-grape" : "bg-hot";
  return (
    <Tag
      className={`inline-block cursor-pointer rounded-full px-6 py-3 font-display text-[1.05rem] font-bold text-white transition-transform active:scale-95 ${color} ${className}`}
      {...props}
    />
  );
}
