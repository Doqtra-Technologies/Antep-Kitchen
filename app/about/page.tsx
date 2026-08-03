import { UtensilsCrossed } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Reveal from "@/components/Reveal";

const story = [
  "At Antep Kitchen, every meal begins with a tradition that has been perfected over generations. Inspired by the rich culinary heritage of Gaziantep—widely recognised as the gastronomic capital of Turkey—we bring together authentic recipes, exceptional ingredients and genuine hospitality to create a dining experience that feels both timeless and memorable.",
  "Our philosophy is simple: honour tradition while delivering excellence in every detail. From the first selection of fresh ingredients to the final presentation of each dish, every step reflects our commitment to quality, authenticity and craftsmanship. Signature charcoal-grilled meats, handcrafted meze, freshly baked breads and traditional Turkish specialities are prepared with care, celebrating the bold flavours and centuries-old techniques that define our cuisine.",
  "More than a restaurant, Antep Kitchen is a place where people gather, celebrate and create lasting memories. Whether you're enjoying a relaxed lunch, an intimate dinner or sharing a table with family and friends, our aim is to offer an experience that is warm, refined and unmistakably Turkish.",
  "Our interiors combine contemporary comfort with the welcoming spirit of Turkish hospitality, creating an atmosphere where every guest feels at home. Attentive service, generous portions and a genuine passion for exceptional food have made Antep Kitchen a destination for those seeking an authentic taste of Turkey in the heart of Oxford.",
  "We believe authenticity lies not only in recipes, but in the way guests are welcomed, meals are shared and traditions are preserved. It is this philosophy that shapes everything we do—from the ingredients we source to the experience we deliver.",
  "Every visit to Antep Kitchen is an invitation to discover the depth, richness and character of Turkish cuisine, crafted with respect for its heritage and served with the warmth that has always been at the heart of our culture.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Welcome to Antep Kitchen"
        subtitle="Authentic Turkish cuisine elevated through tradition, craftsmanship and genuine hospitality."
      />
      <section className="bg-[#0d100e] px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 lg:gap-24">
            <Reveal>
              <PhotoPlaceholder
                icon={UtensilsCrossed}
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=90"
                alt="Turkish grilled cuisine"
                className="h-[440px] rounded-[4px] sm:h-[590px] lg:h-[720px]"
              />
            </Reveal>
            <Reveal>
              <div className="space-y-6 text-base leading-8 text-muted sm:text-lg sm:leading-9">
                {story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
