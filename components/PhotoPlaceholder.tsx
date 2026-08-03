import { LucideIcon } from "lucide-react";

const palettes = [
  "from-[#2a2115] via-[#151109] to-[#0c0b09]",
  "from-[#241a12] via-[#181109] to-[#0c0b09]",
  "from-[#2e2113] via-[#17110a] to-[#0c0b09]",
];

export default function PhotoPlaceholder({
  icon: Icon,
  label,
  variant = 0,
  src,
  alt = "",
  imageFit = "cover",
  className = "",
}: {
  icon: LucideIcon;
  label?: string;
  variant?: number;
  src?: string;
  alt?: string;
  imageFit?: "cover" | "contain";
  className?: string;
}) {
  const palette = palettes[variant % palettes.length];
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${palette} flex items-center justify-center ${className}`}
    >
      {src ? <img src={src} alt={alt} className={`absolute inset-0 size-full ${imageFit === "contain" ? "object-contain" : "object-cover"} transition duration-700 hover:scale-105`} /> : <>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(198,161,91,0.5), transparent 55%)" }} />
        <div className="relative flex flex-col items-center gap-3 text-gold/70"><Icon strokeWidth={1} size={40} />{label && <span className="eyebrow text-[10px] text-muted">{label}</span>}</div>
      </>}
      <div className="absolute inset-0 border border-white/5" />
    </div>
  );
}
