import { UtensilsCrossed } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Reveal from "@/components/Reveal";

const story = [
  "At Antep Kitchen, every meal begins with a tradition perfected over generations. Inspired by the rich culinary heritage of Gaziantep-the gastronomic capital of Turkey-we bring together authentic recipes, exceptional ingredients and genuine hospitality.",
  "Our philosophy is simple: honour tradition while delivering excellence in every detail. From fresh ingredients to the final presentation, every step reflects our commitment to quality, authenticity and craftsmanship.",
  "More than a restaurant, Antep Kitchen is where people gather, celebrate and create lasting memories. Our aim is to offer an experience that is warm, refined and unmistakably Turkish.",
  "Welcome to Antep Kitchen—where authentic Turkish cuisine is elevated through tradition, craftsmanship and genuine hospitality.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Welcome to Antep Kitchen"
        subtitle="Authentic Turkish cuisine elevated through tradition, craftsmanship and genuine hospitality."
      />
      <section className="bg-[#0d100e] px-6 pt-24 pb-20 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-center">
            <Reveal className="lg:hidden">
              <PhotoPlaceholder
                icon={UtensilsCrossed}
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=90"
                alt="Turkish grilled cuisine"
                className="h-[250px] rounded-[4px]"
              />
            </Reveal>
            <Reveal>
              <div className="space-y-5 text-sm leading-7 text-cream sm:text-base sm:leading-8 text-center lg:text-left">
                {story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </Reveal>
            <Reveal className="hidden lg:block">
              <PhotoPlaceholder
                icon={UtensilsCrossed}
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=90"
                alt="Turkish grilled cuisine"
                className="h-[500px] w-full rounded-[4px] object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}