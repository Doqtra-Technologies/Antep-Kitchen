export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-[#0c0b09] pt-40 pb-16 px-6 lg:px-10">
      <Reveal className="max-w-[1400px] mx-auto text-center">
        <p className="eyebrow text-gold mb-4">{eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream">
          {title}
        </h1>
        {subtitle && (
          <p className="text-muted max-w-xl mx-auto mt-5 text-sm sm:text-base">
            {subtitle}
          </p>
        )}
      </Reveal>
    </section>
  );
}
import Reveal from "./Reveal";
