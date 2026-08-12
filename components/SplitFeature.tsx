import Link from "next/link";
import { DoorOpen, Martini } from "lucide-react";
import PhotoPlaceholder from "./PhotoPlaceholder";
import Reveal from "./Reveal";
import semiPrivateImg from "../assets/semi_private.webp";
import drinksImg from "../assets/drinks.jpg";

export default function SplitFeature() {
  const items = [
    {
      icon: DoorOpen,
      title: "Semi Private",
      copy: "Host your next celebration in our elegant semi-private dining space, perfect for birthdays, business dinners and special occasions. Enjoy authentic Turkish cuisine in a warm, intimate setting with attentive service tailored to your event.",
      cta: "Read More",
      href: "/semi-dining",
      variant: 0,
      image: semiPrivateImg.src,
    },
    {
      icon: Martini,
      title: "Signature Drinks Bar",
      copy: "Discover a refreshing selection of handcrafted mocktails, expertly prepared with fresh ingredients and vibrant flavours. Perfectly balanced and beautifully presented, they're the ideal accompaniment to any meal or celebration.",
      cta: "View Menu",
      href: "/menu",
      variant: 1,
      image: drinksImg.src,
    },
  ];

  return (
    <section className="bg-[#c6a15b] py-20 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 140}>
            <div className="relative flex flex-col overflow-hidden rounded-[20px] bg-black shadow-2xl transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_24px_44px_rgba(0,0,0,0.38)]">
              <PhotoPlaceholder
                icon={item.icon}
                variant={item.variant}
                src={item.image}
                alt={item.title}
                className="h-[440px]"
              />
              <Link
                href={item.href}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/45 p-10 text-center"
              >
                <h3 className="font-display text-4xl tracking-[0.12em] text-cream mb-4 uppercase">
                  {item.title}
                </h3>
                <p className="text-muted text-sm max-w-sm mb-6 leading-relaxed">
                  {item.copy}
                </p>
                <span className="eyebrow text-gold hover:text-gold-light transition-colors">
                  {item.cta} &rarr;
                </span>
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
