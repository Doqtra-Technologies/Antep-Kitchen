import { Martini, Soup, Users, Flame, GlassWater, UtensilsCrossed } from "lucide-react";
import PhotoPlaceholder from "./PhotoPlaceholder";
import Reveal from "./Reveal";
import gallery1 from "../assets/gallery/1X1A0017.webp";
import gallery2 from "../assets/gallery/1X1A9844.webp";
import gallery3 from "../assets/gallery/1X1A9976.webp";
import gallery4 from "../assets/gallery/ANTEP KITCHEN  APRIL POST.webp";
import gallery5 from "../assets/gallery/ANTEP KITCHEN  JULY POST.webp";
import gallery6 from "../assets/gallery/DSC02054.webp";
import gallery7 from "../assets/gallery/DSC05162.webp";
import gallery8 from "../assets/gallery/f-DSC05180.webp";
import gallery9 from "../assets/gallery/f-DSC05206.webp";

const shots = [
  { icon: Martini, span: "md:col-span-2 md:row-span-2", h: "h-64 md:h-full", v: 0, src: gallery1.src },
  { icon: GlassWater, span: "", h: "h-64", v: 1, src: gallery2.src },
  { icon: Soup, span: "", h: "h-64", v: 2, src: gallery3.src },
  { icon: Users, span: "", h: "h-64", v: 0, src: gallery4.src },
  { icon: Flame, span: "", h: "h-64", v: 1, src: gallery5.src },
  { icon: UtensilsCrossed, span: "", h: "h-64", v: 2, src: gallery6.src },
  { icon: Martini, span: "", h: "h-64", v: 0, src: gallery7.src },
  { icon: GlassWater, span: "", h: "h-64", v: 1, src: gallery8.src },
  { icon: Soup, span: "", h: "h-64", v: 2, src: gallery9.src },
];

export default function GallerySection({ showHeading = false }: { showHeading?: boolean }) {
  return (
    <section id="gallery" className="bg-[#0c0b09] py-24 px-6 lg:px-10">
      {showHeading && (
        <Reveal className="mx-auto mb-14 max-w-[1400px] text-center">
          <p className="eyebrow mb-3 text-gold">Visual Journey</p>
          <h2 className="font-display text-4xl text-cream sm:text-5xl">Gallery</h2>
        </Reveal>
      )}
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {shots.map((s, i) => (
          <Reveal key={i} delay={(i % 4) * 90} className={`${s.span} overflow-hidden rounded-[14px]`}>
            <a href={s.src} target="_blank" rel="noopener noreferrer" aria-label="View gallery image">
              <PhotoPlaceholder icon={s.icon} src={s.src} alt="Antep Kitchen gallery" variant={s.v} className={s.h} />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
